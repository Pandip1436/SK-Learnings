import { useEffect, useRef } from "react";

export function ThreeDBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // We want the canvas to cover the whole hero section, 
    // which might be taller than innerHeight depending on content.
    // It's better to read the parent's dimensions if possible, 
    // but window size is a safe fallback for fixed/absolute backgrounds.
    const resize = () => {
      width = window.innerWidth;
      // Make height slightly larger to account for scroll areas
      height = window.innerHeight * 1.2; 
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener("resize", resize);
    resize();

    // 3D Point Class
    class Point3D {
      x: number;
      y: number;
      z: number;
      ox: number;
      oy: number;
      oz: number;
      vx: number;
      vy: number;
      vz: number;
      
      // 2D projection properties
      sx: number = 0;
      sy: number = 0;
      scale: number = 0;
      depth: number = 0;

      constructor() {
        // Spread points in a wide rectangular volume
        this.ox = (Math.random() - 0.5) * 3000;
        this.oy = (Math.random() - 0.5) * 1500;
        this.oz = (Math.random() - 0.5) * 2000;
        
        this.x = this.ox;
        this.y = this.oy;
        this.z = this.oz;

        // Slight drift
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.vz = (Math.random() - 0.5) * 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;

        // Gentle bounds checking to keep them in volume
        if (Math.abs(this.x - this.ox) > 200) this.vx *= -1;
        if (Math.abs(this.y - this.oy) > 200) this.vy *= -1;
        if (Math.abs(this.z - this.oz) > 200) this.vz *= -1;
      }
    }

    const numPoints = 140;
    const points: Point3D[] = Array.from({ length: numPoints }, () => new Point3D());

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse to -1 to 1
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let angleX = 0;
    let angleY = 0;
    let animationFrameId: number;

    const draw = () => {
      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Auto rotation
      angleY += 0.0015;
      angleX = Math.sin(angleY * 0.5) * 0.3; // Gentle wobble

      ctx.clearRect(0, 0, width, height);

      const fov = 1200;
      const cameraZ = 1800; // Distance of camera from center

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      // 1. Update and Project all points
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.update();

        // Rotate Y
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        // Rotate X
        const y1 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        // Apply mouse parallax (shift scene based on mouse)
        const finalX = x1 + mouseX * 400;
        const finalY = y1 + mouseY * 300;
        
        // Perspective division
        // Move scene back by cameraZ so it's in front of us
        const depth = z2 + cameraZ; 
        
        if (depth > 0) {
          const scale = fov / depth;
          p.sx = finalX * scale + width / 2;
          p.sy = finalY * scale + height / 2;
          p.scale = scale;
          p.depth = depth;
        } else {
          // Point is behind the camera
          p.scale = 0; 
        }
      }

      // Sort points by depth for proper drawing order (back to front)
      // Though for additive blending, order matters less, but good practice
      const sortedPoints = [...points].sort((a, b) => b.depth - a.depth);

      // 2. Draw connections
      // We don't need to check every pair against every pair if it's too slow,
      // but N=140 is roughly 9700 checks, which is totally fine for modern JS.
      ctx.lineWidth = 1;
      
      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        if (p1.scale === 0) continue;

        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          if (p2.scale === 0) continue;

          // Check distance in 3D space, not 2D screen space, 
          // so lines don't pop in/out when rotating
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const distSq = dx*dx + dy*dy + dz*dz;
          
          const maxDist = 350;
          if (distSq < maxDist * maxDist) {
            const dist = Math.sqrt(distSq);
            // Opacity based on distance and average depth
            let opacity = 1 - (dist / maxDist);
            
            // Fade out points far away
            const avgDepth = (p1.depth + p2.depth) / 2;
            const depthFade = Math.max(0, 1 - (avgDepth - 1000) / 2500);
            
            opacity *= depthFade * 0.4; // Max opacity 0.4

            if (opacity > 0.01) {
              // Create gradient line between points to mix colors
              // Use theme colors: cyan-400 (#22d3ee) and violet-400 (#c084fc)
              const grad = ctx.createLinearGradient(p1.sx, p1.sy, p2.sx, p2.sy);
              grad.addColorStop(0, `rgba(34, 211, 238, ${opacity})`);
              grad.addColorStop(1, `rgba(192, 132, 252, ${opacity})`);
              
              ctx.beginPath();
              ctx.moveTo(p1.sx, p1.sy);
              ctx.lineTo(p2.sx, p2.sy);
              ctx.strokeStyle = grad;
              ctx.stroke();
            }
          }
        }
      }

      // 3. Draw Points
      for (let i = 0; i < sortedPoints.length; i++) {
        const p = sortedPoints[i];
        if (p.scale === 0) continue;

        // Base size 3px
        const radius = Math.max(0.1, 3 * p.scale);
        
        // Depth fade
        const depthFade = Math.max(0, 1 - (p.depth - 800) / 3000);
        const opacity = depthFade * 0.8;

        if (opacity > 0.01) {
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, radius, 0, Math.PI * 2);
          
          // Mix colors based on position
          if (i % 3 === 0) {
            ctx.fillStyle = `rgba(34, 211, 238, ${opacity})`; // Cyan
          } else if (i % 3 === 1) {
            ctx.fillStyle = `rgba(192, 132, 252, ${opacity})`; // Violet
          } else {
            ctx.fillStyle = `rgba(125, 211, 252, ${opacity})`; // Sky
          }
          
          ctx.fill();
          
          // Add a subtle glow
          if (p.scale > 1.5) {
             ctx.beginPath();
             ctx.arc(p.sx, p.sy, radius * 3, 0, Math.PI * 2);
             ctx.fillStyle = ctx.fillStyle.replace(opacity.toString(), (opacity * 0.3).toString());
             ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-30 h-full w-full opacity-60 mix-blend-screen"
      style={{
        maskImage: 'radial-gradient(ellipse at center, black 0%, black 50%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, black 50%, transparent 100%)'
      }}
    />
  );
}

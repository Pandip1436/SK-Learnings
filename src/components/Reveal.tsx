import type { ElementType, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
};

export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  y = 28,
  duration = 800,
}: Props) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate3d(0,0,0)" : `translate3d(0, ${y}px, 0)`,
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms cubic-bezier(0.21, 0.74, 0.27, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}

type StaggerProps = {
  children: ReactNode[];
  className?: string;
  step?: number;
  initialDelay?: number;
};

export function RevealStagger({
  children,
  className = "",
  step = 90,
  initialDelay = 0,
}: StaggerProps) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <Reveal key={i} delay={initialDelay + i * step}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}

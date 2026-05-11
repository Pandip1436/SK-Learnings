import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";
import { NewsTicker } from "./NewsTicker";
import { ScrollToTop } from "./ScrollToTop";
import { WhatsAppButton } from "./WhatsAppButton";
import { AnimatedBackground } from "./AnimatedBackground";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <NewsTicker />
      <AnimatedBackground />
      <ScrollProgress />
      <ScrollToTop />
      <WhatsAppButton />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

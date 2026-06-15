"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { CTAS } from "@/lib/siteConfig";
import { useMotionPrefs } from "@/lib/motionPrefs";

const NAV_LINKS = [
  { label: "Visa Services", href: "/visa-services" },
  { label: "eVisas", href: "/evisas" },
  { label: "Holidays", href: "/holidays" },
  { label: "Umrah", href: "/umrah" },
  { label: "Flights", href: "/flights-hotels" },
  { label: "About", href: "/about" },
];

const SECTION_LINKS = [
  { label: "Hero", href: "#hero" },
  { label: "Mission", href: "#mission" },
  { label: "Destinations", href: "#carousel" },
  { label: "Adventure", href: "#adventure" },
  { label: "FAQ", href: "#faq" },
];

const menuContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.12 },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const menuItemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 280, damping: 24 } },
  exit: { opacity: 0, x: 16 },
};

export default function Navbar({ visible }: { visible: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(76);
  const headerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const { reduced, t, spring } = useMotionPrefs();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled((prev) => {
      if (latest > 48) return true;
      if (latest < 12) return false;
      return prev;
    });
  });

  useEffect(() => {
    const measure = () => {
      if (headerRef.current) {
        setNavHeight(headerRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [visible, menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = (isMobile = false) =>
    `block rounded-pill border font-sans-body font-medium text-forest transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none cursor-pointer ${
      isMobile
        ? "px-5 py-3 text-sm"
        : "px-3 py-2 text-[11px] lg:px-4 lg:text-xs xl:px-5 xl:text-sm"
    } ${
      scrolled || isMobile
        ? "border-forest/15 bg-white/45"
        : "border-gray-300/80 bg-transparent"
    } hover:border-forest hover:bg-forest hover:text-cream hover:shadow-[0_8px_24px_rgba(26,58,42,0.22)]`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div aria-hidden style={{ height: navHeight }} className="w-full shrink-0" />

      <motion.header
        ref={headerRef}
        id="header"
        aria-label="Header"
        className="fixed top-0 left-0 right-0 z-[200] w-full border-b transition-[background-color,box-shadow,border-color,backdrop-filter] duration-500 ease-in-out"
        style={{
          backgroundColor: scrolled || menuOpen ? "rgba(245, 240, 232, 0.92)" : "rgba(245, 240, 232, 0)",
          borderColor: scrolled || menuOpen ? "rgba(26, 58, 42, 0.1)" : "transparent",
          boxShadow: scrolled ? "0 8px 32px rgba(26, 58, 42, 0.08)" : "none",
          backdropFilter: scrolled || menuOpen ? "blur(16px) saturate(150%)" : "blur(0px)",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(16px) saturate(150%)" : "blur(0px)",
        }}
        initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : -80 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : -80 }}
        transition={t({ duration: 0.85, delay: 0.05, ease: [0.22, 1, 0.36, 1] })}
      >
        <nav className="relative mx-auto flex w-full items-center justify-between px-4 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5">
          <Link
            href="/"
            className="inline-flex shrink-0 items-center rounded-lg focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
          >
            <Image
              src="/images/logo/logo.png"
              alt="B&B Travel Store"
              width={140}
              height={48}
              className="h-9 w-auto object-contain sm:h-10 md:h-12"
              priority
            />
          </Link>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1.5 lg:flex lg:gap-2">
            {NAV_LINKS.map((link) => (
              <motion.div
                key={link.label}
                whileHover={reduced ? undefined : { y: -2, scale: 1.04 }}
                whileTap={reduced ? undefined : { scale: 0.97, y: 0 }}
                transition={spring({ type: "spring", stiffness: 420, damping: 28 })}
              >
                <Link href={link.href} className={linkClass()}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link href="/contact" className="hidden lg:block">
              <motion.span
                whileHover={reduced ? undefined : { scale: 1.05 }}
                whileTap={reduced ? undefined : { scale: 0.95 }}
                className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-gold py-2 pl-4 pr-2 font-sans-body text-[11px] font-bold text-forest shadow-md transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none md:pl-5 md:text-xs lg:pl-6 lg:text-[13px]"
              >
                {CTAS.whatsapp}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest transition-transform duration-300 group-hover:rotate-45 lg:h-9 lg:w-9">
                  <ArrowUpRight size={16} className="text-white lg:size-[18px]" strokeWidth={2.5} />
                </span>
              </motion.span>
            </Link>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-forest/15 bg-white/60 text-forest transition-colors hover:bg-forest hover:text-cream focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none lg:hidden ${menuOpen ? "pointer-events-none opacity-0" : ""}`}
            >
              <Menu size={20} strokeWidth={2.5} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Premium full-screen mobile canvas */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={t({ duration: 0.3 })}
            className="fixed inset-0 z-[250] flex flex-col overflow-hidden bg-[#051c0f] lg:hidden"
          >
            {/* Mesh background */}
            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(201,168,76,0.4) 1px, transparent 0), radial-gradient(rgba(255,255,255,0.08) 1px, transparent 0)",
                  backgroundSize: "32px 32px",
                  backgroundPosition: "0 0, 16px 16px",
                }}
              />
              <div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-gold/10 blur-[80px]" />
              <div className="absolute -left-16 bottom-20 h-72 w-72 rounded-full bg-[#1abc9c]/10 blur-[90px]" />
            </div>

            {/* Top bar: logo + close */}
            <div className="relative z-10 flex items-center justify-between px-5 pb-2 pt-5 sm:px-8">
              <Link href="/" onClick={closeMenu} className="inline-flex shrink-0">
                <Image
                  src="/images/logo/logo.png"
                  alt="B&B Travel Store"
                  width={130}
                  height={44}
                  className="h-9 w-auto brightness-0 invert"
                />
              </Link>
              <motion.button
                type="button"
                aria-label="Close menu"
                onClick={closeMenu}
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={spring({ type: "spring", stiffness: 400, damping: 22 })}
                whileTap={{ scale: 0.92 }}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold shadow-[0_0_24px_rgba(201,168,76,0.2)] backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
              >
                <X size={22} strokeWidth={2.5} />
              </motion.button>
            </div>

            {/* Scrollable nav content */}
            <motion.div
              variants={menuContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-10 flex flex-1 flex-col overflow-y-auto px-5 pb-8 pt-4 sm:px-8"
            >
              <motion.p variants={menuItemVariants} className="mb-3 font-sans-body text-[10px] font-bold uppercase tracking-[0.28em] text-gold/80">
                Navigate
              </motion.p>
              <div className="mb-8 flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <motion.div key={link.label} variants={menuItemVariants}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="group flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.04] px-5 py-4 font-sans-body text-[15px] font-semibold text-white backdrop-blur-sm transition-colors hover:border-gold/30 hover:bg-gold/10 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={16}
                        className="text-gold/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.p variants={menuItemVariants} className="mb-3 font-sans-body text-[10px] font-bold uppercase tracking-[0.28em] text-gold/80">
                On This Page
              </motion.p>
              <div className="mb-8 flex flex-wrap gap-2">
                {SECTION_LINKS.map((link) => (
                  <motion.div key={link.href} variants={menuItemVariants}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="inline-block rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 font-sans-body text-xs font-medium text-white/75 transition-colors hover:border-gold/35 hover:text-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={menuItemVariants} className="mt-auto pt-4">
                <Link href="/contact" onClick={closeMenu}>
                  <motion.span
                    whileTap={reduced ? undefined : { scale: 0.97 }}
                    className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-gold py-3.5 pl-6 pr-3 font-sans-body text-sm font-bold text-[#0A3321] shadow-[0_12px_40px_rgba(201,168,76,0.35)] focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
                  >
                    {CTAS.whatsapp}
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A3321]">
                      <ArrowUpRight size={16} className="text-white" strokeWidth={2.5} />
                    </span>
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

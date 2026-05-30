"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/services", label: "サービス詳細" },
  { href: "/company", label: "会社概要" },
  { href: "/greeting", label: "代表挨拶" },
  { href: "/news", label: "お知らせ・実績" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="logo">
          <Image src="/logo.png" alt="MEC - Medical Echo Consulting" className="logo-img" width={160} height={40} style={{ height: 40, width: "auto" }} priority />
        </Link>
        <button
          className={`menu-toggle${menuOpen ? " open" : ""}`}
          aria-label="メニューを開く"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
        <nav className={`nav${menuOpen ? " open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${pathname === item.href || (item.href === "/services" && (pathname === "/service" || pathname === "/consultation")) ? " active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

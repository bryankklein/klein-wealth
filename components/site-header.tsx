"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border/50">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/images/kwm-logo.png"
                alt=""
                fill
                className="object-contain"
                sizes="48px"
                priority
              />
            </div>
            <span className="text-xs font-sans tracking-[0.2em] text-ink uppercase">
              Klein Wealth Management
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <ul className="flex items-center gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground hover:text-ink hover:bg-muted px-3 py-2 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/client-login"
              className="text-sm text-ink border border-ink px-4 py-2 ml-2 hover:bg-ink hover:text-background transition-colors"
            >
              Client Login
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden text-foreground"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M6 6l12 12M6 18L18 6"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <ul id="mobile-nav" className="md:hidden pb-6 pt-2 space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-base text-foreground hover:text-ink hover:bg-muted px-3 py-3 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/client-login"
                className="block text-base text-ink border border-ink px-3 py-3 hover:bg-ink hover:text-background transition-colors text-center"
                onClick={() => setOpen(false)}
              >
                Client Login
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

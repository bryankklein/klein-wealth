import Link from "next/link";

const navItems = [
  { label: "Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const complianceItems = [
  { label: "Disclosures", href: "/disclosures", external: false },
  {
    label: "CFP® Certification",
    href: "https://www.cfp.net/verify-a-cfp-professional",
    external: true,
  },
  { label: "Form ADV", href: "/disclosures#adv", external: false },
  { label: "Privacy Policy", href: "/disclosures#privacy", external: false },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <p className="text-xs font-sans tracking-[0.2em] text-ink uppercase mb-4">
              Klein Wealth Management
            </p>
            <p className="text-foreground/70 text-sm leading-relaxed mb-6">
              Independent fiduciary advice for those who value clarity,
              integrity, and a long-term perspective.
            </p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Klein Wealth Management is a registered investment advisor.
              Information presented is for educational purposes only and does
              not intend to make an offer or solicitation for the sale or
              purchase of any specific securities, investments, or investment
              strategies.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.1em] text-muted-foreground uppercase mb-4">
              Navigate
            </p>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/80 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.1em] text-muted-foreground uppercase mb-4">
              Compliance
            </p>
            <ul className="space-y-3">
              {complianceItems.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground/80 hover:text-accent transition-colors inline-flex items-center"
                    >
                      {item.label}
                      <span className="ml-1 text-xs" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/80 hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/30">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Klein Wealth Management. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

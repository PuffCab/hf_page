import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 pb-6 pt-10 md:px-16 lg:px-[120px]">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="flex max-w-[640px] flex-col gap-6">
            <p className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-none text-foreground">
              {siteConfig.name.toUpperCase()}
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <div className="flex flex-col gap-4">
              <p className="font-mono text-sm uppercase text-faint">Inquiries</p>
              {siteConfig.inquiries.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="text-base text-foreground transition-colors hover:text-muted-foreground"
                >
                  {email}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-mono text-sm uppercase text-faint">Social</p>
              {siteConfig.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-foreground transition-colors hover:text-muted-foreground"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 font-mono text-xs uppercase text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.locations}</p>
        </div>
      </div>
    </footer>
  );
}

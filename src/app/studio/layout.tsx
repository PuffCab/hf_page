// The Studio sits outside the `[locale]` segment, so it needs its own root
// layout — without the site's theme, footer or i18n provider.
export default function StudioLayout({ children }: LayoutProps<"/studio">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

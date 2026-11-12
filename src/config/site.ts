export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "TeamFlow",
  description:
    "TeamFlow keeps projects, tasks and people in one calm workspace so teams ship on time.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

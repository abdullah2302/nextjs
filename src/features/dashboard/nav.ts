export interface DashboardNavItem {
  label: string;
  href: string;
  icon: string;
  exact?: boolean;
}

export function getNavItems(workspace: string): DashboardNavItem[] {
  const base = `/app/${workspace}`;
  return [
    {
      label: "Overview",
      href: base,
      icon: "M4 13h6V4H4zM14 20h6V4h-6zM4 20h6v-3H4z",
      exact: true,
    },
    {
      label: "Projects",
      href: `${base}/projects`,
      icon: "M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z",
    },
    {
      label: "Team",
      href: `${base}/team`,
      icon: "M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM2 20c0-3.5 3-5.5 7-5.5s7 2 7 5.5M17 5a3 3 0 010 6M22 20c0-2.5-1.5-4-4-4.8",
    },
    {
      label: "Settings",
      href: `${base}/settings`,
      icon: "M12 15a3 3 0 100-6 3 3 0 000 6zM19 12l2-1-2-4-2 .6a7 7 0 00-1.6-.9L15 5h-4l-.4 1.7a7 7 0 00-1.6.9L7 7 5 11l2 1a7 7 0 000 1.8L5 15l2 4 2-.6c.5.4 1 .7 1.6.9L11 21h4l.4-1.7c.6-.2 1.1-.5 1.6-.9l2 .6 2-4-2-1a7 7 0 000-2z",
    },
  ];
}

export function isItemActive(pathname: string, item: DashboardNavItem): boolean {
  return item.exact ? pathname === item.href : pathname.startsWith(item.href);
}

import "server-only";

export interface Workspace {
  slug: string;
  name: string;
  plan: "Starter" | "Team" | "Business";
}

export interface Project {
  id: string;
  name: string;
  status: "Active" | "Planning" | "Done";
  progress: number;
  owner: string;
  due: string;
}

export interface Activity {
  id: string;
  actor: string;
  action: string;
  target: string;
  time: string;
}

export interface OverviewStats {
  projects: number;
  active: number;
  avgProgress: number;
  dueSoon: number;
}

const workspaces: Workspace[] = [
  { slug: "acme", name: "Acme Studio", plan: "Team" },
  { slug: "globex", name: "Globex Labs", plan: "Business" },
  { slug: "initech", name: "Initech", plan: "Starter" },
];

const projects: Record<string, Project[]> = {
  acme: [
    {
      id: "website-relaunch",
      name: "Website relaunch",
      status: "Active",
      progress: 64,
      owner: "Sana Khan",
      due: "2026-12-05",
    },
    {
      id: "mobile-onboarding",
      name: "Mobile onboarding",
      status: "Planning",
      progress: 18,
      owner: "Omar Ali",
      due: "2027-01-15",
    },
    {
      id: "brand-refresh",
      name: "Brand refresh",
      status: "Done",
      progress: 100,
      owner: "Ayesha Noor",
      due: "2026-10-20",
    },
  ],
  globex: [
    {
      id: "data-pipeline",
      name: "Data pipeline",
      status: "Active",
      progress: 41,
      owner: "Hamza Raza",
      due: "2026-12-18",
    },
    {
      id: "customer-portal",
      name: "Customer portal",
      status: "Planning",
      progress: 9,
      owner: "Mina Shah",
      due: "2027-02-01",
    },
  ],
  initech: [
    {
      id: "internal-wiki",
      name: "Internal wiki",
      status: "Active",
      progress: 77,
      owner: "Bilal Ahmed",
      due: "2026-11-30",
    },
  ],
};

const activity: Record<string, Activity[]> = {
  acme: [
    {
      id: "a1",
      actor: "Sana Khan",
      action: "moved a task to In progress in",
      target: "Website relaunch",
      time: "12 min ago",
    },
    {
      id: "a2",
      actor: "Omar Ali",
      action: "commented on",
      target: "Mobile onboarding",
      time: "1 hour ago",
    },
    {
      id: "a3",
      actor: "Ayesha Noor",
      action: "marked as done",
      target: "Brand refresh",
      time: "Yesterday",
    },
    {
      id: "a4",
      actor: "Sana Khan",
      action: "created a task in",
      target: "Website relaunch",
      time: "Yesterday",
    },
    {
      id: "a5",
      actor: "Omar Ali",
      action: "changed the due date of",
      target: "Mobile onboarding",
      time: "2 days ago",
    },
  ],
  globex: [
    {
      id: "g1",
      actor: "Hamza Raza",
      action: "updated progress on",
      target: "Data pipeline",
      time: "30 min ago",
    },
    {
      id: "g2",
      actor: "Mina Shah",
      action: "created project",
      target: "Customer portal",
      time: "3 days ago",
    },
  ],
  initech: [
    {
      id: "i1",
      actor: "Bilal Ahmed",
      action: "published a page in",
      target: "Internal wiki",
      time: "2 hours ago",
    },
  ],
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const DEFAULT_WORKSPACE = "acme";

export function listWorkspaces(): Workspace[] {
  return workspaces;
}

export function getWorkspace(slug: string): Workspace | undefined {
  return workspaces.find((w) => w.slug === slug);
}

// Small delays simulate network calls so loading.tsx is visible.
export async function getProjects(workspace: string): Promise<Project[]> {
  await delay(700);
  return projects[workspace] ?? [];
}

export async function getProject(
  workspace: string,
  id: string,
): Promise<Project | undefined> {
  await delay(500);
  return (projects[workspace] ?? []).find((p) => p.id === id);
}

export async function getOverviewStats(workspace: string): Promise<OverviewStats> {
  await delay(500);
  const list = projects[workspace] ?? [];
  const in30Days = Date.now() + 30 * 24 * 60 * 60 * 1000;
  return {
    projects: list.length,
    active: list.filter((p) => p.status === "Active").length,
    avgProgress: list.length
      ? Math.round(list.reduce((sum, p) => sum + p.progress, 0) / list.length)
      : 0,
    dueSoon: list.filter(
      (p) => p.status !== "Done" && new Date(p.due).getTime() <= in30Days,
    ).length,
  };
}

export async function getActivity(workspace: string): Promise<Activity[]> {
  await delay(400);
  return activity[workspace] ?? [];
}

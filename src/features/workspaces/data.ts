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

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function listWorkspaces(): Workspace[] {
  return workspaces;
}

export function getWorkspace(slug: string): Workspace | undefined {
  return workspaces.find((w) => w.slug === slug);
}

export const DEFAULT_WORKSPACE = "acme";

// Small delay simulates a network call so loading.tsx is visible.
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

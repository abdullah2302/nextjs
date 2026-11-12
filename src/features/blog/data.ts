export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  body: string[];
}

export const posts: Post[] = [
  {
    slug: "run-a-better-standup",
    title: "How to run a standup that takes ten minutes",
    excerpt: "Short standups work when the board does the talking.",
    date: "2026-10-12",
    readTime: "4 min read",
    body: [
      "Most standups run long because people recap what the board already shows. Start from the board instead.",
      "Walk the columns from right to left. Talk about what is blocked first, then what is in progress, and skip anything that is simply on track.",
      "End by confirming one owner for every blocked item. If a blocker has no owner, it will still be there tomorrow.",
    ],
  },
  {
    slug: "one-owner-per-task",
    title: "Why every task needs exactly one owner",
    excerpt: "Shared ownership sounds friendly but slows work down.",
    date: "2026-09-28",
    readTime: "3 min read",
    body: [
      "When two people own a task, each assumes the other is handling it. The task waits.",
      "A single owner does not mean working alone. The owner can ask for help, but they are the person who makes sure it gets done.",
      "Try it for a month: assign one owner to every card and watch how often work stalls.",
    ],
  },
  {
    slug: "planning-without-burnout",
    title: "Planning a sprint without burning out the team",
    excerpt: "Use workload data to plan for the week you will actually have.",
    date: "2026-09-10",
    readTime: "5 min read",
    body: [
      "Teams usually plan for a perfect week. Meetings, reviews and surprises then eat a third of it.",
      "Plan to about 70 percent of capacity and keep the rest as a buffer for the unexpected.",
      "Check the workload view before assigning. If one person is overloaded, move work before the sprint starts, not after.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

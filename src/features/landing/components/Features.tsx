const features = [
  {
    title: "One board for every project",
    body: "Drag tasks between stages, assign owners and set due dates without leaving the board.",
    icon: "M4 5h6v14H4zM14 5h6v8h-6z",
  },
  {
    title: "Clear ownership",
    body: "Every task has one owner and one deadline, so nothing sits in limbo between people.",
    icon: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 20c0-4 4-6 8-6s8 2 8 6",
  },
  {
    title: "Workload at a glance",
    body: "See who is stretched and who has room before you assign the next piece of work.",
    icon: "M4 19V9m6 10V5m6 14v-7m4 7H2",
  },
  {
    title: "Comments in context",
    body: "Discuss work on the task itself. Decisions stay next to the work they belong to.",
    icon: "M5 5h14v10H9l-4 4z",
  },
  {
    title: "Reminders that help",
    body: "Get one daily summary of what is due, instead of a notification for every change.",
    icon: "M12 7v5l3 2M12 21a9 9 0 100-18 9 9 0 000 18z",
  },
  {
    title: "Works with your tools",
    body: "Connect Slack, GitHub and Google Calendar to keep updates where your team already is.",
    icon: "M9 7H7a4 4 0 000 8h2m6-8h2a4 4 0 010 8h-2m-7-4h6",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-surface scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display max-w-2xl text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl">
          Everything a team needs to stay in step.
        </h2>
        <p className="text-ink-soft mt-4 max-w-xl text-lg">
          Simple enough to start today, flexible enough to grow with your team.
        </p>

        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title}>
              <span className="bg-brand grid size-11 place-items-center rounded-xl text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={f.icon} />
                </svg>
              </span>
              <h3 className="font-display mt-4 text-xl font-bold">{f.title}</h3>
              <p className="text-ink-soft mt-2 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

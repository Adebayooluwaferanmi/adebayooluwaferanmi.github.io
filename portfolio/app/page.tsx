import Link from "next/link";

const linkedinUrl = "https://www.linkedin.com/in/adebayo-oluwaferanmi";
const githubUrl = "https://github.com/adebayooluwaferanmi";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-8">
        {/* HEADER */}
        <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-slate-300 uppercase">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            Iyanuoluwa A. · Agentic AI & Integration Engineer
          </div>
          <nav className="flex flex-wrap gap-4 text-xs text-slate-400">
            <a href="#about" className="hover:text-emerald-400">
              About
            </a>
            <a href="#projects" className="hover:text-emerald-400">
              Projects
            </a>
            <a href="#experience" className="hover:text-emerald-400">
              Experience
            </a>
            <a href="#contact" className="hover:text-emerald-400">
              Contact
            </a>
          </nav>
        </header>

        {/* HERO */}
        <section className="mb-16 grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2.3fr)] md:items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Building{" "}
              <span className="text-emerald-400">
                agentic AI systems
              </span>{" "}
              that turn marketing chaos into automation.
            </h1>
            <p className="mt-4 max-w-xl text-sm text-slate-300">
              I’m a software engineer and medical laboratory scientist
              transitioning into full-time{" "}
              <span className="font-medium text-emerald-300">
                Agentic AI & Automation
              </span>
              . I design and ship systems where LLM agents orchestrate
              real workflows: from marketing campaigns and analytics to
              internal tools and integrations.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {/* TODO: put your actual CV link */}
              <Link
                href="YOUR_CV_LINK_HERE"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
              >
                View CV
              </Link>
              <Link
                href={githubUrl}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-emerald-400 hover:text-emerald-300"
              >
                GitHub
              </Link>
              <Link
                href={linkedinUrl}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-emerald-400 hover:text-emerald-300"
              >
                LinkedIn
              </Link>
            </div>

            <dl className="mt-6 flex flex-wrap gap-6 text-xs text-slate-300">
              <div>
                <dt className="font-semibold text-slate-100">
                  Core focus
                </dt>
                <dd>LLM agents · API orchestration · marketing automation</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-100">Cloud</dt>
                <dd>GCP · Containers · CI/CD · Observability</dd>
              </div>
            </dl>
          </div>

          <aside className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 p-4 shadow-2xl shadow-black/50">
              <div className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Agentic AI Profile Snapshot
              </div>
              <p className="text-sm text-slate-100">
                I enjoy taking messy, manual workflows and turning them into{" "}
                <span className="text-emerald-300">
                  observable, testable agent pipelines
                </span>{" "}
                that integrate LLMs, marketing APIs, and data sources.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-[0.65rem]">
                {[
                  "Python",
                  "Node.js",
                  "LangChain / CrewAI",
                  "LLM tool-calling",
                  "Vector DBs (RAG)",
                  "GCP · Cloud Run",
                  "GitHub Actions",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-slate-300"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-4 grid gap-3 text-xs text-slate-300 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-3">
                  <div className="text-sm font-semibold text-emerald-300">
                    5+ years
                  </div>
                  <div>Backend, integrations, and automation workflows.</div>
                </div>
                <div className="rounded-xl border border-blue-900 bg-slate-900/80 p-3">
                  <div className="text-sm font-semibold text-emerald-300">
                    Domain mix
                  </div>
                  <div>
                    Engineering + medical lab science → strong data quality &
                    experimentation mindset.
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>

        {/* ABOUT */}
        <section id="about" className="mb-16">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-xl font-semibold">About</h2>
            <p className="max-w-md text-xs text-slate-300">
              This portfolio complements my LinkedIn (
              <Link
                href={linkedinUrl}
                target="_blank"
                className="text-emerald-300 underline-offset-2 hover:underline"
              >
                @adebayo-oluwaferanmi
              </Link>
              ) with a deeper look at the engineering work and systems-thinking
              behind my experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div className="space-y-3 text-sm text-slate-200">
              <p>
                I’m Iyanuoluwa Adebayo, a{" "}
                <span className="font-medium text-emerald-300">
                  software engineer focused on agentic AI, integrations, and
                  automation
                </span>
                . I enjoy designing systems where LLM agents can safely call
                tools, react to feedback, and coordinate across marketing and
                operations surfaces.
              </p>
              <p>
                My background as a medical laboratory scientist and instructor
                means I care about{" "}
                <span className="font-medium">
                  reliability, documentation, and clear experiment loops
                </span>
                . The same discipline used in lab QC now guides how I measure
                model performance, track regressions, and ship AI features.
              </p>
              <p>
                I’m especially excited by roles that sit at the intersection of{" "}
                <span className="font-medium">
                  backend engineering, LLM orchestration, and product thinking
                </span>
                —like the Agentic AI Developer position at Talent Hackers.
              </p>

              <div className="mt-4">
                <p className="text-xs font-semibold text-slate-300">
                  Core skills
                </p>
                <div className="mt-2 flex flex-wrap gap-2 text-[0.7rem]">
                  {[
                    "Python · FastAPI",
                    "Node.js · TypeScript",
                    "LangChain / CrewAI / custom agents",
                    "LLM prompt & tool design",
                    "Vector DBs & RAG",
                    "Meta / Google / TikTok Ads APIs (conceptual & integratable)",
                    "GCP · Cloud Run · Cloud Storage",
                    "Docker · CI/CD (GitHub Actions)",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-3">
                <div className="text-sm font-semibold text-slate-100">
                  Agentic systems mindset
                </div>
                <p className="mt-1">
                  I think in terms of{" "}
                  <span className="font-medium">
                    tools, memory, and feedback loops
                  </span>{" "}
                  —so agents don’t just call APIs once, but learn from results,
                  refine campaigns, and stay observable.
                </p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-3">
                <div className="text-sm font-semibold text-slate-100">
                  Production-ready automation
                </div>
                <p className="mt-1">
                  Clean API boundaries, versioned prompts, structured logging,
                  and metrics for latency, success, and business impact.
                </p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-3">
                <div className="text-sm font-semibold text-slate-100">
                  Cloud-native delivery
                </div>
                <p className="mt-1">
                  Containerized services, Git-based workflows, and static
                  frontends deployed on GCP and GitHub Pages, like this site.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-16">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-xl font-semibold">Selected Projects</h2>
            <p className="max-w-md text-xs text-slate-300">
              A few projects that show how I think about agentic workflows,
              integrations, and production systems. Some are in-progress and
              actively iterated.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Project 1 */}
            <article className="flex flex-col rounded-2xl border border-slate-700 bg-slate-950/80 p-4 shadow-lg shadow-black/50">
              <p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">
                Agentic AI · Marketing orchestration
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-100">
                Multi-channel Campaign Agent (Concept → Build)
              </h3>
              <p className="mt-2 text-xs text-slate-300">
                An LLM-driven agent architecture that can plan, launch, and
                inspect marketing campaigns across multiple ad platforms. It
                proposes tests, generates creatives, and uses analytics feedback
                to refine future actions.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[0.65rem] text-slate-300">
                <span className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-1">
                  Python
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-1">
                  LangChain / tools
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-1">
                  Ads APIs (Meta/Google) – integratable
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-1">
                  GCP · Cloud Run
                </span>
              </div>
              <Link
                href={`${githubUrl}/agentic-campaign-agent`}
                target="_blank"
                className="mt-4 text-xs font-semibold text-emerald-300 hover:underline"
              >
                View on GitHub →
              </Link>
            </article>

            {/* Project 2 */}
            <article className="flex flex-col rounded-2xl border border-slate-700 bg-slate-950/80 p-4 shadow-lg shadow-black/50">
              <p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">
                RAG · Analytics · Automation
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-100">
                Analytics Copilot for Growth Teams
              </h3>
              <p className="mt-2 text-xs text-slate-300">
                A copilot that connects to Sheets and analytics dashboards,
                answers natural language questions, and drafts weekly insights /
                next-step recommendations for marketers.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[0.65rem] text-slate-300">
                <span className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-1">
                  Node.js · TypeScript
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-1">
                  Vector DB / RAG
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-1">
                  Google Sheets API
                </span>
              </div>
              <Link
                href={`${githubUrl}/analytics-copilot`}
                target="_blank"
                className="mt-4 text-xs font-semibold text-emerald-300 hover:underline"
              >
                View on GitHub →
              </Link>
            </article>

            {/* Project 3 */}
            <article className="flex flex-col rounded-2xl border border-slate-700 bg-slate-950/80 p-4 shadow-lg shadow-black/50">
              <p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">
                LLM tools · Operations
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-100">
                Agentic Support & Triage Bot
              </h3>
              <p className="mt-2 text-xs text-slate-300">
                An agent that triages incoming tickets, queries internal APIs,
                and drafts responses for human approval – with clear guardrails,
                logging, and observability for safe automation.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[0.65rem] text-slate-300">
                <span className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-1">
                  Python · FastAPI
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-1">
                  Tool calling
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-1">
                  Docker · GCP
                </span>
              </div>
              <Link
                href={`${githubUrl}/agentic-support-bot`}
                target="_blank"
                className="mt-4 text-xs font-semibold text-emerald-300 hover:underline"
              >
                View on GitHub →
              </Link>
            </article>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mb-16">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-xl font-semibold">Experience</h2>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[0.7rem] text-slate-300">
              Condensed & aligned with LinkedIn
            </span>
          </div>

          <div className="relative border-l border-slate-700 pl-5 text-xs text-slate-300">
            <div className="absolute -left-[0.47rem] top-2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.35)]" />

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-slate-100">
                Software / Integration Engineer
              </h3>
              <p className="text-[0.7rem] text-slate-400">
                Remote · Cloud & Integrations · YYYY – Present
              </p>
              <ul className="mt-2 space-y-1 list-disc pl-4">
                <li>
                  Designed and maintained integrations with identity, DevOps,
                  and monitoring platforms, focusing on reliability and
                  observability.
                </li>
                <li>
                  Built async services and automation workflows in Python /
                  Node.js, packaged with Docker and deployed to cloud runtimes.
                </li>
                <li>
                  Collaborated with product and ops to translate high-level
                  workflows into robust APIs, jobs, and background workers.
                </li>
              </ul>
            </div>

            <div className="absolute -left-[0.47rem] top-[9.5rem] h-3 w-3 rounded-full bg-emerald-400/80" />

            <div>
              <h3 className="text-sm font-semibold text-slate-100">
                Medical Laboratory Scientist & Instructor
              </h3>
              <p className="text-[0.7rem] text-slate-400">
                Higher Institution · Teaching & Diagnostics · YYYY – YYYY
              </p>
              <ul className="mt-2 space-y-1 list-disc pl-4">
                <li>
                  Led clinical chemistry workflows with strong emphasis on QC,
                  validation, and reproducible reporting.
                </li>
                <li>
                  Taught students core lab techniques, documentation, and
                  scientific reasoning—skills that now influence how I design
                  AI evaluations.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mb-10">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-xl font-semibold">Let&apos;s work together</h2>
            <p className="max-w-md text-xs text-slate-300">
              I&apos;m actively exploring roles like the{" "}
              <span className="font-medium text-emerald-300">
                Agentic AI Developer (Nigeria)
              </span>{" "}
              position at Talent Hackers—remote, senior IC roles at the
              intersection of LLMs, automation, and marketing.
            </p>
          </div>

          <div className="grid gap-6 rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-slate-950 to-slate-950 p-5 text-xs text-slate-100 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div>
              <p>
                If you&apos;re building AI agents that plan, execute, and
                optimize real-world marketing or business workflows, I&apos;d
                love to chat. I&apos;m comfortable owning projects end-to-end:
                from architecture and implementation to monitoring and iteration.
              </p>
              <p className="mt-3">
                I&apos;m based in Nigeria and remote-ready, with flexibility to
                collaborate with EST-aligned teams.
              </p>
            </div>
            <div className="space-y-2">
              {/* TODO: set your real email */}
              <div>
                <div className="text-[0.7rem] font-semibold tracking-[0.18em] text-emerald-200 uppercase">
                  Email
                </div>
                <a
                  href="mailto:YOUR_EMAIL_HERE"
                  className="text-xs text-emerald-100 hover:underline"
                >
                  YOUR_EMAIL_HERE
                </a>
              </div>
              <div>
                <div className="text-[0.7rem] font-semibold tracking-[0.18em] text-emerald-200 uppercase">
                  GitHub
                </div>
                <Link
                  href={githubUrl}
                  target="_blank"
                  className="text-xs text-emerald-100 hover:underline"
                >
                  github.com/adebayooluwaferanmi
                </Link>
              </div>
              <div>
                <div className="text-[0.7rem] font-semibold tracking-[0.18em] text-emerald-200 uppercase">
                  LinkedIn
                </div>
                <Link
                  href={linkedinUrl}
                  target="_blank"
                  className="text-xs text-emerald-100 hover:underline"
                >
                  linkedin.com/in/adebayo-oluwaferanmi
                </Link>
              </div>
              <div>
                <div className="text-[0.7rem] font-semibold tracking-[0.18em] text-emerald-200 uppercase">
                  Location
                </div>
                <p className="text-xs text-emerald-100">
                  Nigeria · Remote · Open to EST-aligned collaboration
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-6 text-center text-[0.7rem] text-slate-500">
          © {new Date().getFullYear()} Iyanuoluwa Adebayo · Portfolio · Built
          with Next.js & Tailwind
        </footer>
      </div>
    </main>
  );
}

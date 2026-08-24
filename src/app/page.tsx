import Link from "next/link";
import { PrototypeBanner } from "@/components/PrototypeBanner";

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-3">
      <span className="font-mono text-xs text-orange-400/70">{n}</span>
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <PrototypeBanner />

      {/* nav */}
      <header className="sticky top-0 z-10 border-b border-zinc-800/80 bg-[#08090b]/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-orange-500" />
            <span className="font-mono text-sm font-semibold tracking-tight text-zinc-100">
              code afterlife
            </span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="#problem" className="hidden hover:text-zinc-200 sm:inline">
              Problem
            </a>
            <a href="#insight" className="hidden hover:text-zinc-200 sm:inline">
              Insight
            </a>
            <a href="#audience" className="hidden hover:text-zinc-200 sm:inline">
              Audience
            </a>
            <Link
              href="/demo"
              className="rounded-full bg-zinc-100 px-4 py-1.5 font-medium text-zinc-900 transition-colors hover:bg-white"
            >
              Open prototype →
            </Link>
          </nav>
        </div>
      </header>

      {/* hero */}
      <section className="grain relative overflow-hidden border-b border-zinc-800/80">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Project brief · Hackathon submission · Developer tools
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-zinc-50 sm:text-7xl">
            CODE
            <br />
            AFTERLIFE
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            Find out what in your repository is still load bearing —{" "}
            <span className="text-zinc-100">and prove it.</span>
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500">
            One reachability graph across your code and your dependencies.
            Dead things get a death certificate, signed by a real test run.
            Living things get upgrade triage, down to the line number.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/demo"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-orange-400"
            >
              Walk through the prototype
            </Link>
            <span className="text-xs text-zinc-600">
              Solo build — Shreyan&apos;s Squad
            </span>
          </div>
        </div>
      </section>

      {/* problem */}
      <section id="problem" className="border-b border-zinc-800/80 bg-zinc-950/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <SectionLabel n="02" title="Two symptoms, one cause" />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="mb-2 font-mono text-sm text-orange-400">
                Code you can&apos;t account for
              </h3>
              <p className="text-sm leading-6 text-zinc-400">
                Files nobody can explain. A helper whose last caller vanished
                in a refactor. Nobody deletes them, because deleting code you
                don&apos;t understand is how you cause an incident. So it
                stays, forever.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="mb-2 font-mono text-sm text-orange-400">
                Dependency updates nobody reads
              </h3>
              <p className="text-sm leading-6 text-zinc-400">
                A version number and a changelog written by a stranger who
                knows nothing about your codebase. People either merge blind,
                or ignore everything and fall years behind.
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-6 text-zinc-500">
            In both cases the developer is asked a question they have no
            cheap way to answer:{" "}
            <span className="text-zinc-200">
              what does this project actually depend on?
            </span>{" "}
            Git knows. The package manager knows. Nothing computes it.
          </p>
        </div>
      </section>

      {/* unifying insight */}
      <section id="insight" className="border-b border-zinc-800/80">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <SectionLabel n="03" title="The unifying insight" />
          <p className="mb-8 max-w-2xl text-sm leading-6 text-zinc-400">
            Dead code is your code that nothing calls. A vestigial dependency
            is someone else&apos;s code that nothing calls. Structurally
            there is no difference — the traversal doesn&apos;t know
            &quot;mine&quot; from &quot;theirs.&quot;
          </p>
          <div className="overflow-x-auto rounded-xl border border-zinc-800">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/60 font-mono text-xs uppercase tracking-wide text-zinc-500">
                  <th className="px-4 py-3 font-medium">&nbsp;</th>
                  <th className="px-4 py-3 font-medium">Your code</th>
                  <th className="px-4 py-3 font-medium">Your dependencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80">
                {[
                  [
                    "Question",
                    "Which files are unreachable from any entry point?",
                    "Which packages are unreachable, and which symbols do we touch?",
                  ],
                  [
                    "Dead result",
                    "Dead file → death certificate",
                    "Vestigial package → death certificate",
                  ],
                  [
                    "Live result",
                    "Load-bearing → leave alone",
                    "Load-bearing → upgrade triage against used surface",
                  ],
                  [
                    "Proof",
                    "Remove it, run the tests",
                    "Remove or upgrade it, run the tests",
                  ],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td className="px-4 py-3 font-mono text-xs text-zinc-500">
                      {row[0]}
                    </td>
                    <td className="px-4 py-3 text-zinc-300">{row[1]}</td>
                    <td className="px-4 py-3 text-zinc-300">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* census states */}
      <section className="border-b border-zinc-800/80 bg-zinc-950/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <SectionLabel n="04" title="The census" />
          <p className="mb-8 max-w-2xl text-sm leading-6 text-zinc-400">
            Point it at any repository and every node comes back with one of
            four computed states — never a judgement call.
          </p>
          <div className="grid gap-4 sm:grid-cols-4">
            {[
              {
                name: "ALIVE",
                color: "text-emerald-400",
                desc: "A path exists from a detected entry point to this node.",
              },
              {
                name: "UNREACHABLE",
                color: "text-rose-400",
                desc: "No path from any entry point. Zero references.",
              },
              {
                name: "VESTIGIAL",
                color: "text-orange-400",
                desc: "Installed, declared, never imported anywhere.",
              },
              {
                name: "UNKNOWN",
                color: "text-amber-300",
                desc: "Reachability can't be determined statically.",
              },
            ].map((s) => (
              <div
                key={s.name}
                className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
              >
                <div className={`font-mono text-sm font-semibold ${s.color}`}>
                  {s.name}
                </div>
                <p className="mt-2 text-xs leading-5 text-zinc-500">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* audience */}
      <section id="audience" className="border-b border-zinc-800/80">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <SectionLabel n="10" title="Who it's for" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                "Working developer",
                "A map of what's load bearing, and a triage list that collapses eleven decisions into two.",
              ],
              [
                "Team lead / maintainer",
                "A defensible policy: clear upgrades merge on a rule, dead code gets removed on a rule, everything else goes to a human.",
              ],
              [
                "Security / platform",
                "Per-repository impact assessment in seconds, plus a smaller attack surface once vestigial packages are gone.",
              ],
              [
                "New joiner",
                "The repository with the dead greyed out, and a history explaining how each dead thing got that way.",
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
              >
                <h3 className="font-mono text-sm text-zinc-100">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-zinc-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* closing pitch */}
      <section className="border-b border-zinc-800/80 bg-zinc-950/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <blockquote className="border-l-2 border-orange-500 pl-6 text-xl font-medium leading-8 text-zinc-100 sm:text-2xl">
            Every other tool guesses which code is dead. We issue a death
            certificate — we run your tests to sign it, and we print the
            checks it failed.
          </blockquote>
          <div className="mt-10">
            <Link
              href="/demo"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-orange-400"
            >
              Walk through the prototype →
            </Link>
          </div>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-5xl px-6 py-10 text-xs text-zinc-600">
        Code Afterlife · Team Shreyan&apos;s Squad · hackathon project brief,
        rendered as a non-functional interface prototype.
      </footer>
    </div>
  );
}

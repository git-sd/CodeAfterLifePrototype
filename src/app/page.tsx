import Link from "next/link";
import { PrototypeBanner } from "@/components/PrototypeBanner";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <PrototypeBanner />

      <header className="border-b border-black">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
          <span className="font-bold">Backburner</span>
          <nav className="flex items-center gap-4 text-sm underline">
            <a href="#problem">Problem</a>
            <a href="#how">How it works</a>
            <a href="#tech">Technical shape</a>
            <Link href="/demo">Open prototype</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
        <p className="text-xs uppercase tracking-wide text-gray-600">
          Project brief · Smart education track
        </p>
        <h1 className="mt-2 text-4xl font-bold">Backburner</h1>
        <p className="mt-4 text-lg">
          The things you meant to learn, learned while your phone sleeps —
          and handed back to you the moment before you open Instagram.
        </p>
        <p className="mt-4 text-sm leading-6 text-gray-800">
          A voice-first learning app that captures what you say you want to
          understand, researches it quietly while you charge, and interrupts
          you with a short spoken conversation at the exact moment your
          attention was about to be spent on a feed.
        </p>
        <div className="mt-6">
          <Link
            href="/demo"
            className="inline-block border border-black px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white"
          >
            Walk through the prototype
          </Link>
        </div>

        <hr className="my-10 border-black" />

        <section id="problem">
          <h2 className="text-xl font-bold">1. Curiosity has two problems</h2>
          <h3 className="mt-4 font-semibold">Capture is solved</h3>
          <p className="mt-1 text-sm leading-6 text-gray-800">
            You hear a term you don&apos;t know, you bookmark it, you save
            the link, you tell yourself you&apos;ll read it later. You never
            do. The bookmark folder is where curiosity goes to die.
          </p>
          <h3 className="mt-4 font-semibold">Retrieval isn&apos;t</h3>
          <p className="mt-1 text-sm leading-6 text-gray-800">
            The same person with no time to read a saved article will spend
            forty minutes on a feed that evening. The time exists. The
            intent exists. What&apos;s missing shows up in that window,
            already prepared, asking for seven minutes instead of forty.
          </p>
        </section>

        <hr className="my-10 border-black" />

        <section id="how">
          <h2 className="text-xl font-bold">2. How it works</h2>
          <ol className="mt-4 list-decimal space-y-4 pl-5 text-sm leading-6 text-gray-800">
            <li>
              <span className="font-semibold text-black">
                Capture — you tell it.
              </span>{" "}
              &quot;I keep hearing about vector databases and I have no idea
              what they actually are.&quot; You talk to it like a call. It
              confirms, and the topic enters your queue. Three seconds, no
              typing, no decision about where to file it.
            </li>
            <li>
              <span className="font-semibold text-black">
                Research — it works while you don&apos;t.
              </span>{" "}
              When the phone is charging, on wifi, and idle, a background
              worker takes the oldest unlearned topic, gathers sources, and
              distills it into a spoken-length explanation with several
              depth levels. By morning it&apos;s ready. You were asleep for
              all of it.
            </li>
            <li>
              <span className="font-semibold text-black">
                Interception — it reaches you first.
              </span>{" "}
              You open Instagram. Before the feed loads: &quot;you wanted to
              understand vector databases. seven minutes?&quot; Two options
              — talk, or dismiss. Dismissal is one tap and costs nothing. At
              most one interruption a day, and only when something is
              genuinely ready.
            </li>
            <li>
              <span className="font-semibold text-black">
                Conversation — it teaches by talking.
              </span>{" "}
              Not a podcast, not an article read aloud. A real spoken
              exchange you can cut into mid-sentence with &quot;wait,
              why?&quot; and it follows you. The first session is ninety
              seconds and deliberately shallow. Engage, and the next one
              goes deeper.
            </li>
            <li>
              <span className="font-semibold text-black">
                Return — it makes you explain it back.
              </span>{" "}
              Days later it resurfaces the topic, but this time it asks you
              to explain it. It listens and tells you where you were vague.
              This is the step that separates learning from consumption.
            </li>
          </ol>
        </section>

        <hr className="my-10 border-black" />

        <section>
          <h2 className="text-xl font-bold">3. Why this has to be a phone</h2>
          <p className="mt-4 text-sm leading-6 text-gray-800">
            The behaviour it competes with lives on the phone. An
            intervention that arrives on a laptop arrives after the moment
            has passed. Background research is also phone-shaped — charging,
            idle, on wifi, overnight — and it&apos;s the only reason the
            content is ever ready in time. The conversation has to start
            instantly on-device or the feed wins on latency alone.
          </p>
        </section>

        <hr className="my-10 border-black" />

        <section>
          <h2 className="text-xl font-bold">
            4. What we deliberately did not build
          </h2>
          <h3 className="mt-4 font-semibold">No call mining</h3>
          <p className="mt-1 text-sm leading-6 text-gray-800">
            The obvious version listens to your calls and mines them for
            topics. We built capture as something you do on purpose instead.
            The person on the other end never agreed to be anyone&apos;s
            training data.
          </p>
          <h3 className="mt-4 font-semibold">No guilt copy</h3>
          <p className="mt-1 text-sm leading-6 text-gray-800">
            No streak counter, no guilt copy, no screen-time shaming. An app
            that nags gets uninstalled in a week. Being ready is the only
            thing that earns an interruption.
          </p>
        </section>

        <hr className="my-10 border-black" />

        <section id="tech">
          <h2 className="text-xl font-bold">5. Technical shape</h2>
          <table className="mt-4 w-full border-collapse text-left text-sm">
            <tbody>
              {[
                [
                  "Voice layer",
                  "On-device speech recognition and synthesis, with barge-in — the user can talk over the model and it yields. Recognizer seeded with vocabulary from the user's own past topics.",
                ],
                [
                  "Model",
                  "A small quantized open model (Gemma / Qwen class, 2–4B) runs conversation and depth logic against pre-distilled text — only needs to explain well and stop on time.",
                ],
                [
                  "Scheduler",
                  "Constraint-based background work: charging, unmetered network, device idle. Fetch, distill, write, mark ready.",
                ],
                [
                  "Ladder state",
                  "Per-topic depth model updated by engagement, skips, and explicit \"I know this\" signals. The app's picture of what you already understand.",
                ],
                [
                  "Trigger",
                  "A local watcher for launches of attention-sink apps, gated by a readiness check and a hard daily rate limit.",
                ],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-gray-300 align-top">
                  <td className="w-36 shrink-0 py-3 pr-4 font-semibold">
                    {row[0]}
                  </td>
                  <td className="py-3 text-gray-800">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <hr className="my-10 border-black" />

        <blockquote className="border-l-4 border-black pl-4 text-lg font-semibold italic">
          Every voice assistant answers when you ask. Backburner asks when
          you&apos;re free.
        </blockquote>
        <p className="mt-4 text-sm leading-6 text-gray-800">
          That inversion is the whole product. Pull versus push, aimed at
          the one moment in the day when attention is genuinely unclaimed
          and about to be given away.
        </p>

        <div className="mt-8">
          <Link
            href="/demo"
            className="inline-block border border-black px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white"
          >
            Walk through the prototype
          </Link>
        </div>
      </main>

      <footer className="border-t border-black px-6 py-6 text-center text-xs text-gray-600">
        Backburner · Smart Education · project brief, rendered as a
        non-functional interface prototype.
      </footer>
    </div>
  );
}

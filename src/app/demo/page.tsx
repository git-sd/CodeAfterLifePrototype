"use client";

import { useState } from "react";
import Link from "next/link";
import { PrototypeBanner } from "@/components/PrototypeBanner";

type Screen = "capture" | "research" | "interception" | "conversation" | "return";

const screens: { id: Screen; label: string }[] = [
  { id: "capture", label: "1. Capture" },
  { id: "research", label: "2. Research" },
  { id: "interception", label: "3. Interception" },
  { id: "conversation", label: "4. Conversation" },
  { id: "return", label: "5. Return" },
];

export default function DemoPage() {
  const [screen, setScreen] = useState<Screen>("capture");

  return (
    <div className="flex flex-1 flex-col">
      <PrototypeBanner />

      <header className="border-b border-black">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
          <Link href="/" className="font-bold">
            Backburner
          </Link>
          <Link href="/" className="text-sm underline">
            back to brief
          </Link>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-6 py-10">
        <div className="mb-6 flex flex-wrap justify-center gap-2 text-sm">
          {screens.map((s) => (
            <button
              key={s.id}
              onClick={() => setScreen(s.id)}
              className={`border px-3 py-1.5 ${
                screen === s.id
                  ? "border-black bg-black text-white"
                  : "border-gray-400 hover:border-black"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <PhoneFrame>
          {screen === "capture" && <CaptureScreen />}
          {screen === "research" && <ResearchScreen />}
          {screen === "interception" && <InterceptionScreen />}
          {screen === "conversation" && <ConversationScreen />}
          {screen === "return" && <ReturnScreen />}
        </PhoneFrame>

        <p className="mt-6 max-w-sm text-center text-xs text-gray-600">
          Tap through the five steps above. Buttons on the phone screen are
          for show — nothing is recorded, fetched, or spoken.
        </p>
      </main>

      <footer className="border-t border-black px-6 py-6 text-center text-xs text-gray-600">
        Backburner · non-functional interface prototype.
      </footer>
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[320px] border-2 border-black">
      <div className="flex items-center justify-between border-b border-black px-3 py-1 text-xs">
        <span>9:41</span>
        <span>Backburner</span>
      </div>
      <div className="h-[560px] overflow-y-auto p-4 text-sm">{children}</div>
    </div>
  );
}

function CaptureScreen() {
  const [confirmed, setConfirmed] = useState(false);
  return (
    <div className="flex h-full flex-col">
      <p className="font-semibold">New topic</p>
      <p className="mt-3 border border-gray-400 p-3 text-gray-800">
        &quot;I keep hearing about vector databases and I have no idea what
        they actually are.&quot;
      </p>
      <p className="mt-2 text-xs text-gray-600">Listening… (mock)</p>
      {!confirmed ? (
        <button
          onClick={() => setConfirmed(true)}
          className="mt-auto border border-black py-2 font-semibold hover:bg-black hover:text-white"
        >
          Confirm topic
        </button>
      ) : (
        <p className="mt-auto border border-black bg-gray-100 p-3 text-center">
          Added to queue: &quot;vector databases&quot;
        </p>
      )}
    </div>
  );
}

function ResearchScreen() {
  return (
    <div>
      <p className="font-semibold">Background worker</p>
      <ul className="mt-3 space-y-1 text-gray-800">
        <li>[x] Charging</li>
        <li>[x] On wifi</li>
        <li>[x] Device idle</li>
      </ul>
      <p className="mt-4 font-semibold">Queue</p>
      <table className="mt-2 w-full border-collapse text-left text-xs">
        <tbody>
          {[
            ["vector databases", "distilling…"],
            ["CRISPR", "ready"],
            ["interest rate swaps", "queued"],
          ].map((row) => (
            <tr key={row[0]} className="border-t border-gray-300">
              <td className="py-2 pr-2">{row[0]}</td>
              <td className="py-2 text-gray-600">{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InterceptionScreen() {
  const [choice, setChoice] = useState<"none" | "talk" | "dismissed">("none");
  return (
    <div className="flex h-full flex-col justify-center">
      <p className="text-center text-xs text-gray-600">
        opening Instagram…
      </p>
      <div className="mt-4 border-2 border-black p-4 text-center">
        <p>You wanted to understand vector databases.</p>
        <p className="mt-1 font-semibold">Seven minutes?</p>
        {choice === "none" && (
          <div className="mt-4 flex justify-center gap-3">
            <button
              onClick={() => setChoice("talk")}
              className="border border-black px-4 py-1.5 hover:bg-black hover:text-white"
            >
              Talk
            </button>
            <button
              onClick={() => setChoice("dismissed")}
              className="border border-gray-400 px-4 py-1.5 hover:border-black"
            >
              Dismiss
            </button>
          </div>
        )}
        {choice === "talk" && (
          <p className="mt-4 text-xs text-gray-600">
            → opens the conversation screen
          </p>
        )}
        {choice === "dismissed" && (
          <p className="mt-4 text-xs text-gray-600">
            Dismissed. Feed loads as normal.
          </p>
        )}
      </div>
    </div>
  );
}

function ConversationScreen() {
  return (
    <div className="flex h-full flex-col">
      <p className="font-semibold">vector databases — session 1</p>
      <div className="mt-3 flex-1 space-y-3 overflow-y-auto text-gray-800">
        <p className="border border-gray-400 p-2">
          A vector database stores data as points in space, so &quot;find
          things like this&quot; becomes a distance calculation instead of a
          keyword match.
        </p>
        <p className="border border-black bg-gray-100 p-2">
          you: wait, why does that matter for search?
        </p>
        <p className="border border-gray-400 p-2">
          Because meaning isn&apos;t a keyword. Two sentences can mean the
          same thing and share zero words — vectors capture that.
        </p>
      </div>
      <p className="mt-2 text-xs text-gray-600">
        Barge-in active — interrupt any time.
      </p>
    </div>
  );
}

function ReturnScreen() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="flex h-full flex-col">
      <p className="font-semibold">Explain it back</p>
      <p className="mt-2 text-gray-800">
        It&apos;s been 4 days. Explain vector databases in your own words.
      </p>
      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          className="mt-auto border border-black py-2 font-semibold hover:bg-black hover:text-white"
        >
          Record my explanation
        </button>
      ) : (
        <div className="mt-auto border border-black p-3">
          <p className="text-gray-800">
            &quot;It&apos;s like... a database but for AI stuff, it finds
            similar things.&quot;
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Feedback: close, but vague on <em>why</em> distance = similarity.
            Want the ninety-second refresher?
          </p>
        </div>
      )}
    </div>
  );
}

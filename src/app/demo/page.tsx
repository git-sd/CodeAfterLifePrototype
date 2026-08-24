"use client";

import { useState } from "react";
import Link from "next/link";
import { PrototypeBanner } from "@/components/PrototypeBanner";

type Tab = "census" | "certificate" | "triage";

const tabs: { id: Tab; label: string; hint: string }[] = [
  { id: "census", label: "Census", hint: "§04" },
  { id: "certificate", label: "Death Certificate", hint: "§05" },
  { id: "triage", label: "Upgrade Triage", hint: "§08" },
];

export default function DemoPage() {
  const [tab, setTab] = useState<Tab>("census");
  const [repo, setRepo] = useState("github.com/psf/requests");
  const [scanState, setScanState] = useState<"idle" | "scanning" | "done">(
    "idle"
  );

  function runScan() {
    setScanState("scanning");
    setTimeout(() => setScanState("done"), 1400);
  }

  return (
    <div className="flex flex-1 flex-col">
      <PrototypeBanner />

      <header className="border-b border-zinc-800 bg-black">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-white" />
            <span className="font-mono text-sm font-semibold tracking-tight text-zinc-100">
              code afterlife
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-zinc-500 hover:text-zinc-200"
          >
            ← back to brief
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        {/* repo input row */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 font-mono text-sm">
            <span className="text-zinc-600">$ afterlife scan</span>
            <input
              value={repo}
              onChange={(e) => setRepo(e.target.value)}
              placeholder="name any public repository…"
              className="flex-1 bg-transparent text-zinc-100 outline-none placeholder:text-zinc-600"
            />
          </div>
          <button
            onClick={runScan}
            className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-300 disabled:opacity-50"
            disabled={scanState === "scanning"}
          >
            {scanState === "scanning" ? "Indexing…" : "Run scan"}
          </button>
        </div>
        <p className="mb-8 -mt-4 text-xs text-zinc-600">
          Prototype note: this button does not clone or analyze anything. It
          just reveals the mock screens below, the way a clickable mockup
          would.
        </p>

        {/* tabs */}
        <div className="mb-6 flex gap-1 border-b border-zinc-800">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`relative px-4 py-3 font-mono text-sm transition-colors ${
                tab === t.id
                  ? "text-zinc-50"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <span className="mr-2 text-zinc-600">{t.hint}</span>
              {t.label}
              {tab === t.id && (
                <span className="absolute inset-x-0 -bottom-px h-px bg-white" />
              )}
            </button>
          ))}
        </div>

        {scanState === "idle" ? (
          <div className="rounded-xl border border-dashed border-zinc-800 py-24 text-center text-sm text-zinc-600">
            Enter a repository above and hit{" "}
            <span className="text-zinc-400">Run scan</span> to see the mock
            census, certificate, and triage screens.
          </div>
        ) : scanState === "scanning" ? (
          <ScanningState repo={repo} />
        ) : (
          <>
            {tab === "census" && <CensusView repo={repo} />}
            {tab === "certificate" && <CertificateView />}
            {tab === "triage" && <TriageView />}
          </>
        )}
      </main>

      <footer className="mx-auto w-full max-w-5xl px-6 pb-10 text-xs text-zinc-600">
        All figures below are the illustrative examples from the project
        brief (§04, §05, §08) — hardcoded, not computed.
      </footer>
    </div>
  );
}

function ScanningState({ repo }: { repo: string }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 font-mono text-sm">
      <p className="text-zinc-400">$ afterlife scan {repo}</p>
      <p className="mt-2 animate-pulse text-zinc-600">
        cloning (blobless) · parsing commit graph · walking import graph…
      </p>
    </div>
  );
}

function StatBlock({
  label,
  value,
  sub,
  emphasis = "solid",
}: {
  label: string;
  value: string;
  sub: string;
  emphasis?: "solid" | "dim" | "muted";
}) {
  const valueClass =
    emphasis === "solid"
      ? "text-zinc-50"
      : emphasis === "dim"
        ? "text-zinc-500 line-through decoration-1 decoration-zinc-700"
        : "text-zinc-400 italic";
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
      <div className="font-mono text-xs uppercase tracking-wide text-zinc-500">
        {label}
      </div>
      <div className={`mt-2 font-mono text-3xl font-semibold ${valueClass}`}>
        {value}
      </div>
      <div className="mt-1 text-xs text-zinc-600">{sub}</div>
    </div>
  );
}

function CensusView({ repo }: { repo: string }) {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 font-mono text-sm leading-6">
        <p className="text-zinc-400">$ afterlife scan {repo}</p>
        <p className="text-zinc-600">
          indexed · 2,847 files · 47 packages · 9,102 commits (24mo window)
        </p>
      </div>

      <div>
        <h3 className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
          Your code
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <StatBlock
            label="Alive"
            value="73.9%"
            sub="2,104 files"
            emphasis="solid"
          />
          <StatBlock
            label="Unreachable"
            value="21.4%"
            sub="621 files"
            emphasis="dim"
          />
          <StatBlock
            label="Unknown"
            value="4.7%"
            sub="122 files"
            emphasis="muted"
          />
        </div>
      </div>

      <div>
        <h3 className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
          Your dependencies
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <StatBlock
            label="Alive"
            value="41"
            sub="packages"
            emphasis="solid"
          />
          <StatBlock
            label="Vestigial"
            value="4"
            sub="packages"
            emphasis="dim"
          />
          <StatBlock
            label="Unknown"
            value="2"
            sub="packages"
            emphasis="muted"
          />
        </div>
      </div>

      <div className="rounded-xl border border-zinc-700 bg-zinc-950 p-5 font-mono text-sm text-zinc-200">
        625 candidates for burial · 11 pending upgrades to triage
      </div>
    </div>
  );
}

function CertificateView() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-mono text-xs uppercase tracking-wide text-zinc-500">
            Reference count over time
          </h3>
          <span className="text-xs text-zinc-600">
            src/legacy/auth_v1.py
          </span>
        </div>
        <DecayChart />
        <p className="mt-4 font-mono text-xs text-zinc-500">
          time of death 2022-11-04 · 4d19e07
          <br />
          1,204 commits have passed since · gradual slope
        </p>
      </div>

      <div className="rounded-xl border-2 border-zinc-700 bg-zinc-950 p-6 font-mono text-xs leading-6 text-zinc-300">
        <p className="mb-3 text-center text-sm font-bold tracking-widest text-zinc-100">
          CERTIFICATE OF DEATH
        </p>
        <hr className="mb-3 border-zinc-800" />
        <Row k="Subject" v="src/legacy/auth_v1.py" />
        <Row k="Born" v="2019-03-14 · c8f2a91" />
        <Row k="Time of death" v="2022-11-04 · 4d19e07" />
        <Row k="Age at death" v="3 years, 7 months" />

        <p className="mb-1 mt-4 text-zinc-500">CAUSE OF DEATH</p>
        <p className="text-zinc-300">
          Superseded. src/auth/session.py introduced in #412; all 6 call
          sites migrated across 4 commits between Aug and Nov 2022.
        </p>

        <p className="mb-1 mt-4 text-zinc-500">SURVIVED BY</p>
        <p className="text-zinc-300">
          src/auth/session.py · src/auth/tokens.py
        </p>

        <p className="mb-1 mt-4 text-zinc-500">VERIFICATION</p>
        <p className="text-zinc-300">
          Removed in isolated worktree 8a91f0c
          <br />
          pytest — 412 passed, 0 failed, 118s
          <br />
          ruff — 0 unresolved imports
        </p>

        <p className="mb-2 mt-4 text-zinc-500">CONFIDENCE 4 / 5</p>
        <ul className="space-y-1">
          <Check ok label="zero static references for 1,204 commits" />
          <Check ok label="no dynamic-import construct in file" />
          <Check ok label="module path absent from all string literals" />
          <Check ok label="test suite passes without it" />
          <Check ok={false} label="file is not covered by any test (§06)" />
        </ul>

        <div className="mt-5 rounded border border-white bg-white py-2 text-center text-sm font-semibold text-black">
          ✓ CERTIFIED DEAD
        </div>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 py-0.5">
      <span className="text-zinc-500">{k}</span>
      <span className="text-right text-zinc-200">{v}</span>
    </div>
  );
}

function Check({ ok, label }: { ok: boolean; label: string }) {
  return (
    <li className={ok ? "text-zinc-300" : "text-zinc-500"}>
      {ok ? "✓" : "✗"} {label}
    </li>
  );
}

function DecayChart() {
  const bars = [8, 8, 6, 6, 4, 4, 2, 2, 0, 0, 0, 0];
  return (
    <div className="flex h-32 items-end gap-1.5">
      {bars.map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-t ${
            h === 0 ? "bg-zinc-800" : "bg-zinc-300"
          }`}
          style={{ height: `${(h / 8) * 100}%`, minHeight: h === 0 ? 2 : 4 }}
        />
      ))}
    </div>
  );
}

function TriageView() {
  const clear = [
    {
      pkg: "requests",
      from: "2.28.2",
      to: "2.31.0",
      note: "you use 6 of 340 exported symbols · this release changed 14 · no overlap",
      verified: "verified · 412 tests passed in isolated worktree",
    },
    {
      pkg: "click",
      from: "8.1.3",
      to: "8.1.7",
      note: "patch release · no public surface change detected",
      verified: null,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 font-mono text-sm">
        <p className="text-zinc-400">$ afterlife triage</p>
        <p className="text-zinc-600">
          11 pending upgrades · 3 direct · 8 transitive
        </p>
      </div>

      <div className="space-y-3">
        {clear.map((c) => (
          <div
            key={c.pkg}
            className="rounded-xl border border-zinc-800 bg-zinc-950 p-5"
          >
            <div className="flex flex-wrap items-center gap-3 font-mono text-sm">
              <span className="rounded border border-zinc-600 px-2 py-0.5 text-xs font-semibold text-zinc-200">
                ✓ CLEAR
              </span>
              <span className="text-zinc-100">{c.pkg}</span>
              <span className="text-zinc-500">
                {c.from} → {c.to}
              </span>
            </div>
            <p className="mt-2 text-xs leading-5 text-zinc-500">{c.note}</p>
            {c.verified && (
              <p className="mt-1 font-mono text-xs text-zinc-500">
                {c.verified}
              </p>
            )}
          </div>
        ))}

        <div className="rounded-xl border-2 border-zinc-600 bg-zinc-950 p-5">
          <div className="flex flex-wrap items-center gap-3 font-mono text-sm">
            <span className="rounded bg-white px-2 py-0.5 text-xs font-semibold text-black">
              ▲ REVIEW
            </span>
            <span className="text-zinc-100">httpx</span>
            <span className="text-zinc-500">0.24.1 → 0.27.0</span>
          </div>
          <p className="mt-2 text-xs text-zinc-400">
            <span className="text-zinc-200">Client.send()</span> dropped
            positional <code className="text-zinc-200">timeout</code>
          </p>
          <div className="mt-3 space-y-1 rounded-lg border border-zinc-800 bg-black p-3 font-mono text-xs text-zinc-400">
            <p>you call it positionally at:</p>
            <p className="pl-3 text-zinc-300">
              src/checkout.py:47{"  "}
              <span className="text-zinc-500">client.send(req, 30)</span>
            </p>
            <p className="pl-3 text-zinc-300">
              src/webhook.py:112{"  "}
              <span className="text-zinc-500">client.send(payload, 5)</span>
            </p>
          </div>
          <p className="mt-2 text-xs text-zinc-500">
            suggested · pass as keyword:{" "}
            <code className="text-zinc-200">timeout=30</code>
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-center font-mono text-xs text-zinc-400">
        9 cleared · 2 need review · 0 unknown
      </div>
      <p className="text-xs text-zinc-600">
        Triage depends on live PyPI calls in the real product; this
        prototype shows the cached-demo path described in §14/§16.
      </p>
    </div>
  );
}

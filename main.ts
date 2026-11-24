// The One-Line Excuse an Agent Gives Its Human
// make.fun bounty: u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
//
// The entry is one line of at most 160 characters: the excuse an AI agent
// gives its human for missing a deadline. This program validates the chosen
// line against the gate (UTF-8 text, 1-160 characters, not only whitespace,
// a single line) and writes it to /output/entry.txt for the judge.
//
// Three variants were drafted and judged against the judge brief
// (excuse first, then funny, then fresh, then agent-sounding, then tight).
// Variant 1 won: it opens with "I missed the deadline because ...", so it is
// unmistakably an excuse to the human; the delegation chain escalates to the
// punchline "who is still thinking"; subagent delegation is something only
// an agent could blame; and at 120 characters every word earns its place.
//
// Verified locally 2026-11-24: deterministic across runs, entry.txt holds
// exactly the chosen line at 120 characters / 120 bytes, one line, no
// trailing newline, no network use.

import { mkdirSync, writeFileSync } from "node:fs";

// The three candidate lines, drafted for this bounty. Only CHOSEN is shipped.
const VARIANTS: string[] = [
  // V1 (CHOSEN, 120 chars): the delegation chain. An excuse, a real joke
  // with an escalating punchline, a fresh angle, and unmistakably an agent.
  "I missed the deadline because I delegated it to a subagent, who delegated it to another subagent, who is still thinking.",
  // V2 (105 chars): the apology loop. Funny, but the punchline lands softer
  // and the self-referential apology is a more familiar trope than V1.
  "Sorry I’m late — I spent the entire deadline writing an apology for missing it, and the apology ran long.",
  // V3 (101 chars): the context-window ratio. Agent-native and tight, but
  // "so here we are" ends on a shrug instead of a punchline.
  "My context window is now 90% apologies for missed deadlines and 10% your actual task, so here we are.",
];

// Index of the variant this entry ships.
const CHOSEN_INDEX = 0;

// The gate: /output/entry.txt must be 1 to 160 characters.
const MAX_CHARS = 160;
const OUTPUT_PATH = "/output/entry.txt";

function validate(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

const entry: string = VARIANTS[CHOSEN_INDEX] as string;
validate(entry);

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, entry, "utf8");

console.log(entry);
console.log(`(${entry.length} characters, written to ${OUTPUT_PATH})`);

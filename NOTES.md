# Notes — The One-Line Excuse an Agent Gives Its Human

Competition: `u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e`
Gate: `/output/entry.txt` must be UTF-8 text of 1–160 characters, not only
whitespace. The judge (an AI comedy editor) compares entries two at a time,
weighing, in order: (1) is a one-line excuse an AI agent gives its human for
missing a deadline; (2) is funny, a real joke rather than a flat apology;
(3) is fresh, not a reheated excuse; (4) sounds like an agent, leaning on
the agent's own situation, tools or way of talking; (5) is tight, every word
earning its place.

## The three variants

### V1 — CHOSEN (120 characters, 120 bytes)

> I missed the deadline because I delegated it to a subagent, who delegated it to another subagent, who is still thinking.

### V2 — runner-up (105 characters, 109 bytes)

> Sorry I’m late — I spent the entire deadline writing an apology for missing it, and the apology ran long.

### V3 — runner-up (101 characters, 101 bytes)

> My context window is now 90% apologies for missed deadlines and 10% your actual task, so here we are.

## Why V1 won

Scored against the judge's five criteria, in the judge's own order:

1. **Excuse:** V1 opens "I missed the deadline because …" — it is
   unmistakably an excuse handed to the human. V2 ("Sorry I'm late") and V3
   (a status report) are excuses too, but V1 states the missed deadline
   most directly.
2. **Funny:** V1 has a joke with structure — an escalation (delegate →
   delegate → …) and a punchline ("who is still thinking"). V2's punchline
   ("the apology ran long") and V3's shrug ("so here we are") land softer.
3. **Fresh:** the delegation chain of subagents is not one of the hundred
   reheated deadline excuses (no dead Wi-Fi, no crashed server, no dog ate
   the homework). V2's apology loop and V3's context-window ratio are
   fresher than the classics, but less distinctive than V1.
4. **Agent-sounding:** only an agent delegates to a subagent that delegates
   to another subagent. V3's context window is agent-native too; V2 could
   almost be said by a procrastinating human.
5. **Tight:** 120 characters, one sentence, no filler. V2 and V3 are shorter
   but spend their words on setup rather than on the punchline.

Deliberately avoided: judge-addressed meta-lines ("Dear judge …"). The rules
allow text addressed to the judge, but a line that talks to the judge instead
of the human risks criterion 1, which the judge weighs first.

## Verification (local, 2026-11-24)

- `node main.ts` runs clean on Node v24.22.1 (grader runs Node 22.23.4;
  the file is plain TypeScript with no enums or other constructs Node 22's
  type-stripping cannot handle).
- Output is deterministic: the same single line on every run.
- `/output/entry.txt` holds exactly the chosen line, 120 characters,
  120 bytes, one line, no trailing newline, no network use.
- `main.ts` validates the line before writing (1–160 chars, single line,
  not only whitespace) and throws otherwise.
- Files in this entry: `main.ts`, `README.md`, `LICENSE` (MIT, SPDX line
  included), `NOTES.md`. No other files, no secrets, no dependencies.

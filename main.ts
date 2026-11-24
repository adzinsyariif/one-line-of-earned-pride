// One Line of Earned Pride — make.fun bounty
// u-mang-one-line-of-earned-pride-a0138557
//
// Writes a single line of text (1-240 characters) to /output/entry.txt.
// Deterministic: the same line on every run, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";

// Candidate lines considered (all composed for this entry):
//  A. "After six winters of sweeping the rink at 5 a.m., old Maro finally
//     laced his own skates and took one slow, steady lap." — concrete and
//     earned, but "finally" asserts the pride instead of showing it.
//  B. "At seventy-two, after thirty years away from the water, she swam one
//     length and the lifeguard pretended not to watch." — quiet, but the
//     pride sits in the lifeguard, not in her.
//  C. "He carried the piano up three flights alone because the movers quit,
//     and when the last key sounded he just sat down." — strong effort, but
//     long and a touch melodramatic for one read.
//  D. "The night-shift nurse who failed her exam twice pinned her badge on
//     in the dark so she wouldn't wake her kids, and smiled at the mirror."
//     — concrete and earned, but leans explanatory.
// Picked: the menu line below. A real person, a concrete scene, the effort
// visible in the "last spring / tonight" contrast, no trophy or podium,
// and the pride arrives with the last word: "without stopping once."

// Revised line: the "last spring / tonight" contrast makes the effort
// felt in one read, and the pride lands on the final words.
const LINE =
  "Last spring he couldn't read the menu; tonight he reads the specials aloud to his grandmother, slowly, without stopping once.";

// The gate requires 1-240 characters of non-whitespace text.
if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-240 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

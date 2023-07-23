import type { CommitTypeProps } from "../types/commit-type.types";

/*
 * -------------------------------------------------------------------------------------------------
 *  Commit types
 * -------------------------------------------------------------------------------------------------
 */

export const commitTypes: Array<CommitTypeProps> = [
  {
    label: "init",
    description: "Project initialization",
    key: 0,
  },
  {
    label: "feat",
    description: "Add a new feature",
    key: 1,
  },
  {
    label: "fix",
    description: "Fix a bug",
    key: 2,
  },
  {
    label: "docs",
    description: "Modify documentation changes only",
    key: 3,
  },
  {
    label: "style",
    description:
      "Code style changes (white-space, formatting, missing semi-colons, etc)",
    key: 4,
  },
  {
    label: "refactor",
    description:
      "Code refactoring changes (changes that are neither fixes bug nor adds a feature)",
    key: 5,
  },
  {
    label: "remove",
    description: "Remove a file, code or directory",
    key: 6,
  },
  {
    label: "perf",
    description: "A code change that improves performance",
    key: 7,
  },
  {
    label: "test",
    description: "Adding test or correcting existing test",
    key: 8,
  },
  {
    label: "chore",
    description:
      "Update build scripts, package manager configs, etc; no production code change",
    key: 9,
  },
];

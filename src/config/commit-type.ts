import type { CommitTypeProps } from "../types/commit-type.types";

/*
 * -------------------------------------------------------------------------------------------------
 *  Commit types
 * -------------------------------------------------------------------------------------------------
 */

export const commitTypes: Array<CommitTypeProps> = [
  {
    label: "feat",
    description: "Add a new feature",
    key: 0,
  },
  {
    label: "fix",
    description: "A bug fix",
    key: 1,
  },
  {
    label: "docs",
    description: "Documentation only changes",
    key: 2,
  },
  {
    label: "style",
    description:
      "Markup, white-space, formatting, missing semi-colons... no code change",
    key: 3,
  },
  {
    label: "refactor",
    description:
      "A code change that neither fixes a bug nor adds a feature",
    key: 4,
  },
  {
    label: "perf",
    description: "A code change that improves performance",
    key: 5,
  },
  {
    label: "test",
    description: "Adding missing tests or correcting existing tests",
    key: 6,
  },
  {
    label: "chore",
    description:
      "Update build scripts, package manager configs, etc; no production code change",
    key: 7,
  },
];

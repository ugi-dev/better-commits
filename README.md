<img src="/cover.png" alt="cover_image"/>

# ⚙️ Better Commits

"Better Commits" is a powerful Visual Studio Code extension that enforces standardized commit messages, ensuring convention and consistency across Git repositories. By utilizing predefined commit templates, it streamlines the commit process, promoting a unified style within development teams. Improve collaboration and project clarity with this efficient tool, creating clean, informative, and consistent commit histories effortlessly.

## Commit Message Format

Each commit message embodies a:
    </br>1. <b>category</b> (feat, fix, docs, ...).</br>
    2. <b>summary</b> - provide a succinct description of the change.

### Template

Structure of the commit message:

Category | Summary
---  | ---
**feat** | Add a new feature
**fix** | A bug fix
**docs** | Documentation only changes
**style** | Markup, white-space, formatting, missing semi-colons... no code change
**refactor** | A code change that neither fixes a bug nor adds a feature
**perf** | A code change that improves performance
**test** | Adding missing tests or correcting existing tests
**chore** | Update build scripts, package manager configs, etc; no production code change


### Summary Format

The summary consists of a concise description of the changes made:

-   use the imperative, present tense: "change" not "changed" nor "changes"
-   ensure first letter is not capitalized
-   avoid dot (.) at the end of the summary
-   recommended: limit to 50 characters

## Quick Start

1.  Install the extension
2.  Use: `Cmd+Shift+Enter` For MacBook, and `Ctrl+Shift+Enter` for Windows and Linux

## Using your own commit types

By default, Better Commits ships with conventional types like `feat`, `fix`, `docs`, etc. You can completely turn these off and only show your own types.

- **Turn off built‑in types (UI)**:
  - Open VS Code Settings → search for `Better Commits`.
  - Uncheck **Better Commits › Use Default Types**.
  - Add your own entries under **Better Commits › Types** (each with a `label` and `description`).

- **Turn off built‑in types (`settings.json`)**:

```json
{
  "betterCommits.useDefaultTypes": false,
  "betterCommits.types": [
    {
      "label": "feature",
      "description": "Product work visible to users"
    },
    {
      "label": "maintenance",
      "description": "Refactors, chores, and internal cleanup"
    }
  ]
}
```

With `betterCommits.useDefaultTypes` set to `false`, the picker will only show the types you define in `betterCommits.types`, and you can still write any free‑form summary when the message input box appears.

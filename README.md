# @jackholden/git-example
An example Git repo

## Tooling
- **Lefthook**: My chosen Git hook manager.
  - **commit-msg**: Utilises **Commitlint** to enforce Conventional Commits standards.

---------------

## Feature flags
### Using feature flags
- Enable a flag directly in the CLI:
```bash
ENABLE_FEATURE_FLAG_1=true bun run src/index.ts
```

- Specify a .env file:
```bash
bun --env-file=.env.example src/index.ts
```

- Define scripts in package.json (e.g. beta config):
```json
"scripts": {
  "start:beta": "ENABLE_FEATURE_FLAG_1=true bun run src/index.ts"
}
```

### Adding a new feature flag
1. Add the new variable to `.env` file
2. Reference new variable in `feature-flags.ts`
3. Wrap your new feature in the flag

---------------

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run src/index.ts
```

This project was created using `bun init` in bun v1.1.33. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

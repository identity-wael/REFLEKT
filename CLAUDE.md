# CLAUDE.md - AI Assistant Guide for REFLEKT

**Last Updated:** 2025-11-16
**Repository:** REFLEKT
**Status:** Initial Setup Phase

## Table of Contents

1. [Project Overview](#project-overview)
2. [Repository Structure](#repository-structure)
3. [Development Workflow](#development-workflow)
4. [Git Conventions](#git-conventions)
5. [Code Standards](#code-standards)
6. [Testing Strategy](#testing-strategy)
7. [AI Assistant Guidelines](#ai-assistant-guidelines)
8. [Common Tasks](#common-tasks)

---

## Project Overview

REFLEKT is a new multi-language project currently in its initial setup phase. The repository is configured to support development across multiple technology stacks.

### Current State
- **Phase:** Initial Setup
- **Branch:** `claude/claude-md-mi294xv6atxbmsfv-01FkXZBNyMqdndDSZjfDAeGy`
- **Files:** README.md, .gitignore (minimal configuration)
- **First Commit:** 3e39b08 - "Initial commit: Setup REFLEKT project structure"

### Supported Technologies
Based on the .gitignore configuration, this project is prepared to support:
- **Node.js/JavaScript/TypeScript** (node_modules, npm/yarn logs)
- **Python** (__pycache__, venv, pip)
- **Go** (*.test, *.out)
- **Rust** (target/, Cargo.lock)

---

## Repository Structure

### Current Layout
```
REFLEKT/
├── .git/                 # Git repository metadata
├── .gitignore           # Ignore patterns for multiple languages
└── README.md            # Project introduction
```

### Expected Future Structure
As the project develops, expect to see directories like:
```
REFLEKT/
├── src/                 # Source code
├── tests/               # Test files
├── docs/                # Documentation
├── scripts/             # Build and utility scripts
├── config/              # Configuration files
├── dist/build/out/      # Build outputs (gitignored)
└── node_modules/vendor/ # Dependencies (gitignored)
```

---

## Development Workflow

### Setting Up Development Environment

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd REFLEKT
   ```

2. **Check current branch**
   ```bash
   git status
   git branch -a
   ```

3. **Install dependencies** (when applicable)
   - Node.js: `npm install` or `yarn install`
   - Python: `pip install -r requirements.txt` (when created)
   - Go: `go mod download` (when go.mod exists)
   - Rust: `cargo build` (when Cargo.toml exists)

### Making Changes

1. **Always work on feature branches**
   - Branch naming: `claude/claude-md-<session-id>-<unique-id>`
   - Example: `claude/claude-md-mi294xv6atxbmsfv-01FkXZBNyMqdndDSZjfDAeGy`

2. **Before starting work**
   ```bash
   git fetch origin <branch-name>
   git status
   ```

3. **After making changes**
   ```bash
   git add <files>
   git commit -m "Descriptive commit message"
   git push -u origin <branch-name>
   ```

---

## Git Conventions

### Branch Naming
- **Feature branches:** Must start with `claude/` and end with matching session ID
- **Pattern:** `claude/claude-md-<identifier>-<session-id>`
- **Critical:** Branch name format is enforced; incorrect naming will result in 403 errors on push

### Commit Messages
Follow conventional commit format:
```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `perf`: Performance improvements

**Examples:**
```
feat(api): add user authentication endpoint
fix(parser): handle edge case in data validation
docs(readme): update installation instructions
```

### Git Operations Best Practices

#### Push Operations
```bash
# Always use -u flag for first push
git push -u origin <branch-name>

# Retry logic: If network errors occur, retry up to 4 times
# with exponential backoff (2s, 4s, 8s, 16s)
```

#### Fetch/Pull Operations
```bash
# Prefer fetching specific branches
git fetch origin <branch-name>

# For pulls
git pull origin <branch-name>

# Same retry logic applies: up to 4 retries with exponential backoff
```

### Protected Patterns
- **Never** push to `main`/`master` without explicit permission
- **Never** force push (`--force`) unless explicitly requested
- **Never** skip hooks (`--no-verify`) unless explicitly requested
- **Always** check branch name matches session ID before pushing

---

## Code Standards

### General Principles
1. **Readability:** Code should be self-documenting with clear naming
2. **Modularity:** Break down complex logic into smaller functions
3. **DRY:** Don't Repeat Yourself - extract reusable code
4. **Error Handling:** Always handle errors gracefully
5. **Security:** Never commit secrets, API keys, or credentials

### File Organization
- Group related functionality together
- Use clear, descriptive file and directory names
- Keep files focused on a single responsibility
- Maximum file length: ~500 lines (soft limit)

### Comments and Documentation
```javascript
// Good: Explains WHY, not WHAT
// Use exponential backoff to handle rate limiting
const delay = Math.pow(2, attempt) * 1000;

// Bad: Redundant comment
// Set delay to 2 to the power of attempt times 1000
const delay = Math.pow(2, attempt) * 1000;
```

### Environment Files
- Use `.env` for local development configuration
- Never commit `.env` files (already in .gitignore)
- Provide `.env.example` with placeholder values
- Document all required environment variables

---

## Testing Strategy

### Test Organization
```
tests/
├── unit/           # Unit tests
├── integration/    # Integration tests
├── e2e/           # End-to-end tests
└── fixtures/      # Test data and mocks
```

### Testing Commands (to be established)
```bash
# Run all tests
npm test / pytest / cargo test / go test

# Run specific test suite
npm test -- --grep "suite name"

# Run with coverage
npm run test:coverage
```

### Test Standards
- Write tests for all new features
- Maintain minimum 80% code coverage
- Test both success and failure cases
- Use descriptive test names that explain behavior
- Keep tests independent and isolated

---

## AI Assistant Guidelines

### When Working on This Repository

#### 1. Always Check Current State First
```bash
git status
git log -3 --oneline
ls -la
```

#### 2. Use Task Management
- Use `TodoWrite` tool for multi-step tasks
- Break complex tasks into smaller, trackable items
- Mark tasks as `in_progress` before starting
- Mark tasks as `completed` immediately after finishing
- Keep only ONE task `in_progress` at a time

#### 3. File Operations
- **Read before writing:** Always read existing files before modifying
- **Edit over write:** Prefer editing existing files to creating new ones
- **No unnecessary files:** Only create files that are essential
- **No documentation without request:** Don't create README, CHANGELOG, etc. unless asked

#### 4. Code Quality Checks
- Scan for security vulnerabilities (XSS, SQL injection, command injection)
- Validate input data
- Handle errors properly
- Check for hardcoded secrets before committing

#### 5. Communication Style
- Be concise and direct
- Focus on technical accuracy
- Use markdown for formatting
- No emojis unless requested
- Output results, don't just echo commands

#### 6. Tool Usage Priorities
1. Use specialized tools over bash commands
   - `Read` instead of `cat`
   - `Edit` instead of `sed`
   - `Write` instead of `echo >`
   - `Grep` instead of `grep`/`rg`
   - `Glob` instead of `find`

2. Use parallel tool calls when operations are independent
3. Use `Task` tool with `subagent_type=Explore` for codebase exploration
4. Never use `gh` CLI (not available)

#### 7. Security Considerations
Files that should NEVER be committed:
- `.env` files
- `credentials.json`
- Private keys (`*.pem`, `*.key`)
- API tokens
- Database passwords
- AWS/cloud credentials

If these are staged, warn the user immediately.

---

## Common Tasks

### Adding a New Feature

```bash
# 1. Ensure you're on the correct branch
git status

# 2. Create necessary files/directories
# Use appropriate tools (Write, Edit)

# 3. Implement the feature
# Follow code standards and testing requirements

# 4. Test your changes
# Run relevant test commands

# 5. Commit with descriptive message
git add <files>
git commit -m "feat(scope): description"

# 6. Push to remote
git push -u origin <branch-name>
```

### Fixing a Bug

```bash
# 1. Reproduce the bug
# Add test case that fails

# 2. Fix the issue
# Modify code to pass the test

# 3. Verify fix
# Run tests to confirm

# 4. Commit
git commit -m "fix(scope): description of bug fix"
```

### Adding Dependencies

**Node.js:**
```bash
npm install <package> --save
# or
yarn add <package>
```

**Python:**
```bash
pip install <package>
pip freeze > requirements.txt
```

**Go:**
```bash
go get <package>
go mod tidy
```

**Rust:**
```bash
cargo add <package>
```

### Running Builds

Build outputs go to `dist/`, `build/`, or `out/` directories (all gitignored).

```bash
# Node.js
npm run build

# Python
python setup.py build

# Go
go build -o bin/app

# Rust
cargo build --release
```

---

## File Change Checklist

Before committing changes, verify:

- [ ] Code follows project style guidelines
- [ ] No security vulnerabilities introduced
- [ ] No secrets or credentials in code
- [ ] Tests written/updated for changes
- [ ] All tests pass
- [ ] No unnecessary files created
- [ ] Commit message is descriptive
- [ ] Branch name follows conventions
- [ ] Changes are on correct branch

---

## Getting Help

### For AI Assistants
1. Check this CLAUDE.md file first
2. Read README.md for project-specific info
3. Examine .gitignore to understand project structure
4. Use `git log` to understand recent changes
5. Ask user for clarification when requirements are ambiguous

### Resources
- Repository: REFLEKT
- Documentation: docs/ directory (when created)
- Issues: Check with user (gh CLI not available)

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025-11-16 | Initial CLAUDE.md creation for REFLEKT project |

---

## Notes for Future Updates

This file should be updated when:
- Project structure changes significantly
- New technologies/languages are added
- Development workflows are established
- Testing frameworks are implemented
- Build processes are configured
- CI/CD pipelines are added
- Coding standards are formalized

**Maintainers:** Keep this document in sync with actual project practices.

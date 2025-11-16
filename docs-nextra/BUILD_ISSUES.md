# Build Issues (Pre-existing)

The following build issues exist in the docs-nextra folder. These are **pre-existing issues** from the original earna-ai project and are **not related to the REFLEKT rebranding changes**.

## Issue 1: Missing @tailwindcss/postcss Dependency

**Error:**
```
Error: Cannot find module '@tailwindcss/postcss'
```

**Cause:** The project is missing the `@tailwindcss/postcss` package and possibly a `postcss.config.mjs` file.

**Solution:**
1. Install the missing dependency:
   ```bash
   npm install -D @tailwindcss/postcss tailwindcss
   ```

2. Create a `postcss.config.mjs` file if needed:
   ```javascript
   export default {
     plugins: {
       '@tailwindcss/postcss': {},
     },
   }
   ```

## Issue 2: TypeScript Error in DSMPeriodicBackground.tsx

**Error:**
```
src/components/DSMPeriodicBackground.tsx(866,6): error TS2686: 'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.
```

**Cause:** Missing React import in DSMPeriodicBackground.tsx file (line 866).

**Solution:**
Add the following import at the top of the file:
```typescript
import React from 'react'
```

## REFLEKT Rebranding Status

All REFLEKT rebranding changes have been completed successfully:

✅ Updated `src/app/layout.jsx` with REFLEKT branding and metadata
✅ Updated `src/components/CustomNavbar.jsx` with REFLEKT branding
✅ Updated `README.md` to reference REFLEKT project
✅ Replaced all "Earna" and "earna" references in 82 MDX content files
✅ Updated `package.json` description
✅ Verified `vercel.json` (no changes needed)
✅ Created `public/LOGOS_TODO.md` for logo replacement guidance

The rebranding changes are syntactically correct and do not introduce any new errors. The build issues documented above existed before the rebranding and need to be addressed separately.

## Next Steps

1. Resolve the dependency issue by installing @tailwindcss/postcss
2. Fix the TypeScript error in DSMPeriodicBackground.tsx
3. Replace logo files as documented in `public/LOGOS_TODO.md`
4. Test the build again after resolving dependencies

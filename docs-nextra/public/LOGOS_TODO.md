# Logo Replacement TODO

The following logo files need to be replaced with REFLEKT branding:

## Files to Replace

### Current Files (from Earna AI)
- `earna-logo.png` - Main logo (PNG format)
- `brain-finance-logo.svg` - Light theme logo (SVG format)
- `brain-finance-logo-dark.svg` - Dark theme logo (SVG format)

### Required New Files (REFLEKT branding)
- `reflekt-logo.png` - Main logo in PNG format (used for favicon and tile image)
  - Recommended size: 192x192 or 512x512 pixels
- `reflekt-logo.svg` - Light theme logo in SVG format
  - Used in navbar for light theme
  - Should be 48px height (width auto)
- `reflekt-logo-dark.svg` - Dark theme logo in SVG format
  - Used in navbar for dark theme
  - Should be 48px height (width auto)

## Where These Files Are Referenced

### Layout (`src/app/layout.jsx`)
- Line 22: `"msapplication-TileImage": "/reflekt-logo.png"`
- Line 87: `<link rel="icon" href="/reflekt-logo.png" type="image/png" />`
- Lines 55-66: Logo images in navbar (SVG files)

### CustomNavbar (`src/components/CustomNavbar.jsx`)
- Lines 64-73: Light theme logo (`/reflekt-logo.svg`)
- Lines 74-83: Dark theme logo (`/reflekt-logo-dark.svg`)

## Action Required

1. Create or obtain REFLEKT logo files in the required formats
2. Place them in the `/public` directory with the exact names listed above
3. Ensure SVG logos work well in both light and dark themes
4. Test the logos in the documentation site to verify they display correctly

## Notes

- The old Earna AI logos can be removed once the new REFLEKT logos are in place
- Make sure the new logos maintain good visibility in both light and dark themes
- The PNG logo should be square format for best results as a favicon

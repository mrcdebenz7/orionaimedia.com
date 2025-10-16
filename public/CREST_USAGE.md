# Crest Usage Guide

## Available Formats

### SVG (Recommended)
- **File**: `public/crest.svg`
- **Background**: Transparent ✅
- **Best for**: Web, scalable to any size
- **Usage**: Already integrated in Header.tsx and Footer.tsx

### Inline SVG in Components
The crest is embedded directly in:
- `components/Header.tsx` (navigation)
- `components/Footer.tsx` (footer branding)

This allows the gold gradient to render properly and keeps the design flexible.

---

## Crest Elements

1. **Gold Rings** (outer + inner)
   - Gradient: #FFF1C2 → #E6C56E → #B3842A
   - Stroke width: 6px (outer), 2.5px (inner)

2. **Stars** (top + bottom clusters)
   - 1 large star + 4 small stars each
   - Color: Gold gradient
   - Animation ready (sparkle on hover)

3. **Globe**
   - Fill: Radial gradient (#2B5A9E → #183B73)
   - Grid lines: Gold gradient lattice

4. **Yin-Yang**
   - Centered in globe
   - Colors: Gold gradient + dark blue (#0E2F63)
   - Small circles: Complementary colors

---

## Usage Examples

### In React Components
```tsx
// Inline SVG (recommended for control)
<svg width="32" height="32" viewBox="0 0 128 128">
  {/* Gradients + paths */}
</svg>

// Or as image (if you export PNG)
<img src="/crest.png" alt="Orion Ascend" width="32" height="32" />
```

### In CSS
```css
.crest-bg {
  background-image: url('/crest.svg');
  background-size: contain;
  background-repeat: no-repeat;
}
```

### In Markdown/Docs
```markdown
![Orion Ascend Media](public/crest.svg)
```

---

## Color Variations

If you need the crest on different backgrounds:

**Dark backgrounds** (default):
- Current design works perfectly
- Gold + cyan elements pop against #0E141B

**Light backgrounds**:
- Consider adding a subtle shadow:
  ```css
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.15));
  ```

**White backgrounds**:
- Add a border to the outer ring for definition
- Or use a slightly darker version of the blue

---

## Export Options

### For Print/High-Res
1. Open `crest.svg` in Illustrator/Inkscape
2. Export at 1024×1024 or higher
3. Format: PNG with transparency

### For Favicon
1. Export at 512×512 PNG (transparent)
2. Use https://realfavicongenerator.net/
3. Upload and generate all sizes

### For OG Images
1. Place crest on branded background
2. Export at 1200×630
3. Include wordmark next to crest

---

## Modifications

To change colors, edit gradients in `public/crest.svg`:

**Gold Gradient**:
```svg
<linearGradient id="goldGradient">
  <stop offset="0%" style="stop-color:#FFF1C2" />
  <stop offset="45%" style="stop-color:#E6C56E" />
  <stop offset="100%" style="stop-color:#B3842A" />
</linearGradient>
```

**Blue Globe**:
```svg
<radialGradient id="blueGlobe">
  <stop offset="0%" style="stop-color:#2B5A9E" />
  <stop offset="100%" style="stop-color:#183B73" />
</radialGradient>
```

---

## Animation

The crest is animation-ready. Add sparkle effect:

```css
.crest-animated {
  animation: sparkle 1.8s ease-in-out infinite;
}

@keyframes sparkle {
  0%, 100% { opacity: 0.95; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}
```

---

**Current status**: Transparent background ✅  
**Format**: SVG (scalable, web-optimized)  
**Integrated**: Header + Footer components


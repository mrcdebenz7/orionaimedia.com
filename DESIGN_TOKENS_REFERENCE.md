# Design Tokens Reference — Orion Ascend Media

Quick reference for developers and designers working on the site.

---

## 🎨 Color Palette

### Primary Colors
```
Graphite-900    #0E141B    rgb(14, 20, 27)      Page background
Graphite-800    #151D28    rgb(21, 29, 40)      Panel background
Royal-Blue      #183B73    rgb(24, 59, 115)     Globe, accents
Royal-Shade     #0E2F63    rgb(14, 47, 99)      Darker blue variant
Pulse-Cyan      #53D3F8    rgb(83, 211, 248)    Waveforms, links
Pulse-Hover     #34B6E3    rgb(52, 182, 227)    Link hover state
Metal-Text      #E5E7EB    rgb(229, 231, 235)   Body text
```

### Gold Gradient (Imperial Gold)
```
Gold-g0    #FFF1C2    rgb(255, 241, 194)    Light end
Gold-g1    #E6C56E    rgb(230, 197, 110)    Mid point
Gold-g2    #B3842A    rgb(179, 132, 42)     Dark end

CSS Gradient:
linear-gradient(92deg, #FFF1C2 0%, #E6C56E 45%, #B3842A 100%)
```

### Usage
- **Graphite-900**: Main page background
- **Graphite-800**: Card backgrounds, panels
- **Royal-Blue**: Section accents, globe in crest
- **Pulse-Cyan**: Links, waveform effects, call-out text
- **Gold Gradient**: Headings, wordmark, crest rings, decorative elements
- **Metal-Text**: Body copy, descriptions

---

## 📝 Typography

### Font Families
```css
Headings:  'Cinzel', ui-serif, Georgia, 'Times New Roman', serif
Body:      'Inter', ui-sans-serif, system-ui, 'Segoe UI', Roboto, Arial, sans-serif
```

### Font Sizes (Responsive)
```css
H1:  clamp(2.25rem, 1.1rem + 3.2vw, 4.25rem)    36px → 68px
H2:  clamp(1.75rem, 1rem + 2.2vw, 3rem)         28px → 48px
H3:  clamp(1.25rem, 0.9rem + 1.2vw, 2rem)       20px → 32px
Body: 1rem (16px)
Small: 0.9375rem (15px)
```

### Letter Spacing
```css
Headings:   0.02em     (subtle tracking)
Small-caps: 0.08em     (wider tracking for labels)
```

### Font Weights
```css
Headings: 600-700 (semibold to bold)
Body:     400 (regular)
Labels:   500-600 (medium to semibold)
```

---

## 🔲 Spacing & Layout

### Border Radius
```css
Panel:  16px    (.rounded-panel)
Button: 12px    (.rounded-button)
```

### Breakpoints (Tailwind defaults)
```
sm:   640px
md:   768px
lg:   1024px
xl:   1280px
2xl:  1536px
```

### Max Width
```css
Content: max-w-7xl (1280px)
Text:    max-w-2xl (672px) for readable line length
```

---

## ✨ Effects & Shadows

### Gold Emboss
```css
Box Shadow:
  0 1px 0 rgba(255, 241, 194, 0.6),
  0 2px 6px rgba(179, 132, 42, 0.35),
  inset 0 1px 0 rgba(255, 241, 194, 0.35)

Text Shadow:
  0 1px 0 rgba(255, 241, 194, 0.6),
  0 2px 6px rgba(179, 132, 42, 0.35)

Utility: .shadow-gold-emboss, .gold-emboss
```

### Ring Glow (Gold)
```css
Box Shadow:
  0 0 0 2px rgba(230, 197, 110, 0.65),
  0 0 24px rgba(230, 197, 110, 0.25)

Utility: .ring-gold
```

### Drop Shadows
```css
Gold: drop-shadow-gold
  0 0 24px rgba(230, 197, 110, 0.25)

Cyan: drop-shadow-cyan
  0 0 18px rgba(83, 211, 248, 0.35)
```

---

## 🎬 Animations

### Sparkle (Stars)
```css
Duration: 1.8s
Easing: ease-in-out
Loop: infinite

Keyframes:
  0%, 100%: opacity 0.5, scale(1)
  50%:      opacity 1, scale(1.12)

Utility: .animate-sparkle
```

### Wave Scroll (Background)
```css
Duration: 18s
Easing: linear
Loop: infinite

Keyframes:
  0%:   backgroundPosition 0 0, 0 0
  100%: backgroundPosition 800px 0, -800px 0

Utility: .animate-wave-scroll
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  .animate-sparkle, .animate-wave-scroll {
    animation: none;
  }
}
```

---

## 🌌 Background Patterns

### Starfield
```css
radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.28) 99%, transparent 100%),
radial-gradient(1px 1px at 80% 20%, rgba(255,255,255,0.15) 99%, transparent 100%),
radial-gradient(1px 1px at 60% 70%, rgba(255,255,255,0.2) 99%, transparent 100%)

Utility: .bg-starfield
```

### Wave Pattern
```css
linear-gradient(0deg, rgba(83,211,248,0.08) 2px, transparent 2px),
radial-gradient(1200px 50px at 50% 50%, rgba(83,211,248,0.08), transparent 40%)

Background Size: 8px 8px, 1200px 50px

Utility: .bg-wave
```

### Circuit Trace (Optional)
```css
radial-gradient(ellipse at top right, rgba(24,59,115,0.12), transparent 40%),
repeating-linear-gradient(90deg, 
  rgba(83,211,248,0.06), 
  rgba(83,211,248,0.06) 2px, 
  transparent 2px, 
  transparent 8px)

Utility: .bg-circuit
```

---

## 🛠️ Utility Classes

### Text Utilities
```css
.text-gold-gradient    Gold gradient text (uses background-clip)
.gold-emboss           Gold text with emboss shadow
.metallic              Body text color (#E5E7EB)
.small-caps            All-small-caps with 0.08em tracking
```

### Background Utilities
```css
.body-bg               Starfield pattern + graphite base
.bg-wave               Pulse waveform pattern
.wave-layer            Wave animation layer (fixed, full-screen)
```

### Ring/Glow Utilities
```css
.ring-gold             Gold glow ring (box-shadow)
.drop-shadow-gold      Gold drop shadow
.drop-shadow-cyan      Cyan drop shadow
```

### Shape Utilities
```css
.rounded-panel         16px border radius
.rounded-button        12px border radius
```

---

## 🎯 Component Patterns

### Card
```tsx
<div className="rounded-panel bg-graphite-800/70 border border-royal-shade/40 p-6 hover:border-pulse-hover/60 transition-colors">
  <h3 className="text-metal-text/90 font-semibold">Title</h3>
  <p className="mt-2 text-sm text-metal-text/70">Description</p>
</div>
```

### Button (Primary)
```tsx
<button className="rounded-button bg-gold-g2/10 border border-gold-g1/40 shadow-gold-emboss px-5 py-3 text-sm font-semibold text-gold-g0 hover:bg-graphite-800 transition-colors">
  Click Me
</button>
```

### Button (Secondary)
```tsx
<button className="rounded-button border border-royal-shade/50 px-5 py-3 text-sm font-semibold text-pulse-cyan hover:text-pulse-hover">
  Learn More
</button>
```

### Section Header
```tsx
<div className="small-caps text-gold-g1/80 mb-4">Section Label</div>
<h2 className="gold-emboss text-3xl md:text-5xl tracking-[0.02em]">
  Main Heading
</h2>
```

---

## 📐 Z-Index Layers
```
wave:    0   (background animation)
content: 10  (main content)
ring:    20  (decorative rings)
star:    30  (sparkle stars)
header:  50  (sticky nav)
```

---

## 🔗 Usage in Code

### Tailwind
```tsx
<h1 className="text-gold-gradient">Gold Text</h1>
<p className="metallic">Body text</p>
<div className="bg-graphite-800 rounded-panel">Panel</div>
```

### CSS Custom
```css
.my-element {
  background: var(--color-graphite-900);
  color: var(--color-metal-text);
}
```

### Inline (for dynamic gradients)
```tsx
<linearGradient id="goldGrad">
  <stop offset="0%" style={{stopColor:'#FFF1C2'}} />
  <stop offset="45%" style={{stopColor:'#E6C56E'}} />
  <stop offset="100%" style={{stopColor:'#B3842A'}} />
</linearGradient>
```

---

## 🎨 Design Principles

1. **Gold = Premium**: Use gold gradient for key headings, CTAs, and brand elements
2. **Blue = Trust**: Royal blue for accents, supporting elements
3. **Cyan = Action**: Pulse cyan for links, interactive states
4. **Dark = Depth**: Graphite backgrounds create depth and focus
5. **Wave = Motion**: Subtle wave animation adds life without distraction
6. **Emboss = Craft**: Gold emboss effect reinforces premium positioning

---

**Reference this document when extending the design system.**


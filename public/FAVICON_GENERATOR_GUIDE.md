# Favicon Generation Guide

Use https://realfavicongenerator.net/ for best results.

## Step-by-Step

### 1. Prepare Source Image
- Use your logo crest as the base
- Recommended: 512×512 PNG with transparent background
- Ensure gold ring and yin-yang globe are visible at small sizes

### 2. Upload to RealFaviconGenerator
1. Go to https://realfavicongenerator.net/
2. Click **"Select your Favicon image"**
3. Upload your 512×512 crest PNG

### 3. Configure Each Platform

#### iOS Web Clip
- **Background color**: `#0E141B` (Graphite-900)
- **Theme**: Dark
- **Margin**: 0-10% (test what looks best)
- Preview at 180×180

#### Android Chrome
- **Theme color**: `#0E141B`
- **Name**: "Orion Ascend"
- **Background**: `#0E141B`
- Preview at 192×192 and 512×512

#### Windows Metro
- **Tile color**: `#183B73` (Royal-Blue)
- Preview: 70×70, 150×150, 310×310

#### macOS Safari
- **Mask icon**: Use simplified monochrome version of crest
- **Color**: `#B3842A` (Gold-g2)
- Preview at 16×16

### 4. Generate & Download
- Scroll to bottom
- Click **"Generate your Favicons and HTML code"**
- Download the package

### 5. Extract Files

From the downloaded ZIP, you need:

```
favicon.ico              → public/favicon.ico
favicon-32x32.png        → public/favicon-32x32.png
favicon-16x16.png        → public/favicon-16x16.png
apple-touch-icon.png     → public/apple-touch-icon.png
safari-pinned-tab.svg    → public/safari-pinned-tab.svg
android-chrome-192x192.png → public/ (optional)
android-chrome-512x512.png → public/ (optional)
```

### 6. Update Metadata (Already Done)

The Next.js metadata in `app/layout.tsx` already points to:
```typescript
icons: { 
  icon: '/favicon.ico', 
  apple: '/apple-touch-icon.png' 
}
```

The manifest in `public/site.webmanifest` is also configured.

---

## Manual Creation (Alternative)

If you prefer manual creation:

### favicon.ico (32×32)
- Export crest at 32×32 px
- Save as ICO format (can use https://convertio.co/png-ico/)

### favicon-32x32.png
- PNG, 32×32 px, transparent background
- Crest with gold ring + yin-yang globe

### favicon-16x16.png
- PNG, 16×16 px
- Simplified crest (may need to remove details for clarity)

### apple-touch-icon.png (180×180)
- PNG, 180×180 px
- Background: Graphite-900 (#0E141B)
- Crest centered with small margin

### safari-pinned-tab.svg
- SVG, monochrome (single path)
- Use simplified outline of crest
- ViewBox: "0 0 180 180" or similar
- Example structure:
  ```svg
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
    <path fill="#B3842A" d="... your monochrome path ..."/>
  </svg>
  ```

---

## Color Reference

Use these exact colors for consistency:

- **Background**: `#0E141B` (Graphite-900)
- **Accent**: `#183B73` (Royal-Blue)
- **Gold**: `#B3842A` (Gold-g2 for solid fills)
- **Cyan**: `#53D3F8` (Pulse-Cyan, optional accent)

---

## Testing

After uploading favicons:

1. **Local test**: Run `npm run dev` and check browser tab icon
2. **iOS test**: Save to home screen on iPhone/iPad
3. **Android test**: Add to home screen on Android device
4. **Favicon checker**: https://realfavicongenerator.net/favicon_checker

---

## Troubleshooting

**Icon doesn't update?**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Check file paths match metadata in `app/layout.tsx`

**Icon looks blurry?**
- Ensure you're exporting at exact pixel dimensions (no scaling)
- Use PNG-8 or PNG-24 with transparency
- Avoid JPEG (no transparency support)

**Safari pinned tab not showing?**
- Verify SVG is valid (no gradients, single color)
- Check viewBox is set correctly
- Mask-icon color should be `#B3842A`

---

**Need help?** Check the original logo crest in `public/crest.svg` for reference.


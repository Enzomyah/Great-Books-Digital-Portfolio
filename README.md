# My Literary Journey — Great Books Digital Portfolio

**Student:** Earl Lawrence C. Cipres  
**Course:** Bachelor of Science in Information Technology (BSIT)  
**Year Level:** 4th Year  
**Section:** GEC-GB-NRt  

---

## Overview

This is a complete multi-page digital portfolio for the Great Books final project. It is built with HTML5, CSS3, and vanilla JavaScript — no frameworks or build tools required. Open any `.html` file directly in a browser.

---

## File Structure

```
GREAT BOOKS FINAL PROJECT/
├── index.html              ← Homepage
├── profile.html            ← Student Profile
├── analyses.html           ← Literary Analyses Archive (all 7)
├── analysis-1.html         ← Analysis 01
├── analysis-2.html         ← Analysis 02
├── analysis-3.html         ← Analysis 03
├── analysis-4.html         ← Analysis 04
├── analysis-5.html         ← Analysis 05
├── analysis-6.html         ← Analysis 06
├── analysis-7.html         ← Analysis 07
├── favorite.html           ← Favorite Masterpiece
├── learning.html           ← Summary of Learning
├── reflection.html         ← Personal Reflection
├── sources.html            ← Sources & Acknowledgments
├── css/
│   └── styles.css          ← All styles (edit design here)
├── js/
│   └── main.js             ← Navigation, scroll-reveal, JS behavior
├── assets/
│   └── images/             ← Put all images here
│       ├── student-photo.jpg    ← Your profile photo (see below)
│       ├── hero-books.jpg       ← Homepage hero background
│       ├── analysis-1.jpg       ← Analysis 01 image
│       ├── analysis-2.jpg       ← Analysis 02 image
│       ├── ...
│       └── favorite.jpg         ← Favorite masterpiece image
└── README.md               ← This file
```

---

## How to Open the Website

1. Open **File Explorer** and navigate to this folder.
2. Double-click **`index.html`** to open the homepage in your browser.
3. All navigation links work from the homepage — no server required.

> **Tip:** For the best experience, open in Google Chrome or Microsoft Edge.

---

## How to Add Your Student Photo

1. Take or choose a portrait-orientation photo of yourself.
2. Save it as `student-photo.jpg` (JPEG format recommended).
3. Place it in the `assets/images/` folder.
4. Open `profile.html` in your browser — your photo will appear automatically.

**Photo path:** `assets/images/student-photo.jpg`

The profile page is already set up to show a styled placeholder if the photo file is missing — no broken image will appear.

---

## How to Replace Content Placeholders

Every page that requires your original school content has clearly marked placeholder blocks like this:

```
⚠ Content Placeholder — Analysis 01
Replace this block with your complete original literary analysis...
```

### To fill in an analysis page (analysis-1.html through analysis-7.html):

1. Open the file in a text editor (Notepad, VS Code, etc.).
2. Find the `<div class="analysis-placeholder">` block.
3. Delete the placeholder `<div>` block entirely.
4. In the `<article class="analysis-body">` section, type or paste your analysis using this structure:

```html
<h2>Introduction</h2>
<p>Your introduction paragraph here...</p>

<h2>Literary Lens: [Lens Name]</h2>
<p>Explanation of the lens and how it applies...</p>

<h2>Analysis</h2>
<p>Your analysis paragraphs here...</p>

<h2>Conclusion</h2>
<p>Your conclusion here...</p>
```

5. Also update the `<title>` tag and the `<h1>`, author, and lens badge at the top of each page.

### To update literary titles in the archive (analyses.html):

Find the `[Literary Work Title]`, `[Author Name]`, and `[Literary Lens]` text and replace them with your actual works.

### To fill in the Favorite Masterpiece (favorite.html):

Replace the `analysis-placeholder` blocks with your actual discussion of the chosen work.

### To fill in Learning and Reflection (learning.html, reflection.html):

Each section has an `analysis-placeholder` block — replace it with your personal paragraphs for that section.

### To complete the Sources page (sources.html):

Replace each `source-item` template with your actual citations in the format shown (author, year, title, publisher, URL).

---

## How to Add Images

Place all images in `assets/images/` and name them accordingly:

| File name            | Used on         |
|----------------------|-----------------|
| `student-photo.jpg`  | profile.html    |
| `hero-books.jpg`     | index.html (hero background) |
| `analysis-1.jpg`     | analysis-1.html |
| `analysis-2.jpg`     | analysis-2.html |
| `analysis-3.jpg`     | analysis-3.html |
| `analysis-4.jpg`     | analysis-4.html |
| `analysis-5.jpg`     | analysis-5.html |
| `analysis-6.jpg`     | analysis-6.html |
| `analysis-7.jpg`     | analysis-7.html |
| `favorite.jpg`       | favorite.html   |

Images should be **grayscale** to match the design. If they are in color, they will automatically appear grayscale on the analysis pages due to a CSS filter.

To set an image on a page, replace the `<div class="img-placeholder">` block with:

```html
<img src="assets/images/YOUR-IMAGE-FILE.jpg" alt="Description of image" class="img-grayscale" />
```

---

## How to Customize the Design

All colors, fonts, and spacing are defined as CSS variables at the top of `css/styles.css`:

```css
:root {
  --bg-main:        #080808;   /* Main background */
  --accent-red:     #E50920;   /* Red accent color */
  --text-primary:   #F5F3EF;   /* Main text */
  /* ... */
}
```

Change these variables to adjust the entire site's color scheme at once.

---

## How to Publish Online (Static Hosting)

This site uses only relative paths and works on any static hosting service.

### Option A — GitHub Pages (Free)
1. Create a free account at [github.com](https://github.com).
2. Create a new repository.
3. Upload all files maintaining the same folder structure.
4. Go to **Settings → Pages → Branch: main → Save**.
5. Your site will be live at `https://yourusername.github.io/your-repo-name/`

### Option B — Netlify (Free, Drag and Drop)
1. Go to [netlify.com](https://netlify.com) and create a free account.
2. Drag the entire `GREAT BOOKS FINAL PROJECT` folder onto the Netlify deploy zone.
3. Your site will be published instantly with a custom URL.

---

## Navigation Structure

```
Home (index.html)
├── Student Profile (profile.html)
├── Literary Analyses (analyses.html)
│   ├── Analysis 01 (analysis-1.html) → Analysis 02
│   ├── Analysis 02 (analysis-2.html) ← Analysis 01 → Analysis 03
│   ├── Analysis 03 (analysis-3.html) ← Analysis 02 → Analysis 04
│   ├── Analysis 04 (analysis-4.html) ← Analysis 03 → Analysis 05
│   ├── Analysis 05 (analysis-5.html) ← Analysis 04 → Analysis 06
│   ├── Analysis 06 (analysis-6.html) ← Analysis 05 → Analysis 07
│   └── Analysis 07 (analysis-7.html) ← Analysis 06
├── Favorite Masterpiece (favorite.html)
├── Summary of Learning (learning.html)
├── Personal Reflection (reflection.html)
└── Sources & Acknowledgments (sources.html) ← linked in every footer
```

---

## Design Notes

- **Background:** #080808 (near-black)
- **Accent:** #E50920 (editorial red)
- **Typography:** Oswald (headings) + Inter (body) + Cormorant Garamond (literary quotes)
- **Images:** Grayscale only — use `class="img-grayscale"` on all `<img>` tags
- **Responsive:** Works on desktop, tablet, and mobile

---

*Great Books Digital Portfolio — Earl Lawrence C. Cipres — GEC-GB-NRt — 2026*

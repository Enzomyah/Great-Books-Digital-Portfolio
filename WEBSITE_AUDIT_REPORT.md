# Website Audit Report

**Project Title:** My Literary Journey: A Great Books Digital Portfolio  
**Student:** Earl Lawrence C. Cipres (BSIT 4th Year, Section GEC-GB-NRt)  
**Audit Date:** October 29, 2026  
**Audit Type:** Read-Only Source Code & Assets Inspection  

---

## 1. Overall Project Status

- **Architecture & Infrastructure:** The website is built cleanly with semantic HTML5, Vanilla CSS3 (custom CSS variables, dark luxury editorial theme), and Vanilla JavaScript (mobile menu toggles, scroll-reveal IntersectionObserver, image fallback, and hover animation).
- **Design & Layout Health:** High visual consistency across all pages. Typography (Oswald, Inter, Cormorant Garamond via Google Fonts) and color schemes (`#080808` main, `#E50920` red accent, `#F1EFEA` cream highlights) are implemented uniformly.
- **Content Readiness:**
  - **Student Profile:** Complete and well written (Sections A, B, and C).
  - **Literary Analyses (01–07):** Structurally complete with hero titles, authors, badges, images, and navigation, but **100% of the analytical content bodies are placeholders** (`<div class="analysis-placeholder">`).
  - **Required Works Discrepancy (CRITICAL):** The project currently analyzes **The Iliad** (Homer) as Analysis 02. The prompt requirements specify **The Ramayana** as one of the seven required works. **The Ramayana is completely missing** from the project files and assets.
  - **Favorite Masterpiece:** Complete layout and structure, but all content and titles are placeholder tags (`[Insert Literary Work Title]`).
  - **Summary of Learning & Personal Reflection:** Complete layout and introductory narrative text, but individual learning and reflection prompts contain placeholders awaiting student responses.
  - **Sources & References:** Structure in place in `sources.html` and within analysis pages, but all citations are template placeholders.

---

## 2. Project File Structure

### Directory Tree & Asset Inventory

```
GREAT BOOKS FINAL PROJECT/
├── README.md                                  (Documentation & instructions)
├── index.html                                 (Homepage / Landing)
├── profile.html                               (Student Profile)
├── analyses.html                              (Literary Analyses Archive Index)
├── analysis-1.html                            (Analysis 01: The Odyssey)
├── analysis-2.html                            (Analysis 02: The Iliad — *Mismatch with Ramayana requirement*)
├── analysis-3.html                            (Analysis 03: The Mahabharata)
├── analysis-4.html                            (Analysis 04: The Panchatantra)
├── analysis-5.html                            (Analysis 05: The Song of Roland)
├── analysis-6.html                            (Analysis 06: The Tale of Genji)
├── analysis-7.html                            (Analysis 07: Voice Out of the Whirlwind / Book of Job)
├── favorite.html                              (Favorite Masterpiece)
├── learning.html                              (Summary of Learning)
├── reflection.html                            (Personal Reflection)
├── sources.html                               (Appendix: Sources & Acknowledgments)
├── css/
│   └── styles.css                             (Global stylesheet: variables, reset, components, responsive)
├── js/
│   └── main.js                                (Mobile nav, active links, scroll reveal, photo fallback)
└── assets/
    └── images/
        ├── README.txt                         (Asset checklist instructions)
        ├── archive-literature.jfif            (Analyses preview hero image)
        ├── favorite-masterpiece.jfif          (Favorite page feature image)
        ├── gif.gif                            (Animated student hover avatar)
        ├── hero-literature.png                (Homepage background hero)
        ├── iliad.jfif                         (Analysis 02 image)
        ├── job-38.jfif                        (Analysis 07 image)
        ├── learning-literature.jfif           (Learning page banner)
        ├── mahabharata.jfif                   (Analysis 03 image)
        ├── odyssey.png                        (Analysis 01 image)
        ├── panchatantra.jfif                  (Analysis 04 image)
        ├── personal-reflection.jfif           (Reflection page banner)
        ├── pride-and-prejudice.jfif           (Unused asset)
        ├── song-of-roland.jfif                (Analysis 05 image)
        ├── student-photo.jfif                 (Student portrait)
        ├── tale-of-genji.jfif                 (Analysis 06 image)
        └── to-kill-a-mockingbird.jfif         (Unused asset)
```

---

## 3. Website Pages and Navigation

### Page Identification & Purpose

| File | Page Title | Primary Purpose | Navigation Link Check |
|---|---|---|---|
| `index.html` | My Literary Journey — Great Books Digital Portfolio | Main landing page: hero, overview cards for all 5 portfolio sections, and 7-card analysis preview grid. | Header & footer links present and accurate. |
| `profile.html` | Student Profile — My Literary Journey | Section 01: Student information, bio (About Me, Interests & Experiences, Expectations). | Navigation active indicator functions properly. |
| `analyses.html` | Literary Analyses — My Literary Journey | Section 02: Archive directory cataloging all 7 analyses with metadata, thumbnails, and direct links. | Links to `analysis-1.html` through `analysis-7.html` are intact. |
| `analysis-1.html` | Analysis 01 — The Odyssey | Dedicated analysis page for Homer's *The Odyssey*. | Nav: Next -> `analysis-2.html`, Archive link intact. |
| `analysis-2.html` | Analysis 02 — The Iliad | Dedicated analysis page for Homer's *The Iliad*. | Nav: Prev <- `analysis-1.html`, Next -> `analysis-3.html`. |
| `analysis-3.html` | Analysis 03 — The Mahabharata | Dedicated analysis page for *The Mahabharata*. | Nav: Prev <- `analysis-2.html`, Next -> `analysis-4.html`. |
| `analysis-4.html` | Analysis 04 — The Panchatantra | Dedicated analysis page for *The Panchatantra*. | Nav: Prev <- `analysis-3.html`, Next -> `analysis-5.html`. |
| `analysis-5.html` | Analysis 05 — The Song of Roland | Dedicated analysis page for *The Song of Roland*. | Nav: Prev <- `analysis-4.html`, Next -> `analysis-6.html`. |
| `analysis-6.html` | Analysis 06 — The Tale of Genji | Dedicated analysis page for *The Tale of Genji*. | Nav: Prev <- `analysis-5.html`, Next -> `analysis-7.html`. |
| `analysis-7.html` | Analysis 07 — Voice Out of the Whirlwind (Job 38) | Dedicated analysis page for *The Book of Job*. | Nav: Prev <- `analysis-6.html`, Next is disabled (terminal). |
| `favorite.html` | Favorite Masterpiece — My Literary Journey | Section 03: In-depth spotlight on student's chosen top literary work. | Header/footer active state working; Next -> `learning.html`. |
| `learning.html` | Summary of Learning — My Literary Journey | Section 04: Four core learning areas synthesized from the course. | Prev <- `favorite.html`, Next -> `reflection.html`. |
| `reflection.html` | Personal Reflection — My Literary Journey | Section 05: Five reflective inquiry prompts examining student growth. | Prev <- `learning.html`, Next -> `sources.html`. |
| `sources.html` | Sources & Acknowledgments — My Literary Journey | Appendix / References: Formal citations for texts, research, images, course. | Prev <- `reflection.html`, Next -> `index.html`. |

### Navigation Consistency Finding
- All pages feature uniform sticky top headers and comprehensive 3-column footers.
- Mobile drawer navigation (`#nav-toggle` and `#nav-mobile`) is present across all 12 HTML pages and wired up via `js/main.js`.
- `sources.html` is linked in the mobile drawer and footer on all pages, but is intentionally omitted from desktop primary navigation to keep the header minimal.

---

## 4. Literary Analysis Audit

### Comparison with Project Requirements

The course requirements specify seven required literary works:
1. The Odyssey
2. The Mahabharata
3. The Panchatantra
4. The Ramayana
5. The Song of Roland
6. The Tale of Genji
7. The Book of Job

### Work-by-Work Status Matrix

| # | Required Work | Work in Project Files | File Name | Status | Lens Assigned in Code | Personal Insights Present? | References Present? | Image Status |
|---|---|---|---|---|---|---|---|---|
| 1 | **The Odyssey** | The Odyssey (Homer) | `analysis-1.html` | **Placeholder** | Archetypal / Mythological Lens | ❌ Placeholder | ❌ Placeholder | ✅ `assets/images/odyssey.png` (Found) |
| 2 | **The Ramayana** | **The Iliad (Homer)** *(Mismatch)* | `analysis-2.html` | **Placeholder & Mismatched Work** | Psychoanalytic Lens | ❌ Placeholder | ❌ Placeholder | ⚠️ Displays `iliad.jfif`; no `ramayana` image in folder |
| 3 | **The Mahabharata** | The Mahabharata (attr. Vyasa) | `analysis-3.html` | **Placeholder** | Historical / Contextual Lens | ❌ Placeholder | ❌ Placeholder | ✅ `assets/images/mahabharata.jfif` (Found) |
| 4 | **The Panchatantra** | The Panchatantra (attr. Vishnu Sharma) | `analysis-4.html` | **Placeholder** | Formalist Lens | ❌ Placeholder | ❌ Placeholder | ✅ `assets/images/panchatantra.jfif` (Found) |
| 5 | **The Song of Roland** | The Song of Roland (Anonymous) | `analysis-5.html` | **Placeholder** | Historical / Contextual Lens | ❌ Placeholder | ❌ Placeholder | ✅ `assets/images/song-of-roland.jfif` (Found) |
| 6 | **The Tale of Genji** | The Tale of Genji (Murasaki Shikibu) | `analysis-6.html` | **Placeholder** | Feminist Lens | ❌ Placeholder | ❌ Placeholder | ✅ `assets/images/tale-of-genji.jfif` (Found) |
| 7 | **The Book of Job** | Voice Out of the Whirlwind (Job 38) | `analysis-7.html` | **Placeholder** | Ecocritical Lens | ❌ Placeholder | ❌ Placeholder | ✅ `assets/images/job-38.jfif` (Found) |

### Detailed Observations per Analysis Page

1. **`analysis-1.html` (The Odyssey):**
   - **Header/Meta:** Proper title, author (*Homer*), badge (*Archetypal / Mythological Lens*).
   - **Hero Image:** Points to `assets/images/odyssey.png` (file exists, 2.66 MB).
   - **Content Sections:** All 7 required subheadings exist (`Literary Lens`, `Background and Context`, `Summary`, `Main Themes and Literary Elements`, `Detailed Analysis`, `Personal Insights and Lessons`, `References and Sources`), but every section contains placeholder text.
   - **Navigation:** Previous disabled (first analysis); Next links to `analysis-2.html`.

2. **`analysis-2.html` (The Iliad vs. The Ramayana):**
   - **CRITICAL REQUIREMENT DEFICIENCY:** The required syllabus work is **The Ramayana**, but this file analyzes **The Iliad** by Homer with a *Psychoanalytic Lens*.
   - **Image:** Points to `assets/images/iliad.jfif` (file exists, 352 KB).
   - **Content Sections:** All 7 sections exist as placeholders.
   - **Navigation:** Prev points to `analysis-1.html`, Next points to `analysis-3.html`.

3. **`analysis-3.html` (The Mahabharata):**
   - **Header/Meta:** Proper title, author (*Traditionally attributed to Vyasa*), lens (*Historical / Contextual Lens*).
   - **Hero Image:** Points to `assets/images/mahabharata.jfif` (file exists, 279 KB).
   - **Content Sections:** All 7 sections exist as placeholders.
   - **Navigation:** Prev points to `analysis-2.html`, Next points to `analysis-4.html`.

4. **`analysis-4.html` (The Panchatantra):**
   - **Header/Meta:** Proper title, author (*Traditionally attributed to Vishnu Sharma*), lens (*Formalist Lens*).
   - **Hero Image:** Points to `assets/images/panchatantra.jfif` (file exists, 48.5 KB).
   - **Content Sections:** All 7 sections exist as placeholders.
   - **Navigation:** Prev points to `analysis-3.html`, Next points to `analysis-5.html`.

5. **`analysis-5.html` (The Song of Roland):**
   - **Header/Meta:** Proper title, author (*Anonymous*), lens (*Historical / Contextual Lens*).
   - **Hero Image:** Points to `assets/images/song-of-roland.jfif` (file exists, 244 KB).
   - **Content Sections:** All 7 sections exist as placeholders.
   - **Navigation:** Prev points to `analysis-4.html`, Next points to `analysis-6.html`.

6. **`analysis-6.html` (The Tale of Genji):**
   - **Header/Meta:** Proper title, author (*Murasaki Shikibu*), lens (*Feminist Lens*).
   - **Hero Image:** Points to `assets/images/tale-of-genji.jfif` (file exists, 230 KB).
   - **Content Sections:** All 7 sections exist as placeholders.
   - **Navigation:** Prev points to `analysis-5.html`, Next points to `analysis-7.html`.

7. **`analysis-7.html` (The Book of Job):**
   - **Header/Meta:** Title is *Voice Out of the Whirlwind (Job 38)*, author (*Book of Job; authorship uncertain*), lens (*Ecocritical Lens*). Matches required literary work.
   - **Hero Image:** Points to `assets/images/job-38.jfif` (file exists, 502 KB).
   - **Content Sections:** All 7 sections exist as placeholders.
   - **Navigation:** Prev points to `analysis-6.html`; Next is omitted (terminal analysis).

---

## 5. Other Required Sections

### 1. Student Profile (`profile.html`)
- **Status:** **COMPLETE**
- **Student Data:**
  - Name: Cipres, Earl Lawrence C.
  - Course: Bachelor of Science in Information Technology (BSIT)
  - Year: 4th Year
  - Section: GEC-GB-NRt
- **Written Content:**
  - Section A (A Little About Me): Fully written paragraph detailing academic focus and perspective on literature.
  - Section B (My Interests & Literary Experiences): Fully written paragraph on photography, music, fitness, e-books, and thematic connections.
  - Section C (My Expectations in Great Books): Fully written paragraph reflecting expectations and analytical growth.
- **Visuals:** Points to `assets/images/student-photo.jfif` (2.25 MB) and `assets/images/gif.gif` (4.94 MB) on hover. Proper fallback error handling exists in `js/main.js`.

### 2. Favorite Literary Masterpiece (`favorite.html`)
- **Status:** **STRUCTURALLY COMPLETE / CONTENT IN PLACEHOLDER**
- **Written Content:**
  - Work title and author are unset: `[Insert Literary Work Title]` and `[Insert Author Name]`.
  - Feature overview is a placeholder.
  - Section 01 (*Why I Chose This Work*): Placeholder.
  - Section 02 (*Literary Elements: Themes, Characters, Lessons*): Placeholder.
  - Section 03 (*Personal Connections & Realizations*): Placeholder.
  - Concluding blockquote & cite: Placeholder tags.
- **Visuals:** Uses `assets/images/favorite-masterpiece.jfif` (78.4 KB).

### 3. Summary of Learning (`learning.html`)
- **Status:** **PARTIAL / MIXED**
- **Written Content:**
  - Page introductory prose is written.
  - General overview paragraphs for each of the four areas are provided in the template:
    1. *Understanding Literary Masterpieces* (general intro written; personal application is placeholder).
    2. *Applying Literary Lenses* (general intro written; personal application is placeholder).
    3. *Literature & Human Experience* (general intro written; personal application is placeholder).
    4. *Critical Thinking & Interpretation* (general intro written; personal application is placeholder).
  - Concluding panel contains general closing text with an optional personal closing quote placeholder.
- **Visuals:** Banner image points to `assets/images/learning-literature.jfif` (72.8 KB).

### 4. Personal Reflection (`reflection.html`)
- **Status:** **PARTIAL / MIXED**
- **Written Content:**
  - Intro paragraph is written.
  - Five reflective questions are formulated with guiding red subtitles, but the actual student answers inside the body cards are placeholders:
    1. *My Changing Understanding of Literature* (Placeholder)
    2. *Challenges & Growth* (Placeholder)
    3. *The Literary Lens That Influenced Me Most* (Placeholder)
    4. *Realizations About Life & Human Nature* (Placeholder)
    5. *Applying What I Have Learned* (Placeholder)
- **Visuals:** Banner image points to `assets/images/personal-reflection.jfif` (61.3 KB).

---

## 6. Design and Technical Issues

### A. Broken Image or Missing Asset Audit
- **Referenced Images Verification:**
  - `assets/images/hero-literature.png` -> **EXISTS** (1.78 MB)
  - `assets/images/student-photo.jfif` -> **EXISTS** (2.25 MB)
  - `assets/images/gif.gif` -> **EXISTS** (4.94 MB)
  - `assets/images/archive-literature.jfif` -> **EXISTS** (791 KB)
  - `assets/images/favorite-masterpiece.jfif` -> **EXISTS** (78.4 KB)
  - `assets/images/learning-literature.jfif` -> **EXISTS** (72.8 KB)
  - `assets/images/personal-reflection.jfif` -> **EXISTS** (61.3 KB)
  - `assets/images/odyssey.png` -> **EXISTS** (2.66 MB)
  - `assets/images/iliad.jfif` -> **EXISTS** (352 KB)
  - `assets/images/mahabharata.jfif` -> **EXISTS** (279 KB)
  - `assets/images/panchatantra.jfif` -> **EXISTS** (48.5 KB)
  - `assets/images/song-of-roland.jfif` -> **EXISTS** (244 KB)
  - `assets/images/tale-of-genji.jfif` -> **EXISTS** (230 KB)
  - `assets/images/job-38.jfif` -> **EXISTS** (502 KB)
- **Unused Assets in Folder:**
  - `assets/images/pride-and-prejudice.jfif` (536 KB)
  - `assets/images/to-kill-a-mockingbird.jfif` (589 KB)
- **Missing Asset for Requirements:**
  - No image file exists for **The Ramayana**.

### B. Code Quality & Technical Checks
1. **HTML Validation & Syntax:**
   - All tags properly closed. Correct DOCTYPE and semantic landmarks (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`) used throughout.
   - ARIA labels and roles (`role="banner"`, `aria-label`, `aria-expanded`, `aria-controls`) are used cleanly.
2. **CSS Stylesheet (`css/styles.css`):**
   - Well-structured responsive design using CSS Grid and Flexbox.
   - Breakpoints at `960px` (tablet/collapse) and `640px` (mobile).
   - In `styles.css` line 225, `transition: opacity var(--transition-fast), transform var(--transition-medium);` references `--transition-medium`, but line 39 defines `--transition-med`. This causes the transform transition fallback to browser default (minor CSS typo, non-breaking).
3. **JavaScript Functionality (`js/main.js`):**
   - Clean vanilla IIFE execution.
   - Navigation toggle correctly manages `aria-expanded` and classes.
   - Active link highlighter correctly handles edge cases.
   - Scroll-reveal observer cleanly unobserves once revealed.
   - Proper `prefers-reduced-motion` compliance.

---

## 7. Missing or Incomplete Requirements

| Requirement | Expected | Current Status in Files | Severity |
|---|---|---|---|
| **7 Required Works** | The Odyssey, The Mahabharata, The Panchatantra, The Ramayana, The Song of Roland, The Tale of Genji, The Book of Job | The project has **The Iliad** in place of **The Ramayana** across `index.html`, `analyses.html`, and `analysis-2.html`. | **CRITICAL** |
| **Analysis 01 Content** | Complete analysis, lens, personal insights, references | Headers present; all 7 body sections are placeholders | **HIGH** |
| **Analysis 02 Content** | Complete analysis, lens, personal insights, references | Headers present; all 7 body sections are placeholders; work is Iliad instead of Ramayana | **CRITICAL** |
| **Analysis 03 Content** | Complete analysis, lens, personal insights, references | Headers present; all 7 body sections are placeholders | **HIGH** |
| **Analysis 04 Content** | Complete analysis, lens, personal insights, references | Headers present; all 7 body sections are placeholders | **HIGH** |
| **Analysis 05 Content** | Complete analysis, lens, personal insights, references | Headers present; all 7 body sections are placeholders | **HIGH** |
| **Analysis 06 Content** | Complete analysis, lens, personal insights, references | Headers present; all 7 body sections are placeholders | **HIGH** |
| **Analysis 07 Content** | Complete analysis, lens, personal insights, references | Headers present; all 7 body sections are placeholders | **HIGH** |
| **Favorite Masterpiece** | Chosen work title, overview, reasons, literary elements, connection | Layout complete; all text blocks are placeholders | **HIGH** |
| **Summary of Learning** | Specific student learning in 4 areas | Generic template intros present; specific student learning blocks are placeholders | **MEDIUM** |
| **Personal Reflection** | 5 personal reflection answers | Questions present; all 5 answers are placeholders | **HIGH** |
| **References / Sources** | Credible references for works and external research | Templates present; no actual APA citations populated | **MEDIUM** |

---

## 8. Recommended Next Steps & Prioritized Action Plan

### Priority 1: Critical Requirement Alignment & Missing Work
1. **Resolve The Ramayana vs. The Iliad:**
   - Confirm whether Analysis 02 must be converted to **The Ramayana** (attributed to Valmiki, with its designated class lens) to satisfy the prompt requirements, or if the instructor permitted *The Iliad*.
   - If *The Ramayana* is required:
     - Acquire an appropriate image for *The Ramayana* (e.g., `ramayana.jfif` or `.png`).
     - Update `index.html` (preview card 02).
     - Update `analyses.html` (entry 02).
     - Update `analysis-2.html` (title, author, metadata, lens badge, and hero image).

### Priority 2: Incomplete Literary Analysis Content
1. **Populate the Seven Analysis Pages (`analysis-1.html` through `analysis-7.html`):**
   - For each analysis page, replace the 7 placeholder blocks with actual student coursework:
     1. Literary Lens explanation
     2. Background & Context
     3. Summary
     4. Main Themes & Literary Elements
     5. Detailed Analysis through the assigned lens
     6. Personal Insights and Lessons
     7. References & Sources (APA format)
2. **Populate `favorite.html`:**
   - Insert the chosen masterpiece title, author, feature overview, why it was chosen, literary elements, and personal connection.
3. **Populate `learning.html`:**
   - Replace the 4 placeholder prompts with student reflections on the four learning areas.
4. **Populate `reflection.html`:**
   - Provide student answers to the five personal reflection questions.
5. **Populate `sources.html`:**
   - Replace placeholder entries with full citations for all 7 literary works and external research sources.

### Priority 3: Design & Usability Improvements
1. Fix the CSS variable typo on line 225 of `css/styles.css` (`--transition-medium` -> `--transition-med`).
2. Optimize heavy image file sizes if faster page loading is desired (e.g., `student-photo.jfif` is 2.25 MB, `gif.gif` is 4.94 MB, `odyssey.png` is 2.66 MB).
3. Clean up unreferenced image files (`pride-and-prejudice.jfif`, `to-kill-a-mockingbird.jfif`) if not needed for the portfolio.

### Priority 4: Final Testing Before Submission
1. Verify all internal navigation loops across every page in multiple browsers.
2. Test responsive layouts on mobile viewport (< 640px) to verify text wrapping and menu toggling.
3. Verify that all placeholder callout boxes (`.analysis-placeholder`) have been completely removed.

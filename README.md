# Grga Group — Website (Transport & Wood Pellets)

A simple, modern one-page website for **Grga Group** with:
- Multi-language support: **English / Macedonian / Albanian**
- Animated counters
- Sections: About, Services & Products (Wood Pellets / Пелети), Fleet, Contact
- Responsive design + mobile menu

---

## Project structure

.
├── index.html
├── styles.css
├── app.js
└── assets/
├── hero.jpg
├── about.jpg
├── fleet-1.jpg
├── fleet-2.jpg
├── fleet-3.jpg
└── fleet-4.jpg


---

## Images (IMPORTANT)

Create a folder named **`assets`** in the project root and add the following images:

| File path | Used in | Notes |
|----------|---------|------|
| `assets/hero.jpg` | Hero section (right side) | A wide/high-quality photo works best |
| `assets/about.jpg` | About section image | Can be operations / loading / company-related |
| `assets/fleet-1.jpg` | Fleet gallery | Any fleet photo |
| `assets/fleet-2.jpg` | Fleet gallery | Any fleet photo |
| `assets/fleet-3.jpg` | Fleet gallery | Any fleet photo |
| `assets/fleet-4.jpg` | Fleet gallery | Any fleet photo |

✅ If an image is missing, the page will show a placeholder text telling you which file is expected.

Tip: use JPG images for best performance. Recommended width: **1600px+** for hero/about.

---

## Run locally (VS Code)

### Option A (recommended): Live Server extension
1. Open this project folder in VS Code
2. Install the extension: **Live Server** (by Ritwick Dey)
3. Right click `index.html` → **Open with Live Server**

### Option B: Simple local server (no extensions)
From the project folder, run:

**Python (if installed):**
```bash
python -m http.server 5500

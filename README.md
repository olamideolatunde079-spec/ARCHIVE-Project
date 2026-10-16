# ARCHIVE — Nigeria's Creative History Museum

A premium, competition-ready landing page celebrating Nigeria's creative history across photography, music, fashion, and design.

---

## How to Run

**Option 1 — Open directly (simplest)**

Double-click `index.html`. It opens in your browser. No installation needed.

> Google Fonts and Font Awesome load from the internet. Be online on first open.

**Option 2 — Local server (recommended)**

VS Code: right-click `index.html` → **Open with Live Server**.

Or with Python:
```bash
cd "ARCHIVE Project"
python3 -m http.server 8000
```
Then open `http://localhost:8000`.

---

## Performance Summary

| Metric | Before | After |
|---|---|---|
| Hero image | 2.1 MB | 253 KB (−88%) |
| All images payload | 34 MB (originals) | 2.6 MB WebP (−92%) |
| Google Fonts | Render-blocking | Non-blocking (print/onload) |
| Font Awesome | Render-blocking | Non-blocking (print/onload) |
| JavaScript | No defer | `defer` — zero render blocking |
| `backdrop-filter` blur on nav | Present (GPU-expensive) | Removed |
| Scroll listeners | Potential blocking | All `passive: true` |
| DOM queries in handlers | Repeated per click | Cached once at startup |
| LCP image | No preload hint | `<link rel="preload" fetchpriority="high">` |
| Scroll indicator animation | Infinite loop forever | Paused after first scroll |

---

## Photographs Included

All images are in `assets/images/optimized/` as WebP + JPEG fallback pairs.
Sources and licenses are documented in `assets/images/history/IMAGE-CREDITS.md`.

### Photography (3 images)
- Tinubu Square, Lagos Island — 2014. CC BY 2.0
- Igbosere Road book stalls, Lagos Island — 2010. CC BY 2.0
- Lagos market scene. CC BY 2.0

### Music (6 images)
- Fela Kuti, 1970. CC BY-SA 3.0
- Fela Kuti, c.1986. Public domain
- The Fela Shrine, Lagos. Public domain
- King Sunny Ade. CC BY 2.0
- Bàtá drum — Rhythms of the Gods. CC BY-SA 4.0
- Burna Boy, Nativeland Concert, Lagos, 2016. CC BY-SA 4.0

### Fashion (6 images)
- Gentlemen of Kano, traditional attire, 1960. CC BY 2.0
- Aso-oke weaving, Yorubaland. CC BY-SA 4.0
- Yoruba bride in traditional attire. CC BY-SA 4.0
- Ibibio traditional attire. CC BY-SA 4.0
- Masorantan Masquerade Festival, Kwara State. CC BY-SA 4.0
- Urhobo traditional dress. CC BY-SA 4.0

### Design (6 images)
- Ife bronze head (12th–15th c.). CC BY-SA 4.0
- Indigo dyeing workshop, Nigeria. CC BY-SA 3.0
- Leatherwork and saddle-making, Minna. CC BY 2.0
- Hand-made earthenware pots, 1981. CC BY 2.0
- Abuja pottery, 1960. CC BY 2.0
- Bida metalwork, 1960. CC BY 2.0

### Hero / About / Timeline (additional images)
- Chief and Household at Ifako, Calabar — late 19th century. Public domain
- Ransome-Kuti family, c.1940. Public domain
- Obafemi Awolowo. Public domain
- Sir Abubakar Tafawa Balewa. CC BY-SA 4.0

---

## File Structure

```
ARCHIVE Project/
├── index.html
├── css/style.css
├── js/script.js
├── README.md
├── spec.md
└── assets/
    └── images/
        ├── history/         ← original source downloads
        │   └── IMAGE-CREDITS.md
        └── optimized/       ← what the website actually uses
            ├── *.webp       ← served to modern browsers
            └── *.jpg        ← fallback for older browsers
```

---

## Adding Your Own Photographs

Drop your photo in `assets/images/history/`, then in `index.html` replace the relevant `<source srcset="...">` and `<img src="...">` paths. Use the Python script below to generate an optimized WebP + JPEG pair:

```python
from PIL import Image
img = Image.open("assets/images/history/your-photo.jpg").convert("RGB")
img.thumbnail((800, 600), Image.LANCZOS)
img.save("assets/images/optimized/your-photo.webp", "WEBP", quality=82)
img.save("assets/images/optimized/your-photo.jpg",  "JPEG", quality=82, optimize=True)
```

---

*ARCHIVE — Our history is not a footnote. It's the foundation.*

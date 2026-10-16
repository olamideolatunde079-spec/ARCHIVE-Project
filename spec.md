# ARCHIVE — Nigeria's Creative History Museum

## 1. Project Overview

Build ARCHIVE, a polished, responsive, accessible digital museum celebrating Nigeria's creative history across four disciplines:

- Photography
- Music
- Fashion
- Design

ARCHIVE preserves, documents, and celebrates the people, places, objects, movements, and cultural moments that shaped Nigeria's creative identity.

**Main tagline:** The Past Is Still Making Noise.

**Supporting statement:** Our history is not a footnote — it's the foundation.

**Brand promise:** Make Nigerian creative history impossible to ignore.

This project is for a competitive website design challenge. Visual quality, originality, usability, responsiveness, accessibility, and working interactions are essential.

## 2. Strict Technology Stack

Use only:

- HTML5 for semantic page structure.
- CSS3 for all styling, layout, animation, and responsive behavior.
- Vanilla JavaScript for interactions and dynamic content.

Do not use React, Vue, Angular, Next.js, TypeScript, Tailwind CSS, Bootstrap, a backend, or a database.

Keep the project lightweight, fast, easy to understand, and easy to run locally. Use Font Awesome icons and Google Fonts where practical. Provide sensible fallbacks if external resources fail.

## 3. Visual Design Direction

Create a premium editorial museum experience inspired by vintage Nigerian photography, archival documents, historical magazines, independent art publications, and modern cultural institutions.

The interface should look professionally art-directed, not like a generic website template.

### Color palette

- Archive Black: `#0C0C0B`
- Heritage Cream: `#F1E8D7`
- Heritage Red: `#B82032`
- Nigerian Green: `#176747`
- Warm White: `#FFFDF7`
- Muted Gray: `#A9A59D`

Use black for dramatic sections, cream for reading and collection sections, red for important emphasis, and green as a restrained accent. Maintain readable text contrast.

### Typography

- Headlines: an expressive editorial serif such as Playfair Display or DM Serif Display.
- Body and interface: a clean sans-serif such as Inter or DM Sans.
- Use large, confident headings, readable body text, restrained uppercase labels, and consistent spacing.

Use a fluid type scale with CSS `clamp()` where appropriate.

### Overall aesthetic

- Vintage black-and-white Nigerian photography.
- Carefully selected historical and contemporary Nigerian creative imagery.
- Paper grain and subtle film texture.
- Editorial collage compositions and layered image framing.
- Generous whitespace and clear visual hierarchy.
- Thin borders, subtle shadows, and refined hover effects.
- Limited animation that enhances rather than distracts.
- A clear, consistent grid and spacing system.

Do not overload the page with textures, colors, effects, or decorative elements. Every element must support the story.

## 4. Page Structure

Build one complete landing page with the following sections.

### A. Navigation

Create a responsive navigation bar featuring:

- ARCHIVE wordmark.
- Small descriptor: NIGERIA'S CREATIVE HISTORY MUSEUM.
- Links: Home, Explore, Stories, Timeline, About.
- A prominent "Visit Archive" button.
- An optional search control if it can be implemented meaningfully.

Navigation links must point to the correct page sections. On mobile, provide a working menu button with an accessible label and correct expanded state.

Keep the navigation elegant, compact, and easy to use.

### B. Hero Section

Create a dramatic, full-width hero with a dark background and a large archival collage.

Main headline:

THE PAST IS STILL  
MAKING NOISE.

Make "MAKING NOISE." the expressive focal point using heritage red and a distinctive display style.

Supporting text:

"A digital museum celebrating Nigeria's creative history — from the cameras that captured our moments, to the sounds, styles and designs that shaped our identity."

Primary button: "Explore the Archive"

The button should scroll to the Explore section.

Include a striking historical visual composition using Nigerian street photography, cultural portraits, vintage architecture, or a carefully layered combination.

Add a small archive label and an optional handwritten-style editorial annotation.

The hero should immediately communicate Nigerian identity, cultural importance, and artistic quality.

### C. Explore the Archive

Use a warm cream background with the heading "EXPLORE THE ARCHIVE".

Supporting copy:

"Four creative disciplines. One incredible story. Discover the people, movements and moments that shaped Nigeria's creative legacy."

Create four consistent, image-led collection cards.

**Photography**
"From studio portraits to street moments, explore the images that tell our story."

**Music**
"The rhythms, voices and movements that gave Nigeria its sound."

**Fashion**
"From traditional roots to modern style, discover the looks that moved us."

**Design**
"The objects, spaces and ideas that shaped how we live, work and create."

Each card must include an image, icon, title, short description, and clear exploration link or button.

Use consistent card dimensions, spacing, typography, hover behavior, and image treatment.

Cards should feel visually rich while keeping their text easy to read.

Each card must lead to a meaningful interaction, such as filtering the featured stories to the selected discipline or opening a corresponding story view. Do not create dead links.

### D. Featured Stories

Use a contrasting dark section.

Heading:

ICONIC MOMENTS.  
LASTING IMPACT.

Supporting text:

"Step into the stories of Nigeria's creative pioneers, visionary artists and cultural movements — and see how they continue to inspire today."

Feature one prominent editorial story and three smaller story cards.

Potential topics include:

- The Faces of Lagos.
- The Rise of Afrobeat.
- Style Through the Decades.
- Nigerian Design: Then and Now.

Include story categories, short descriptions, image credits where available, and a "Read Story" action.

Story interactions must work. Implement a lightweight accessible story detail panel, modal, or dedicated in-page story view using vanilla JavaScript.

Provide a close button, keyboard support, and a clear way back to the main page. Do not simulate endless loading or invent missing content.

### E. Creative History Timeline

Heading:

A JOURNEY THROUGH NIGERIA'S CREATIVE HISTORY.

Supporting copy:

"From independence to the digital age, explore key moments, movements and milestones that shaped our creative identity."

Create a visually engaging timeline with these broad periods:

- Before 1960 — Roots and cultural traditions.
- 1960s — Independence and identity.
- 1970s — Afrobeat, popular culture and new creative expression.
- 1980s — Style, music and changing visual culture.
- 1990s — Expanding cultural influence.
- 2000s–Today — Digital creativity and global recognition.

These are broad editorial periods, not claims that every movement began or ended in a particular decade.

Each timeline item should include a date or period, relevant image, short explanation, and optional interactive detail.

Use historically responsible wording. Verify specific dates, names, and claims before publishing them.

Make the timeline horizontally scrollable on smaller screens if needed, with visible controls and keyboard accessibility. A vertical mobile layout is also acceptable.

### F. About ARCHIVE

Heading:

WHY WE PRESERVE.

Suggested copy:

"ARCHIVE exists to preserve the stories behind Nigeria's creative identity. We bring photographs, music, fashion, design and cultural memory into one accessible digital space — connecting generations and giving the next generation a deeper understanding of where our creativity comes from."

Include a short mission statement and a call to explore the collections.

Do not invent partnerships, institutional endorsements, awards, or historical credentials.

### G. Footer

Use a sophisticated dark footer.

Include:

- ARCHIVE wordmark.
- NIGERIA'S CREATIVE HISTORY MUSEUM.
- Navigation links.
- A short mission statement.
- Optional email signup UI only if implemented honestly and without pretending to store or send subscriptions.
- Social links only when real destinations are configured.

Closing statement:

"Our history is not a footnote — it's the foundation."

Use a consistent footer across desktop and mobile.

## 5. Imagery and Historical Accuracy

Imagery is central to this project.

Prioritize real, relevant photographs and visual references representing Nigeria's cultural history.

Useful subjects include:

- Historic Lagos streets and architecture.
- Nigerian Independence-era scenes.
- Everyday life, markets, portraits and early photography studios.
- Fela Kuti and the history of Afrobeat.
- Highlife, juju and other Nigerian musical traditions.
- Traditional and contemporary Nigerian clothing.
- Vintage Nigerian advertisements, posters, album artwork, book covers and furniture.

Use images from reputable archives, Wikimedia Commons, museums, or other sources whose usage terms can be verified.

For every real archival image, record the source and credit where available. Respect copyright and licensing conditions.

Do not present AI-generated historical scenes as genuine archival photographs. If generated or illustrative images are used, label them appropriately.

If an image cannot load, show a designed fallback rather than a broken image icon.

Use descriptive alt text for meaningful images and empty alt text for purely decorative images.

## 6. User Experience and Accessibility

The website must follow these principles:

**Clarity**
- Visitors should immediately understand what ARCHIVE is.
- Use concise descriptions and descriptive action labels.
- Avoid unexplained jargon.

**Consistency**
- Maintain consistent typography, colors, spacing, card patterns, button styles, and interaction behavior.
- Use reusable CSS classes and design tokens.

**Visual hierarchy**
- Give the hero the strongest visual impact.
- Make section headings, featured stories, collection cards, and calls to action easy to distinguish.
- Avoid excessive competing elements.

**Ease of use**
- Make the primary action obvious.
- Keep navigation predictable.
- Make all interactive elements behave as expected.
- Avoid unnecessary steps and distracting animations.

**Accessibility**
- Use semantic HTML5 landmarks and a logical heading order.
- Ensure keyboard navigation and visible focus indicators.
- Include a skip-to-content link.
- Label form controls and icon-only buttons.
- Use sufficient color contrast.
- Respect `prefers-reduced-motion`.
- Never communicate meaning through color alone.
- Ensure menus and story dialogs can be operated by keyboard.
- Keep tap targets comfortably sized, ideally around 44 × 44 CSS pixels.
- Do not autoplay audio or video.

## 7. Responsive Design

Use a mobile-first approach.

Support:
- Small phones from approximately 320px wide.
- Larger phones.
- Tablets.
- Laptops and desktop monitors.

Requirements:

- No horizontal page overflow.
- Responsive navigation.
- Images that preserve appropriate proportions.
- Cards that transition from one column on small screens to two or four columns as space permits.
- Readable typography and comfortable line lengths.
- Touch-friendly controls.
- Hero composition that adapts without obscuring the headline.
- Timeline behavior that works on touch screens.
- Reduced or simplified decorative effects on small screens where necessary.

Test at approximately 320px, 375px, 768px, 1024px, and 1440px widths.

## 8. JavaScript Functionality

Use simple, readable vanilla JavaScript with beginner-friendly comments.

Implement:

1. Responsive mobile menu with open/close behavior.
2. Smooth section navigation where appropriate.
3. Working collection cards and discipline filters.
4. Working story detail panels or modal views.
5. Timeline controls or responsive timeline interaction.
6. Functional close buttons and Escape-key handling.
7. Active navigation state where useful.
8. A back-to-top button if it improves usability.
9. Optional search only if it genuinely searches available content.

Avoid unnecessary libraries, complicated state management, fake loading screens, and interactions that exist only for decoration.

All visible buttons and links must have meaningful actions. Do not leave placeholder links such as `href="#"` without a proper implementation.

Use event listeners and straightforward functions. Ensure interactions do not break when the mobile menu, story views, or filters are used repeatedly.

## 9. Recommended File Structure

Create a simple structure:

ARCHIVE/
├── index.html
├── spec.md
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── images/
    └── icons/

Keep filenames clear and use lowercase names.

Do not create unnecessary files, install unnecessary packages, or introduce a build process. The page should work by opening `index.html` or using a lightweight local server.

## 10. Performance and Code Quality

- Optimize image sizes and use modern formats where practical.
- Set image width and height or aspect ratios to reduce layout shifts.
- Lazy-load below-the-fold images.
- Avoid excessive JavaScript and expensive animations.
- Use CSS variables for the design system.
- Keep HTML semantic and valid.
- Keep CSS organized by section.
- Use descriptive class and function names.
- Comment on important JavaScript logic in beginner-friendly language.
- Avoid duplicate styles and repeated code.
- Check the browser console for errors.
- Ensure all local file paths are correct.

Do not sacrifice core functionality for decorative effects.

## 11. Implementation Plan and Deadline

The deadline is 11:59 PM on the submission day. Work in the following order and prioritize a complete, reliable submission.

### Phase 1 — Inspect and establish the foundation
- Inspect the existing project before modifying it.
- Preserve useful work and avoid overwriting existing files unnecessarily.
- Create or verify the required folder structure.
- Implement semantic HTML and all major page sections.
- Confirm the page opens locally.

### Phase 2 — Build the visual design
- Establish the color palette, typography, spacing system, navigation and hero.
- Build the four collection cards.
- Add featured stories, timeline, About section and footer.
- Match the intended premium archival editorial aesthetic.

### Phase 3 — Implement interactions
- Add the mobile menu.
- Connect navigation and section links.
- Implement collection filtering and story detail views.
- Make timeline controls work if present.
- Verify all buttons and interactive states.

### Phase 4 — Responsive and accessibility testing
- Test the required viewport widths.
- Fix overflow, broken layouts, small tap targets and readability issues.
- Test keyboard navigation and visible focus.
- Check contrast, alt text, and reduced-motion behavior.

### Phase 5 — Final verification
- Open the website locally.
- Test every major interaction.
- Check the browser console and terminal for errors.
- Verify image loading and image credits.
- Remove broken links, empty buttons, placeholder text and obvious visual defects.
- Write a concise README with instructions to run the website.
- Summarize completed features, tests, and any remaining limitations.

## 12. Definition of Done

The project is ready to submit when:

- All required sections are present.
- The design looks polished, coherent, original and professional.
- The hero immediately establishes the ARCHIVE identity.
- Photography, Music, Fashion and Design are all represented.
- Historical imagery is relevant and responsibly credited.
- The page works on mobile, tablet and desktop.
- Navigation, collection interactions and story views work.
- No major layout overflow or broken image paths remain.
- Text is readable and interactive elements are accessible.
- There are no known critical JavaScript errors.
- The website can run locally without a backend.
- README instructions are included.

## 13. Instructions to the AI Developer

Act as a senior frontend designer and developer helping a beginner.

Read this entire specification before coding. Inspect the existing project and understand its current state before making changes.

Build a visually excellent website, not just a basic wireframe. Prioritize the reference design's editorial layout, archival imagery, typography, dramatic hero, cream and black contrast, and restrained heritage accents.

Work in small, verifiable steps. Test each major section and fix failures before continuing. Use simple HTML, CSS and vanilla JavaScript. Do not introduce frameworks or unnecessary dependencies.

If a feature threatens the deadline, finish the core website first and simplify that feature rather than leaving the entire project incomplete.

Do not stop after writing a plan or generating empty files. Implement the actual website, run the available checks, and report exactly what works and what still needs attention.

The final result should feel like a real digital museum celebrating Nigeria's creative legacy, built with care and ready for a competitive design submission.
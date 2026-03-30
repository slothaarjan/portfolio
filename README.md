# Aarjan Khatiwada — Personal Portfolio

![Demo Screenshot](https://raw.githubusercontent.com/slothaarjan/portfolio/main/assets/demo.png)

A sleek, **black‑and‑white** personal portfolio built with vanilla HTML, CSS, and JavaScript. It showcases my experience, education, a live "What I'm Doing Right Now" status, a weekly schedule, and a blog section. The site is packed with premium UI effects:

- Custom cursor with trailing ring
- Magnetic button hover
- Text‑scramble headline animation
- Interactive particle background
- 3‑D tilt cards
- Scroll‑reveal animations
- Glass‑morphism cards and subtle glow effects

## Live Demo

You can view the live version at: <https://slothaarjan.github.io/portfolio/> (once GitHub Pages is enabled).

## Features

| Feature | Description |
|---------|-------------|
| **Monochrome design** | Pure black & white palette with white glow accents |
| **Custom cursor** | White dot + ring that follows the mouse |
| **Particle grid** | Canvas of dots that react to cursor movement |
| **Text scramble** | Hero subtitle cycles through catchy phrases |
| **Magnetic buttons** | Buttons subtly pull toward the cursor |
| **3‑D tilt** | Experience, education, and blog cards tilt on hover |
| **Live status** | "What I'm Doing Right Now" section with live clock and activity cards |
| **Weekly schedule** | Grid‑based schedule that can be edited via a simple JS object |
| **Blog** | Card‑grid of blog posts driven by a JavaScript array |
| **Responsive** | Mobile‑friendly layout with a collapsible navigation menu |

## Screenshots

| Section | Screenshot |
|---------|------------|
| Blog | ![Blog section](https://raw.githubusercontent.com/slothaarjan/portfolio/main/assets/blog_section.png) |
| Schedule | ![Schedule section](https://raw.githubusercontent.com/slothaarjan/portfolio/main/assets/schedule_section.png) |
| Full demo | ![Full demo](https://raw.githubusercontent.com/slothaarjan/portfolio/main/assets/full_demo.webp) |

*The `assets/` folder contains the images used above.*

## Getting Started (Local Development)

1. **Clone the repo**
   ```bash
   git clone https://github.com/slothaarjan/portfolio.git
   cd portfolio
   ```
2. **Run a local server** (any static server will do). For example, using Python:
   ```bash
   python -m http.server 8080
   ```
   Then open <http://localhost:8080> in your browser.
3. **Edit content**
   - **Hero subtitle** – modify `SCRAMBLE_PHRASES` in `js/script.js`.
   - **"Now" section** – edit the `NOW_DATA` object in `js/script.js`.
   - **Blog posts** – add objects to the `BLOG_POSTS` array.
   - **Schedule** – update `SCHEDULE_DATA.events`.
   - **Styling** – tweak colors, fonts, or layout in `css/style.css` (variables at the top).
4. **Refresh** the page to see changes instantly – no build step required.

## Deployment (GitHub Pages)

1. Push your changes to the `main` (or `master`) branch.
2. In the GitHub repo, go to **Settings → Pages**.
3. Choose **Source** → `main` branch → `/ (root)` and click **Save**.
4. GitHub will publish the site at `https://<username>.github.io/portfolio/`.

## Customization

All dynamic data lives at the top of `js/script.js`. You can replace the placeholder arrays with real data or connect them to a headless CMS later.

## License

This project is licensed under the **MIT License** – feel free to fork, remix, and use it for your own portfolio.

---

*Built with love by Aarjan Khatiwada – a Computer Science student, AI enthusiast, and maker.*

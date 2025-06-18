# Euro Finishes Website

This is the official website for Euro Finishes, a luxury construction company in Miami specializing in European-influenced design.

## About Euro Finishes

European Design. Miami Luxury. Since 2007.

We bring European minimalist principles to Miami's most distinctive homes. No generic luxury. No contractor marketing speak. Just clean lines, exceptional materials, and the kind of restraint that makes a statement.

## Website Features

- **Single-page design** with smooth scroll animations
- **Video hero section** with Vimeo background
- **Responsive design** optimized for mobile, tablet, and desktop
- **SEO optimized** with structured data and social media tags
- **Performance focused** with hardware-accelerated animations
- **Clean, maintainable code** with separated CSS and JavaScript

## Technology Stack

- **HTML5** with semantic markup and accessibility features
- **CSS3** with custom properties, Grid, and Flexbox
- **Vanilla JavaScript** with Intersection Observer API
- **No frameworks** - lightweight and fast loading
- **Modern browser features** with graceful degradation

## Project Structure

```
/
├── index.html                      # Main website file
├── styles.css                      # External stylesheet with CSS custom properties
├── script.js                       # External JavaScript with modular animations
├── assets/                         # Static assets
│   ├── ef-logo-monogram.svg        # Navigation logo
│   ├── ef-logo.svg                 # Video overlay logo
│   ├── euro-kitchen.png            # Kitchen showcase image
│   └── favicon/                    # Favicon and app icons
│       ├── favicon.ico
│       ├── apple-touch-icon.png
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       ├── android-chrome-192x192.png
│       ├── android-chrome-512x512.png
│       └── site.webmanifest
├── Euro-Finishes-Website-Copy.md   # Content reference
└── CLAUDE.md                       # Development guidance
```

## Development

### Local Development

To view the website locally, simply open the `index.html` file in your browser:

```bash
# Open directly in browser
open index.html

# Or serve with a local server for better development experience
python -m http.server 8000
# Then visit http://localhost:8000
```

### Making Updates

The website is designed for easy maintenance:

- **Content updates**: Edit text directly in `index.html`
- **Style changes**: Modify `styles.css` (uses CSS custom properties for easy theming)
- **Animation adjustments**: Update `script.js`
- **Colors/spacing**: Update CSS custom properties in `:root` section of `styles.css`

### Key Animations

- **Auto-hiding navigation** that responds to scroll direction
- **Scroll-triggered animations** using Intersection Observer
- **Kitchen image reveal** with scroll-tied animation
- **SVG logo drawing animation** on desktop
- **Staggered card animations** with enhanced hover effects

## Browser Support

- Modern browsers supporting ES6+, CSS Grid, and Intersection Observer
- Graceful degradation for older browsers
- No build process required - works directly in any browser

## Contact

Euro Finishes  
223 NE 108th Street  
Miami, FL 33161  
Email: info@europff.com

---

Licensed & Insured | Florida Certified Residential Contractor  
© 2025 Euro Finishes. All rights reserved.
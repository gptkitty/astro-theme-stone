# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Open the website locally (single HTML file)
open index.html

# Or serve with a local server
python -m http.server 8000
# Then visit http://localhost:8000
```

## Architecture Overview

This is a single-page HTML website for Euro Finishes, a luxury construction company in Miami specializing in European-influenced design.

### Core Technologies
- **Pure HTML/CSS**: Single `index.html` file with embedded styles
- **Vanilla JavaScript**: No frameworks, just modern ES6+ features
- **CSS Grid & Flexbox**: Modern layout techniques
- **Intersection Observer API**: Scroll-triggered animations
- **CSS Transforms**: Hardware-accelerated animations

### Project Structure
```
/
├── index.html              # Main website file
├── Euro-Finishes-Logo.png  # Main logo (black/gray)
├── assets/                 # Static assets
│   ├── ef-logo-monogram.svg # Navigation logo
│   ├── ef-logo.svg          # Video overlay logo  
│   ├── euro-kitchen.png     # Kitchen showcase image
│   └── hero.webp           # Legacy hero image (not used)
├── Euro-Finishes-Website-Copy.md # Content reference
└── CLAUDE.md               # This file
```

### Key Features
- **Video Hero**: Vimeo background video with logo overlay
- **Scroll Animations**: Custom scroll-tied animations and intersection observer effects
- **Auto-Hide Navigation**: Hides on scroll down, shows on scroll up
- **Responsive Design**: Mobile-first with custom breakpoints (27vh/44vh/90vh video heights)
- **SEO Optimized**: Complete meta tags, structured data, and social media optimization

### Animation System
- **Scroll-Triggered**: Uses Intersection Observer for performance
- **Staggered Reveals**: Cards animate in sequence (100-150ms delays)
- **Custom Easing**: Cubic-bezier curves for natural motion
- **Hardware Accelerated**: CSS transforms and opacity for smooth 60fps

### Responsive Breakpoints
- **Mobile (default)**: 27vh video, single column layout, hidden logo animation
- **Tablet (768px+)**: 44vh video, still single column
- **Desktop (1024px+)**: 90vh video, two-column layout with animated logo

### Content Sections
1. **Video Hero**: Auto-playing Vimeo background with logo overlay (fades after 5s)
2. **Main Content**: Title + description with animated monogram logo (desktop only)
3. **Kitchen Showcase**: Scroll-tied image animation from right with subtle hover tilt
4. **About**: Company story and differentiators
5. **Services**: "Who We Work With" cards with enhanced hover effects
6. **Contact**: Business information with animated contact cards

### Logo Usage
- **Navigation**: `ef-logo-monogram.svg` (monogram version)
- **Video Overlay**: `ef-logo.svg` (full logo, black/gray colors)
- **Main Logo**: `Euro-Finishes-Logo.png` (not currently used)

### SEO Implementation
- **Structured Data**: Organization and LocalBusiness schemas
- **Open Graph**: Social media sharing optimization
- **Local SEO**: Miami-specific geographic and service area targeting
- **Meta Tags**: Comprehensive title, description, and keyword optimization

### Custom Animations
- **Kitchen Image**: Scroll-tied reveal from right (100px translateX) with hover tilt (1deg rotate)
- **Cards**: Scale + rotate + shadow depth on hover, staggered entrance animations
- **Navigation**: Auto-hide based on scroll direction with smooth transitions
- **Logo**: SVG line-drawing animation triggered by scroll intersection

### Browser Compatibility
- Modern browsers supporting ES6+, CSS Grid, and Intersection Observer
- Graceful degradation for older browsers
- No build process required - works directly in any browser
# 🎨 Visual Design Reference Guide

A comprehensive visual guide to the Wedding Photobook Express design system.

---

## 🎭 Color System

### Primary Colors
```
Primary Green (Deep)      #0f3d2e  ████████
Primary Dark              #0a2820  ████████
Primary Light             #1a5a42  ████████
```

**Usage:**
- Primary Green: Main brand color, headers, accent elements
- Primary Dark: Darker backgrounds, strong shadows
- Primary Light: Lighter accents, hover states

### Secondary Colors
```
Accent White              #ffffff  ████████
Accent Light              #f5f9f8  ████████
Light Background          #f0f4f3  ████████
```

**Usage:**
- White: Buttons, cards, high contrast
- Accent Light: Page backgrounds, soft fills
- Light Background: Secondary sections

### Text Colors
```
Text Dark                 #1a1a1a  ████████  (Headers, main text)
Text Light                #666666  ████████  (Secondary text, muted)
Text Muted                #999999  ████████  (Disabled, placeholder)
```

### Semantic Colors
```
Success Green             #27ae60  ████████
Warning Yellow            #f39c12  ████████
Error Red                 #e74c3c  ████████
Info Blue                 #3498db  ████████
```

---

## 🔤 Typography System

### Font Families

**Serif (Headers & Display)**
```
Font Stack: 'Georgia', 'Garamond', serif
Fallbacks: Any system serif font
Usage: h1, h2, h3, h4, .hero-title, .section-title
```

**Sans-Serif (Body & UI)**
```
Font Stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif
Fallbacks: System fonts for optimal performance
Usage: p, button, nav, body text
```

### Font Sizes

| Element | Size | Weight | Line-Height |
|---------|------|--------|-------------|
| h1 (Hero Title) | clamp(1.75rem, 10vw, 4.5rem) | 700 | 1.2 |
| h2 (Section) | clamp(1.5rem, 4vw, 3.5rem) | 600 | 1.3 |
| h3 | 1.5rem | 600 | 1.4 |
| h4, h5, h6 | 1.25rem | 600 | 1.4 |
| p (Body) | 1rem | 400 | 1.6 |
| p (Small) | 0.9rem | 400 | 1.6 |
| .hero-subtitle | 1.25rem | 400 | 1.6 |
| button | 1rem | 600 | 1 |

### Font Weight Hierarchy

```
700 (Bold)      - Hero titles, main headings
600 (Semi-bold) - Subheadings, button text
500 (Medium)    - Secondary headings, labels
400 (Regular)   - Body text, default weight
```

---

## 🎨 Component Design

### Buttons

#### Primary Button
```
Background: Linear gradient (#0f3d2e → #1a5a42)
Color: #ffffff
Padding: 1rem 2.5rem
Border-radius: 8px
Box-shadow: 0 8px 24px rgba(15, 61, 46, 0.12)
Font: 600 weight, 1rem size
Hover: translateY(-3px), stronger shadow
```

#### Secondary Button
```
Background: #ffffff
Color: #0f3d2e
Border: 2px solid #0f3d2e
Padding: 1rem 2.5rem
Border-radius: 8px
Box-shadow: 0 8px 24px rgba(15, 61, 46, 0.12)
Font: 600 weight, 1rem size
Hover: Background becomes #0f3d2e, color becomes white
```

#### Tertiary Button (Text Link)
```
Background: transparent
Color: #0f3d2e
Border: none
Padding: 0.5rem 1rem
Font: 600 weight
Hover: Underline, opacity increase
```

### Cards

#### Photo Card
```
Background: white
Border-radius: 16px
Box-shadow: 0 8px 24px rgba(15, 61, 46, 0.12)
Aspect-ratio: 3/4
Transition: all 0.3s ease
Hover: Scale 1.08, shadow increases, overlay appears
```

#### Decorative Card (Glass-morphism)
```
Background: rgba(15, 61, 46, 0.08)
Backdrop-filter: blur(20px)
Border: 1px solid rgba(15, 61, 46, 0.1)
Border-radius: 16px
Box-shadow: 0 16px 48px rgba(15, 61, 46, 0.15)
Animation: floatCard 6s infinite
```

### Forms (if added)

```
Input Height: 44px
Input Padding: 0.75rem 1rem
Border-radius: 8px
Border: 2px solid #e8f4f0
Focus: Border color #0f3d2e, shadow
Background: #ffffff
Font: 1rem sans-serif
```

---

## 🌊 Shadow System

### Shadow Levels

```
Shadow-SM (Subtle)
0 2px 8px rgba(15, 61, 46, 0.1)
Usage: Navbar, small UI elements

Shadow-MD (Medium)
0 8px 24px rgba(15, 61, 46, 0.12)
Usage: Cards, buttons, modals

Shadow-LG (Large)
0 16px 48px rgba(15, 61, 46, 0.15)
Usage: Hero elements, lightbox, prominent features
```

### Layered Shadows

```
Subtle Depth:
0 2px 4px rgba(15, 61, 46, 0.06),
0 4px 8px rgba(15, 61, 46, 0.08)

Medium Depth:
0 4px 8px rgba(15, 61, 46, 0.08),
0 8px 16px rgba(15, 61, 46, 0.12)

Strong Depth:
0 8px 16px rgba(15, 61, 46, 0.10),
0 16px 32px rgba(15, 61, 46, 0.15)
```

---

## 🎬 Animation System

### Timing Functions

```
Standard Smooth:
cubic-bezier(0.4, 0, 0.2, 1)
Description: Responsive, natural deceleration
Usage: Most transitions

Quick Response:
cubic-bezier(0.25, 0.1, 0.25, 1)
Description: Fast start, slower end
Usage: Button interactions

Elastic:
cubic-bezier(0.68, -0.55, 0.265, 1.55)
Description: Bouncy, playful
Usage: Entrance animations (use sparingly)

Ease-in-out:
ease-in-out
Description: Smooth both directions
Usage: Floating, cycling animations
```

### Duration Standards

```
Fast:       0.2s  - Quick micro-interactions (hover, focus)
Standard:   0.3s  - Normal transitions
Slow:       0.6s  - Image transitions, larger elements
Extended:   1s+   - Long-form animations (floating, cycling)
```

### Keyframe Animations

```
fadeInLeaf:     0.8s ease    (Leaf ornaments fade in)
floatLeaf:      6-8s ease    (Smooth floating motion)
slideUpIn:      0.6s ease    (Photos slide up and fade)
zoomIn:         0.3s ease    (Lightbox image zoom)
bounceArrow:    2s ease      (Scroll indicator bounce)
```

---

## 📐 Spacing System

### Base Unit: 0.25rem (4px)

```
Spacing Scale:
2px    = 0.125rem  (xs)
4px    = 0.25rem   (base)
8px    = 0.5rem    (1x)
12px   = 0.75rem   (1.5x)
16px   = 1rem      (2x)
24px   = 1.5rem    (3x)
32px   = 2rem      (4x)
48px   = 3rem      (6x)
64px   = 4rem      (8x)
```

### Padding & Margin Examples

```
Button Padding:           1rem 2.5rem
Card Padding:             1.5rem
Section Padding:          6rem 2rem
Gallery Gap:              2rem
Small Element Gap:        0.75rem
Large Element Gap:        3rem
```

---

## 🎭 Border Radius System

```
Sharp:              0px    (minimal, geometric)
Subtle:             4px    (slight softness)
Rounded:            8px    (standard rounded)
Extra Rounded:      16px   (cards, prominent elements)
Fully Rounded:      50%    (circles, badges)

Usage:
- Buttons:          8px
- Cards:            16px
- Input Fields:     8px
- Icons (small):    50%
- Hero Elements:    16px
- Modals:           8px
```

---

## 📏 Responsive Breakpoints

### Mobile-First Approach

```
0px - 480px:        Mobile (1 column)
480px - 768px:      Tablet (2-3 columns)
768px - 1024px:     Desktop (3-4 columns)
1024px - 1400px:    Wide Desktop (4-5 columns)
1400px+:            Max-width container
```

### Responsive Typography

Uses CSS `clamp()` for fluid scaling:

```
clamp(min-size, preferred-size, max-size)

Examples:
clamp(1.75rem, 10vw, 4.5rem)   - Hero title
clamp(1rem, 4vw, 2rem)          - Section title
clamp(0.9rem, 2.5vw, 1.25rem)  - Subtitle
```

---

## 🎨 Color Combinations (Pre-defined Themes)

### Default: Green & White
```
Primary:  #0f3d2e (Deep green)
Accent:   #ffffff (White)
Light:    #f5f9f8 (Soft white-green)
```

### Alternative: Navy & Gold
```
Primary:  #1a3a52 (Navy)
Light:    #4a6fa5 (Medium navy)
Accent:   #fef9f0 (Warm cream)
```

### Alternative: Rose & Cream
```
Primary:  #a8697a (Muted rose)
Light:    #c4a9b8 (Lighter rose)
Accent:   #faf8f6 (Warm cream)
```

### Alternative: Blush & Gray
```
Primary:  #d4a5a5 (Soft blush)
Light:    #e8c4c4 (Light blush)
Accent:   #f0f4f3 (Cool gray-white)
```

---

## 🌙 Dark Mode Design

### Dark Mode Color Scheme

```
Background:       #0a0a0a (Deep black)
Secondary BG:     #1a1a1a (Dark gray)
Text Primary:     #f5f5f5 (Light gray)
Text Secondary:   #b0b0b0 (Medium gray)
Accent:           #1a5a42 (Lighter green)
```

### Contrast in Dark Mode

- Text on dark: Use lighter shades (#e0e0e0, #f5f5f5)
- Shadows soften: Use lighter opacity values
- Backgrounds reduce contrast: Dark on dark
- Cards use subtle borders instead of shadows

---

## ♿ Accessibility Colors

### WCAG AA Compliance

**Minimum contrast ratio: 4.5:1 for normal text**

```
#0f3d2e on #ffffff:    13.9:1 ✅ Excellent
#0f3d2e on #f5f9f8:    12.1:1 ✅ Excellent
#666666 on #ffffff:    7.1:1  ✅ Excellent
#666666 on #f5f9f8:    6.3:1  ✅ Good
```

### Color Not Only

- Links underlined, not just colored
- Buttons have shape + color
- Errors use icon + color + text
- Status messages include text, not just color

---

## 📱 Mobile Considerations

### Touch Target Sizes
```
Minimum tap target: 44x44px
Ideal button size:  48x48px
Minimum padding:    8px
```

### Mobile Typography
```
Minimum font size: 16px (prevents auto-zoom)
Line spacing:      1.5 or greater
Paragraph width:   < 65 characters
```

### Mobile Layout
```
No horizontal scroll
Single column on phones
Touch-friendly spacing
Large tap targets
Readable without zoom
```

---

## 🔍 Design Inspection Checklist

- [ ] All colors match the palette
- [ ] Typography weights consistent
- [ ] Spacing follows the system
- [ ] Shadows appropriate for elevation
- [ ] Border radius matches component type
- [ ] Animations smooth and purposeful
- [ ] Hover states clearly visible
- [ ] Focus states visible and accessible
- [ ] Mobile layout responsive
- [ ] Dark mode colors correct
- [ ] No missing or broken elements
- [ ] Whitespace adequate and balanced

---

## 🎯 Design Philosophy

**Key Principles:**

1. **Elegance over Complexity** - Clean, uncluttered design
2. **Nature-Inspired** - Green palette, organic flows
3. **Accessibility First** - Inclusive design for all
4. **Performance** - Beautiful without bloat
5. **Responsive** - Works everywhere
6. **Timeless** - Won't feel dated quickly
7. **Emotional** - Creates feelings of joy and elegance
8. **Functional** - Form follows function

---

## 📚 Design Tools Used

- **CSS Gradients** - Smooth color transitions
- **CSS Grid & Flexbox** - Modern layout system
- **CSS Animations** - Smooth motion
- **SVG** - Scalable leaf ornaments
- **Glass-morphism** - Frosted glass effects
- **Box Shadows** - Depth and elevation
- **CSS Custom Properties** - Centralized theming

---

## 🎨 Design Inspiration

- Modern wedding photography portfolios
- Apple's minimalist design language
- Nature-inspired UI trends
- Glass-morphism effects (neumorphism)
- Contemporary event design
- Elegant hospitality interfaces

---

Made with 🎨 for beautiful design  
Wedding Photobook Express Design System v1.0

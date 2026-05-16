---
name: Premium High-Altitude Rental System
colors:
  surface: '#faf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#faf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e8'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#5a4136'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#8e7164'
  outline-variant: '#e2bfb0'
  surface-tint: '#a04100'
  primary: '#a04100'
  on-primary: '#ffffff'
  primary-container: '#ff6b00'
  on-primary-container: '#572000'
  inverse-primary: '#ffb693'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#5f5e5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#9a9999'
  on-tertiary-container: '#313131'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb693'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7a3000'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e4e2e2'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#faf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e3e2e2'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  container-max: 1280px
---

## Brand & Style
The design system embodies the spirit of high-altitude adventure refined for a premium Indian market. It balances "Mountain-born" ruggedness with urban sophistication, utilizing a **Corporate-Modern** foundation infused with **High-Contrast** energy. 

The aesthetic is characterized by expansive whitespace, bold color blocking, and a sense of "upward" motion. Every interaction should feel trustworthy and powerful, yet effortless. The visual narrative relies on the tension between the energetic Primary Orange and the grounded Secondary Black, set against a warm, approachable background.

## Colors
The palette is dominated by a high-octane Primary Orange, representing energy and the sun over the peaks. 

- **Primary (#FF6B00):** Used for critical calls to action and active states. It should be used sparingly but boldly to guide the eye.
- **Secondary (#111111):** Provides the grounded, premium feel. Used for headlines and heavy UI containers.
- **Surface Accents (#FFF3E8):** A warm cream used for section backgrounds and card interiors to soften the high-contrast transitions and prevent visual fatigue.
- **Neutral Palette:** Grayscale tones are kept warm to maintain the "mountain-born" organic feel, avoiding cold blue-grays.

## Typography
The design system utilizes **Inter** exclusively to ensure maximum legibility and a systematic, modern appearance. 

The hierarchy is built on tight tracking (letter-spacing) for large headlines to create a "dense," impactful look, while body text remains airy. For "Mountain-born" impact, use `headline-xl` sparingly in hero sections. Use `label-sm` with increased letter spacing for small metadata and category tags to maintain a premium editorial feel.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to maintain a controlled, editorial structure, transitioning to a fluid model for mobile.

- **Desktop (1280px+):** 12-column grid with 24px gutters. Use 80px side margins to create a focused "stage" for the vehicle photography.
- **Three-Column Grids:** Used for vehicle listings and feature highlights, ensuring each card has significant breathing room.
- **Split Hero:** A 50/50 vertical split on desktop. The left side typically contains the "warm cream" background with bold typography, while the right side features high-resolution, full-bleed vehicle photography.
- **Rhythm:** All spacing (padding, margins) should be multiples of 8px to maintain a strict visual cadence.

## Elevation & Depth
This design system uses **Ambient Shadows** to create a sense of lightness and "float." Surfaces do not feel heavy; they feel suspended.

- **Floating Cards:** Use ultra-soft, wide-dispersion shadows (e.g., 0px 20px 40px rgba(0,0,0,0.04)). This suggests the vehicle is "above the road" and premium.
- **Tonal Layers:** Elevation is also communicated through color. The Warm Cream (#FFF3E8) acts as a mid-level surface, while White (#FFFFFF) acts as the highest level (active cards/modals).
- **Glassmorphism:** Use subtle backdrop blurs (12px-20px) on navigation bars and floating action menus to maintain context of the underlying "mountain" imagery.

## Shapes
The shape language is defined by **Rounded** containers and **Pill-shaped** interactive elements. 

- **Containers:** Standard cards and imagery containers use a radius of 1.5rem (24px) to create a friendly, approachable shell.
- **Interactive Elements:** Buttons and tags must always be fully pill-shaped (rounded-full). This contrasts with the sharp, bold typography and creates a distinct "touch-friendly" signature.
- **Image Treatment:** Vehicle images should always follow the container radius or be clipped into organic, rounded shapes for "floating" mockup effects.

## Components

- **Buttons:** Primary buttons are pill-shaped, using the Primary Orange background with White text. Hover states should involve a slight vertical lift (shadow enhancement) rather than a color shift.
- **Input Fields:** Use the Warm Cream background with a subtle 1px border (#EEEEEE). On focus, the border transitions to Primary Orange.
- **Floating Mockup Cards:** Vehicle cards used in the hero or feature sections should have no borders, relying entirely on the ambient shadow for definition.
- **Chips/Tags:** Small, pill-shaped indicators using Secondary Black for the text and a light version of the Primary Orange or Warm Cream for the background.
- **Cinematic Transitions:** Components should enter the viewport using "Staggered Fade-Ins" and "Subtle Scale-Ups." Images should have a slow-zoom effect (Ken Burns) to emphasize the "Mountain-born" grandeur.
- **Lists:** Clean, horizontal dividers using the Border Color (#EEEEEE), with ample vertical padding (24px+) between items to maintain the premium whitespace.
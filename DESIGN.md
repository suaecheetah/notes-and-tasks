---
name: Notes & Tasks
description: A tactile, open-ended workspace for creative pioneers.
colors:
  primary: "oklch(0.5 0.15 220)"
  primary-hover: "oklch(0.45 0.15 220)"
  neutral-bg: "oklch(0.98 0.005 220)"
  neutral-surface: "oklch(1 0.005 220)"
  neutral-border: "oklch(0.9 0.01 220)"
  text-main: "oklch(0.2 0.01 220)"
  text-muted: "oklch(0.5 0.01 220)"
typography:
  body:
    fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.5
rounded:
  md: "16px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "0 24px"
  card-task:
    backgroundColor: "{colors.neutral-surface}"
    rounded: "{rounded.md}"
---

# Design System: Notes & Tasks

## 1. Overview

**Creative North Star: "The Endless Colorful Canvas"**

This system is built for visual thinkers and pioneers. It pairs the rigid organization of a checklist with the boundless freedom of an infinite whiteboard. The aesthetic is tactile, helpful, and creative—feeling like an inspiring workspace rather than a rigid management tool. It explicitly rejects generic corporate patterns and sterile SaaS interfaces. 

**Key Characteristics:**
- Structure meets freedom.
- Creator-first and visually fluid.
- Ready to be cleaned and armed for what comes next.

## 2. Colors

A cool, restrained palette anchored by a single, vibrant creative accent. 

### Primary
- **Creator's Cobalt** (oklch(0.5 0.15 220)): The singular focal point of the interface. Used for primary actions, active states, and drawing attention.

### Neutral
- **Studio White** (oklch(1 0.005 220)): The crisp surface color for cards and canvases.
- **Cool Canvas** (oklch(0.98 0.005 220)): The slightly tinted background color that grounds the application.
- **Ink Main** (oklch(0.2 0.01 220)): The primary text color, slightly softer than pure black.
- **Ink Muted** (oklch(0.5 0.01 220)): Used for secondary text, placeholders, and subtle borders.

**The Personalization Rule.** The system must support deep personalization, allowing the user to override "Creator's Cobalt" with their own theme color via a color wheel, while maintaining contrast.

## 3. Typography

**Body Font:** Outfit (with system-ui fallback)

**Character:** Clean, structural, and highly distinct geometric sans-serif that breathes personality and creative intent into the interface, avoiding the sterile feeling of standard UI fonts.

### Hierarchy
- **Headline** (700, 2.5rem, 1.2): Page titles and major section headers.
- **Title** (500, 1.1rem, 1.5): Task titles and interactive element labels.
- **Body** (400, 1rem, 1.5): Standard text input and descriptions.

**The Content-First Rule.** Typography should never compete with the user's whiteboard creations. Keep font weights deliberate and line-lengths comfortable (65-75ch).

## 4. Elevation

The system is flat-by-default, layered-by-action. Depth only appears when the user interacts or when a task expands to reveal its canvas.

### Shadow Vocabulary
- **Action Lift** (`box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05)`): Appears under a task card when it expands to reveal the whiteboard.

**The Flat-by-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to state (hover, elevation, focus).

## 5. Components

Components are tactile and playful. Once used, they are ready to be cleaned and armed for what comes next.

### Buttons
- **Shape:** Softly rounded (16px radius).
- **Primary:** Creator's Cobalt background, white text.
- **Hover:** Slight background darkening and a subtle upward lift (`transform: translateY(-2px)`).

### Cards (Task Items)
- **Corner Style:** 16px radius.
- **Background:** Studio White.
- **Border:** 1px subtle Cool Canvas tint, shifting to Creator's Cobalt on interaction.
- **Interaction:** Expanding the card reveals the whiteboard with a smooth opacity and height transition.

### Inputs
- **Style:** Transparent background, inheriting the card's color.
- **Focus:** Sharp Creator's Cobalt border and a soft glow ring (`box-shadow: 0 0 0 3px ...`).

## 6. Do's and Don'ts

### Do:
- **Do** ensure that the whiteboard canvas has plenty of breathing room to support open-endedness.
- **Do** make interactions feel tactile and responsive (e.g., slight `translateY` on hover).
- **Do** maintain sufficient contrast and legibility across all custom color choices.

### Don't:
- **Don't** make the interface look like a generic corporate business website or sterile B2B SaaS tool.
- **Don't** use overly formal, rigid, or highly-constrained layouts.
- **Don't** animate CSS layout properties like width or height directly without care, prefer transforms or opacity.

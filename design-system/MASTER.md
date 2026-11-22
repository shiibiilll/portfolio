# Design System: Shibil Portfolio

**Project**: Shibil Personal Portfolio & Engineering Case Studies  
**Skill**: ui-ux-pro-max  
**Archetype**: Motion-Driven + Modern Architectural Minimalism  
**Landing Pattern**: Storytelling-Driven + Case Study Showcase  
**Stack**: React 19 + Tailwind CSS v4 + Motion  

---

## 1. Core Visual Identity & Color System

### Aesthetic Philosophy
- **Style**: Sophisticated Multi-Tonal Luxury Tech. Balanced, purposeful, and distinctive without becoming a noisy rainbow.
- **Atmospheric Canvas**: Midnight Indigo & Deep Obsidian (`#090C15` to `#0D1220`) replacing flat neutral black.
- **Primary Brand Accent**: **Electric Royal Indigo** (`#6366F1` / `#4F46E5` / `#818CF8`). Communicates architectural authority and software engineering precision.
- **Secondary Warm Accent**: **Radiant Amber & Gold** (`#F59E0B` / `#FBBF24`). Provides warmth, conversion clarity, and metric emphasis.
- **Supporting Contextual Accents**:
  - **Clinical Emerald & Sage** (`#10B981` / `#34D399`): Live system telemetry & healthcare systems (WellnessWay).
  - **Glacier Cyan & Sky** (`#0EA5E9` / `#38BDF8`): Mobile architectures (React Native) & spatial engineering.
  - **Warm Gold & Coral** (`#EAB308` / `#F43F5E`): Commercial client showcases.

---

## 2. Color Tokens & Theme Hierarchy

| Role | Token / Hex | Usage |
|---|---|---|
| **Canvas / Base** | `#090C15` | Deep midnight indigo tinted canvas |
| **Canvas Subtle** | `#0D1220` | Subtle section contrast |
| **Surface Card** | `rgba(16, 22, 38, 0.75)` | Panel backgrounds with 16px backdrop blur |
| **Surface Card Hover** | `rgba(21, 29, 50, 0.85)` | Elevated surface state |
| **Border Hairline** | `rgba(99, 102, 241, 0.15)` | Primary structural grid and card perimeters |
| **Border Active** | `rgba(99, 102, 241, 0.35)` | Hover, active tabs, and focus indicators |
| **Primary Accent** | `#6366F1` (Indigo 500) | Primary CTA buttons, active tabs, monogram |
| **Secondary Accent**| `#F59E0B` (Amber 500) | Telemetry accents, metrics, status badges |
| **Telemetry Live** | `#10B981` (Emerald 500)| Real-time production status pulse |
| **Text Heading** | `#F8FAFC` (Slate 50) | High-contrast editorial display copy |
| **Text Body** | `#CBD5E1` (Slate 300) | High-legibility narrative paragraphs |
| **Text Muted** | `#94A3B8` (Slate 400) | Secondary metadata and specifications |

---

## 3. Typography Scale

- **Display Headings**: `Bricolage Grotesque`, sans-serif (Weights 600, 700, 800)
- **Body & Editorial**: `DM Sans`, sans-serif (Weights 400, 500, 600)
- **Technical Specs**: `JetBrains Mono`, monospace (Weights 400, 500, 600)

---

## 4. UI/UX Rules & Guidelines

1. **Touch Targets**: Minimum 44x44px (`min-h-[44px] min-w-[44px]`) touch targets with explicit `cursor-pointer`.
2. **Stable Transitions**: Hover transitions use 150–250ms duration without layout shifting.
3. **Responsive Breakpoints**: Mobile (320px–640px), Tablet (641px–1024px), Desktop (1025px–1440px+).
4. **Accessibility (WCAG)**: Contrast ratios exceed 4.5:1 across all text nodes; `:focus-visible` outline supported.
5. **No Layout Shift**: Explicit aspect ratios (`aspect-[16/10]`, `aspect-[4/5]`) and `loading="lazy"`.

# The Improv Hub — Project Context for Claude Code

## What We're Building

An interactive website/resource hub that teaches teens (middle and high school) the basics of improvisational comedy. It has three main features:

1. **Six learning modules** — short, self-paced lessons about improv concepts
2. **A games library** — browsable collection of 20+ improv games with rules, filtering, and a random game feature
3. **AI-powered game play** — students can play certain improv games with Claude as their scene partner via the Anthropic API

This is NOT a linear course. It's a handbook/resource that students can browse freely, jump into any module, revisit games, and play with AI anytime.

## Site Structure

- Persistent left sidebar navigation (always visible on desktop, collapsible on mobile)
- Main content area to the right of the sidebar

### Sidebar Navigation
```
Improv Hub (logo/title in yellow, serif font)

MAIN
  Home (active state)
  Games library

MODULES
  1. Getting silly (orange dot)
  2. Yes, and (yellow dot)
  3. Characters (teal dot)
  4. Scenes (red dot)
  5. Comedy patterns (green dot)
  6. Sketch comedy (orange dot)

PLAY
  Random game
  Play with AI

---
Quick reference (at bottom, separated by divider)
```

### Pages
```
├── Home (landing page)
├── Module 1: Getting Comfortable Being Silly
├── Module 2: Yes, And & Improv Games
├── Module 3: Characters & Comedy
├── Module 4: Scenes & Storytelling
├── Module 5: Comedy Patterns & Tips from the Pros
├── Module 6: Sketch Comedy
├── Games Library (browse/filter/search all games)
└── Quick Reference
```

## Homepage Layout (top to bottom)

### Hero Section
- Dark navy background (#1B1B2F gradient)
- "WELCOME TO" in small teal text
- "The Improv Hub" in large yellow serif font
- Subtitle: "Learn the basics of improv, play games with an AI scene partner, and find your next favorite improv game."
- Three buttons: "Start learning" (orange #F45B26), "Browse games" (teal #03AED2), "Play with AI" (yellow #F8DE22)

### Learn Improv Section
- "Learn improv" heading
- 3x2 grid of module cards
- Each card: white background, neutral gray border (#e0e0e0), rounded corners
- "Module X" label in that module's color
- Title in dark text (#1B1B2F)
- Description in gray (#6B6B8D)
- Tinted badges for game count and time estimate (tinted background matching module color)

### Games Library Section
- "Games library" heading in serif font, with "View all games →" link in teal
- "FEATURED GAMES" subheading
- 2x2 grid of featured game cards (AI-playable games) with yellow "Play with AI" badges
- Filter tags row: All, Warm-ups, Yes and, Characters, Scenes, Comedy, Solo-friendly, Play with AI
- 4-column grid of additional game cards (smaller, simpler)

### Random Game Section
- Dark navy background (#1B1B2F) banner
- "Feeling spontaneous?" in yellow
- "We'll pick a random improv game for you." in teal
- Orange "Random game" button

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Navy (dark) | #1B1B2F | Sidebar bg, hero bg, footer banner |
| Yellow | #F8DE22 | Logo, "Play with AI" badges, primary accent |
| Orange | #F45B26 | Module 1, "Start learning" button, "Random game" button |
| Teal | #03AED2 | Module 3, "Browse games" button, links |
| Red | #D12052 | Module 4 |
| Green | #2A9D8F | Module 5 |
| Deep Orange | #F3722C | Module 6 |
| Soft Teal | #A8DADC | Sidebar secondary text |
| Off-white | #FFFDF7 | Page background |
| Dark text | #1B1B2F | Headings, card titles |
| Gray text | #6B6B8D | Descriptions, secondary text |
| Light gray | #e0e0e0 | Card borders |

Module 2 uses yellow (#F8DE22) but with darkened text (#B8A000) for readability on white backgrounds, and a light tint (#FFFDE6) for badge backgrounds.

## Module Pattern

Every module follows this repeating flow:

1. **Short lesson** — a few rules or tips about the concept. Concise, not lecture-y. Use interactive content blocks (tabs, accordions, expandable cards) to keep it skimmable.
2. **Examples in action** — video clip when possible (YouTube embeds). Placeholder slots for now.
3. **Game spotlight** — introduce 1-2 improv games. Teach the rules clearly with step-by-step guides.
4. **Play with AI** — student plays the spotlighted game with Claude as their improv partner. Some games are chat-based (free text), some are choice-based (AI generates options, student picks). Powered by Anthropic API.
5. **Reflection** — short, optional prompt about how the game went.

## Module Content Outline

### Module 1: Getting Comfortable Being Silly
- Concepts: What improv is, rules of improv, mistakes are okay, confidence and commitment
- Topics: What improvisation means, why improv is funny, listening and collaboration
- Games: Name + Action, Repeat After Me, Sound Ball, Back in My Day
- Video: Whose Line Is It Anyway, Studio C clips

### Module 2: Yes, And & Improv Games
- Concepts: Accepting ideas, building on others' ideas, collaboration
- Topics: What Yes And means, supporting scene partners, how improv games work
- Games: Yes And scenes, 5 Things, What Are You Doing?, Two Letters Game, Fortunately/Unfortunately, Thank You Mom and Dad

### Module 3: Characters & Comedy
- Concepts: Physical comedy, character exaggeration, voice and movement
- Topics: How comedians create characters, why exaggerated characters are funny, playing emotions
- Games: Character Switch, Character Interviews, Emotion Walk, Pop-Up Storybook

### Module 4: Scenes & Storytelling
- Concepts: Listening and reacting, scene setup, scene development
- Topics: Starting a scene, adding details, building a funny story
- Games: Freeze Tag, Columns, Story Director, Experts Panel, Press Conference

### Module 5: Comedy Patterns & Tips from the Pros
- Concepts: Escalation, repetition, comedy patterns
- Topics: How jokes build, why repetition is funny, timing and reactions
- Games: Half-Life, Good/Bad/Worse, Mega Replay, Slogans, Rap Battle

### Module 6: Sketch Comedy
- Concepts: Sketch structure, funny situations, character-driven comedy
- Topics: What sketch comedy is, how sketches are written, SNL and Studio C examples
- Formula: Funny situation + strong characters + escalation

## AI Game Play — Interaction Types

### Chat-based (free text back and forth):
- Yes, And Scenes — student and AI build a scene together
- Fortunately/Unfortunately — alternating sentences
- Character Interview — AI plays a character, student interviews (then swap)
- Back in My Day — increasingly absurd nostalgic statements

### Choice-based (AI generates options, student picks):
- Good/Bad/Worse — AI gives scenario, student picks escalating responses
- Freeze Tag — AI describes scene, student picks when to freeze and start new scene
- What Are You Doing? — AI presents action, student picks mismatched answer

### Design principles for AI play:
- Each game session has a clear start, a few rounds, and a natural ending
- Multiple approaches can work — this is improv, not a quiz
- Feedback is encouraging and specific — explains what happened, not "correct/incorrect"
- Include "play again" or "try a different game" options
- No scores or grades

## Technical Specs

- **Stack:** HTML, CSS, vanilla JavaScript. No frameworks or build tools.
- **Hosting:** GitHub Pages at wendyhollandking.github.io/the-improv-hub
- **API:** Anthropic API for AI game play (user enters API key at session start)
- **Browser support:** Chrome (school Chromebooks), Safari (iPads, phones). Must work on mobile.
- **Accessibility:** Keyboard navigable, sufficient color contrast, alt text on images
- **Performance:** Fast load on school Wi-Fi, no heavy assets, no external dependencies that could be blocked by school firewalls

### File Structure
```
the-improv-hub/
├── index.html              # Homepage
├── style.css               # Global styles
├── modules/
│   ├── module1.html
│   ├── module2.html
│   ├── module3.html
│   ├── module4.html
│   ├── module5.html
│   └── module6.html
├── games/
│   ├── library.html        # Full games library page
│   └── games-data.js       # Game definitions (name, rules, category, player count, AI-playable)
├── play/
│   └── ai-play.html        # AI game play interface
├── reference.html           # Quick reference page
├── js/
│   ├── navigation.js        # Sidebar nav, routing, mobile menu
│   ├── games.js             # Game library filtering, random game, search
│   ├── ai-engine.js         # Anthropic API integration for game play
│   └── interactions.js      # Tabs, accordions, expandable content blocks
├── assets/
│   └── images/
├── CLAUDE.md                # Project-specific Claude Code context
└── README.md
```

## Build Plan

### Phase 1: Foundation (current)
- Set up repo and file structure
- Build global styles (color variables, typography, card styles, button styles)
- Build the sidebar navigation
- Build the homepage with all sections
- Make it responsive (sidebar collapses on mobile)

### Phase 2: Module Template + Module 1
- Build the repeating module layout (lesson → video → game guide → AI play → reflection)
- Create Module 1 with full content
- Build interactive content blocks (tabs, accordions, expandable cards)

### Phase 3: AI Game Play
- Build the API integration layer
- Build the chat-based game interface
- Build the choice-based game interface
- Implement one game of each type (e.g., Yes And Scenes for chat, Good/Bad/Worse for choice)

### Phase 4: Games Library
- Build the games data structure
- Build the library page with filtering
- Build the random game feature
- Populate with all games

### Phase 5: Remaining Modules + Polish
- Build Modules 2-6 using the template
- Responsive testing
- Accessibility review
- Deploy to GitHub Pages

## Voice and Tone

The site speaks directly to teens. Playful, encouraging, and a little irreverent — like a fun teacher who doesn't take themselves too seriously. Learning moments are short and sweet, never preachy. The vibe is "your cool improv instructor's personal website" not "corporate eLearning platform."

## Build Notes for Claude Code

- Never convert HTML files to Markdown
- Never reorganize or rename the file structure without asking
- Keep HTML readable, well-indented, and semantic
- CSS goes in style.css (global) — no inline styles, no per-page `<style>` tags
- Vanilla JavaScript only — no frameworks
- Comment code so Wendy can understand what it does and why
- Prefer simple, readable solutions over clever ones

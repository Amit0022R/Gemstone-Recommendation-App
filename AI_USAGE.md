# PART 1: SHORT PROJECT NOTES

### Why This Tech Stack?
* Framework: Next.js 16 (App Router with Turbopack)
  - Why: Fast development speeds, easy routing, and clean handling of rendering layouts.
* Language: TypeScript (Strict Mode)
  - Why: Fixes data type bugs before deployment and ensures components speak to each other correctly.
* Styling & Motion: Tailwind CSS & Framer Motion
  - Why: Gives a clean, minimalist UI design with micro-interactions without messing up page layouts.

### How I Structured the Code (Architecture)
Instead of putting everything into a single massive file, I split the project into specialized, small files:
* App Directory handles the page routing layers: `app/page.tsx` for input and `app/result/page.tsx` for calculations.
* Custom layout components live completely separate: `BackgroundOrbs.tsx` for canvas effects, `MetricBanner.tsx` for real-time status UI, and `GemstoneCard.tsx` to display individual card items.
This prevents code clutter and makes it incredibly easy to debug or add new features later.

### Engineering Assumptions & Trade-offs
1. No External Database & Auth (Deliberate Choice):
   - Given the strict time limit of this challenge, spending hours setting up standard MongoDB connections or third-party login forms (like Clerk) has very low engineering value.
   - The Trade-off: I assumed user inputs can be safely carried over via URL parameters (?zodiac=X&concern=Y). This allowed me to do all sorting computations natively in-memory on the client layer using simple arrays. The result? Zero database network delays and instant 0ms display execution.
2. Crash Protection: Production data feeds can be random or incomplete. I added simple fallback checkers (like gem.rarity || 3) to make sure the front-end layout never breaks or crashes, no matter what backend data comes in.
3. Native Print System: Instead of bloat-loading heavy external PDF generation libraries, I used Tailwind's utility rules (like print:hidden) so that pressing "window.print()" instantly outputs a clean, minimal physical paper report.

### Future Improvements
* Session Authentication: Move route-param data serialization into a proper NextAuth.js setup using secure JWT state signatures.
* Database Layer: Attach a solid relational database (PostgreSQL using Prisma) combined with a Redis cache map to log historical search analytics.

---

# PART 2: AI_USAGE.md (AI Usage Declaration)

This file explains exactly how AI assistance was used during the development of this repository.

### Tools Used
* Gemini / ChatGPT (Large Language Models)

### Where AI Helped
To speed up development and beat the deadline, I used AI tools specifically for:
1. Fast Setup: Generating basic Tailwind configuration properties and Next.js base page templates.
2. UI Styling Tweaks: Fine-tuning component color tokens, frosted-glass effects, and grid alignments.
3. Data Matrix Arrays: Structuring the astrological key-value pairs into a clean TypeScript mock dataset quickly.

### Where I Overrode AI (Human Decisions)
While the AI helped with boilerplate code and formatting, all core architecture choices were made entirely by me:
* Code Splitting: I chose to separate visual styling components from state controllers to maintain proper structure.
* Hydration Control: I manually implemented the Next.js <Suspense /> layout around the search hooks to ensure the dynamic results page handles asynchronous tracking safely.
* Feature Focus: I consciously prioritized execution speed, UI responsiveness, and runtime data fallbacks over template authentication or empty databases to deliver a genuinely working solution before the timer ran out.
# AI Usage Declaration

This document explicitly details the utilization of AI tooling during the development of the Vedic Gemstone AI Recommender system.

## Tools Utilized
* Gemini / ChatGPT (Large Language Models)

## Scope of AI Leveraging
AI assistance was selectively leveraged to optimize execution speed in the following areas:
1. Boilerplate Integration: Accelerating Tailwind CSS configurations and Next.js App Router initializations.
2. Contextual Layout Revamping: Assisting with light-shade, high-contrast structural tokens for SaaS dashboard aesthetics.
3. Data Mapping Structuring: Mapping astrological key-value pairs into structured TypeScript mock data arrays.

## Engineering Oversight & Human Decisions
All critical system design decisions were architected entirely by the developer:
* Separation of Concerns: Decoupled the evaluation logic from the visual entry layer handlers.
* Modular View Architecture: Isolated specialized layout units (BackgroundOrbs, MetricBanner) from the main state coordinator.
* Modern Ingestion Patterns: Implemented Next.js Suspense framework manually around client-side parameter indexing.
* Scope & Resource Management: Intentionally used optimized client-side array operations (Array.prototype.sort) to minimize server overhead within the strict deadline.

---

# Vedic Gemstone AI Recommender

An automated, AI-augmented Micro-SaaS framework built with Next.js 16 and Tailwind CSS. The application processes user astrological identities paired with core lifestyle vectors to compute, sort, and prescribe metaphysical gemstone remediation layouts.

## Project Folder Directory Tree
├── app/
│   ├── page.tsx               # Root Entry Controller Gateway
│   └── result/
│       └── page.tsx           # Dynamic Parameter Extraction Hub
├── components/
│   ├── BackgroundOrbs.tsx     # Hardware-accelerated Canvas Mesh Particles
│   ├── MetricBanner.tsx       # Live Micro-telemetry Status Block
│   ├── ResultHeader.tsx       # State Actions & Export Control Modulators
│   ├── GemstoneCard.tsx       # Isolated Entity Viewport Data Renderer
│   └── ResultSkeleton.tsx     # Isolated Hydra-loader Spinning View

## System Data & Interface Flow
[ User Input Selection ] ──► (Zodiac Sign + Primary Life Concern)
         ▼
[ /app/page.tsx Entry Coordinator ] ──► Trigger Routing Event Map
         ▼
[ Non-Blocking Layout Hydration ] ──► Enforces <Suspense fallback={<ResultSkeleton />} />
         ▼
[ /api/recommend End-Route Payload ] ──► Emits Raw Data Array Objects
         ▼
[ Defensive Fallback Engine ] ──► Evaluates gem.rarity || 3 (Crash Prevention)
         │
         ├───► [ Sort Framework ] ──► Instant O(N log N) Immutable Memory Sort (0ms Delay)
         └───► [ Native Print Compiler ] ──► Formats workspace into minimalist physical PDF Report

## Core Technical Implementations

1. Advanced Separation of Concerns
The landing framework breaks rendering layers away from the structural engine. Volatile canvas animations and real-time banner metadata operate inside separate closures to protect form routing loops.

2. Hydration Boundary Control
To safeguard the framework against interface locks while indexing query parameters from the URL stream, the application isolates the view pipeline inside a strict Next.js Suspense loop.

3. Client-Side Compute Matrix (Zero Server Overhead)
When toggling user properties within the Sort Framework, the application bypasses repeating database fetches entirely, mounting a fast in-memory shallow copy allocation to mutate layouts under O(NlogN) complexity inside the browser frame.

4. Robust Defensive Parameter Fallbacks
The parsing map runs a strict fallback assignment layer (gem.rarity || 3) to protect view controllers from breaking due to corrupt, null, or unassigned data structures emitting from backend schemas.

5. Media Queries Layout Compile (Native Print Engine)
The interface overrides device viewport queries through responsive tokens. When triggering window.print(), the system converts the live dashboard instantly into a structured, physical black-and-white blueprint report.

## Technological Stack
* Framework Base: Next.js 16 App Router orchestrated via Turbopack Engine
* Type Management: TypeScript Strict Mode with Domain Extension Typing Interfaces
* Motion Controllers: Framer Motion using Hardware-accelerated CSS Matrix Vectors
* Styling Blueprint: Tailwind CSS with frosted glass panels and soft light layouts

## Local Ingestion & Deployment Setup
Deploy the planetary recommendation analytics deck locally on your machine with these simple steps:

1. Clone the Source Code Layer:
Run: git clone https://github.com/Amit0022R/Gemstone-Recommendation-App.git
Run: cd Gemstone-Recommendation-App

2. Provision Module Blocks:
Run: npm install

3. Initialize the Turbopack Compilers Dev Runtime:
Run: npm run dev

4. Access the Connection Portal:
Point your browser execution layer to http://localhost:3000.
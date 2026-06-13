# Vedic Gemstone AI Recommender

An automated, AI-augmented Micro-SaaS framework built with Next.js 16 (Turbopack Architecture) and Tailwind CSS. The application processes user astrological identities paired with core lifestyle vectors to compute and prescribe precise metaphysical gemstone remediation layouts.

---

## 🎯 Engineering Purpose & Project Objectives

The primary objective of this system is to demonstrate how modern full-stack engineering principles, architectural patterns, and decoupled view structures can be delivered cleanly within a limited development timeframe.

Rather than over-engineering heavy database infrastructure setups initially, this project prioritizes **Separation of Concerns (SoC)**, defensive runtime programming, non-blocking page state hydration, and highly optimized client-side computational operations.

---

## 🏛️ Architectural Code Splitting (Folder Tree)

The workspace completely deprecates monolithic files, splitting layouts into specialized, single-responsibility micro-components to ensure the codebase remains highly auditable and modular:

```text
├── app/
│   ├── page.tsx               # Root Entry Controller Gateway
│   └── result/
│       └── page.tsx           # Dynamic Parameter Extraction Hub
├── components/
│   ├── BackgroundOrbs.tsx     # Hardware-accelerated Canvas Mesh Particles
│   ├── MetricBanner.tsx       # Live Micro-telemetry Status Block
│   ├── ResultHeader.tsx       # State Actions & Export Control Modulators
│   └── GemstoneCard.tsx       # Isolated Entity Viewport Data Renderer
│   └── ResultSkeleton.tsx     # Isolated Hydra-loader Spinning View
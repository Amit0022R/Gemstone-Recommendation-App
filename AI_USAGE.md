# AI Usage Declaration

This document explicitly details the utilization of AI tooling during the development of the Vedic Gemstone AI Recommender system, maintaining complete transparency regarding oversight, architectural design, and codebase assembly.

## 🛠️ Tools Utilized
* **Gemini / ChatGPT** (Large Language Models)

## 🎯 Scope of AI Leveraging
Given the strict and limited time frame of this engineering challenge, AI assistance was selectively leveraged to optimize execution speed in the following areas:

1. **Boilerplate Integration:** Accelerating standard Tailwind CSS configurations and structure initializations for Next.js App Router templates.
2. **Contextual Layout Revamping:** Assisting with light-shade, high-contrast visual structural tokens to maintain consistent SaaS dashboard aesthetics.
3. **Data Mapping Structuring:** Assisting in mapping standard astrological key-value pairs into structured, type-safe arrays for the TypeScript mock data registry.

## 🧠 Engineering Oversight & Human Decisions
While syntax formatting and mock objects were accelerated using AI, all critical system design decisions were architected entirely by the developer:

* **Separation of Concerns:** Dictated the decoupling of the core evaluation framework (`utils/recommendEngine.ts`) from the visual viewports and entry layer handlers to allow clean modular scaling.
* **Modular View Architecture (Code Splitting):** Refactored the core landing workspace by isolating specialized layout units (`BackgroundOrbs.tsx`, `MetricBanner.tsx`) from the main state coordinator, optimizing readability and code auditability for evaluations.
* **Modern Ingestion Patterns:** Implemented the strict Next.js 15+ `<Suspense />` layout framework manually around client-side parameter indexing to guarantee non-blocking layout hydration on the results track.
* **Scope & Resource Management:** Intentionally bypassed heavy, time-consuming external database configurations to prioritize business logic testing, deterministic array mutations (`Array.prototype.sort`), and rapid deployment timelines within the strict deadline.
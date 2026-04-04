export interface Highlight {
  title: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  type: string;
  year: string;
  tagline: string;
  overview: string;
  problem: string;
  approach: string[];
  highlights: Highlight[];
  techStack: string[];
  tradeoffs: string[];
  outcome: string;
  image: string;
  link: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "campfire-rsvp",
    name: "Campfire RSVP",
    type: "iOS and Android Mobile App",
    year: "2026",
    tagline:
      "Cross-platform group planning built to turn chat into commitment.",
    overview:
      "Campfire RSVP started from a recurring failure mode in group chats: plenty of interest, very little commitment. I built the app to test whether a dedicated mobile flow could hold the full planning loop in one place - invite, RSVP, discussion, and last-minute updates. As a solo build, it let me own the product and technical surface end to end, from auth and data modeling to store release and OTA updates.",
    problem:
      "Text threads are great for conversation but poor systems of record. Once a plan starts moving, details get buried, attendance gets fuzzy, and nobody knows whether an event is actually happening. The real challenge was not adding more event fields; it was making coordination feel lighter than staying in iMessage.",
    approach: [
      "I chose React Native and Expo so I could keep one product surface in sync across iOS and Android while still moving at solo-build speed.",
      "I used Supabase instead of a custom API because auth, Postgres, realtime, and edge functions covered the product's needs with less operational overhead.",
      "I modeled circles and plans as first-class entities, then pushed access control into row-level security so permissions lived with the data rather than scattered across clients.",
      "I treated deep linking as core product infrastructure, not polish, because invites only work if the handoff from message to app is reliable.",
      "I built testing into the release process with unit coverage around core logic, integration coverage around stateful flows, and Maestro coverage for high-risk end-to-end journeys.",
      "I leaned on OTA updates for UI and logic fixes so early iteration was not gated by store review.",
    ],
    highlights: [
      {
        title: "Real-Time Auth Architecture",
        description:
          "The hardest reliability problem was auth, not UI. Mobile OAuth flows can return stale callbacks or collide with platform link handling, especially on Android. I used a generation counter to discard outdated auth results and kept Supabase auth callback handling synchronous to avoid lock contention in gotrue-js.",
      },
      {
        title: "Cross-Platform Mobile",
        description:
          "I aimed for one product surface, not forced visual sameness. Most code is shared, but I used platform-specific paths where native behavior mattered, including Apple Sign In, keyboard handling, haptics, and safe-area quirks. I also used Maestro to cover critical end-to-end flows across platforms so auth, RSVP, and navigation regressions were easier to catch before release.",
      },
      {
        title: "Push Notifications & Server State",
        description:
          "I treated notification discipline as a product feature. Edge Functions handle fan-out, while React Query keeps the client fast with optimistic RSVP updates and predictable cache invalidation. The rule was simple: notify only when a change affects a person's actual plan.",
      },
      {
        title: "Testing & Release Confidence",
        description:
          "Because the app spans auth, realtime state, deep links, and platform-specific behavior, I invested in layered test coverage instead of relying on manual QA. Unit tests protect business logic, integration tests cover multi-step client behavior, and Maestro exercises critical end-to-end flows before release.",
      },
      {
        title: "Offline-Resilient Data Layer",
        description:
          "Perceived speed matters more than theoretical freshness in a consumer app. React Query persistence lets the app open from cache, recover in the background, and clear state cleanly on sign-out. I also added recovery paths for the common mobile case where auth is ready before dependent profile data is.",
      },
    ],
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "React Query",
      "Expo Router",
      "Maestro",
      "Unit & Integration Testing",
      "Push Notifications",
    ],
    tradeoffs: [
      "Expo gave me release speed and a smaller operational surface, but it also forced discipline about when native escapes were truly worth the complexity.",
      "Real-time coordination improves responsiveness, but it can easily create noisy state updates and noisy notifications if the event model grows too broad.",
      "If I keep investing in the product, the next engineering push is instrumentation around invite conversion and RSVP completion, not expanding feature surface area.",
    ],
    outcome:
      "The result is a shipped consumer mobile app on both stores with an architecture I can keep moving quickly. The biggest engineering lesson was that mobile product quality comes from reliability at the edges - auth handoffs, deep links, cache recovery, notification discipline, and polished cross-platform behavior.",
    image: "/projects/campfirersvp-preview.png",
    link: "https://www.campfire.rsvp",
  },
  {
    slug: "dockly",
    name: "Dockly",
    type: "Progressive Web App",
    year: "2025",
    tagline:
      "An installable map for bike parking that riders can actually trust.",
    overview:
      "Dockly came from a gap I kept noticing in existing maps: they could tell you where you were, but not whether a bike spot would actually work when you arrived. I built it as a PWA to see how far a modern web stack could go for geospatial discovery, offline access, and field-friendly contribution flows.",
    problem:
      "Bike parking is a confidence problem. Riders need more than a pin on a map - they need to know rack type, coverage, capacity, and whether the information is recent enough to trust. That made the engineering challenge twofold: keep map interactions fast on mobile, and make submissions quick enough that people would contribute while standing next to a rack.",
    approach: [
      "I chose a PWA over native apps because installability, location access, and offline support were enough for the use case, and the web kept iteration cheaper.",
      "I centered the app around the map from the first render, then treated search, filters, and contribution as supporting flows rather than separate destinations.",
      "I used Firebase to keep auth, realtime updates, and asset storage lightweight for a project that needed fast backend setup more than custom infrastructure.",
      "I kept client state lean with Zustand and deferred heavier UI so the map could become interactive quickly on mobile.",
      "I designed the submission flow for on-the-street usage: minimal typing, quick metadata capture, and photos as proof.",
    ],
    highlights: [
      {
        title: "Geospatial Rendering at Scale",
        description:
          "The main constraint was map responsiveness on mobile. Marker clustering, zoom-aware grouping, and careful tap target sizing let the map stay useful without turning into a noisy cloud of points.",
      },
      {
        title: "PWA Architecture",
        description:
          "The product only worked if it felt dependable away from perfect connectivity. I treated installability, service worker behavior, and cached station data as core functionality rather than progressive enhancement. The install prompt is delayed until users have enough intent for it to feel helpful.",
      },
      {
        title: "Performance Optimization",
        description:
          "I kept the client state model intentionally small. Zustand handled UI state without pulling in a heavier abstraction, and route/code splitting plus lazy UI loading kept time-to-interactive centered on the map rather than the chrome around it.",
      },
      {
        title: "Community Contribution Model",
        description:
          "Contribution quality depends on reducing friction without inviting junk data. The flow uses GPS, quick metadata selection, and photos as proof so submissions can happen in the field, then passes entries through a lightweight moderation layer before publishing.",
      },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Google Maps API",
      "Tailwind CSS",
      "Zustand",
      "PWA",
    ],
    tradeoffs: [
      "Google Maps sped up delivery, but it also tied a meaningful part of the experience to third-party APIs, pricing, and rendering conventions.",
      "Offline Google Maps support is not realistically available in the browser, which means true offline map behavior would likely require a native direction rather than continued PWA iteration alone.",
      "If I return to the product, I would invest next in trust signals and moderation tooling before adding more discovery features.",
    ],
    outcome:
      "Dockly proved that a web stack can deliver a credible field-use map product if performance and offline behavior are built in early. It deepened my experience with geospatial UI, service worker edge cases, and contribution systems that balance speed with data quality.",
    image: "/projects/dockly.png",
    link: "https://dockly.bike",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

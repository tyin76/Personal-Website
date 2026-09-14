export const experience = [
  {
    company: 'Lumen5',
    role: 'Software Engineer Intern',
    period: 'May 2025 — Sep 2026',
    location: 'Vancouver, BC',
    url: 'https://lumen5.com',
    summary: 'Sixteen-month full-stack internship on an AI-powered video creation platform for marketers.',
    highlights: [
      'Owned five features end to end across a Django/React web app and a TypeScript/PixiJS rendering engine, from data model and API to UI: 232 pull requests merged, 135 tickets closed and 30 user-facing features shipped in 16 months, all still in production.',
      'Grew a third-party integration upgrade into a year-long sticker product line (search, uploads, timing controls, cropping) that users have placed 75,000+ times, then replaced its provider ahead of a vendor shutdown with licensing, per-team caching and a feature-flagged cutover, with no gap for users.',
      'Wrote a design proposal to re-architect how shared designs are distributed across the template library, revised it with feedback from the whole team, and shipped the opt-in model across two repositories, unblocking a category of designs that had been waiting on it.',
      'Launched sound effects and per-word pronunciation override for AI voiceovers to every user, from editor UI to engine-level audio, using feature flags and a pilot customer before general release; the override alone has 34,000+ uses by about 3,000 people.',
      'Traced silently failing account deletions to an out-of-memory kill that left no error trail, rewrote the background worker to run in bounded chunks with retries, and cleared the backlog.',
      'Modernised 47 legacy React class components to hooks with an AI-assisted workflow I designed, shipped as small independently reviewable pull requests with zero regressions.',
    ],

    stack: ['Python', 'Django', 'React', 'TypeScript', 'Redux', 'PostgreSQL', 'Celery', 'Google Cloud'],
    storyPath: '/lumen5',
    storyTitle: 'Sixteen months at Lumen5',
    storySub: '1,280 commits, 232 merged PRs, and five projects owned end to end.',
  },
];

export const education = [
  {
    school: 'The University of British Columbia',
    degree: 'B.Sc. Computer Science · 4th year',
    location: 'Vancouver, BC',
  },
];

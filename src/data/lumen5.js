/**
 * Content for the "Sixteen months at Lumen5" page.
 * Engineering figures come from the git histories, GitHub and the issue tracker; product usage figures
 * come from Lumen5's analytics. Both as of 11 September 2026.
 */

export const meta = {
  company: 'Lumen5',
  companyUrl: 'https://lumen5.com',
  role: 'Software Engineer Intern',
  team: 'Product engineering',
  location: 'Vancouver, BC',
  start: 'May 2025',
  end: 'Sep 2026',
  firstCommit: '14 May 2025',
  lastDay: '11 Sep 2026',
  headline: 'Sixteen months at Lumen5',
  blurb:
    'Lumen5 is an AI video-creation platform used by marketing teams. I joined as a software engineering intern in May 2025. My first commit centred some buttons. By the time I left I had restructured how every template shares its designs, shipped features that thousands of people now use every week, and put 75,313 stickers into other people’s videos.',
  tags: [
    'React',
    'TypeScript',
    'Python',
    'Django',
    'PostgreSQL',
    'Redux',
    'REST APIs',
    'WebSockets',
    'PixiJS · WebGL',
    'Google Cloud',
    'Kubernetes',
    'Docker',
  ],
};

export const stats = [
  { value: 1280, label: 'Commits to production', sub: 'Across the web app and the video rendering engine', color: 'purple' },
  { value: 232, label: 'Pull requests merged', sub: 'Across four repositories, with 5 more in review', color: 'turquoise' },
  { value: 135, label: 'Tickets closed', sub: 'Features, bugs and investigations, all marked done', color: 'carmine' },
  { value: 85, label: 'Code reviews', sub: 'On teammates’ pull requests', color: 'spring' },
  { value: 29087, prefix: '+', label: 'Lines added', sub: 'And 13,112 deleted. I cleaned up too.', color: 'mustard' },
  { value: 47, label: 'Components modernised', sub: 'Legacy React class components moved to hooks', color: 'purple' },
  { value: 30, label: 'Unique features shipped', sub: 'Distinct user-facing capabilities, not counting fixes or follow-ups', color: 'turquoise' },
  { value: 45, label: 'Busiest single day', sub: 'Commits on 24 June 2025', color: 'carmine' },
];

export const flagships = [
  {
    id: 'stickers',
    title: 'Stickers',
    body:
      'Owned a user-facing content feature from first prototype to a mature product line over twelve months. I designed and built search, user uploads, timing controls and cropping, tuned performance with caching, and kept shipping through a change of data provider. It became the most-used thing I built and the foundation two later features were built on.',
    scores: [
      { value: 75313, label: 'stickers placed in videos' },
      { value: 6988, label: 'creators used them' },
    ],
    note: '33,069 people opened the redesigned Elements panel.',
    stack: ['React', 'TypeScript', 'Redux', 'Django', 'REST APIs', 'PostgreSQL', 'Cloud Storage', 'PixiJS'],
    color: 'turquoise',
  },
  {
    id: 'global-templates',
    title: 'Shared design system, restructured',
    body:
      'Led the redesign of how reusable design assets are shared across the product’s template library. I wrote the technical proposal, gathered and incorporated feedback from engineers, designers and product, then shipped the new model across the web app and the rendering engine and documented it for the people who maintain it. The change unblocked a category of designs the team had wanted to ship for months.',
    scores: [
      { value: 10, label: 'tickets, Nov to Sep' },
      { value: 2, label: 'design proposals written' },
    ],
    note: 'Shipped live 2 Sep 2026, nine days before I left, and unblocked the designs waiting on it.',
    stack: ['Django', 'PostgreSQL', 'Data migrations', 'REST APIs', 'React', 'TypeScript'],
    color: 'purple',
  },
  {
    id: 'sfx',
    title: 'Sound effects',
    body:
      'Took a brand-new feature from an empty file to general availability. I built the user interface, the logic that recommends effects automatically and the audio plumbing inside the rendering engine, instrumented it with analytics, and ran feedback rounds with the wider team before a staged rollout to every user.',
    scores: [
      { value: 495, label: 'effects applied' },
      { value: 150, label: 'users in the first two months' },
    ],
    note: 'Fully rolled out 8 Jul 2026, the youngest feature here.',
    stack: ['React', 'TypeScript', 'Redux', 'PixiJS', 'Web Audio', 'Django', 'Slack API', 'Feature flags'],
    color: 'carmine',
  },
  {
    id: 'pronunciation',
    title: 'Pronunciation override',
    body:
      'Turned a recurring customer complaint into a shipped feature. Users could only correct a mispronounced word globally, which changed every video they had ever made; I built a precise per-instance fix with an audio preview, released it behind a feature flag, piloted it with one customer, then rolled it out to everyone.',
    scores: [
      { value: 34088, label: 'overrides applied' },
      { value: 2999, label: 'people using it' },
    ],
    note: 'The second most-used thing I built, after stickers.',
    stack: ['React', 'Lexical', 'TypeScript', 'Django', 'REST APIs', 'Feature flags'],
    color: 'spring',
  },
  {
    id: 'react-modernisation',
    title: 'Modernising the React codebase',
    body:
      'Improved the health of a large front-end codebase while still shipping product work. I designed a repeatable, AI-assisted workflow for converting legacy React class components to modern hooks, then applied it to 47 components as small, independently reviewable pull requests with zero regressions, making the codebase easier for new contributors to work in.',
    scores: [
      { value: 47, label: 'components converted' },
      { value: 209, label: 'commits in June 2025 alone' },
    ],
    note: 'My busiest month, and the one that taught me the codebase.',
    stack: ['React hooks', 'TypeScript', 'Jest', 'Testing Library', 'Claude Code'],
    color: 'mustard',
  },
];

export const alsoShipped = [
  { tag: 'Migration', name: 'Replacing a discontinued vendor', blurb: 'Shipped a new sticker provider before the old one shut down: search, licensing, caching, flag-gated cutover.', color: 'purple' },
  { tag: 'Reliability', name: 'Failed account deletions', blurb: 'Found a silent out-of-memory kill in a background worker, rewrote it to run in bounded chunks, cleared the backlog.', color: 'spring' },
  { tag: 'Bug fixes', name: 'Rendering engine fixes', blurb: 'Wrong-size stickers, a caption animation crash, and a regression that dropped captions from finished videos.', color: 'mustard' },
  { tag: 'Internal tools', name: 'Bulk publishing for designers', blurb: 'Replaced up to 40 API calls with one bulk endpoint and added multi-select publishing for the design team.', color: 'turquoise' },
  { tag: 'Architecture', name: 'Polling to WebSockets', blurb: 'Moved long-running jobs from HTTP polling to real-time notifications, with graceful fallbacks.', color: 'carmine' },
  { tag: 'Editor UX', name: 'Snap to grid and nudging', blurb: 'Canvas elements snap to edges, midpoints and each other; arrow keys nudge the selection.', color: 'purple' },
  { tag: 'Cost', name: 'Cutting a recurring cost', blurb: 'Gated an expensive audio-processing step to paid plans instead of running it on every upload.', color: 'spring' },
  { tag: 'Performance', name: 'AI voiceover pipeline', blurb: 'Speed control, fewer file transfers per edit, a new voice model, Arabic support, edit-blocking bugs fixed.', color: 'mustard' },
  { tag: 'Infrastructure', name: 'Cloud and developer tooling', blurb: 'Storage tiering for user media, cloud dev environments for the engine repo, 288 lines of noisy alerts deleted.', color: 'turquoise' },
];

export const techStack = [
  {
    layer: 'Front end',
    blurb: 'The editor, dashboard and media library. Where snap to grid, stickers, sound effects and pronunciation live.',
    items: ['React', 'TypeScript', 'JavaScript', 'Redux', 'Immutable.js', 'Lexical', 'SCSS Modules', 'Jest', 'Testing Library', 'Storybook'],
    color: 'turquoise',
  },
  {
    layer: 'Back end',
    blurb: 'APIs, background jobs and data models behind every feature, from sticker licensing to account deletion.',
    items: ['Python', 'Django', 'Django REST Framework', 'Celery', 'PostgreSQL', 'Redis', 'Elasticsearch', 'WebSockets', 'pytest'],
    color: 'purple',
  },
  {
    layer: 'Rendering engine',
    blurb: 'The TypeScript engine that draws every video, where I fixed caption rendering, asset sizing and audio buffering.',
    items: ['TypeScript', 'PixiJS', 'WebGL', 'Web Audio', 'Canvas', 'Lottie'],
    color: 'carmine',
  },
  {
    layer: 'Infrastructure',
    blurb: 'Storage tiering, alerting, secrets and cloud development environments.',
    items: ['Google Cloud', 'Cloud Storage', 'Kubernetes', 'Flux', 'Terraform', 'Docker', 'GitHub Actions', 'Codespaces'],
    color: 'mustard',
  },
  {
    layer: 'Tooling and practice',
    blurb: 'How the work got shipped safely: flags, monitoring, analytics and AI-assisted refactoring with human review.',
    items: ['Git', 'GitHub', 'Feature flags', 'Sentry', 'Mixpanel', 'Slack bots', 'Claude Code', 'Code review'],
    color: 'spring',
  },
];

export const timeline = [
  {
    when: 'June 2025',
    title: 'First company-wide launch, five weeks in',
    body: 'AI voiceover speed control went out to every user on 17 June, my first feature announced to the whole company. The same month I worked out a Claude Code workflow for converting legacy React class components to hooks and started the run that ended at 47 components, 209 commits in June alone.',
    color: 'turquoise',
  },
  {
    when: 'July 2025',
    title: 'Rebuilt the voiceover editing pipeline',
    body: 'Cut the number of file transfers per edit, moved two long-running jobs from HTTP polling to real-time WebSocket updates, and gated an expensive audio-processing step to paid plans, removing a recurring cost that had been running on every upload.',
    color: 'purple',
  },
  {
    when: 'August 2025',
    title: 'Laid the foundation for Stickers',
    body: 'A 4,000-line upgrade of a third-party integration, with sticker search landing behind a feature flag. It became the product line I would keep building for the next twelve months.',
    color: 'carmine',
  },
  {
    when: 'October 2025',
    title: 'Uploadable stickers, end to end',
    body: 'Customers can bring their own images in as stickers: a new upload source, storage, media-library tab, timing controls and analytics, in a 67-file change. My second company-wide launch, on 21 October.',
    color: 'mustard',
  },
  {
    when: 'November 2025',
    title: 'Snap to grid for the whole canvas',
    body: 'Alignment guides for every draggable element: snapping to scene edges, midpoints and other elements, plus arrow-key nudging with a shift modifier. About 2,000 lines changed across the editor, with test suites for both snapping behaviours.',
    color: 'spring',
  },
  {
    when: 'December 2025',
    title: 'Shared designs, phase one',
    body: 'Designed and shipped the data model, API and validation rules that let a design be published once and appear in every template, so the design team stopped duplicating caption styles by hand. Matching changes landed in the rendering engine.',
    color: 'turquoise',
  },
  {
    when: 'February 2026',
    title: 'Audio into Clip Creator, and bulk publishing',
    body: 'Clip Creator learned to take an audio file and hand back a waveform video, launched company-wide on 17 February. In the same stretch I replaced up to 40 per-item API requests in the template editor with one bulk endpoint and added multi-select publishing.',
    color: 'purple',
  },
  {
    when: 'March — April 2026',
    title: 'Sound effects to staff, and a vendor replaced',
    body: 'Built the sound effects UI, the recommendation logic and the feedback tooling, and shipped it to staff. In parallel, planned and built the replacement for a sticker provider that had announced its shutdown: search API, licensing API with per-team caching, and the front end.',
    color: 'carmine',
  },
  {
    when: 'May — June 2026',
    title: 'New provider live, old one retired on deadline',
    body: 'Static stickers from the new provider launched to everyone on 26 May. The old integration was sunset behind a feature flag and its code removed on the day the vendor shut down, with no gap for users.',
    color: 'mustard',
  },
  {
    when: 'July 2026',
    title: 'Four launches in one month',
    body: 'Sound effects fully rolled out on 8 July. Per-word pronunciation override for AI voiceovers piloted with a customer, then released to all. On 22 July, two more: reordering scenes inside voice-driven videos and copy/paste for text. Also trimmed about two seconds off editor load time.',
    color: 'spring',
  },
  {
    when: 'August 2026',
    title: 'Two of the hardest problems, back to back',
    body: 'Traced account deletions that had been silently failing to an out-of-memory kill with no error trail, and rewrote the worker to run in bounded chunks with retries. Then shipped the shared-design re-architecture I had proposed, reviewed with the whole team and revised: a modular, opt-in model that unblocked designs waiting on it.',
    color: 'turquoise',
  },
  {
    when: 'September 2026',
    title: 'Shipping until the last day',
    body: 'Turned a designer’s complaint into a merged bulk-enable tool the same afternoon. Added validation that keeps the shared-design model safe for future templates. In my final week, traced a rendering regression that was dropping captions from customers’ videos, fixed it in the engine and re-rendered the affected videos by hand.',
    color: 'purple',
  },
];

export const launches = [
  { tag: 'AI voiceover', name: 'AI voiceover speed control', blurb: 'Adjust how fast an AI narrator speaks, per video.', color: 'turquoise' },
  { tag: 'Content library', name: 'Uploadable stickers', blurb: 'Customers can bring their own images in as stickers.', color: 'carmine' },
  { tag: 'Video creation', name: 'Audio input for Clip Creator', blurb: 'Drop in an audio file and get a waveform video back.', color: 'purple' },
  { tag: 'Content library', name: 'Static stickers', blurb: 'A searchable library of still icons from a new provider.', color: 'mustard' },
  { tag: 'Audio', name: 'Sound effects', blurb: 'Effects on stickers, text and transitions, for everyone.', color: 'spring' },
  { tag: 'Editor UX', name: 'Scene reordering in voice-driven videos', blurb: 'Move scenes around without breaking the narration timing.', color: 'turquoise' },
  { tag: 'Editor UX', name: 'Copy and paste for text', blurb: 'Duplicate styled text between scenes instead of rebuilding it.', color: 'carmine' },
];

export const lessons = [
  {
    title: 'Write the proposal before the code.',
    body: 'The biggest change I shipped went smoothly because the design was reviewed and revised by the whole team before I opened a pull request. The second version deleted special cases instead of adding to them, and nobody was surprised by what landed.',
  },
  {
    title: 'Small pull requests are a kindness to everyone, including future me.',
    body: 'Forty-seven component conversions went through as forty-seven changes a reviewer could read in minutes. The one 67-file feature I shipped needed a brave reviewer and a lot of coffee. I now split by default.',
  },
  {
    title: 'Ship behind a flag, then delete the flag.',
    body: 'Feature flags let me launch to staff, then a pilot customer, then everyone, and retire a discontinued integration on the exact day it had to go. Removing the flag code afterwards is part of the feature, not a chore for later.',
  },
  {
    title: 'The bug that leaves no trace is the one to worry about.',
    body: 'A background worker was being killed for memory before it could log anything, so the failure looked like nothing at all. I learned to treat the absence of a signal as a signal, and to give long jobs bounded work and retries by default.',
  },
  {
    title: 'Merged is not done.',
    body: 'When a rendering regression dropped captions from customers’ videos, fixing the engine was half the job. The other half was re-rendering every affected video so the customers never had to ask. Ownership ends when the user is fine, not when CI is green.',
  },
  {
    title: 'A same-day fix buys more trust than a roadmap item.',
    body: 'A designer asked at lunch whether there was a faster way to do a tedious rollout. There wasn’t, so I scoped the smallest useful version and merged it before dinner. Small, fast wins for the people next to you compound.',
  },
  {
    title: 'Learn the whole stack so you can unblock yourself.',
    body: 'Most of what I shipped needed a change in the web app and another in the rendering engine. Being comfortable in both meant I could finish features instead of waiting on a hand-off, and I could trace bugs across the boundary.',
  },
  {
    title: 'Communication is half the engineering.',
    body: 'The features that landed smoothly were the ones I over-communicated: a proposal reviewed before the first line of code, a stand-up note the moment scope shifted, a launch post that explained what changed and credited who helped. Clear writing saved more time than any clever code, and it turned reviewers, designers and support into allies rather than gatekeepers.',
  },
  {
    title: 'The fastest way to learn a product is through its customers.',
    body: 'I handled customer requests directly and coordinated with the support team to turn tickets into fixes, then closed the loop with the people who had reported them. A mispronounced product name became a per-word override; a vanishing caption became an engine fix and a hand re-rendered video. Seeing first-hand what keeps customers satisfied, and what makes them leave, taught me more about the industry and about reducing churn than any spec could.',
  },
  {
    title: 'Use AI tools deliberately, and keep the review human.',
    body: 'A repeatable workflow with Claude Code let me modernise a large slice of the front end quickly, but the reason it produced zero regressions was that every change was small, tested and read by a person. Speed came from the recipe, safety from the review.',
  },
];

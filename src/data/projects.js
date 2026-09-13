import sum1 from '../images/web/sum-1.webp';
import sum2 from '../images/web/sum-2.webp';
import sum3 from '../images/web/sum-3.webp';
import sum4 from '../images/web/sum-4.webp';

import scriber1 from '../images/web/scriber-1.webp';
import scriber2 from '../images/web/scriber-2.webp';
import scriber3 from '../images/web/scriber-3.webp';
import scriber4 from '../images/web/scriber-4.webp';
import scriber5 from '../images/web/scriber-5.webp';
import scriber6 from '../images/web/scriber-6.webp';

import insight1 from '../images/web/insight-1.webp';
import insight2 from '../images/web/insight-2.webp';
import insight3 from '../images/web/insight-3.webp';
import insight4 from '../images/web/insight-4.webp';
import insight5 from '../images/web/insight-5.webp';
import insight6 from '../images/web/insight-6.webp';

import f1a from '../images/web/f1-1.webp';
import f1b from '../images/web/f1-2.webp';
import f1c from '../images/web/f1-3.webp';
import f1d from '../images/web/f1-5.webp';
import f1e from '../images/web/f1-6.webp';
import f1f from '../images/web/f1-7.webp';
import f1g from '../images/web/f1-8.webp';
import f1h from '../images/web/f1-9.webp';
import f1i from '../images/web/f1-10.webp';
import f1j from '../images/web/f1-11.webp';

import vit1 from '../images/web/vit-1.webp';
import vit2 from '../images/web/vit-2.webp';
import vit3 from '../images/web/vit-3.webp';

const projects = [
  {
    id: 'sum-up-sundae',
    name: 'Sum-Up Sundae',
    year: '2025',
    coverPosition: 'left center',
    award: 'nwHacks 2025 Winner',
    tagline: 'Weekly video check-ins for groups of friends.',
    description:
      'Every Sunday, each member of a group uploads a short video update. You have to post before you can watch everyone else’s, which keeps friend groups consistently in touch. Users can join existing groups or create their own.',
    details: [
      'Livepeer handles video storage and streaming.',
      'Firebase for authentication and frontend hosting; Railway for the backend.',
    ],
    stack: ['React', 'JavaScript', 'Tailwind', 'Material UI', 'Express', 'Node', 'MongoDB', 'Livepeer'],
    links: {
      site: 'https://sum-up-sundae.web.app/',
      repo: 'https://github.com/tyin76/sum-up-sundae',
      devpost: 'https://devpost.com/software/sum-up-sundae',
    },
    photos: [sum1, sum2, sum4, sum3],
    featured: true,
  },
  {
    id: 'scriber',
    name: 'Scriber',
    year: '2024 — 2025',
    tagline: 'Transcribe any YouTube video in seconds, then quiz yourself on it.',
    description:
      'Paste a YouTube link and get a transcript in seconds. Signed-in users can save and download transcriptions and browse their history. An AI-generated quiz built from the transcript turns any video into study material.',
    details: [
      'OpenAI API generates quiz questions from the transcript.',
      'Node, Express and MongoDB backend; Firebase authentication and hosting; Railway for the backend.',
    ],
    stack: ['React', 'JavaScript', 'Material UI', 'Node', 'Express', 'MongoDB', 'OpenAI', 'Firebase'],
    links: {
      site: 'https://scriber-126cc.web.app/',
      repo: 'https://github.com/tyin76/Scriber',
    },
    photos: [scriber1, scriber2, scriber3, scriber4, scriber5, scriber6],
  },
  {
    id: 'ubc-insights',
    name: 'UBC Insights',
    year: '2025',
    tagline: 'Query 60,000+ course sections for averages, professors, and trends.',
    description:
      'Upload UBC course data and run structured queries across more than 60,000 sections to surface grade averages, professor comparisons, and trends over time.',
    details: ['Node and Express backend with a full Mocha and Chai test suite.'],
    stack: ['React', 'TypeScript', 'Material UI', 'Node', 'Express', 'Mocha', 'Chai'],
    links: {
      repo: 'https://github.com/tyin76/UBC-Insights',
    },
    photos: [insight1, insight2, insight3, insight4, insight5, insight6],
  },
  {
    id: 'f1-showcase',
    name: 'F1 Showcase',
    year: '2024',
    tagline: 'Live standings, stats, schedules and results for Formula 1.',
    description:
      'Built out of a love for Formula 1: real-time driver and team rankings, comprehensive statistics, race schedules, an interactive quiz, and detailed results for both current and past seasons.',
    details: ['Hosted on Firebase.'],
    stack: ['React', 'JavaScript', 'Material UI', 'HTML', 'CSS', 'Firebase'],
    links: {
      site: 'https://f1-showcase.web.app/',
      repo: 'https://github.com/tyin76/Formula-1-Showcase',
    },
    photos: [f1a, f1b, f1c, f1d, f1e, f1f, f1g, f1h, f1i, f1j],
  },
  {
    id: 'vitalert',
    name: 'VitAlert',
    year: '2024',
    award: 'nwHacks 2024',
    tagline: 'Log what you eat and get alerted to nutrient gaps.',
    description:
      'A nutrient tracker built on the Edamam Food API. Log everything you ate in a day and VitAlert calculates your intake, flags deficiencies, and explains the side effects associated with each one.',
    details: ['Hosted on Firebase.'],
    stack: ['React', 'TypeScript', 'Material UI', 'HTML', 'CSS', 'Firebase'],
    links: {
      site: 'https://nw-hackers.web.app/',
      repo: 'https://github.com/tyin76/VitAlert-nwHacks-2024',
    },
    photos: [vit1, vit3, vit2],
  },
];

export default projects;

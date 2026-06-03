export type RelatedWorkItem = {
  label: string
  url: string
}

export type Project = {
  id: number
  title: string
  tags: string[]
  brief: string
  image: string
  video?: string
  siteUrl?: string
  repoUrl?: string
  note?: string
  relatedWork?: RelatedWorkItem[]
}

export const projects: Project[] = [
  {
  id: 1,
  title: 'LearnCade',
  tags: ['TypeScript', 'Next.js', 'Claude API', 'Supabase', 'Figma', 'GitHub'],
  brief: 'Developed LearnCade, a web platform that transforms classic arcade games into educational experiences for children. Features include three games, game sharing, user profiles, and Classroom Mode with live leaderboards for teachers and schools.',
  image: '/assets/images/learncade-main.png',
  video: '/assets/videos/learncade-demo.mp4',
  repoUrl: 'https://github.com/rahulrathod-git/LearnCade-fyp',
  relatedWork: [
    {
      label: 'Case Study',
      url: '/assets/documents/learncade/case-study.pdf'
    },
    {
      label: 'Dissertation',
      url: '/assets/documents/learncade/dissertation-portfolio.pdf'
    }
  ]
  },
  
  {
  id: 2,
  title: 'LevelUp Study',
  tags: ['JavaScript', 'Next.js', 'Gemini API', 'Figma', 'GitHub'],
  brief: 'Developed LevelUp Study, a web application that transforms uploaded lecture material into summaries and interactive revision sessions, featuring multiple test formats, a gamified scoring system, and performance breakdowns.',
  image: '/assets/images/levelupstudy-main.png',
  video: '/assets/videos/levelupstudy-demo.mp4',
  repoUrl: 'https://github.com/rahulrathod-git/levelup-study',
  relatedWork: [
    {
      label: 'Research',
      url: '/assets/documents/levelupstudy/levelup-research.pdf'
    },
    {
      label: 'Wireframes',
      url: '/assets/documents/levelupstudy/levelup-wireframes.pdf'
    }
  ]
  },

  {
    id: 3,
    title: 'Coaching App',
    tags: ['TypeScript', 'React Native', 'Expo', 'i18n'],
    brief: 'Developed a coaching mobile app for <a href="https://www.legalpythia.com/" target="_blank" rel="noopener noreferrer" class="company-link">Legal-Pythia</a>. A front-end, UX-focused app featuring workout packages, a booking system, user profile management, dark mode, and English/German language support.',
    image: '/assets/images/CoachingApp-main.png',
    video: '/assets/videos/coaching-app-demo.mp4',
    relatedWork: [
    {
      label: 'Landing Page (Frontend)',
      url: 'https://coaching-app-landing-page-lp-portfo.vercel.app/'
    }
  ]
  },

  {
    id: 4,
    title: 'LeicesterBreaks',
    tags: ['HTML', 'CSS', 'JavaScript', 'Pencil Project'],
    brief: 'Developed LeicesterBreaks, a weekend city break website for Leicester. Features include an immersive gallery, review capabilities, and a streamlined booking system.',
    image: '/assets/images/Leicesterbreaks-main.png',
    video: '/assets/videos/leicesterbreaks-demo.mp4',
    relatedWork: [
    {
      label: 'Project Outline & Evaluation',
      url: '/assets/documents/leicesterbreaks/project-doc-evaluation.pdf'
    },
    {
      label: 'Wireframes for Features',
      url: '/assets/documents/leicesterbreaks/leicesterbreaks-wireframes.pdf'
    }
  ]
  },
  {
    id: 5,
    title: "Captain Cosmic's Rocketship Journey",
    tags: ['Unity', 'C#'],
    brief: 'Developed Captain Cosmic\'s Rocketship Journey for the <a href="https://www.spacecentre.co.uk/" target="_blank" rel="noopener noreferrer" class="company-link">National Space Centre</a>, supervised by <a href="https://nssctest.co.uk/" target="_blank" rel="noopener noreferrer" class="company-link">NSC Creative</a>. This 3D game educates kids through interesting facts and a fun mission.',
    image: '/assets/images/CCRJ-main.png',
    video: '/assets/videos/ccrj-demo.mp4',
    relatedWork: [
    {
      label: 'Business Deck',
      url: '/assets/documents/ccrj/business-deck.pdf'
    }
    ]
  },
  {
    id: 6,
    title: 'Energy City Run',
    tags: ['Unity', 'C#'],
    brief: 'Developed Energy City Run, a 2D endless runner set in a futuristic city, where players collect energy cells, avoid traps, and test their reflexes with increasing difficulty.',
    image: '/assets/images/EnergyCityRun-main.png',
    video: '/assets/videos/energycityrun-demo.mp4',
  },
]
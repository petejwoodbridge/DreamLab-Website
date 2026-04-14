/* ============================================================
   DREAMLAB WEBSITE — EDITABLE CONTENT
   ============================================================

   👇 THIS IS THE ONE FILE YOU EDIT TO UPDATE THE SITE 👇

   Edit the content below, save this file, then refresh the browser.
   All team members, clients, services, sectors, stats, and FAQs
   are rendered dynamically from this file.

   Quick guide:
   - Add a team member: copy one of the objects in `team` and edit it
   - Add a client: add a string to the `clients` array
   - Edit services: change titles / descriptions / capabilities below
   - Update stats: edit the `stats` object under `company`

   Tag colors available: 'purple' (default), 'cyan', 'pink', 'green'
   Avatar gradients: use any `linear-gradient(...)` CSS value

   ============================================================ */

window.DREAMLAB_CONTENT = {

  // ──────────────────────────────────────────────────────────
  // COMPANY INFO
  // ──────────────────────────────────────────────────────────
  company: {
    name: 'DreamLab',
    tagline: 'Applied Innovation Lab at MediaCity Manchester. Co-creating the future of AI, immersive tech and creative technology.',
    email: 'info@dreamlab-ai.com',
    linkedin: 'https://www.linkedin.com/company/thedreamlabuk/',
    location: 'MediaCity, Salford, Manchester',
    alsoIn: 'Liverpool, Merseyside & Cumbria',
  },

  // ──────────────────────────────────────────────────────────
  // HEADLINE STATS (homepage + work page)
  // ──────────────────────────────────────────────────────────
  stats: [
    { value: '44',  suffix: '+',  label: 'Deep tech specialists' },
    { value: '100', suffix: '+',  label: 'Businesses supported' },
    { value: '35',  suffix: '+',  label: 'Collaborative projects' },
    { value: '2',   suffix: '.7M', prefix: '£', label: 'Innovation investment' },
  ],

  // ──────────────────────────────────────────────────────────
  // TEAM — Add / edit / reorder people here
  // ──────────────────────────────────────────────────────────
  team: [
    {
      initials: 'SM',
      avatarGradient: 'linear-gradient(135deg,#f59e0b,#ec4899)',
      name: 'Steve Moyler',
      role: 'Creative Director',
      bio: `Steve is DreamLab's Creative Director — an award-winning Art & Film Director with a career spanning the best of Manchester's creative industry, including senior roles at McCann Worldgroup. His work bridges traditional advertising craft with the new frontier of AR, VR and AI-driven storytelling. Steve leads the creative vision across DreamLab's projects, ensuring that the technology we build always serves a bigger idea — and that every experience we ship has genuine cultural weight.`,
      tags: [
        { label: 'Art Direction' },
        { label: 'Film & Content', color: 'cyan' },
        { label: 'Brand Storytelling', color: 'pink' },
        { label: 'AR / VR', color: 'green' },
      ],
      award: 'Ex-McCann Worldgroup',
      linkedin: 'https://uk.linkedin.com/in/steve-moyler-53254517',
    },
    {
      initials: 'PW',
      avatarGradient: 'linear-gradient(135deg,#7c3aed,#ec4899,#06b6d4)',
      name: 'Pete Woodbridge',
      role: 'Innovation Director & Creative Technologist',
      bio: `Pete is a Creative Technologist and Innovation Director working at the intersection of AI, immersive storytelling, interactive experiences, and virtual production. As R&D Innovation Director at the MediaCity Immersive Technology Innovation Hub, he has helped over 100 businesses explore and build with emerging technology. Named in the BIMA 100 'Creatives & Designers' in 2020, his career spans commissions and R&D collaboration with organisations including BBC, ITV, Aardman Animations, Google, Intel, Apple, BT, the United Nations, Red Bull and the NHS. He also publishes the Dream Machine newsletter — essential reading on creative AI.`,
      tags: [
        { label: 'Creative AI' },
        { label: 'Virtual Production', color: 'cyan' },
        { label: 'Immersive XR', color: 'pink' },
        { label: 'Innovation', color: 'green' },
      ],
      award: 'BIMA 100 · 2020',
      linkedin: 'https://www.linkedin.com/in/petewoodbridge/',
    },
    {
      initials: 'JO',
      avatarGradient: 'linear-gradient(135deg,#06b6d4,#7c3aed)',
      name: "Dr John O'Hare",
      role: 'Founder · AI & Immersive Technology Lead',
      bio: `John is the founder of DreamLab AI Consulting, bringing deep expertise in artificial intelligence, virtual and augmented reality, immersive collaborative environments and decentralised technologies. A University of Salford alumnus, his work spans bespoke AI training, consulting and product development — helping organisations understand and harness the transformative potential of emerging tech. A MediaCityUK Star Award winner and certified PRINCE2 practitioner, John combines rigorous project delivery with genuine frontier research. His recent work explores agentic AI systems, LLMs, Web3 protocols and spatial computing.`,
      tags: [
        { label: 'AI & LLMs' },
        { label: 'VR / AR', color: 'cyan' },
        { label: 'Web3', color: 'pink' },
        { label: 'Agentic Systems', color: 'green' },
      ],
      award: 'MediaCityUK Star Award · 2011',
      linkedin: 'https://www.linkedin.com/in/jjohare/',
    },
    {
      initials: 'DH',
      avatarGradient: 'linear-gradient(135deg,#ec4899,#7c3aed)',
      name: 'Derek Hales',
      role: 'Research Lead · Architecture & Creative Tech',
      bio: `Derek is a registered architect, researcher and educator whose work bridges architecture, digital creativity, science and speculative design. A Research Fellow in Transdisciplinary Practice at The New Centre for Research & Practice and Lecturer at the University of Salford, he brings over 15 years of interdisciplinary R&D to DreamLab. Funded by Arts Council England, AHRC, EPSRC and the EU Framework Programme, his practice spans design fiction, digital twins, cyberphysical systems and experimental media. Derek connects DreamLab's technical innovation to wider cultural and philosophical inquiry — bringing rigour, imagination and academic depth to the collective.`,
      tags: [
        { label: 'Digital Twins' },
        { label: 'Design Fiction', color: 'cyan' },
        { label: 'Speculative Tech', color: 'pink' },
        { label: 'R&D', color: 'green' },
      ],
      award: 'UKRI Innovate UK Funded',
      linkedin: 'https://www.linkedin.com/in/derekhales/',
    },
    {
      initials: 'BS',
      avatarGradient: 'linear-gradient(135deg,#10b981,#06b6d4)',
      name: 'Bernard Steer',
      role: 'Media Production & Technology Specialist',
      bio: `Bernard is a media production specialist and Avid ACI Certified Trainer based in Manchester. With deep expertise in professional media workflows, post-production technology and broadcast systems, he brings rigorous hands-on technical knowledge to DreamLab's production and training work. As the media industry navigates a wave of AI-driven transformation, Bernard helps teams understand and integrate new technology into their existing pipelines — bridging the gap between traditional craft and emerging capability.`,
      tags: [
        { label: 'Media Production' },
        { label: 'Post-Production', color: 'cyan' },
        { label: 'Broadcast Tech', color: 'pink' },
        { label: 'Avid Certified', color: 'green' },
      ],
      award: 'Avid ACI Certified Trainer',
      linkedin: 'https://www.linkedin.com/in/bernard-steer-36857b30/',
    },

    // 👆 Copy any block above and edit to add a new team member.
    // Required fields: initials, name, role, bio, tags, linkedin
    // Optional: avatarGradient, award
  ],

  // ──────────────────────────────────────────────────────────
  // CLIENT LIST (shown on Work page + homepage ticker)
  //
  // Logos: drop a file into `img/clients/` named after the client
  //        (lowercase, dashes for spaces). e.g. 'MSG Sphere' -> msg-sphere.svg
  //        Supports .svg, .png, .webp. If missing, the name shows as text.
  //
  // You can also specify a custom logo per client using an object:
  //        { name: 'MSG Sphere', logo: 'img/clients/msg-sphere.png' }
  //
  // Order below is shown top-left → bottom-right, so keep the most
  // prestigious / recognisable brands at the start.
  // ──────────────────────────────────────────────────────────
  clients: [
    // Global / household-name brands — shown first
    'Apple', 'Google', 'BBC', 'ITV',
    'Intel', 'NHS', 'Red Bull', 'United Nations',
    'BT', 'Epic Games', 'Aardman Animations', 'MSG Sphere',

    // Established studios & production partners
    'Dock10', 'Supermassive', 'Realtime', 'Rezzil',
    'Corporation Pop', 'Salsa Sound', 'Immersify Education',

    // Regional / specialist innovation partners
    'Krygon Studios', 'Scenegraph Studios', 'PlayXD', 'MyManu',
    'MK-V', 'AIX', 'Xpllor', 'FeedAR',
    'Inspatial', 'Sparkle Street', 'Toasted Productions',
    'Byrons Labs', 'Cold Star Media', 'Safety Catch',
  ],

  // ──────────────────────────────────────────────────────────
  // SECTORS (Work page)
  // ──────────────────────────────────────────────────────────
  sectors: [
    { icon: '🎮', name: 'Games',                description: 'Interactive entertainment, indie development, game engines, esports technology and gaming innovation.' },
    { icon: '🎬', name: 'Film & TV',            description: 'Virtual production, immersive storytelling, visual effects pipelines and broadcast technology.' },
    { icon: '🎵', name: 'Music',                description: 'Interactive audio, AI music tools, immersive sound design and music technology innovation.' },
    { icon: '✏️', name: 'Animation',            description: 'Real-time animation, AI-assisted production, procedural content and digital characters.' },
    { icon: '🏥', name: 'Health',               description: 'VR therapeutics, medical visualisation, patient education and AI-powered health tools.' },
    { icon: '🎓', name: 'Education',            description: 'Immersive learning experiences, AI tutoring, skills training platforms and EdTech innovation.' },
    { icon: '📢', name: 'Marketing & Advertising', description: 'Creative AI campaigns, interactive brand experiences, generative content and experiential marketing.' },
    { icon: '🌐', name: 'Creator Economy',      description: 'Tools and platforms empowering independent creators with AI, interactivity and emerging technology.' },
    { icon: '🎭', name: 'Performance & Live',   description: 'Real-time visuals, interactive installations, live event technology and performative tech.' },
  ],

  // ──────────────────────────────────────────────────────────
  // SERVICES — the four main service sections
  // ──────────────────────────────────────────────────────────
  services: [
    {
      id: 'workflows',
      number: '01',
      label: 'Workflows & Automation',
      icon: '⚡',
      iconClass: 'si-1',
      dotColor: 'purple',
      title: 'Transform how<br>your organisation works',
      description: `From intelligent document processing to multi-agent AI systems, we design and build automation pipelines that eliminate busywork, surface better insights, and unlock new operational capabilities. Whether you're a startup wanting to move fast or an enterprise ready to scale AI responsibly — we build it properly.`,
      capabilities: [
        { title: 'AI Agent Development',           desc: 'Custom LLM-powered agents for complex, multi-step tasks' },
        { title: 'RAG Systems',                    desc: 'Retrieval-augmented generation for enterprise knowledge' },
        { title: 'LLM Integration',                desc: 'Embed AI into existing tools and platforms seamlessly' },
        { title: 'Process Automation',             desc: 'End-to-end pipeline automation and workflow redesign' },
        { title: 'Intelligent Document Processing',desc: 'Extract, classify and act on unstructured data at scale' },
        { title: 'Agentic AI Systems',             desc: 'Autonomous AI pipelines for research, analysis and action' },
        { title: 'Generative AI Applications',     desc: 'Text, image, audio and video generation tools' },
        { title: 'AI Strategy & Audit',            desc: 'Map AI readiness and prioritise high-impact opportunities' },
      ],
    },
    {
      id: 'creative',
      number: '02',
      label: 'Creative Services',
      icon: '✦',
      iconClass: 'si-2',
      dotColor: 'pink',
      title: 'Technology in service<br>of extraordinary ideas',
      description: `Our creative services sit at the frontier of what technology can express. We design and build immersive experiences, XR environments, virtual productions, interactive installations and generative content that moves people — whether in a gallery, a game, a broadcast or a brand activation.`,
      capabilities: [
        { title: 'Immersive XR Experiences',  desc: 'VR, AR and MR design and production' },
        { title: 'Virtual Production',        desc: 'Unreal Engine LED volume and real-time filmmaking' },
        { title: 'Interactive Installations', desc: 'Sensor-driven, projection mapped and generative art' },
        { title: 'AI-Assisted Animation',     desc: 'Real-time characters, procedural animation, motion AI' },
        { title: 'Game Development',          desc: 'Concept to launch across platforms and engines' },
        { title: 'Generative Content & AI Art', desc: 'Creative AI tools for image, video, sound and text' },
        { title: 'Projection Mapping',        desc: 'Large-scale architectural and experiential projection' },
        { title: 'Spatial Audio & Sound Design', desc: 'Immersive audio, AI music tools and interactive sound' },
      ],
    },
    {
      id: 'product',
      number: '03',
      label: 'Product Development',
      icon: '◈',
      iconClass: 'si-3',
      dotColor: 'cyan',
      title: 'From bold idea to<br>brilliant product',
      description: `We partner with founders, studios and enterprises to build tech products that set new standards. From early-stage prototyping and technical validation to full production engineering, we bring deep expertise in AI, spatial computing, realtime systems and software architecture to every build.`,
      highlight: {
        title: 'Co-Creation Residencies',
        body: 'Embedded R&D sprints at our Lake District innovation facility — intensive hands-on product development with DreamLab specialists working shoulder-to-shoulder with your team.',
      },
      capabilities: [
        { title: 'AI Product Development', desc: 'Custom AI applications from concept to production' },
        { title: 'Spatial Computing',      desc: 'AR glasses, mixed reality and spatial interfaces' },
        { title: 'Software Architecture',  desc: 'Scalable systems design and technical strategy' },
        { title: 'Realtime Systems',       desc: 'High-performance engines, WebGL, Unreal, Unity' },
        { title: 'Prototype & MVP Development', desc: 'Rapid, validated builds to test ideas quickly' },
        { title: 'Digital Twin Development', desc: 'Real-time digital replicas of physical systems' },
        { title: 'Decentralised Technology', desc: 'Bitcoin, Lightning Network, Nostr and Web3 protocols' },
        { title: 'Open Hardware & IoT',    desc: 'Sensor integration, physical computing and device design' },
      ],
    },
    {
      id: 'training',
      number: '04',
      label: 'Consultancy & Training',
      icon: '◎',
      iconClass: 'si-4',
      dotColor: 'green',
      title: 'Build the capability<br>within your team',
      description: `Technology is only transformative when people know how to use it. Our training and consultancy programmes give teams real hands-on capability with AI, immersive technology and creative innovation — through residential programmes, masterclasses, bespoke workshops and embedded advisory.`,
      capabilities: [
        { title: 'Enterprise AI Programmes', desc: 'Residential deep tech training for enterprise and SME teams' },
        { title: 'AI Commander Masterclass', desc: '5-day intensive curriculum for AI leadership and strategy' },
        { title: 'Co-Creation Residencies',  desc: 'Embedded R&D sprints at our Lake District facility' },
        { title: 'Bespoke Workshops',        desc: 'Tailored in-person and online workshops for any team' },
        { title: 'AI Strategy Consultancy',  desc: 'Expert advisory on AI adoption, risk and opportunity' },
        { title: 'Immersive Tech Training',  desc: 'XR, virtual production, Unreal Engine and spatial computing' },
        { title: 'Innovation Programme Design', desc: 'Build internal innovation capability and culture' },
        { title: 'Media Production Training', desc: 'Avid certified post-production and broadcast workflow training' },
      ],
    },
  ],

  // ──────────────────────────────────────────────────────────
  // ABOUT — Pillars & Timeline (About page)
  // ──────────────────────────────────────────────────────────
  about: {

    // Four operating principles shown in the manifesto grid
    pillars: [
      {
        number: '01',
        name: 'Agile',
        color: 'purple',
        headline: 'We move at the speed of ideas.',
        body: 'Small teams, tight feedback loops, no committees. We assemble the right collective around each challenge and ship — not next quarter, this one.',
      },
      {
        number: '02',
        name: 'Adaptive',
        color: 'pink',
        headline: 'We reshape around every challenge.',
        body: "We don't sell a fixed process. We flex — expanding with specialists, tightening when focus is needed, and reforming the team as the problem evolves.",
      },
      {
        number: '03',
        name: 'Realtime',
        color: 'cyan',
        headline: 'We work at the pace of change.',
        body: 'Technology is changing weekly. Our practice is built to absorb, test and deploy new capabilities as they emerge — not to catch up six months later.',
      },
      {
        number: '04',
        name: 'Intelligent',
        color: 'green',
        headline: 'We work from insight, not assumption.',
        body: 'Every decision is informed by live data, trends and signals. We continuously scan AI, XR and creative tech so our clients always get what actually works now.',
      },
    ],

    // Timeline — each entry: { year, title, body, future?: true }
    // Items with future: true get a dimmed / aspirational treatment.
    timeline: [
      {
        year: 'June 2024',
        title: 'DreamLab launches at MediaCityUK',
        body: 'Founded as a creative technology community and applied innovation lab — a home for 44+ specialists working across AI, immersive tech and realtime computing.',
      },
      {
        year: '2024',
        title: 'Epic Games partnership',
        body: 'Recognised as an Epic Games partner, deepening our work with Unreal Engine for virtual production, realtime content and immersive experiences.',
      },
      {
        year: '2024',
        title: 'Featured in Verizon 500 Trailblazers',
        body: 'Named in the Verizon 500 UK Trailblazers report — a marker of the UK companies building the next wave of meaningful technology.',
      },
      {
        year: '2025',
        title: '100 businesses supported · £2.7M invested',
        body: 'In under twelve months we passed £2.7M of combined public and private investment directly into 100+ North West SMEs, with 35+ collaborative projects delivered.',
      },
      {
        year: '2025',
        title: 'UKRI / Innovate UK funded',
        body: "Research backed by UKRI through Innovate UK's immersive technology accelerator, supporting our R&D on agentic AI, spatial computing and digital twins.",
      },
      {
        year: '2026',
        title: 'The collective grows',
        body: 'The team is now 44+ specialists strong, spanning MediaCity Manchester, Liverpool, and our Lake District co-creation facility — with a Creative Director joining the leadership.',
      },
      {
        year: 'Now',
        title: 'Building at the frontier',
        body: 'We operate as a living network — assembling the right collective around every brief, running AI and immersive projects with enterprises and SMEs from week one.',
        now: true,
      },
      {
        year: 'Near future',
        title: 'Scale the Lake District residency',
        body: 'Expanding our embedded R&D residency model so any team — startup or enterprise — can spend a week with us in the hills and leave with a working prototype.',
        future: true,
      },
      {
        year: 'Next',
        title: 'Agentic products for the creative industry',
        body: 'Our own line of applied AI products — agents that make creative studios, broadcasters and producers measurably faster, with human craft protected at the centre.',
        future: true,
      },
      {
        year: 'Future',
        title: 'A national creative-tech network',
        body: "Connecting DreamLab's Northern home to a wider UK collective of specialists, studios and research partners — because the future of work is networks, not silos.",
        future: true,
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // FAQs (Contact page)
  // ──────────────────────────────────────────────────────────
  faqs: [
    {
      q: 'What size of projects do you work on?',
      a: 'We work with organisations of all sizes — from early-stage startups building their first AI product to large enterprises running innovation programmes. Our work ranges from short advisory engagements to multi-month co-creation residencies.',
    },
    {
      q: 'Do you work outside of Manchester?',
      a: "Yes — while we're rooted in the North West UK, we work with organisations nationally and internationally. Our Lake District facility is available for residential residencies, and we can embed with your team wherever you're based.",
    },
    {
      q: "What's a co-creation residency?",
      a: 'A co-creation residency is an intensive R&D sprint where your team comes to our Lake District innovation facility — or we embed with you — to rapidly develop, prototype and validate a product or technology idea. They typically run 3–5 days and are designed to unlock breakthroughs that would take weeks in a normal working environment.',
    },
    {
      q: 'How quickly can you respond to an enquiry?',
      a: 'We aim to respond to all enquiries within one working day. For urgent projects, reach out directly via email and flag it as time-sensitive.',
    },
    {
      q: "Can you help if we're not sure what we need?",
      a: 'Absolutely. Some of our best projects started with "we know we need to do something with AI but we\'re not sure what." We\'re happy to start with a discovery conversation and help shape the right approach before any commitment is made.',
    },
  ],

};

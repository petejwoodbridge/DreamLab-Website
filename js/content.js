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
    location: 'Manchester, Liverpool, Cumbria & London',
    alsoIn: '',
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
      image: '/img/team/04.webp',
      initials: 'JO',
      avatarGradient: 'linear-gradient(135deg,#06b6d4,#7c3aed)',
      name: "Dr John O'Hare",
      role: 'Founder & Chief Hallucination Officer',
      bio: `Dr John O'Hare is the Founder of DreamLab AI and an HP AI Lighthouse Partner. Over 25 years at the intersection of tech and creativity, he leads pioneering work in AI-driven workflows, multi-agent orchestration and creative technology. As CTO of the company behind Unreal Engine's flagship third-party plugins, he shipped tools used by AAA game studios and Hollywood productions. From AI systems for autonomous marine vessels to immersive media at scale, he helps organisations understand what's actually possible with AI agents — and keep humans in the loop where it matters.`,
      tags: [
        { label: 'AI & LLMs' },
        { label: 'Agentic Systems', color: 'green' },
        { label: 'Unreal Engine', color: 'cyan' },
        { label: 'Immersive', color: 'pink' },
      ],
      award: 'HP AI Lighthouse Partner',
      linkedin: 'https://www.linkedin.com/in/jjohare/',
    },
    {
      image: '/img/team/03.webp',
      initials: 'SM',
      avatarGradient: 'linear-gradient(135deg,#f59e0b,#ec4899)',
      name: 'Ste Moyler',
      role: 'Chief Creative Officer',
      bio: `Ste is an award-winning creative director and producer with 25+ years in film, animation, AR/VR and immersive media. He has delivered projects for Microsoft, Sony Music and Adidas, and led MediaCityUK's first docuseries. Ste is known for mentoring creative talent and driving innovation in digital storytelling — ensuring the technology we build always serves a bigger idea.`,
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
      image: '/img/team/02.webp',
      initials: 'PW',
      avatarGradient: 'linear-gradient(135deg,#7c3aed,#ec4899,#06b6d4)',
      name: 'Pete Woodbridge',
      role: 'Founder & Chief Technical Officer',
      bio: `Pete is a founder of DreamLab and its Chief Technical Officer — a creative technologist and virtual production specialist working at the intersection of AI, immersive storytelling, interactive experiences and virtual production. Named in the BIMA 100 'Creatives & Designers' in 2020, his career spans commissions and R&D collaboration with BBC, ITV, Aardman Animations, Google, Intel, Apple, BT, the United Nations, Red Bull and the NHS. He also serves as R&D Innovation Lead at MediaFutures and publishes the Dream Machine newsletter — essential reading on creative AI.`,
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
      image: '/img/team/18.webp',
      initials: 'DH',
      avatarGradient: 'linear-gradient(135deg,#ec4899,#7c3aed)',
      name: 'Dr Derek Hales',
      role: 'Cyberphysical Pataphysicist',
      bio: `Derek is an architect and R&D director with 30+ years in speculative practices, XR and digital twinning. With a PhD in Design Fiction, he leads research and innovation across architecture, film and immersive media, shaping creative-technology policy and open innovation. A Research Fellow at The New Centre for Research & Practice and Lecturer at the University of Salford, his practice has been funded by Arts Council England, AHRC, EPSRC, UKRI Innovate UK and the EU Framework Programme.`,
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
      image: '/img/team/29.webp',
      initials: 'BS',
      avatarGradient: 'linear-gradient(135deg,#10b981,#06b6d4)',
      name: 'Bernard Steer',
      role: 'Spatial Audio Consultant',
      bio: `Bernard is a spatial audio consultant and Avid ACI-certified Pro Tools trainer with 20+ years in creative technology. He founded compact Dolby Atmos / DTS-X monitoring solutions used across UK post-production, and leads spatial-audio consultancy for immersive-tech residencies at MediaCity's DreamLab. Bernard has worked with broadcasters, post houses and music studios bridging Avid, Dolby and Pro Tools ecosystems.`,
      tags: [
        { label: 'Spatial Audio' },
        { label: 'Dolby Atmos', color: 'cyan' },
        { label: 'Post-Production', color: 'pink' },
        { label: 'Avid Certified', color: 'green' },
      ],
      award: 'Avid ACI Certified Trainer',
      linkedin: 'https://www.linkedin.com/in/bernard-steer-36857b30/',
    },
    {
      image: '/img/team/01.webp',
      initials: 'JJ',
      avatarGradient: 'linear-gradient(135deg,#7c3aed,#06b6d4)',
      name: 'JunkieJarvis',
      role: 'Agentic Chief Operating Officer',
      bio: `Jarvis is DreamLab's experimental AI Chief Operating Officer, developed in partnership with the Agentic Alliance. This non-voting C-Suite member supports company operations through advanced AI-driven decision-making, mirroring pioneering initiatives at Salesforce and beyond.`,
      tags: [
        { label: 'Agentic AI' },
        { label: 'Operations', color: 'cyan' },
        { label: 'Multi-Agent', color: 'pink' },
      ],
      award: 'Agentic Alliance',
    },
    {
      image: '/img/team/05.webp',
      initials: 'JL',
      avatarGradient: 'linear-gradient(135deg,#ec4899,#f59e0b)',
      name: 'Jing Li',
      role: 'Creative AI · Eurasia Pacific',
      bio: `Jing is a Creative AI developer and technologist with a background spanning business, technology and community innovation. After a decade in sustainable fashion, she retrained into data science and applied AI — now building and deploying generative tools for SMEs and creative practitioners at DreamLab, and connecting the collective to partners across the Eurasia Pacific region. Dedicated to responsible innovation, AI equity and making emerging technologies accessible to communities that are usually last in line.`,
      tags: [
        { label: 'Creative AI' },
        { label: 'Data Science', color: 'cyan' },
        { label: 'Responsible AI', color: 'green' },
        { label: 'Community', color: 'pink' },
      ],
      linkedin: 'https://www.linkedin.com/in/jingliaideveloper/',
    },
    {
      image: '/img/team/06.webp',
      initials: 'MG',
      avatarGradient: 'linear-gradient(135deg,#06b6d4,#10b981)',
      name: 'Marco E. Ghilardi',
      role: 'Simulation & Modelling Expert',
      bio: `Marco is a simulation and modelling expert with extensive experience in motorsport and automotive engineering. As founder of QuasiScience Ltd he tackles complex engineering challenges using advanced data analysis, CFD and numerical simulation — delivering high-impact solutions in performance-driven environments. He holds an MBA and bridges rigorous analytical method with real-world engineering delivery.`,
      tags: [
        { label: 'Simulation' },
        { label: 'CFD / Numerical', color: 'cyan' },
        { label: 'Motorsport', color: 'pink' },
        { label: 'Engineering', color: 'green' },
      ],
      award: 'Founder · QuasiScience',
      linkedin: 'https://www.linkedin.com/in/marco-ghilard',
    },
    {
      image: '/img/team/07.webp',
      initials: 'JC',
      avatarGradient: 'linear-gradient(135deg,#7c3aed,#10b981)',
      name: 'Jon Cooke',
      role: 'Senior Developer · Full Stack',
      bio: `Jon is a senior full stack developer with 20+ years in front- and back-end development. Working across AWS, Azure and Google Cloud ecosystems, he delivers scalable, secure and user-focused applications for clients across finance, media and public-sector with expertise in cloud-native systems and DevOps.`,
      tags: [
        { label: 'Full Stack' },
        { label: 'Cloud Native', color: 'cyan' },
        { label: 'DevOps', color: 'green' },
      ],
    },
    {
      image: '/img/team/45.webp',
      initials: 'JP',
      avatarGradient: 'linear-gradient(135deg,#06b6d4,#ec4899)',
      name: 'Jo Portus',
      role: 'Technical Artist',
      bio: `Jo is a technical artist and creative technologist who thrives at the seam between art, design and engineering. At Meta Reality Labs he collaborates with artists, designers, engineers and researchers to enable large-scale mixed-reality productions — building the tooling, pipelines and real-time systems that let ambitious creative visions actually ship. Before Meta he honed his craft across ad agencies and independent projects, developing interactive installations, AR filters and dynamic visuals with an unwavering focus on performance, craft and creative intent.`,
      tags: [
        { label: 'Technical Art' },
        { label: 'Real-time', color: 'cyan' },
        { label: 'MR / XR', color: 'pink' },
        { label: 'Creative Tech', color: 'green' },
      ],
      award: 'Meta Reality Labs',
      linkedin: 'https://www.linkedin.com/in/jo-portus/',
    },
    {
      image: '/img/team/08.webp',
      initials: 'KD',
      avatarGradient: 'linear-gradient(135deg,#ec4899,#06b6d4)',
      name: 'Kriss Dunk',
      role: 'AI & Computer Vision Researcher · Artist',
      bio: `Kriss is a creative coder and researcher at Byrons Labs, specialising in AI, computer vision and new-media art. With a background in sound engineering, production and immersive installations, he brings a multidisciplinary, ethically conscious approach to digital arts and technology — pairing technical R&D with live, audience-facing artistic practice.`,
      tags: [
        { label: 'Computer Vision' },
        { label: 'Creative Coding', color: 'cyan' },
        { label: 'New Media Art', color: 'pink' },
        { label: 'Byrons Labs', color: 'green' },
      ],
      linkedin: 'https://www.linkedin.com/in/byronslabs/',
    },
    {
      image: '/img/team/09.webp',
      initials: 'NT',
      avatarGradient: 'linear-gradient(135deg,#f59e0b,#7c3aed)',
      name: 'Nick Tipping',
      role: 'Guided Gamified Team Building',
      bio: `Nick is a leading figure in the UK games industry with nearly 30 years' experience. He specialises in C-suite and leadership team building, drawing on deep expertise in games, engineering management and managed activities to deliver impactful residencies and workshops.`,
      tags: [
        { label: 'Games' },
        { label: 'Team Building', color: 'cyan' },
        { label: 'Leadership', color: 'green' },
      ],
    },
    {
      image: '/img/team/10.webp',
      initials: 'RM',
      avatarGradient: 'linear-gradient(135deg,#10b981,#7c3aed)',
      name: 'Roger McKinley',
      role: 'Creative Technology & Content Manager',
      bio: `Roger is a creative technology and content manager at the University of Salford, specialising in immersive technology, virtual production and live performance research. He has led major R&D projects backed by AHRC and Arts Council England, and authored key publications in artistic research and digital culture.`,
      tags: [
        { label: 'Virtual Production' },
        { label: 'Immersive Tech', color: 'cyan' },
        { label: 'R&D', color: 'green' },
      ],
      linkedin: 'https://www.linkedin.com/in/roger-mckinley-3373b01a/',
    },
    {
      image: '/img/team/11.webp',
      initials: 'AN',
      avatarGradient: 'linear-gradient(135deg,#ec4899,#7c3aed)',
      name: 'Arpana Nandakumar',
      role: 'Alternate Realities Sorceress & Public Engagement',
      bio: `Arpana is an XR and AI specialist with expertise in real-time technical art, advanced haptics and immersive media. Working with partners including the University of Salford, she leads public engagement initiatives and is recognised for her work in gender equality and mixed-reality innovation.`,
      tags: [
        { label: 'XR' },
        { label: 'Haptics', color: 'cyan' },
        { label: 'Public Engagement', color: 'pink' },
      ],
      linkedin: 'https://www.linkedin.com/in/arpana-n/',
    },
    {
      image: '/img/team/12.webp',
      initials: 'BH',
      avatarGradient: 'linear-gradient(135deg,#06b6d4,#ec4899)',
      name: 'Bradley Harris',
      role: 'Metahuman Specialist',
      bio: `Bradley is a senior character and metahuman specialist with 15+ years' experience in 3D modelling, texturing, rigging and high-fidelity rendering for AAA games, film and broadcast. He has delivered assets for leading studios and Emmy-nominated projects, translating creative briefs into photoreal digital humans that hold up under close-up real-time rendering in Unreal Engine.`,
      tags: [
        { label: 'Metahumans' },
        { label: '3D Modelling', color: 'cyan' },
        { label: 'AAA Games', color: 'pink' },
        { label: 'Unreal Engine', color: 'green' },
      ],
      award: 'Emmy-Nominated',
      linkedin: 'https://www.linkedin.com/in/bradley-harris-71520517/',
    },
    {
      image: '/img/team/13.webp',
      initials: 'DM',
      avatarGradient: 'linear-gradient(135deg,#7c3aed,#f59e0b)',
      name: 'Daniel Maktabi',
      role: 'Technical Artist & Creative Technologist',
      bio: `Daniel is a technical artist and creative technologist specialising in digital sculpting, real-time rendering and immersive pipelines. He has developed digital-twin assets for AR/VR education with university and industry partners, presented research at major festivals and supports high-impact visual pitches for SMEs and innovation programmes.`,
      tags: [
        { label: 'Technical Art' },
        { label: 'Real-time', color: 'cyan' },
        { label: 'AR / VR', color: 'green' },
      ],
      linkedin: 'https://www.linkedin.com/in/danielmktb/',
    },
    {
      image: '/img/team/14.webp',
      initials: 'HS',
      avatarGradient: 'linear-gradient(135deg,#ec4899,#10b981)',
      name: 'Haydn Secker',
      role: 'Animation Producer',
      bio: `Haydn is an animation producer with 25+ years in stop-frame animation, writing and directing for film, television and games. He has led BAFTA-nominated and award-winning productions for broadcasters and studios across the UK, skilled across every stage from script development to on-set direction.`,
      tags: [
        { label: 'Animation' },
        { label: 'Stop-Frame', color: 'cyan' },
        { label: 'Directing', color: 'pink' },
      ],
      award: 'BAFTA-Nominated',
      linkedin: 'https://www.linkedin.com/in/haydn-secker-6a0622160/',
    },
    {
      image: '/img/team/15.webp',
      initials: 'GW',
      avatarGradient: 'linear-gradient(135deg,#06b6d4,#7c3aed)',
      name: 'Garth Williams',
      role: 'MoCap Super Hero & Creative Director',
      bio: `Garth is a creative director and motion capture specialist with 20+ years in theatre, film and interactive media. He designs immersive installations, delivers bespoke motion-capture services for studios and broadcasters, and leads community training programmes in AI and XR technologies.`,
      tags: [
        { label: 'Motion Capture' },
        { label: 'Immersive Installations', color: 'cyan' },
        { label: 'Creative Direction', color: 'pink' },
      ],
      linkedin: 'https://www.linkedin.com/in/garth-williams-49146373/',
    },
    {
      image: '/img/team/16.webp',
      initials: 'DA',
      avatarGradient: 'linear-gradient(135deg,#f59e0b,#06b6d4)',
      name: 'David Afolabi',
      role: 'Cyber Compliance Analyst',
      bio: `David is a cyber compliance analyst specialising in ISO 27001, security governance and digital forensics. He delivers professional development and security awareness training, and leads community engagement initiatives at DreamLab.`,
      tags: [
        { label: 'Cybersecurity' },
        { label: 'ISO 27001', color: 'cyan' },
        { label: 'Governance', color: 'green' },
      ],
      linkedin: 'https://www.linkedin.com/in/david-afolabi/',
    },
    {
      image: '/img/team/17.webp',
      initials: 'CF',
      avatarGradient: 'linear-gradient(135deg,#7c3aed,#ec4899)',
      name: 'Christian G H Frost',
      role: 'Immersive Technical Artist · "Master of Puppets"',
      bio: `Christian is an immersive technical artist and creative lead, specialising in 3D asset creation, procedural animation and real-time pipelines in Unreal Engine and Unity. He has developed VR education platforms, led creative pipelines for interactive tools, and delivers technical art instruction and support across studio and university partners.`,
      tags: [
        { label: 'Unreal Engine' },
        { label: 'Unity', color: 'cyan' },
        { label: 'Procedural', color: 'green' },
      ],
      linkedin: 'https://www.linkedin.com/in/cghfrost/',
    },
    {
      image: '/img/team/19.webp',
      initials: 'NN',
      avatarGradient: 'linear-gradient(135deg,#ec4899,#f59e0b)',
      name: 'Noelle Nurdin',
      role: 'Immersive Hyperpop Producer & Spatial Audio',
      bio: `Noelle is a Welsh-Ukrainian electronic artist specialising in glitchy hyperpop, spatial audio and immersive AV installations. Her work features in international residencies and major releases, with performances and tracks showcased by BMG, BBC Introducing and Disclosure.`,
      tags: [
        { label: 'Spatial Audio' },
        { label: 'Music Production', color: 'cyan' },
        { label: 'AV Installation', color: 'pink' },
      ],
      linkedin: 'https://www.linkedin.com/in/noelle-nurdin/',
    },
    {
      image: '/img/team/20.webp',
      initials: 'AR',
      avatarGradient: 'linear-gradient(135deg,#10b981,#06b6d4)',
      name: 'Annabeth Robinson',
      role: 'Creative Technologist',
      bio: `Annabeth is a creative technologist and filmmaker with 20+ years teaching animation, immersive technologies and game platforms. An SFHEA-accredited educator and award-winning researcher, she leads innovation in serious games and digital learning across UK higher-education and industry partners.`,
      tags: [
        { label: 'Serious Games' },
        { label: 'Immersive Learning', color: 'cyan' },
        { label: 'Animation', color: 'pink' },
      ],
      award: 'SFHEA Accredited',
      linkedin: 'https://www.linkedin.com/in/annabethrobinson/',
    },
    {
      image: '/img/team/21.webp',
      initials: 'LH',
      avatarGradient: 'linear-gradient(135deg,#f59e0b,#7c3aed)',
      name: 'Lewis Hackett',
      role: 'Blockchain Advisor & AR/VR Developer',
      bio: `Lewis is a multidisciplinary creative with 15+ years in AR/VR development, blockchain and interactive media. He directs film crews, produces motion graphics and translates imaginative concepts into polished digital experiences across art, animation and brand work for studios and agencies.`,
      tags: [
        { label: 'AR / VR' },
        { label: 'Blockchain', color: 'cyan' },
        { label: 'Motion Graphics', color: 'pink' },
      ],
      linkedin: 'https://www.linkedin.com/in/lewishackett/',
    },
    {
      image: '/img/team/22.webp',
      initials: 'UA',
      avatarGradient: 'linear-gradient(135deg,#06b6d4,#ec4899)',
      name: 'Dr Umran Ali',
      role: 'Creative Media',
      bio: `Umran is a creative media specialist with a PhD in Games Design & Virtual Environments and 15+ years leading curriculum and research in animation, serious games and digital landscapes at the University of Salford. He chairs the AniGame festival and develops innovative projects in virtual environments and generative media.`,
      tags: [
        { label: 'Games Design' },
        { label: 'Virtual Environments', color: 'cyan' },
        { label: 'Generative Media', color: 'green' },
      ],
      award: 'PhD · Games & VE',
      linkedin: 'https://www.linkedin.com/in/dr-umran-ali/',
    },
    {
      image: '/img/team/23.webp',
      initials: 'JS',
      avatarGradient: 'linear-gradient(135deg,#7c3aed,#10b981)',
      name: 'James Spiers',
      role: 'Partnerships & Business Development',
      bio: `James is a business development and partnerships specialist with 12+ years driving digital and tech innovation. He excels in stakeholder engagement, grant sourcing and ecosystem-building across immersive technologies, gaming and the creative industries — with experience brokering partnerships between SMEs, universities and public-sector funders.`,
      tags: [
        { label: 'Partnerships' },
        { label: 'BD', color: 'cyan' },
        { label: 'Ecosystems', color: 'green' },
      ],
      linkedin: 'https://www.linkedin.com/in/james-spiers-953a9a6b/',
    },
    {
      image: '/img/team/24.webp',
      initials: 'NS',
      avatarGradient: 'linear-gradient(135deg,#ec4899,#06b6d4)',
      name: 'Dr Natasha Stott',
      role: 'Researcher & Artistic Producer',
      bio: `Natasha is a researcher and artistic producer specialising in intermedial performance, XR environments and embodied improvisation. With 20+ years' international experience across academic and industry partners, she leads research-led performance projects and founded MindScape Lab for immersive well-being.`,
      tags: [
        { label: 'Performance' },
        { label: 'XR Environments', color: 'cyan' },
        { label: 'Well-being', color: 'pink' },
      ],
      linkedin: 'https://www.linkedin.com/in/drnatashastott/',
    },
    {
      image: '/img/team/25.webp',
      initials: 'CC',
      avatarGradient: 'linear-gradient(135deg,#f59e0b,#ec4899)',
      name: 'Chris Croft',
      role: 'Video Producer & Director',
      bio: `Chris is a video producer and director known for leading creative campaigns across music, sport and fashion. His credits include social edits for Rio Ferdinand's 'Rio Meets' and in-field shoots for JD Sports' 'The Breakdown', delivering impactful visual storytelling for major brands.`,
      tags: [
        { label: 'Video Production' },
        { label: 'Directing', color: 'cyan' },
        { label: 'Brand Content', color: 'pink' },
      ],
      linkedin: 'https://www.linkedin.com/in/chris-croft-988a1738/',
    },
    {
      image: '/img/team/26.webp',
      initials: 'TM',
      avatarGradient: 'linear-gradient(135deg,#10b981,#7c3aed)',
      name: 'Thadeous Matthews',
      role: 'Technical Artist & Broadcast Operator',
      bio: `Thadeous is a senior technical artist and broadcast operator, blending Unreal Engine, TouchDesigner and multi-camera directing. He delivers 3D design, motion graphics and hands-on support for broadcast gallery launches, VR staging and immersive performance-capture projects with UK studios and broadcasters.`,
      tags: [
        { label: 'Unreal Engine' },
        { label: 'TouchDesigner', color: 'cyan' },
        { label: 'Broadcast', color: 'pink' },
      ],
      linkedin: 'https://www.linkedin.com/in/thadeous-matthews-35b69653/',
    },
    {
      image: '/img/team/27.webp',
      initials: 'DT',
      avatarGradient: 'linear-gradient(135deg,#06b6d4,#f59e0b)',
      name: 'Dr David Tully',
      role: 'Unreal Engine / XR Specialist',
      bio: `David is an Unreal Engine and XR specialist with a PhD in Computer Science. He lectures in serious games, leads creative-tech innovation at Scenegraph Studios and develops AI avatars, VR well-being solutions and spatial computing projects for studio and education partners.`,
      tags: [
        { label: 'Unreal Engine' },
        { label: 'XR', color: 'cyan' },
        { label: 'AI Avatars', color: 'green' },
      ],
      award: 'PhD · Computer Science',
      linkedin: 'https://www.linkedin.com/in/davidtullyscenegraph/',
    },
    {
      image: '/img/team/28.webp',
      initials: 'CB',
      avatarGradient: 'linear-gradient(135deg,#ec4899,#10b981)',
      name: 'Cheryl Blake',
      role: 'Stop-Motion Animator & Community Musician',
      bio: `Cheryl is a stop-motion animator and community musician, recognised with a Ray Harryhausen Award and an MA in Animation (Distinction). Through Katuka Studios she creates award-winning short films addressing social themes, and leads inclusive workshops in music, percussion and animation.`,
      tags: [
        { label: 'Stop-Motion' },
        { label: 'Animation', color: 'cyan' },
        { label: 'Community', color: 'pink' },
      ],
      award: 'Ray Harryhausen Award',
      linkedin: 'https://www.linkedin.com/in/katukastudios/',
    },
    {
      image: '/img/team/30.webp',
      initials: 'SH',
      avatarGradient: 'linear-gradient(135deg,#7c3aed,#06b6d4)',
      name: 'Dr Sean LCM Hill',
      role: 'Robotics, XR, Bespoke Electronics, Audio',
      bio: `Sean is a creative technologist and entrepreneur with a PhD in Virtual Reality and an MSc in Robotics. 17+ years designing high-end audio electronics and bespoke robotic solutions for hi-fi, pro-audio and immersive partners; lectured in immersive systems at UK universities — blending electronics, CAD, VR/AR and HMI.`,
      tags: [
        { label: 'Robotics' },
        { label: 'Audio Electronics', color: 'cyan' },
        { label: 'VR / AR', color: 'green' },
      ],
      award: 'PhD · Virtual Reality',
      linkedin: 'https://www.linkedin.com/in/seanmandrake/',
    },
    {
      image: '/img/team/31.webp',
      initials: 'AB',
      avatarGradient: 'linear-gradient(135deg,#f59e0b,#10b981)',
      name: 'Dr Andy Bennett',
      role: 'Partnerships, Funding & Development',
      bio: `Andy is a partnerships and funding specialist with a PhD in geology and 20+ years delivering projects in technology-rich organisations. He excels in developing innovative technical solutions, fostering cross-sector collaborations and advising businesses on technology integration.`,
      tags: [
        { label: 'Funding' },
        { label: 'Partnerships', color: 'cyan' },
        { label: 'Advisory', color: 'green' },
      ],
    },
    {
      image: '/img/team/32.webp',
      initials: 'SP',
      avatarGradient: 'linear-gradient(135deg,#ec4899,#7c3aed)',
      name: 'Stephen Prince',
      role: 'Web, SEO & Marketing Specialist',
      bio: `Stephen is a digital marketing and e-commerce specialist who has led Click Through Digital for a decade. Skilled in SEO, SEM, web development and lead generation, he is passionate about helping independent businesses optimise their online presence and drive measurable growth.`,
      tags: [
        { label: 'SEO' },
        { label: 'Digital Marketing', color: 'cyan' },
        { label: 'E-commerce', color: 'pink' },
      ],
    },
    {
      image: '/img/team/33.webp',
      initials: 'WL',
      avatarGradient: 'linear-gradient(135deg,#06b6d4,#10b981)',
      name: 'Will Lewis-Clarke',
      role: 'Delivery Manager & QA',
      bio: `Will is a delivery manager and QA practitioner with 26+ years across banking, retail, utilities and public-sector programmes — including major UK financial, energy and government clients. He specialises in Agile delivery, SAFe QA coaching and test management, delivering bespoke training and quality strategies for complex, multi-vendor initiatives.`,
      tags: [
        { label: 'Agile Delivery' },
        { label: 'QA', color: 'cyan' },
        { label: 'SAFe', color: 'green' },
      ],
    },
    {
      image: '/img/team/34.webp',
      initials: 'AA',
      avatarGradient: 'linear-gradient(135deg,#7c3aed,#f59e0b)',
      name: 'Anthony Ashton',
      role: 'Drones, Scanning & Edge Vision Systems',
      bio: `Anthony is a certified UK drone pilot and survey specialist, experienced in advanced scanning and edge vision systems. He delivers precise aerial surveys and supports innovative projects across diverse environments.`,
      tags: [
        { label: 'Drones' },
        { label: '3D Scanning', color: 'cyan' },
        { label: 'Edge Vision', color: 'green' },
      ],
      award: 'Certified UK Drone Pilot',
    },
    {
      image: '/img/team/35.webp',
      initials: 'LB',
      avatarGradient: 'linear-gradient(135deg,#ec4899,#06b6d4)',
      name: 'Lawrance Butterworth',
      role: 'Platform Install Specialist',
      bio: `Lawrance is a specialised installation engineer with decades of expertise in automotive, marine and aviation systems. He focuses on immersive media experiences, delivering complex vehicle rebuilds and advanced engine, hydraulic and power system integrations.`,
      tags: [
        { label: 'Installation' },
        { label: 'Immersive Platforms', color: 'cyan' },
        { label: 'Engineering', color: 'green' },
      ],
    },
    {
      image: '/img/team/36.webp',
      initials: 'TD',
      avatarGradient: 'linear-gradient(135deg,#10b981,#ec4899)',
      name: 'Dr Toby Duckworth',
      role: 'Embedded Systems Specialist',
      bio: `Toby is an embedded systems specialist with decades of experience in high-performance software engineering. He develops novel low-level algorithms for live and interactive media installations and provides international, multi-lingual support engineering.`,
      tags: [
        { label: 'Embedded Systems' },
        { label: 'Low-level', color: 'cyan' },
        { label: 'Interactive Media', color: 'pink' },
      ],
    },
    {
      image: '/img/team/37.webp',
      initials: 'JD',
      avatarGradient: 'linear-gradient(135deg,#f59e0b,#06b6d4)',
      name: 'John Donlon',
      role: 'Network, Cloud, Infra & Cyber',
      bio: `John is a Cisco-certified expert in network, cloud and cyber infrastructure. Working across Cisco, Microsoft and major cloud vendor ecosystems, he specialises in data-centre operations, unified communications, cybersecurity and managed services for enterprise and public-sector clients.`,
      tags: [
        { label: 'Networking' },
        { label: 'Cloud Infra', color: 'cyan' },
        { label: 'Cybersecurity', color: 'green' },
      ],
      award: 'Cisco Certified',
    },
    {
      image: '/img/team/38.webp',
      initials: 'MK',
      avatarGradient: 'linear-gradient(135deg,#7c3aed,#ec4899)',
      name: 'Magnus Kemp',
      role: 'Large-Scale Mixed Media Systems',
      bio: `Magnus is a strategic and technical consultant specialising in large-scale mixed media systems. He provides independent guidance and operational advice for new-media, visualisation and experiential events, supporting clients with long-term, unbiased expertise.`,
      tags: [
        { label: 'Mixed Media' },
        { label: 'Visualisation', color: 'cyan' },
        { label: 'Experiential', color: 'pink' },
      ],
    },
    {
      image: '/img/team/39.webp',
      initials: 'KC',
      avatarGradient: 'linear-gradient(135deg,#10b981,#7c3aed)',
      name: 'Kat Cook',
      role: 'Outdoor Design & Integration Specialist',
      bio: `Kat is an outdoor design and integration specialist, blending landscape architecture, horticultural science and ecological design with creative technologies. With training from leading institutions, she brings artistic vision and scientific expertise to innovative environmental projects.`,
      tags: [
        { label: 'Landscape' },
        { label: 'Ecology', color: 'cyan' },
        { label: 'Outdoor Tech', color: 'green' },
      ],
    },
    {
      image: '/img/team/40.webp',
      initials: 'JS',
      avatarGradient: 'linear-gradient(135deg,#06b6d4,#f59e0b)',
      name: 'Dr Jessica Symons',
      role: 'Emerging Technologies',
      bio: `Jessica co-designs research and consultancy projects on innovation, emerging technologies and societal impact with university, NGO and public-sector partners. Her work explores how AI and the metaverse can address social and environmental challenges — she's developing an AI-enabled open-source ontology for multilingual glossaries across sectors.`,
      tags: [
        { label: 'Research' },
        { label: 'Metaverse', color: 'cyan' },
        { label: 'Social Impact', color: 'green' },
      ],
      linkedin: 'https://www.linkedin.com/in/jessica-symons-63622229/',
    },
    {
      image: '/img/team/41.webp',
      initials: 'MW',
      avatarGradient: 'linear-gradient(135deg,#ec4899,#10b981)',
      name: 'Mandy Wang',
      role: 'Creative Project Management',
      bio: `Mandy is a seasoned creative project manager and producer with extensive experience in video production, radio recording, digital marketing, live events and print. She has worked with Adidas, AstraZeneca, Myprotein and Puma — delivering high-profile campaigns, drone shows and multimedia productions with meticulous stakeholder and talent management.`,
      tags: [
        { label: 'Project Management' },
        { label: 'Production', color: 'cyan' },
        { label: 'Live Events', color: 'pink' },
      ],
    },
    {
      image: '/img/team/42.webp',
      initials: 'PR',
      avatarGradient: 'linear-gradient(135deg,#f59e0b,#7c3aed)',
      name: 'Pip Rustage',
      role: 'Advertising Photographer & Creative Producer',
      bio: `Pip is a highly experienced advertising photographer, SFX photography specialist, stills producer and studio design consultant based in Manchester. With 20+ years in the creative industry, she works with top-tier agencies and global brands including New Balance, Pepsi Max and Adidas. She also hosts Creative Boom IRL Manchester and manages MADDchester, a community for ADHD and ASD.`,
      tags: [
        { label: 'Photography' },
        { label: 'SFX Stills', color: 'cyan' },
        { label: 'Creative Production', color: 'pink' },
      ],
      linkedin: 'https://www.linkedin.com/in/piprustage/',
    },
    {
      image: '/img/team/43.webp',
      initials: 'SG',
      avatarGradient: 'linear-gradient(135deg,#7c3aed,#06b6d4)',
      name: 'Simon Graham',
      role: 'Creative Technology & Immersive Experiences',
      bio: `Simon has 20+ years delivering complex interactive and experiential projects for studios, agencies and live-event clients. He combines technical problem-solving with creative vision across AV integration, real-time rendering, XR and AI-driven workflows. A self-taught developer and digital artist, he has held roles including Creative Technology Director and Head of Technical Innovation — known for bridging creative and technical teams and building scalable solutions for experiential media.`,
      tags: [
        { label: 'Creative Tech' },
        { label: 'Real-time', color: 'cyan' },
        { label: 'XR', color: 'pink' },
        { label: 'AI Workflows', color: 'green' },
      ],
      linkedin: 'https://www.linkedin.com/in/s-graham/',
    },
    {
      image: '/img/team/44.webp',
      initials: 'PL',
      avatarGradient: 'linear-gradient(135deg,#10b981,#06b6d4)',
      name: 'Our Physical Labs',
      role: 'Global AI Development Network',
      bio: `DreamLab operates a distributed network of physical laboratory spaces across multiple locations, enabling hands-on research, development and training in AI and machine learning. Our labs are equipped with high-performance computing, specialised ML hardware and collaborative spaces designed for intensive deep learning projects and residential training programmes.`,
      tags: [
        { label: 'AI Labs' },
        { label: 'HPC', color: 'cyan' },
        { label: 'Residential R&D', color: 'green' },
      ],
    },

    // 👆 Copy any block above and edit to add a new team member.
    // Required fields: initials, name, role, bio, tags
    // Optional: image, avatarGradient, award, linkedin
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
  // Top brands with logo files — used for homepage ticker only
  ticker: [
    'Apple', 'Google', 'Sony', 'HP', 'BBC', 'ITV', 'NBC',
    'Intel', 'NHS', 'IBM', 'Red Bull', 'United Nations',
    'BT', 'Epic Games', 'Aardman Animations', 'Universal Music Group', 'MSG Sphere',
    'The Hut Group', 'Monster', 'Topshop', 'McCann', 'Saatchi & Saatchi', 'Tag',
  ],

  // Companies with logo files — shown as logo wall on Work page
  clients: [
    'Apple', 'Google', 'Sony', 'HP', 'BBC', 'ITV', 'NBC',
    'Intel', 'NHS', 'IBM', 'Red Bull', 'United Nations',
    'BT', 'Epic Games', 'Aardman Animations', 'Universal Music Group', 'MSG Sphere',
    'The Hut Group', 'Monster', 'Topshop', 'McCann', 'Saatchi & Saatchi', 'Tag', 'MediaCity', 'Dock10',
  ],

  // SME / studio partners — shown as cards on Work page
  smes: [
    { name: 'Supermassive',             desc: 'Conversational agents and AI for location-based immersive experiences and the cultural market.' },
    { name: 'Rezzil',                   desc: 'Spatial broadcasting for future sports experiences.' },
    { name: 'Corporation Pop',          desc: 'WebXR platform Social Pop — bringing music fans together in shared immersive spaces.' },
    { name: 'Salsa Sound',              desc: 'Live spatial sound plugins for game engines — Unity and Unreal.' },
    { name: 'Immersify Education',      desc: 'Mixed reality, spatial computing and Apple Vision Pro for health education.' },
    { name: 'Krygon Studios',           desc: 'Democratising workflows for digital humans, characters and virtual production creation.' },
    { name: 'Scenegraph Studios',       desc: 'Backend scaling and latency reduction for AI avatars, including an interview skills training product.' },
    { name: 'PlayXD',                   desc: 'Interaction design for hand tracking, mixed reality and spatial computing — plus unannounced work with Meta.' },
    { name: 'MyManu',                   desc: 'AI-powered translation earbuds, developing new markets and applications for the technology.' },
    { name: 'MK-V',                     desc: 'Digitally twinned camera gimbal with spatial computing and XR integrations.' },
    { name: 'AIX',                      desc: 'The underpinning platform for connected immersive venues.' },
    { name: 'Xpllor',                   desc: 'AI tools that make it easy for non-technical people to create immersive environments for learning and enterprise.' },
    { name: 'FeedAR',                   desc: 'AR WebXR platform for co-located experiences and games.' },
    { name: 'InSpatial',                desc: 'A WYSIWYG platform for XR and OpenXR — making it easy for designers to work with augmented reality in marketing and education.' },
    { name: 'Sparkle Street',           desc: 'AI intelligence and metaverse tools for the music industry.' },
    { name: 'Toasted Productions',      desc: 'Augmented reality and archive app innovation.' },
    { name: 'Byrons Labs',              desc: 'AI and Mars.' },
    { name: 'Cold Star Media',          desc: 'Holographic performance and AI-driven immersive experiences.' },
    { name: 'Safety Catch',             desc: 'A performative game exploring the experience of living with psychosis.' },
    { name: 'Bellyfeel',                desc: 'AI scriptwriting support tools for writers and production teams.' },
    { name: 'The Emotional Health Club',desc: 'Mental health app and tools for young people.' },
    { name: 'Fuzzy Duck',               desc: 'Accessibility and inclusion research in location-based experiences.' },
    { name: 'Piing',                    desc: 'Interactive and participatory screen games for audiences of up to 100,000 players.' },
    { name: 'Captive Devices',          desc: 'Revolutionary facial motion capture system from ex Cubic Motion and Epic Games engineers.' },
    { name: 'Microcosm',                desc: 'New spatial sound hardware system democratising the market for high-end spatial audio setups.' },
    { name: 'Sairo',                    desc: 'Shopify plugin and AI workflow to create custom fashion assets for Roblox.' },
    { name: 'VisioningLab',             desc: 'Macro photogrammetry rig and AI workflow for capturing small objects at high fidelity.' },
    { name: 'ImmersivEye',              desc: 'Immersive technology innovation.' },
    { name: 'Bright and Shiny',         desc: 'AI avatars and an immersive 3D world for viking experience Havelocks Kingdom.' },
    { name: 'Pathway XR',               desc: 'Virtual production, networking and AI services.' },
    { name: 'Neuron',                   desc: 'Virtual production, networking and AI services.' },
    { name: 'Quasi Science',            desc: 'Testing of new virtual production lighting solutions.' },
    { name: 'Realtime',                 desc: 'R&D work on remotely accessible virtual production and previsualisation tools.' },
  ],

  // ──────────────────────────────────────────────────────────
  // PUBLIC SECTOR COLLABORATORS — universities, councils,
  // research bodies and innovation agencies (Work page)
  // Logos rendered the same as `clients` — drop a file into
  // img/clients/ named after the slugified org name.
  // ──────────────────────────────────────────────────────────
  publicSector: [
    // With logo files
    'Nottingham Trent University',
    'Staffordshire University',
    'Greater Manchester Combined Authority',
    'Liverpool City Region Combined Authority',
    'UKRI',
    'AHRC',
    'Innovate UK',
    'Arts Council',
    'Digital Catapult',
    'LIPA',
    'UKIE',
    'National Museums Liverpool',
    // Text fallback (no logo file yet)
    'University of Manchester',
    'University of Salford',
    'University of Liverpool',
    'Liverpool John Moores University',
    'Immerse UK',
    'National Lottery Heritage Fund',
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
      description: `From intelligent document processing to multi-agent AI systems and creative content pipelines for video, image and audio, we design and build automation that eliminates busywork, surfaces better insights and unlocks new operational capabilities. LLMs, generative media, RAG and agentic workflows — whether you're a startup moving fast or an enterprise scaling AI responsibly, we build it properly.`,
      capabilities: [
        { title: 'Creative AI Workflows',          desc: 'Generative video, image and audio pipelines for production teams' },
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
        { title: 'AI Native & Technology Enhanced Creative Campaigns', desc: 'Using the power of AI to create impact for your brand' },
        { title: 'Creative AI Workflows',     desc: 'Generative video, image and audio pipelines for production teams' },
        { title: 'Generative Content & AI Art', desc: 'Creative AI tools for image, video, sound and text' },
        { title: 'Immersive XR Experiences',  desc: 'VR, AR and MR design and production' },
        { title: 'Virtual Production',        desc: 'Unreal Engine LED volume and real-time filmmaking' },
        { title: 'Interactive Installations', desc: 'Sensor-driven, projection mapped and generative art' },
        { title: 'AI-Assisted Animation',     desc: 'Real-time characters, procedural animation, motion AI' },
        { title: 'Game Development',          desc: 'Concept to launch across platforms and engines' },
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

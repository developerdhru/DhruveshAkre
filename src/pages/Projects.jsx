import React, { useState } from 'react'

const isPreviewLink = (url) => url.includes('drive.google.com') && url.includes('/preview')

export default function Projects() {
  const [activePanel, setActivePanel] = useState('dev')
  const [selectedIds, setSelectedIds] = useState({ dev: 'dev-1', media: 'media-1' })

  // MANUALLY EDIT YOUR PROJECTS HERE
  const devProjects = [
    {
      id: 'dev-1',
      title: 'Photrum Technologies Web Platform',
      description: 'Full-stack cybersecurity services website with Flask, Jinja2, MySQL, and an admin CMS for managing blogs, gallery content, team visibility, and client showcases.',
      company: 'Full-Stack Cybersecurity Services Website with Admin CMS',
      duration: '11/2025 - 03/2026',
      details: [
        'Built a full-stack cybersecurity company website using Flask, Jinja2, and MySQL with modular routing and reusable templates.',
        'Developed an admin dashboard to manage blogs, featured images, gallery uploads, and client showcase content without code changes.',
        'Implemented dynamic public pages (Home, Blog, About, Services, Team, Contact) with database-driven rendering and responsive UI components.',
        'Added visibility control features for team content, including page-level and member-level toggles reflected across public navigation and sections.',
        'Integrated contact form workflow with email delivery support and graceful fallback handling for non-configured mail environments.',
      ],
      impact: 'Improved content management speed and reduced manual update effort for public pages.',
      skills: ['Flask', 'Jinja2', 'MySQL', 'Admin CMS', 'Responsive UI'],
      media: [],
    },
    {
      id: 'dev-2',
      title: 'EcoGrowAI: IoT-Enabled Crop & Fertilizer Recommendation System',
      description: 'IoT-enabled crop and fertilizer recommendation platform with Flask, machine learning inference, prediction logging, and secure admin workflows.',
      company: 'Full-Stack Development / Sustainable Farming Technology / IoT / Embedded System',
      duration: '06/2026 - 04/2026',
      details: [
        'Developed an IoT-integrated smart agriculture platform that collects real-time sensor readings (soil and environmental parameters) and feeds them into machine learning models for crop and fertilizer recommendation.',
        'Built a full-stack web application using Python and Flask, with REST/form-based prediction workflows for real-time inference and user-friendly dashboards.',
        'Integrated ML inference pipeline (scikit-learn models) for classification-based recommendations, including preprocessing/encoding for sensor-driven and user-input features.',
        'Implemented relational database management with MySQL and SQLAlchemy to store prediction logs, user/admin activity, and content data for analytics and traceability.',
        'Created secure admin modules with authentication, CRUD operations, and content management, demonstrating backend development, API integration, and production-ready web architecture.',
      ],
      impact: 'Improved recommendation consistency and enabled traceable decision logs for farm insights.',
      skills: ['Python', 'Flask', 'IoT', 'Machine Learning', 'MySQL'],
      media: [],
    },
    {
      id: 'dev-3',
      title: 'Blockchain Certificate Verification System',
      description: 'Certificate issuance and verification platform using smart contracts, role-based auth, and QR-based verification workflows.',
      company: 'Full-Stack Development / Blockchain / Web Security / QR Verification',
      duration: 'Jan 2026 - Apr 2026',
      details: [
        'Developed a secure certificate issuance and verification platform using blockchain to ensure tamper-proof and fraud-resistant credentials.',
        'Built smart contracts with Solidity and Hardhat for immutable storage of certificate hashes and decentralized verification.',
        'Designed backend using Node.js and Express.js with JWT authentication, role-based access, and certificate lifecycle management.',
        'Integrated MongoDB and developed frontend with React for QR-based verification and admin dashboards.',
        'Implemented a hybrid verification system combining blockchain validation with database status checks for real-time results.',
      ],
      impact: 'Reduced certificate fraud risk by enabling tamper-resistant verification.',
      skills: ['React', 'Node.js', 'Express.js', 'Solidity', 'MongoDB'],
      media: [],
    },
    {
      id: 'dev-4',
      title: 'FixMyWaste Smart Waste Management',
      description: 'Waste tracking and complaint management system with role-based access and planned IoT integration for real-time monitoring.',
      company: 'Web Development / Smart City Solutions',
      duration: '2024 - 2025',
      details: [
        'Developed a full stack web application using Flask, JavaScript, MySQL.',
        'Implemented role-based authentication (admin, driver, employee, user).',
        'Built FixMyWaste platform for waste tracking and management.',
        'Designed route optimization module for efficient waste collection.',
        'Developed complaint management system for users.',
        'Planned IoT integration for real-time monitoring (future scope).',
      ],
      impact: 'Streamlined complaint tracking and improved operational visibility for waste workflows.',
      skills: ['Flask', 'JavaScript', 'MySQL', 'Role-based Auth'],
      media: [],
    },
    {
      id: 'dev-5',
      title: 'Personal Portfolio Website',
      description: 'Responsive personal branding site with project showcases and contact flows, designed for clear navigation across devices.',
      company: 'Frontend Development / Personal Branding',
      duration: '07/2025 - 10/2026',
      details: [
        'Developed portfolio website using HTML, CSS, JavaScript.',
        'Hosted project using GitHub Pages.',
        'Designed responsive UI for multiple devices.',
        'Implemented project showcase and contact sections.',
        'Focused on user-friendly navigation and layout.',
      ],
      impact: 'Improved presentation of technical and creative work in one unified profile site.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      media: [],
    },
    {
      id: 'dev-6',
      title: 'E-Gram Sahayak',
      description: 'Village management and assistance system with full-stack architecture and machine-learning integration for practical e-governance use cases.',
      company: 'Full Stack Development / Machine Learning / E-Governance',
      duration: '2023 - 2024',
      details: [
        'Focused on solving real-world rural and agricultural problems.',
        'Developed a full stack web application using Flask, Python, HTML, CSS, JavaScript.',
        'Acknowledged villager about new scheme and other government schemes.',
        'Implemented data preprocessing and model integration.',
        'Focused on solving real-world rural and agricultural problems.',
      ],
      impact: 'Helped structure government-scheme awareness into a usable digital workflow.',
      skills: ['Flask', 'Python', 'Machine Learning', 'JavaScript'],
      media: [],
    },
    {
      id: 'dev-7',
      title: 'AniShop Single Page E-Commerce App',
      description: 'Single-page e-commerce UI with category browsing, product listing, and user-focused layout.',
      company: 'Frontend Development / Single Page Application (SPA) / E-Commerce',
      duration: '2023',
      details: [
        'Developed a Single Page Application (SPA) using HTML, CSS, and JavaScript.',
        'Designed responsive UI for product listing, categories, and user interface.',
        'Built structured layout for e-commerce functionality.',
        'Focused on UI/UX design and smooth user experience.',
      ],
      impact: 'Improved frontend design and component structuring skills for commerce interfaces.',
      skills: ['HTML', 'CSS', 'JavaScript', 'SPA'],
      media: [],
    },
    {
      id: 'dev-8',
      title: 'Solar Tracking System using Arduino Uno',
      description: 'IoT and embedded systems project for renewable energy tracking.',
      company: 'IoT / Embedded Systems / Renewable Energy',
      duration: '2018 - 2019',
      details: [
        'Built an automated solar tracking system using Arduino Uno.',
        'Integrated LDR sensors to detect sunlight direction.',
        'Controlled gear motors using motor driver for panel movement.',
        'Improved energy efficiency compared to fixed solar panels.',
        'Implemented real-time tracking using embedded programming.',
      ],
      impact: 'Improved energy efficiency through automatic sunlight tracking.',
      skills: ['Arduino Uno', 'LDR Sensors', 'Motor Driver', 'Embedded Programming'],
      media: [],
    },
  ]

  const mediaProjects = [
    {
      id: 'media-1',
      title: 'SGMBA Full Traditional Video',
      description: `📜 सार्वजनिक गणेशोत्सव मंडळ भुजानाईक आळी, दांडी – सुवर्ण महोत्सवी वर्ष (अखंड ५० वर्षांची गौरवशाली परंपरा) । ॐ गणेशाय नमः 🙏 या वर्षी आपल्या मंडळाने सुवर्णमहोत्सवी वर्ष उत्साहात साजरे केले. बाप्पाच्या कृपेने आणि सर्वांच्या सहकार्याने या वाटचालीचा सुवर्ण टप्पा गाठता आला ✨ गणेश चतुर्थीच्या एक दिवस आधी ढोल-ताशांच्या गजरात बाप्पाचे भव्य स्वागत करण्यात आले. गणेश स्थापना व पूजेनंतर ज्येष्ठ सदस्यांचा शाल-श्रीफळ देऊन विशेष सन्मान करण्यात आला. महिला मंडळाच्या परिश्रमातून सर्व भक्तांसाठी महाप्रसादाचे आयोजन करण्यात आले. विसर्जन सोहळा बँडच्या सुरेल तालावर भक्ती आणि भावनेने भरलेला वातावरणात संपन्न झाला 🎺 विशेष आभार सर्व मंडळ सदस्यांचे, मंडप व स्टेज डेकोरेशन टीमचे, महिला मंडळाचे, व्हिडिओग्राफर टीमचे, ढोल-ताशा पथक व बँड पथकाचे आणि सर्व गणेश भक्तांचे 🙏 बाप्पा, तुमची कृपा अशीच आमच्यावर राहू दे! ॐ गणेशाय नमः! गणपती बाप्पा मोरया — पुढच्या वर्षी लवकर या! ✨🐘`,
      skills: ['Premiere Pro','After Effects','Reels', 'Transitions', 'Sound design'],
      media: [
        {
          label: 'SGMBA 2025 Full Video',
          url: 'https://drive.google.com/file/d/1Os1E7LAOXhEj1y5GKKHpIdgGbAXj6Nea/preview',
        },
        {
          label: 'SGMBA Reel Edit',
          url: 'https://drive.google.com/file/d/1QDgQrhqg54TOR_84t2IljstoX9iATyVK/preview',
        },
        {
          url: 'https://drive.google.com/file/d/14Cv_s3It6eBZLe_bD-Q-qfp2aH0gJkkR/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1Lta1KXVRhkqL1Gl2oy18x7quHg32Df0d/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1e-aYP6UOZTZslcO0FimaYL5sChAnh5lD/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1BTF3vL9sPsVrKUSyRJq2b4m7nuSMND3V/preview',
        },
        {
          url: 'https://drive.google.com/file/d/18l2TaWPSfJDjKnNS0h0mydb4POvsB_fM/preview',
        },
      ],
    },
    {
      id: 'media-2',
      title: 'Cinematic Prewedding - Jigar & Jalak',
      description: 'Some love stories are written by fate long before two hearts meet. From a single glance to a lifetime promise, their journey has been nothing short of magical. Through every moment, they found strength in each other and peace in togetherness. This is not just a celebration of love — it’s the union of two souls destined to walk side by side, building a future filled with dreams, devotion, and forever.',
      skills: ['Premiere Pro', 'Transitions', 'Sound design'],
      media: [
        {
          label: 'Cinematic Edit',
          url: 'https://drive.google.com/file/d/1u0rbqg55qnbbjkPl2zDv6oKUaD99k50D/preview',
        },
      ],
    },
    {
      id: 'media-3',
      title: 'Wedding Vibes - Lalit & Nishita',
      description: 'It didn’t happen all at once. It grew slowly — in conversations that lasted hours, in smiles that needed no reason, and in silence that felt safe. They became each other’s comfort, support, and home. And now, as they step into a new chapter together, they carry not just love, but understanding, trust, and a promise to stand together through everything life brings.',
      skills: ['Premiere Pro', 'Transitions', 'Sound design'],
      media: [
        {
          label: 'Cinematic Edit',
          url: 'https://drive.google.com/file/d/1alwCyjDnCoRitndmEcjTDZWl4JA1BVXp/preview',
        },
      ],
    },
    {
      id: 'media-4',
      title: 'Rajnagar Cha Raja',
      description: 'The wait is over… and the sound of devotion fills the air. With beating dhols and hearts full of faith, we welcome the remover of obstacles, the symbol of wisdom and prosperity — Ganapati Bappa. As he steps into our home, he doesn’t just arrive as an idol, but as a blessing, a protector, and a part of our family. May his presence fill our lives with happiness, strength, and new beginnings. Ganapati Bappa Morya!',
      skills: ['Premiere Pro', 'After Effects', 'Transitions', 'Sound design'],
      media: [
        {
          label: 'Cinematic Video',
          url: 'https://drive.google.com/file/d/1TUHzeNQK3unHhexhk6B2GXIezfZhYyki/preview',
        },
        {
          url: 'https://drive.google.com/file/d/12KAEVZ2IhY1tQhX8wFoUnXl-NvB2MaVj/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1SQhq7Qc4y5WxkyYNvk_5oBUeR73dqR45/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1dLpiMbkfUhi6gWDkhojlQFiMm-reP3EV/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1puu3ak37uH1ifuNxKvccGXcBTLQxYQSO/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1jLxn89OnBCCKAX7SrYxj6uM2llxYM4WI/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1tpBvKFOW6Gl1IFdJQVKi3UEJSXIIen7-/preview',
        },
      ],
    },
    {
      id: 'media-5',
      title: 'Pradnya Haldi Vibes',
      description: 'The vibrant colors, the joyous laughter, and the sacred rituals — every moment of the Haldi ceremony is a celebration of love, tradition, and new beginnings. As turmeric paste is applied with care and blessings are shared, we come together to honor the bride-to-be and the beautiful journey she is about to embark on. Here’s to a lifetime of happiness, prosperity, and cherished memories for Pradnya. May your life be as bright and joyful as this special day! 🌼✨',
      skills: ['Premiere Pro', 'After Effects', 'Transitions', 'Sound design'],
      media: [
        {
          label: 'Haldi Vibes',
          url: 'https://drive.google.com/file/d/1iHZJgDT4nyJY_xIC_y_qSs9oBxFTsRA2/preview',
        },
      ],
    },
    {
      id: 'media-6',
      title: 'Wedding Invitation Edit',
      description: 'Wedding invitations are more than just a call to celebrate — they are the first glimpse into a couple’s love story and the tone for their big day. With every frame, transition, and beat, we crafted an invitation that reflects their unique bond, shared dreams, and the joyous journey ahead. This is not just an invite; it’s a heartfelt message to friends and family, inviting them to witness the beginning of a beautiful forever.',
      skills: ['After Effects', 'Motion graphics', 'Illustrator', 'Photoshop'],
      media: [
        {
          label: 'Invitation Edit',
          url: 'https://drive.google.com/file/d/10OidizF49BOJ9bbhPwhOq5H3ofe3oEO_/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1iz_4Wrwboy23ZE0v57F1PHU5Nyqv337Q/preview',
        },
        {
          url: 'https://drive.google.com/file/d/162e891kkLk3fvC5rJpey2M3Ln270TaBc/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1zBnnu7Lb9Iy3tMv1O_bFVqYhdogUU1ao/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1gdkqmtH5Nn1kZf0Eb-1uiSsjR9W5FO2D/preview',
        }
      ],
    },
    {
      id: 'media-7',
      title: 'SaiArt Reels Edit',
      description: '',
      skills: ['Premiere Pro', 'Sound design', 'Transitions'],
      media: [
        {
          label: 'Ganapati Bappa Reels',
          url: 'https://drive.google.com/file/d/1ICmYPb2a_TpWWdvok34FyzinP0ze9ePY/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1RA4qeOxqaxjO9DEf1b3Jnz-09CsJKdWq/preview',
        },

      ],
    },
    {
      id: 'media-8',
      title: 'UpUrFit Brand Reel',
      description: `UpUrFit is India's first specialized sports and fitness topical solutions brand, co-created with the fitness community to enhance performance and recovery. Founded by Munish Vig and Vikram Gunjal, the Mumbai-based startup offers pre-workout activation (Thermo Gel) and post-workout recovery (Cryo Gel/Spray) products. `,
      skills: ['Premiere Pro', 'Motion graphics', 'Transitions', 'Visual Effects'],
      media: [
        {
          label: 'UpUrFit Brand Reel',
          url: 'https://drive.google.com/file/d/10WuLehnRZvUzowZW81jAHca02cKRvg33/preview',
        },
      ],
    },
    {
      id: 'media-9',
      title: 'Hacktify Brand Reel',
      description: '',
      skills: ['After Effects', 'Typography', 'Premire Pro'],
      media: [
        {
          label: 'Hacktify Typography Reel',
          url: 'https://drive.google.com/file/d/1JVqWnAYI-12IVTbkvSCNRQ6lG0s0E-uP/preview',
        },
      ],
    },
    {
      id: 'media-10',
      title: 'Holi Reels Edit',
      description: 'Holi in Mahim, particularly in Mahim Koliwada (fisherman colony), is a vibrant, traditional, and high-energy celebration deeply rooted in Koli culture. Celebrations feature large, decorated bonfires with Mataji (Goddess) idols, traditional music, dancing, and lively street-side, community-driven color play in areas like Jannabai Chawl. ',
      skills: ['Premiere Pro', 'Sound design', 'Transitions'],
      media: [
        {
          label: 'Holi Reels Edit',
          url: 'https://drive.google.com/file/d/1__TFT47Hr4Y4L1scc82cGs0eOvGWtxwp/preview',
        },
      ],
    },
    {
      id: 'media-11',
      title: 'Hiranandani Home Tour',
      description: 'Home Tours are more than just a showcase of spaces — they are a glimpse into the lifestyle, design philosophy, and unique features that make a house a home. This tour of a Hiranandani residence highlights the blend of elegance, functionality, and comfort that defines modern living. From thoughtfully designed interiors to innovative amenities, this video captures the essence of what makes this home truly special.',
      skills: ['Premiere Pro', 'Transitions'],
      media: [
        {
          label: 'Hiranandani Home Tour',
          url: 'https://drive.google.com/file/d/10SbnwWVGZsrougdderJy1vqCSsw48BRy/preview',
        },
      ],
    },
    {
      id: 'media-12',
      title: 'Swanadan Mujar Traditional Video',
      description: 'Today is not just a ritual, it is a blessing wrapped in tradition. As tiny curls fall away, they carry with them the past and make space for a bright new beginning. Surrounded by love, laughter, and family prayers, this little soul steps into a journey guided by protection, purity, and endless blessings. May every step ahead be filled with happiness, health, and success. This Mundan ceremony is not just a custom — it’s the start of a beautiful life story written with faith and love. 🌸✨',
      skills: ['Premiere Pro', 'Transitions'],
      media: [
        {
          label: 'Swanadan Mujar Mundan Video',
          url: 'https://drive.google.com/file/d/19RpQCN88CV9cJAU_GHZHeHFj2H1dAdwG/preview',
        },
      ],
    },
    {
      id: 'media-13',
      title: 'Ghor Drama Teaser',
      description: `Every family has secrets… but some secrets are too dangerous to stay hidden.

Behind the smiles, behind the celebrations, behind closed doors — a storm has been growing.

Trust is breaking.
Relationships are shaking.
And when truth finally comes out… nothing will ever be the same.

This is not just a story of love and betrayal —
It’s a battle of ego, emotions, and revenge.

Get ready… because the drama is about to begin.`,
      skills: ['Premiere Pro', 'Transitions'],
      media: [
        {
          label: 'Ghor Drama Teaser',
          url: 'https://drive.google.com/file/d/144pdBNY35ATdY4FqUDGgYAY5WvplnbA1/preview',
        },
      ],
    },
    {
      id: 'media-14',
      title: 'Sarva Mangal Family Trust',
      description: 'Where compassion becomes action and humanity finds its true meaning — Sarva Mangal Family Trust stands as a beacon of hope. Dedicated to serving the needy, supporting the elderly, guiding the lost, and nurturing young lives with care and dignity, this trust is more than an organization — it is a family built on kindness and faith. With every helping hand and every heartfelt prayer, Sarva Mangal Family Trust continues its mission to spread love, restore hope, and create a future filled with strength, support, and new beginnings for all. 🙏✨',
      skills: ['Premiere Pro', 'Transitions'],
      media: [
        {
          label: 'Sarva Mangal Family Trust Video',
          url: 'https://drive.google.com/file/d/1Dmcf7QLYsmORFJE47m5NtNH7Lt_Mj8up/preview',
        },
      ],
    },
    {
      id: 'media-15',
      title: 'Ceramic Pro Brand Video',
      description: '',
      skills: ['After Effects', 'Motion graphics', 'Transitions'],
      media: [
        {
          label: 'Ceramic Pro Brand Video',
          url: 'https://drive.google.com/file/d/1rJeQGjEucNBE4MY2oBZkEdyDGDJziL92/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1FD_nUH-k0Lq5Ao9_5JlygaSfnbRGONnz/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1rIf1qqgMysIjC91CrWYC_y7-gXr5t5kG/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1AwQuIgyws1lp-bd3_Ns04gJSQMbUqA9p/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1f9f7t85-LCeem7uKS9dB0m-__jrz7hYO/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1rb-k5bDOLtUQOVdBeTZSHql9w5n3JIka/preview',
        }
      ],
    },
    {
      id: 'media-16',
      title: 'MPIRE VISTA (BALLB) Office Tour',
      description: 'Office tours are more than just a walkthrough of a workspace — they are a glimpse into the culture, creativity, and unique vibe that defines a company. This tour of MPIRE VISTA’s BALLB office captures the blend of professionalism and innovation that fuels their work. From thoughtfully designed interiors to collaborative spaces, this video showcases how the environment inspires creativity, fosters teamwork, and reflects the brand’s identity. Step inside and experience the heart of where ideas come to life.',
      skills: ['Premiere Pro','After Effects', 'Motion graphics', 'Transitions'],
      media: [
        {
          label: 'MPIRE VISTA Office Tour',
          url: 'https://drive.google.com/file/d/13jbofSofSvrkZGJpaqsPIJh8kIrKSZnf/preview',
        },
      ],
    },
    {
      id: 'media-17',
      title: 'Priyanka Cinematic Reel',
      description: '',
      skills: ['Premiere Pro', 'Motion graphics', 'Transitions'],
      media: [
        {
          label: 'Priyanka Cinematic Reel',
          url: 'https://drive.google.com/file/d/12E_Yx2yvoR2TFSIjJCgmqDtxnVfxDS9l/preview',
        },
      ],
    },
    {
      id: 'media-18',
      title: 'Sayali Cinematic Video',
      description: '',
      skills: ['Premiere Pro', 'Motion graphics', 'Transitions'],
      media: [
        {
          label: 'Sayali Cinematic Video',
          url: 'https://drive.google.com/file/d/12ZjiHgBYCjEVHapJXLfhNbML7cNqSSN8/preview',
        },
      ],
    },
    {
      id: 'media-19',
      title: 'Prewedding - Sujit & Aarti',
      description: 'Like the sky meeting the horizon, their journey feels endless and calm. In open fields and under golden sunsets, they found a love that feels free and fearless. Every step they take together writes a new memory, and every heartbeat reminds them that they were meant to walk this road side by side — today, tomorrow, and always.',
      skills: ['Premiere Pro', 'Motion graphics', 'Transitions'],
      media: [
        {
          label: 'Prewedding - Sujit & Aarti',
          url: 'https://drive.google.com/file/d/114ATd4gd0_jBTAWgJt33g76U1GD4f4Xw/preview',
        },
      ],
    },
    {
      id: 'media-20',
      title: 'Prewedding - Vivek & Manali',
      description: 'Ek choti si mulaqat se shuru hui kahani, aaj zindagi bhar ke safar tak pahunch chuki hai. Hasi, shararat, sapne aur wafaa — in sab ne milkar inka rishta aur gehra bana diya. Yeh sirf pyaar nahi, ek faisla hai — har din ek dusre ko chunne ka. Aur ab, yeh dono sirf saath nahi chalenge… balki saath jeeyenge.',
      skills: ['Premiere Pro', 'Motion graphics', 'Transitions'],
      media: [
        {
          label: 'Prewedding - Vivek & Manali',
          url: 'https://drive.google.com/file/d/1eTUC0e18Tuh4OdgCeDLcn6vs524Ia_0A/preview',
        },
      ],
    },
    {
      id: 'media-21',
      title: 'Text Animation After Effects',
      description: '',
      skills: ['After Effects', 'Motion graphics'],
      media: [
        {
          label: 'Invitation Edit',
          url: 'https://drive.google.com/file/d/1XlwqbbgeroHtXKD8GP0Jdw_RmYVe11GM/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1rRwoALwM_L-LbRPmZtKysXyZoN4EnFfG/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1F5zZWbH9ZCdUWsrIdSHC8Z4l-72aqOMa/preview', 
        }
      ],
    },
    {
      id: 'media-22',
      title: 'Bappa Video Edit',
      description: '',
      skills: ['Premiere Pro', 'Motion graphics', 'Transitions'],
      media: [
        {
          label: 'Bappa Video Edit',
          url: 'https://drive.google.com/file/d/1vE7Xj3kZ_Z4Wbt6PjwA0PWF6SyIhU_St/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1lo7yU0ETKR0UkAm65A5i7gw8WfM5jWdV/preview',
        }
      ],
    },
    {
      id: 'media-23',
      title: 'Naming Ceremony Cinematic Video',
      description: 'A name is more than just a word — it is a blessing, an identity, and the beginning of a beautiful journey. Today, surrounded by love, laughter, and heartfelt prayers, we celebrate the arrival of a precious soul and the name that will walk with them through every dream and every milestone. As family gathers and blessings fill the air, this naming ceremony becomes a promise — a promise of protection, happiness, and a future shining with endless possibilities. This is not just the start of a life, but the start of a story written with love. ✨👶🌸',
      skills: ['Premiere Pro', 'Transitions'],
      media: [
        {
          label: 'Naming Ceremony Cinematic Video',
          url: 'https://drive.google.com/file/d/13CWpYtSySkqqsZVP0-NQk5W7Zcb-nD_h/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1H8t500Lx0XWINZRWpohb3m_KNI834A26/preview',
        }
      ],
    },
    {
      id: 'media-24',
      title: 'Cinematic Reel Edit',
      description: '',
      skills: ['Premiere Pro', 'Motion graphics', 'Transitions'],
      media: [
        {
          label: 'Cinematic Reel Edit',
          url: 'https://drive.google.com/file/d/1h2LHSGaF9p8iAVK54acDQgWHcot-qCGF/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1Fk3CqXriaS6bYhND39GlGdM2AAmy-8Og/preview',
        }
      ],
    },
    {
      id: 'media-25',
      title: 'Ranjeeta Cinematic Video',
      description: '',
      skills: ['Premiere Pro', 'Motion graphics', 'Transitions'],
      media: [
        {
          label: 'Ranjeeta Cinematic Video',
          url: 'https://drive.google.com/file/d/1vJol9kkeQnTju6TtLUSnRFtYGu1PeLIR/preview',
        },
        {
          url: 'https://drive.google.com/file/d/1R1eaIcCZs-6QwdsB8GoaZRp-fyXPkw8g/preview',
        }
      ],
    },
    {
      id: 'media-26',
      title: 'Rinky Kahde Cinematic Video',
      description: '',
      skills: ['After Effects', 'Motion graphics', 'Transitions'],
      media: [
        {
          label: 'Rinky Kahde Cinematic Video',
          url: 'https://drive.google.com/file/d/1jNB7wPNyidfAxhNDEkWLWzR9fqbFnkP9/preview',
        },
      ],
    },

  ]

  const activeProjects = activePanel === 'dev' ? devProjects : mediaProjects
  const selectedProject = activeProjects.find((p) => p.id === selectedIds[activePanel]) || activeProjects[0]
  const isDevPanel = activePanel === 'dev'

  const handleSelect = (id) => {
    setSelectedIds((prev) => ({ ...prev, [activePanel]: id }))
  }

  return (
    <section className="page projects">
      <div className="section-head">
        <h2>Projects</h2>
        <p>Full stack builds, IoT experiments, and creative media work.</p>
      </div>
      <div className="toggle-wrap" role="tablist" aria-label="Project categories">
        <button
          type="button"
          className={activePanel === 'dev' ? 'toggle-btn active' : 'toggle-btn'}
          onClick={() => setActivePanel('dev')}
          aria-pressed={activePanel === 'dev'}
        >
          Featured Projects
        </button>
        <div className="toggle-or">OR</div>
        <button
          type="button"
          className={activePanel === 'media' ? 'toggle-btn active' : 'toggle-btn'}
          onClick={() => setActivePanel('media')}
          aria-pressed={activePanel === 'media'}
        >
          Media Work
        </button>
      </div>

      <section className="panel-card">
        <div className="panel-head">
          <h3>{activePanel === 'dev' ? 'Featured Projects' : 'Media Work Done by Me'}</h3>
          <p>
            {activePanel === 'dev'
              ? 'Full stack builds, IoT experiments, and web applications.'
              : 'Reels, invitation edits, and cinematic storytelling work. Note: Below some content shooted by me is being edited by me, while some content shot by others is also being edited by me. I have done the editing for all the content below, but not all the shooting.'}
          </p>
        </div>

        {activeProjects.length === 0 ? (
          <p className="empty-state">No projects yet.</p>
        ) : (
          <>
            <div className="project-feed" role="list">
              {activeProjects.map((project) => (
                <article className="project-post" key={project.id}>
                  <div className="project-post-head">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                  <div className="tag-row">
                    {project.skills.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="media-list">
                    {project.media.length === 0 ? (
                      <span className="meta">No media uploaded yet.</span>
                    ) : (
                      project.media.map((item) => (
                        <div className="media-item" key={item.url}>
                          {!isDevPanel && (
                            <a
                              className="text-link"
                              href={item.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {item.label}
                            </a>
                          )}
                          {isPreviewLink(item.url) ? (
                            <div className="media-frame">
                              <iframe
                                src={item.url}
                                title={item.label}
                                allow="autoplay; fullscreen"
                                allowFullScreen
                                loading="lazy"
                              />
                            </div>
                          ) : (
                            <span className="meta">Add a Drive preview link to embed media.</span>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="project-split">
              <div className="project-list" role="tablist" aria-label="Project list">
                {activeProjects.map((project) => (
                  <button
                    key={project.id}
                    type="button"
                    className={project.id === selectedProject?.id ? 'project-list-item active' : 'project-list-item'}
                    onClick={() => handleSelect(project.id)}
                  >
                    <span>{project.title}</span>
                  </button>
                ))}
              </div>

              <article className="project-detail">
                <div className="project-detail-head">
                  <h4>{selectedProject?.title}</h4>
                  {isDevPanel ? (
                    <>
                      <p className="project-detail-org">{selectedProject?.company || 'Project Team'}</p>
                      <p className="project-detail-date">Date: {selectedProject?.duration || 'Ongoing'}</p>
                      <hr className="project-detail-divider" />
                      <h5>Project details</h5>
                      <ul className="plan-list">
                        {(selectedProject?.details || [selectedProject?.description]).map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <div className="plan-impact">
                        <strong>Impact</strong>
                        <p>{selectedProject?.impact || 'Improved usability, consistency, and delivery quality.'}</p>
                      </div>
                      <h5>Technologies used</h5>
                    </>
                  ) : (
                    <p>{selectedProject?.description}</p>
                  )}
                </div>
                <div className={isDevPanel ? 'plan-tech' : 'tag-row'}>
                  {selectedProject?.skills.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="media-list">
                  {selectedProject?.media.length === 0 ? (
                    <span className="meta">No media uploaded yet.</span>
                  ) : (
                    selectedProject?.media.map((item) => (
                      <div className="media-item" key={item.url}>
                        {!isDevPanel && (
                          <a
                            className="text-link"
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {item.label}
                          </a>
                        )}
                        {isPreviewLink(item.url) ? (
                          <div className="media-frame">
                            <iframe
                              src={item.url}
                              title={item.label}
                              allow="autoplay; fullscreen"
                              allowFullScreen
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <span className="meta">Add a Drive preview link to embed media.</span>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </article>
            </div>
          </>
        )}
      </section>
    </section>
  )
}

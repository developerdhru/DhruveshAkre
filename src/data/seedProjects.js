const seedProjects = {
  dev: [
    {
      id: 'seed-dev-1',
      title: 'Project showcase coming soon',
      description: 'I am curating my strongest builds and case studies.',
      skills: ['Full Stack', 'IoT', 'Creative'],
      media: [],
    },
    {
      id: 'seed-dev-2',
      title: 'Flask + SQL Web App',
      description: 'Scalable backend with clean UI and structured data flow.',
      skills: ['Flask', 'SQL', 'JavaScript'],
      media: [],
    },
  ],
  media: [
    {
      id: 'seed-media-1',
      title: 'Creative Editing Suite',
      description: 'Video and photo edits focused on storytelling and rhythm.',
      skills: ['Premiere Pro', 'Photoshop', 'After Effects'],
      media: [
        {
          label: 'Drive preview',
          url: 'https://drive.google.com/file/d/1u0rbqg55qnbbjkPl2zDv6oKUaD99k50D/preview',
        },
      ],
    },
    {
      id: 'seed-media-2',
      title: 'Reel Editing Showcase',
      description: 'Short-form edits optimized for social engagement.',
      skills: ['Reels', 'Transitions', 'Sound design'],
      media: [],
    },
  ],
}

export default seedProjects

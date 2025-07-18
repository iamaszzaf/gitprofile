// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'iamaszzaf', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Repozytoria',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projekty',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Zeptra.',
          description:
            'Zeptra. to zaawansowany system zarządzania magazynem, który automatyzuje i optymalizuje kluczowe procesy magazynowe. Dzięki śledzeniu zapasów w czasie rzeczywistym oraz technologii RFID i kodów kreskowych, zapewnia pełną kontrolę nad stanem zapasów. Usprawnia procesy przyjęcia, przechowywania, kompletacji i wydania towarów, skracając czas operacji i minimalizując błędy. System integruje się z innymi rozwiązaniami firmy, takimi jak ERP, umożliwiając płynny przepływ danych. Dzięki zaawansowanym narzędziom analitycznym, dostarcza raporty o stanie zapasów i wydajności magazynu. Jego skalowalność i elastyczność sprawiają, że doskonale sprawdza się zarówno w małych, jak i dużych magazynach.',
          imageUrl:
            '',
          link: 'https://zeptra.space/',
        },
        {
          title: 'CzyPunktualnie?',
          description:
            'CzyPunktualnie? to innowacyjna platforma dedykowana komunikacji miejskiej, której celem jest poprawa punktualności i jakości usług transportowych. Aplikacja oferuje użytkownikom możliwość śledzenia pojazdów w czasie rzeczywistym, planowania podróży oraz uzyskiwania precyzyjnych informacji o opóźnieniach i zmianach w rozkładach jazdy.',
          imageUrl:
            '',
          link: 'https://czypunktualnie.pl/',
        },
      ],
    },
  },
  seo: { title: 'Łukasz Majka', description: 'Cześć! Jestem Łukasz – programista z pasją do tworzenia nowoczesnych aplikacji webowych, które łączą estetykę z funkcjonalnością. Dzięki doświadczeniu w technologiach frontendowych i backendowych oferuję kompleksowe podejście do projektów IT, od projektowania interfejsów użytkownika po zaawansowaną logikę biznesową.', imageURL: 'https://media.licdn.com/dms/image/v2/D4D03AQER0Kc1KsOqdQ/profile-displayphoto-shrink_400_400/B4DZRC1EfvHYAk-/0/1736287996748?e=1755734400&v=beta&t=ByzJWhSWQhAnJS01BWXr2X0i_Bodb2S-pQGMepTHSrI' },
  social: {
    linkedin: 'majkalukasz07',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://aszzaf.pl',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'TypeScript',
    'React.js',
    'Next.js',
    'Node.js',
    'NestJS',
    'Laravel',
    'Docker',
    'PostgreSQL',
    'MySQL',
    'Prisma',
    'Git',
    'Tailwind CSS',
    'Playwright / Cypress',
    'CI/CD (GitHub Actions / GitLab CI)',
    'GraphQL',    
  ],
  experiences: [
    {
      company: 'PDC Logistics',
      position: 'Magazynier',
      from: 'Listopad 2024',
      to: 'Obecnie',
      companyLink: 'https://piercegroup.com/',
    },
    {
      company: 'Grupa Muszkieterów',
      position: 'Stażysta ds. logistyki',
      from: 'Wrzesień 2023',
      to: 'Sierpień 2024',
      companyLink: 'https://muszkieterowie.pl/',
    },
  ],
  certifications: [
    {
      name: 'AI-102: Azure AI Engineer Associate',
      body: 'Microsoft',
      year: 'Lipiec 2025 - Lipiec 2026',
      link: 'https://www.microsoft.com/learn/certifications/verify/7f9a2d43-cb8e-4f10-9a6d-3e2b1f9c8d5a',
    },
    {
      name: 'AZ-900: Azure Fundamentals',
      body: 'Microsoft',
      year: 'Styczeń 2025',
      link: 'https://www.microsoft.com/learn/certifications/verify/e51c7b28-4a93-4d71-b2f3-0c6e7a59a182',
    },
  ],
  // educations: [
  //   {
  //     institution: 'Institution Name',
  //     degree: 'Degree',
  //     from: '2015',
  //     to: '2019',
  //   },
  //   {
  //     institution: 'Institution Name',
  //     degree: 'Degree',
  //     from: '2012',
  //     to: '2014',
  //   },
  // ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;

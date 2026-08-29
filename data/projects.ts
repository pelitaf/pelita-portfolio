export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  featured: boolean;

  cardImage?: string;
  detailImages?: string[];

  prototypeUrl?: string;
  repoUrl?: string;
  liveUrl?: string;

  overview: string;
  role: string;
  contributions: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "servco-smart-appraisal",
    title: "Servco Smart Appraisal",
    category: "Software Engineering",
    description:
      "A mobile-friendly vehicle appraisal experience designed to streamline condition assessments, estimate repair costs, and support smarter purchase decisions.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "AI",
    ],
    featured: true,

    cardImage:
      "/projects/servco-smart-appraisal/card.png",

    detailImages: [
      "/projects/servco-smart-appraisal/detail-1.png",
    ],

    /*
      Add your real links here.

      Example:
      prototypeUrl: "https://your-prototype.com",
      repoUrl: "https://github.com/username/repository",
      liveUrl: "https://your-live-site.com",
    */

    prototypeUrl: "https://hackathon-usedcar-dev.azurewebsites.net/",
    repoUrl: "",
    liveUrl: "",

    overview:
      "Servco Smart Appraisal is a mobile-focused vehicle appraisal application designed to help simplify the vehicle buying and appraisal process. The experience guides users through vehicle information, condition assessments, repair considerations, market value, and the final purchase decision.",

    role:
      "I helped design and develop the application experience, including the user interface, appraisal workflow, responsive behavior, validation logic, and supporting application functionality.",

    contributions: [
      "Built a responsive appraisal workflow using Next.js and React.",
      "Designed condition assessment sections for different areas of the vehicle.",
      "Added validation and warning behavior to help ensure important appraisal information is captured.",
      "Designed the experience for mobile and tablet use.",
    ],

    outcome:
      "The project explored how a structured digital workflow could make the appraisal process easier to complete, more consistent, and more useful for vehicle purchasing decisions.",
  },

  {
    id: 2,
    slug: "ccc-dashboard",
    title: "CCC Dashboard",
    category: "Data Analytics",
    description:
      "A dashboard designed to make operational data easier to understand, monitor, and use for everyday decision-making.",
    technologies: [
      "Data Visualization",
      "Analytics",
      "Dashboard Design",
      "Databricks",
    ],
    featured: true,

    cardImage:
      "/projects/ccc-dashboard/card.png",

    detailImages: [
      "/projects/ccc-dashboard/detail-1.png",
      // "/projects/ccc-dashboard/detail-2.png",
      // "/projects/ccc-dashboard/detail-3.png",
    ],

    prototypeUrl: "",
    repoUrl: "",
    liveUrl: "",

    overview:
      "The CCC Dashboard organizes operational information into a centralized visual experience designed to make important metrics easier to understand and monitor.",

    role:
      "I worked on organizing the information, identifying useful metrics, and designing a dashboard experience that made the data easier to interpret.",

    contributions: [
      "Organized operational data into meaningful dashboard views.",
      "Designed visualizations for quickly understanding performance.",
      "Focused on presenting information clearly for managers to use.",
      "Improved the organization and readability of key metrics.",
    ],

    outcome:
      "The dashboard created a more centralized and understandable way to view operational information and support data-driven decision-making.",
  },

  {
    id: 3,
    slug: "ctahr-dashboard",
    title: "CTAHR Dashboard",
    category: "Data Analytics",
    description:
      "An interactive dashboard designed to transform CTAHR data into clear, accessible insights through thoughtful data visualization and reporting.",
    technologies: [
      "Data Visualization",
      "Data Analytics",
      "Dashboard Design",
    ],
    featured: true,

    cardImage:
      "/projects/ctahr-dashboard/card.png",

    detailImages: [
      "/projects/ctahr-dashboard/detail-1.png",
    ],

    prototypeUrl: "",
    repoUrl: "https://github.com/binhn-tran/CTAHR-Dashboard",
    liveUrl: "https://ctahr-dashboard.pages.dev/",

    overview:
      "The CTAHR Dashboard was created to organize and present data in a more accessible visual format, allowing users to quickly explore key information, identify trends, and better understand the underlying data.",

    role:
      "I worked on the dashboard design and development, including organizing the data, determining how information should be presented, and creating visualizations that make the results easier to interpret.",

    contributions: [
      "Organized and prepared data for dashboard reporting.",
      "Designed visualizations to communicate key metrics and trends.",
      "Structured the dashboard to make information easy to navigate and understand.",
      "Focused on creating a clean and user-friendly reporting experience.",
    ],

    outcome:
      "The dashboard transformed the underlying data into a more approachable and useful visual experience, making it easier for users to explore information and identify meaningful insights.",
  },

  {
    id: 4,
    slug: "soundcloud-recreation",
    title: "SoundCloud Website Recreation",
    category: "Web Development",
    description:
      "This project is a front-end recreation of the SoundCloud homepage built to practice translating an existing website into a functional React application. I included screenshots of both the site I created and the actual SoundCloud website from the time I was working on the recreation so you can compare them side by side. Guess which one is which?",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Bootstrap",
      "CSS",
    ],
    featured: false,

    cardImage:
      "/projects/soundcloud-recreation/card.png",

    detailImages: [
      "/projects/soundcloud-recreation/detail-1.png",
      "/projects/soundcloud-recreation/detail-2.png",
    ],

    prototypeUrl: "",
    repoUrl: "https://github.com/pelitaf/soundcloud-react",
    liveUrl: "",

    overview:
      "This project is a front-end recreation of the SoundCloud homepage built to practice translating an existing website into a functional React application. The recreation includes SoundCloud-inspired navigation, promotional banners, search and upload controls, and a trending music section.",

    role:
      "I recreated the SoundCloud interface from the ground up, focusing on matching the original website's layout and styling while organizing the page into reusable React components.",

    contributions: [
      "Recreated the layout and visual design of the SoundCloud homepage.",
      "Built reusable React components for navigation, promotional content, search, and trending music.",
      "Implemented a rotating promotional carousel using React Bootstrap.",
      "Created a grid of trending tracks with album artwork, track information, and links.",
      "Used Bootstrap and custom CSS to reproduce SoundCloud's layout and styling.",
    ],

    outcome:
      "The project strengthened my front-end development skills by giving me hands-on experience recreating an established user interface with React, Next.js, Bootstrap, and custom CSS.",
  },
];
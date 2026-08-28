export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  featured: boolean;
  image?: string;

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
    image: "/projects/servco-smart-appraisal.png",

    overview:
      "Servco Smart Appraisal is a mobile-focused vehicle appraisal application designed to help simplify the vehicle buying and appraisal process. The experience guides users through vehicle information, condition assessments, repair considerations, market value, and the final purchase decision.",

    role:
      "I helped design and develop the application experience, including the user interface, appraisal workflow, responsive behavior, validation logic, and supporting application functionality.",

    contributions: [
      "Built a responsive appraisal workflow using Next.js and React.",
      "Designed condition assessment sections for different areas of the vehicle.",
      "Added validation and warning behavior to help ensure important appraisal information is captured.",
      "Designed the experience for mobile and tablet use.",
      "Integrated application logic for market value, repair estimates, and appraisal decisions.",
      "Created an AI-assisted workflow for interpreting appraisal notes.",
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
    ],
    featured: true,
    image: "/projects/ccc-dashboard.png",

    overview:
      "The CCC Dashboard organizes operational information into a centralized visual experience designed to make important metrics easier to understand and monitor.",

    role:
      "I worked on organizing the information, identifying useful metrics, and designing a dashboard experience that made the data easier to interpret.",

    contributions: [
      "Organized operational data into meaningful dashboard views.",
      "Designed visualizations for quickly understanding performance.",
      "Focused on presenting information clearly for everyday users.",
      "Improved the organization and readability of key metrics.",
    ],

    outcome:
      "The dashboard created a more centralized and understandable way to view operational information and support data-driven decision-making.",
  },

  {
    id: 3,
    slug: "data-engineering-qa",
    title: "Data Engineering & QA",
    category: "Data Engineering",
    description:
      "Data quality and validation work focused on improving reliability across large datasets, pipelines, and production tables.",
    technologies: [
      "SQL",
      "Databricks",
      "Python",
      "Data Quality",
    ],
    featured: true,
    image: "/projects/data-engineering-qa.png",

    overview:
      "This work focused on validating data pipelines and ensuring that transformed datasets accurately reflected their source data and defined business rules.",

    role:
      "I performed data quality assurance across staging, transformed, and production datasets using SQL and Databricks.",

    contributions: [
      "Created SQL queries for required-field validation.",
      "Validated duplicate detection and error logging behavior.",
      "Compared source and target datasets to verify transformations.",
      "Performed source-to-target validation across large datasets.",
      "Validated masking behavior for sensitive fields.",
      "Used Databricks to investigate pipeline and data-quality issues.",
      "Supported documentation of data workflows and validation processes.",
    ],

    outcome:
      "The validation work helped identify data-quality issues before they could affect downstream datasets, applications, and reporting.",
  },
];
export interface Project {
  id: number;
  title: string;
  image: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  stack: string[];
}
export const projects: Project[] = [
  {
    id: 1,
    title: "GEBEYA",
    image: "/images/gebeya.png", // Path to your portfolio's public images directory
    subtitle:
      "A fully responsive MERN stack e-commerce platform and admin portal.",
    category: "Full-Stack Web App",
    year: "2025",
    description:
      "GEBEYA is a high-performance, fully responsive online shopping marketplace featuring dual-portal services for customers and administrators. Built with a React-Vite frontend and Node-Express-MongoDB backend, it incorporates secure JWT authentication, multi-portal roles, Cloudinary product image uploads, and integration-ready payment endpoints for Santimpay and Arifpay.",
    stack: [
      "React 19",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Vite",
      "JWT",
      "Cloudinary",
      "Axios",
    ],
  },
  {
    id: 2,
    title: "Cosmic",
    image: "/images/cosmic.png", // Path to your portfolio's public images directory
    subtitle: "AI-Powered Presentation Builder",
    category: "Full-Stack Web Application / AI Tool",
    year: "2026",
    description:
      "An AI-powered presentation platform that makes designing professional PowerPoint slides 10x faster. Leveraging the Google Gemini API, Cosmic turns prompt inputs, uploaded files (PDF, Word, PPTX), or webpage URLs into rich presentation outlines. Users can dynamically edit presentation layouts, rearrange structural nodes via a drag-and-drop tree editor, customize templates, and download production-ready PPTX presentations directly.",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "Express",
      "Socket.IO",
      "Prisma ORM",
      "PostgreSQL",
      "Better-Auth",
      "Google Gemini API",
      "Cloudinary",
      "PptxGenJS",
    ],
  },

  {
    id: 3,
    title: "Barbershop",
    image: "/images/barbershop.png", // Path to your portfolio's public images directory
    subtitle: "Modern Barbershop Web App",
    category: "Web Application",
    year: "2026",
    description:
      "A premium, fully responsive barbershop web application designed from a professional Figma template. It showcases services, customer testimonials, brand partners, and features a fully validated contact form.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "React Hook Form",
      "Zod",
    ],
  },

  {
    id: 4,
    title: "Staygent",
    subtitle: "AI-Powered Hospitality & On-Demand Service Marketplace",
    category: "Web Application",
    year: "2026",
    image: "/images/staygent_web.png", // Path to your portfolio's public images directory
    description:
      "A premium rental and on-demand services platform tailored for the Ethiopian market. Built with Next.js and strict TypeScript, it connects guests, hosts, and service providers with advanced features including role-based dashboards, secure KYC identity verification flows, Chapa payment integrations, real-time Socket.IO chat, and a custom AI-driven recommendation and automated booking agent.",
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "next-intl (i18n)",
      "Axios",
      "Socket.IO",
      "Chapa API",
      "Solana UI Integrations",
    ],
  },

  {
    id: 5,
    title: "Staygent Mobile",
    subtitle: "Cross-Platform Hospitality & On-Demand Service App",
    category: "Mobile Application",
    year: "2026",
    image: "/images/staygent_app.png", // Path to your portfolio's public images directory
    description:
      "The official cross-platform mobile application companion for the Staygent platform. Built with React Native, Expo, and strict TypeScript, it delivers a smooth native guest and host experience with real-time push notifications, custom interactive maps, animated UI elements, local offline cache support, and integration with the Go backend API.",
    stack: [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "TanStack React Query",
      "Zustand",
      "React Native Reanimated",
      "React Native Maps",
      "Expo Notifications",
      "Zod",
    ],
  },
  {
    id: 6,
    title: "curate",
    image: "/images/curate.png",
    subtitle:
      "A highly customizable, themeable cross-platform recipe browsing mobile application.",
    category: "Mobile Development",
    year: "2026",
    description:
      "curate is a modern recipe exploration and management mobile application that connects users with a vast library of culinary guides. It features a complete authentication flow via Clerk (including 6-digit email verification), robust recipe search, categorized filters, YouTube tutorial integrations, and a personalized favorites organizer. Designed with high personalization in mind, the app supports 8 dynamic color themes and runs on a PostgreSQL database managed by Drizzle ORM.",
    stack: [
      "React Native",
      "Expo",
      "Expo Router",
      "Express.js",
      "PostgreSQL (Neon DB)",
      "Drizzle ORM",
      "Clerk Auth",
      "React Native Reanimated",
    ],
  },
];

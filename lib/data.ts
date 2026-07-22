import type {
  NavLink,
  ExperienceItem,
  EducationItem,
  Project,
  SkillGroup,
  StatItem,
} from "@/types";

export const SITE = {
  name: "Adithya DS",
  role: "Software Engineer & Full-Stack Developer",
  tagline: "I build systems that hold up under real use.",
  location: "Coimbatore, Tamil Nadu, India",
  email: "adithya1756@gmail.com",
  phone: "+91 97893 31756",
  intro:
    "Final-year Computer Science Engineering student at VIT Chennai, building production-grade software across web, mobile, and emerging AI infrastructure — from ERP systems running real manufacturing operations to RAG pipelines and on-chain lending protocols.",
  social: {
    github: "https://github.com/Adithya1756",
    linkedin: "https://linkedin.com/in/adithya-ds-87721428b",
    leetcode: "https://leetcode.com/u/Adithya_xD/",
  },
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const STATS: StatItem[] = [
  { label: "CGPA", value: 8.61 },
  { label: "Years coding", value: 4, suffix: "+" },
  { label: "Core member, LUGVITC", value: 150, suffix: "+ attendees mentored" },
  { label: "Production modules shipped", value: 9 },
];

export const EDUCATION: EducationItem[] = [
  {
    period: "2023 — 2027",
    institution: "Vellore Institute of Technology, Chennai",
    detail: "B.Tech, Computer Science and Engineering (Core)",
    score: "CGPA 8.61 / 10",
  },
  {
    period: "2021 — 2023",
    institution: "Sri Chaitanya School, Coimbatore",
    detail: "CBSE — Class 12",
    score: "90%",
  },
  {
    period: "2019 — 2021",
    institution: "Sri Chaitanya School, Tirupur",
    detail: "CBSE — Class 10",
    score: "80%",
  },
];

export const JOURNEY = [
  {
    year: "2023",
    title: "Started B.Tech CSE at VIT Chennai",
    detail:
      "Began formal computer science education, laying the groundwork in data structures, OS, and networks.",
  },
  {
    year: "2024",
    title: "Joined LUGVITC as a core member",
    detail:
      "Started organizing hackathons, CTFs, and Linux workshops — around 150 students reached across events.",
  },
  {
    year: "2025",
    title: "Software Development Internship at Integra Global Solutions",
    detail:
      "Built Rooms.io, a React Native mobile app, across a focused 30-day sprint.",
  },
  {
    year: "2025",
    title: "Shipped a manufacturing ERP system",
    detail:
      "Designed and deployed a full ERP on Zoho Creator with CRM, warehouse, procurement, and RBAC modules in production use.",
  },
  {
    year: "2026",
    title: "Exploring AI infrastructure",
    detail:
      "Deepening focus on RAG pipelines, vector databases, and agentic systems alongside continued full-stack work.",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Software Development Intern",
    company: "Integra Global Solutions",
    period: "May 2025 — July 2025",
    location: "Remote",
    summary:
      "A focused 30-day internship building Rooms.io, a React Native mobile application, from the ground up.",
    bullets: [
      "Developed core screens and navigation for Rooms.io using React Native and JavaScript.",
      "Optimized UI performance and consistency across Android and iOS through rapid prototyping cycles.",
      "Worked directly with a senior engineering team, strengthening collaborative Git workflows and code review habits.",
      "Iterated quickly on feedback, shipping incremental builds throughout the internship window.",
    ],
    stack: ["React Native", "JavaScript", "Expo", "Git"],
    link: { label: "Rooms.io Repository", href: "https://github.com/Adithya1756" },
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "erp-manufacturing",
    title: "ERP Management System for Manufacturing",
    tag: "Featured · Enterprise Systems",
    featured: true,
    summary:
      "A modular Enterprise Resource Planning platform built on Zoho Creator that digitizes end-to-end operations for a manufacturing organization.",
    description: [
      "Manufacturing businesses often run on a patchwork of spreadsheets and disconnected tools — one for inventory, another for sales, a third for approvals. This ERP replaces that patchwork with a single, centralized platform built on Zoho Creator, Deluge scripting, and Zoho's native DBMS.",
      "The system integrates CRM, procurement, warehouse management, manufacturing, sales, and asset administration, so every department reads from the same source of truth. Role-based access control keeps sensitive data scoped correctly, while real-time reporting dashboards give leadership live visibility into production, inventory, and sales performance.",
      "Multi-stage approval workflows for purchasing and asset allocation replaced manual paperwork entirely, cutting turnaround time and giving the organization an audit trail for every request.",
    ],
    stack: ["Zoho Creator", "Deluge", "Zoho DBMS", "RBAC", "Workflow Automation"],
    features: [
      { label: "CRM", detail: "Lead and customer lifecycle tracking" },
      { label: "Procurement", detail: "Purchase requests through vendor fulfillment" },
      { label: "Warehouse", detail: "Stock levels, transfers, and reorder alerts" },
      { label: "Manufacturing", detail: "Production stages and job tracking" },
      { label: "Sales", detail: "Order pipeline and invoicing" },
      { label: "Asset Management", detail: "Allocation, maintenance, and approvals" },
    ],
    architecture: [
      { title: "Presentation Layer", detail: "Zoho Creator pages & forms with role-scoped views" },
      { title: "Logic Layer", detail: "Deluge scripts handling workflows, validation, approvals" },
      { title: "Data Layer", detail: "Zoho DBMS storing normalized operational records" },
      { title: "Reporting Layer", detail: "Live dashboards aggregating production & sales data" },
    ],
  },
  {
    slug: "defi-lending-dapp",
    title: "DeFi Lending DApp",
    tag: "Blockchain · Smart Contracts",
    summary:
      "A decentralized lending protocol enabling ETH-based lending, borrowing, and repayment through audited smart contracts.",
    description: [
      "This DApp implements the core mechanics of a decentralized money market: users connect a wallet, supply ETH as collateral, and borrow against it — all enforced by smart contracts rather than a central intermediary.",
      "The lending and repayment logic runs on-chain, with the frontend providing real-time visibility into collateral ratios, interest accrual, and transaction status via wallet integration.",
    ],
    stack: ["Solidity", "Ethereum", "Smart Contracts", "Web3", "Wallet Integration"],
    features: [
      { label: "Lend", detail: "Supply ETH liquidity to the protocol" },
      { label: "Borrow", detail: "Draw loans against posted collateral" },
      { label: "Repay", detail: "Settle borrowed positions on-chain" },
      { label: "Wallet", detail: "Connect and sign transactions securely" },
    ],
    links: [{ label: "View on GitHub", href: "https://github.com/Adithya1756/defi-dapp" }],
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Website",
    tag: "Full-Stack · Web",
    summary:
      "A full-featured storefront with inventory management, product catalogs, and sales analytics for store operators.",
    description: [
      "Built as a complete e-commerce foundation covering both the customer-facing storefront and the operational tooling behind it. Store owners can manage inventory levels and product listings while tracking performance through analytics built into the admin experience.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      { label: "Inventory", detail: "Stock tracking across product variants" },
      { label: "Products", detail: "Catalog management with rich listings" },
      { label: "Analytics", detail: "Sales and performance reporting" },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Adithya1756/E-Commerce-Website",
      },
    ],
  },
];

export const SKILLS: SkillGroup[] = [
  {
    title: "Languages",
    icon: "code",
    items: ["Python", "C/C++", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: "layout",
    items: ["React.js", "Next.js", "React Native", "Expo", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "server",
    items: ["Node.js", "Express.js", "FastAPI", "WebSockets", "REST APIs"],
  },
  {
    title: "Databases",
    icon: "database",
    items: ["PostgreSQL", "MongoDB", "Neo4j", "Pinecone", "Qdrant", "PGVector"],
  },
  {
    title: "DevOps",
    icon: "cloud",
    items: ["Docker", "GitHub Actions", "CI/CD", "AWS (EC2, S3)", "Shell Scripting"],
  },
  {
    title: "AI & GenAI",
    icon: "cpu",
    items: ["RAG Pipelines", "Transformers", "Prompt Engineering", "Agents", "Vector DBs"],
  },
  {
    title: "Blockchain",
    icon: "link",
    items: ["Solidity", "Ethereum", "Smart Contracts", "Web3"],
  },
  {
    title: "Core CS",
    icon: "layers",
    items: ["System Design", "Operating Systems", "Computer Networks", "OOPS", "DBMS"],
  },
];

export const RESPONSIBILITY = {
  role: "Core Member — Linux Users Group (LUGVITC)",
  period: "2024 — Present",
  bullets: [
    "Led a management team of 10 members organizing technical events, including hackathons and CTFs, reaching around 150 attendees.",
    "Organized and mentored Linux workshops and open-source contribution drives for VIT students.",
    "Collaborated with peers to promote FOSS culture and DevOps practices across campus.",
  ],
};

export const navItems = [
  {
    name: "yogesh.dev",
    link: "/",
    className: "font-semibold me-4 text-violet-900",
  },
  { name: "About", link: "/#about" },
  { name: "Work", link: "/projects" },
  { name: "Resume", link: "/#experience" },
  // { name: "Contact", link: "#contact" },
];

export const projectImagesData = {
  coffee: [
    {
      src: "/project-coffee-1.jpg",
      className: "aspect-270/559 h-full w-auto",
      width: 180,
      height: 342,
    },
    {
      src: "/project-coffee-2.jpg",
      className: "aspect-270/559 h-full w-auto",
      width: 180,
      height: 342,
    },
    {
      src: "/project-coffee-3.jpg",
      className: "aspect-270/559 h-full w-auto",
      width: 180,
      height: 342,
    },
    {
      src: "/project-coffee-4.jpg",
      className: "aspect-270/559 h-full w-auto",
      width: 180,
      height: 342,
    },
  ],
  bookalooza: [
    {
      src: "/project-bookalooza-1.jpg",
      className: "aspect-270/559 h-full w-auto",
      width: 180,
      height: 342,
    },
    {
      src: "/project-bookalooza-2.jpg",
      className: "aspect-270/559 h-full w-auto",
      width: 180,
      height: 342,
    },
    {
      src: "/project-bookalooza-3.jpg",
      className: "aspect-270/559 h-full w-auto",
      width: 180,
      height: 342,
    },
    {
      src: "/project-bookalooza-4.jpg",
      className: "aspect-270/559 h-full w-auto",
      width: 180,
      height: 342,
    },
    {
      src: "/project-bookalooza-5.jpg",
      className: "aspect-270/559 h-full w-auto",
      width: 180,
      height: 342,
    },
    {
      src: "/project-bookalooza-6.jpg",
      className: "aspect-270/559 h-full w-auto",
      width: 180,
      height: 342,
    },
  ],
  wemeet: [
    {
      src: "/project-wemeet-1.jpg",
      className: "aspect-270/559 h-full w-auto",
      width: 180,
      height: 342,
    },
    {
      src: "/project-wemeet-2.png",
      className: "aspect-8/5 w-full",
      width: 704,
      height: 440,
    },
    {
      src: "/project-wemeet-7.png",
      className: "aspect-8/5 w-full",
      width: 704,
      height: 440,
    },
    {
      src: "/project-wemeet-3.png",
      className: "aspect-8/5 w-full",
      width: 704,
      height: 440,
    },
    {
      src: "/project-wemeet-4.png",
      className: "aspect-8/5 w-full",
      width: 704,
      height: 440,
    },
    {
      src: "/project-wemeet-5.png",
      className: "aspect-8/5 w-full",
      width: 704,
      height: 440,
    },
    {
      src: "/project-wemeet-6.png",
      className: "aspect-8/5 w-full",
      width: 704,
      height: 440,
    },
  ],
  startEase: [
    {
      src: "/project-startease-1.png",
      className: "aspect-8/5 w-full",
      width: 704,
      height: 440,
    },
    {
      src: "/project-startease-2.jpg",
      className: "aspect-270/559 h-full w-auto",
      width: 180,
      height: 342,
    },
    {
      src: "/project-startease-3.png",
      className: "aspect-8/5 w-full",
      width: 704,
      height: 440,
    },
    {
      src: "/project-startease-4.png",
      className: "aspect-8/5 w-full",
      width: 704,
      height: 440,
    },
    {
      src: "/project-startease-5.jpg",
      className: "aspect-270/559 h-full w-auto",
      width: 180,
      height: 342,
    },
    {
      src: "/project-startease-6.jpg",
      className: "aspect-270/559 h-full w-auto",
      width: 180,
      height: 342,
    },
    {
      src: "/project-startease-7.jpg",
      className: "aspect-270/559 h-full w-auto",
      width: 180,
      height: 342,
    },
  ],
};

export interface IProject {
  id: string;
  title: string;
  description: string;
  images: {
    src: string;
    className: string;
    width: number;
    height: number;
  }[];
}

export const projects = [
  {
    id: "bookaloza-1",
    title: "Bookalooza - Write, Publish and Earn Online Through Your Books",
    description:
      "Bookalooza is a joyful, kid-friendly digital playground where K12 students can write, publish, and sell their very own books—all while earning actual royalties (yes, real money, not chocolate coins). From browsing trending titles to crafting the next bestseller during lunch break, Bookalooza empowers the authors of tomorrow with a fun, intuitive, and beautifully designed platform.",
    industry: "EdTech / Publishing / Creator Economy",
    images: projectImagesData.bookalooza,
    tech: [
      "React",
      "TypeScript",
      "Javascript",
      "Tailwind",
      "Next.js",
      "Node.js",
      "MongoDB",
      "AWS",
      "Razorpay",
      "Java",
      "SpringBoot",
    ],
  },
  {
    id: "BrewBuddy-1",
    title: "BrewBuddy – Your Mobile Coffee Wingman",
    description:
      "BrewBuddy is a delightfully addictive mobile app that lets users order coffee faster than their caffeine cravings can kick in. From browsing dreamy cappuccino art to checking out smoother than a fresh latte pour, this app ensures no user ever suffers the tragedy of an empty cup again.",
    industry: "Food & Beverage / Mobile Commerce",
    images: projectImagesData.coffee,
    tech: [
      "React Native",
      "TypeScript",
      "Javascript",
      "Expo",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    id: "wemeet-1",
    title: "WeMeet – Where Meetings Actually Make Sense (Mostly.)",
    description:
      "WeMeet is a sleek, lightning-fast, browser-based video-meeting platform designed to make online meetings slightly less painful and a whole lot more organized. From instant meetings to personal rooms, recordings, scheduling, and account management, WeMeet brings Zoom-level features without the Zoom-level confusion. If you've ever wanted a meeting app that doesn’t ask for 47 permissions just to turn your mic on — welcome home.",
    industry: "SaaS / Communication & Collaboration",
    images: projectImagesData.wemeet,
    tech: [
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Clerk",
      "GetStream",
      "Tailwind",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    id: "startease-1",
    title: "StartEaseIn – The CRM That Makes Business Feel… Easier (Finally.)",
    description:
      "StartEaseIn is a modern, intuitive CRM web application designed to help businesses manage customers, invoices, payments, offers, expenses, and leads without drowning in spreadsheets or existential dread. With a clean dashboard, smart analytics, and beautifully organized modules, StartEaseIn transforms chaotic business data into something surprisingly… understandable. Think of it as the CRM equivalent of a clean desk: peaceful, productive, and oddly satisfying.",
    industry: "SaaS / Business Management / CRM",
    images: projectImagesData.startEase,
    tech: [
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Prisma",
    ],
  },
];

export const workExperience = [
  {
    id: 1,
    logo: "/logo-bookalooza.png",
    title: "Lead Software Engineer",
    company: "Orange Vtech PVT. LTD.",
    duration: "May'2025 - Present*",
    location: "Delhi, India - on-site",
    desc: [
      "*Improved system performance by 25%* by identifying and optimizing bottlenecks in component rendering and network communication across a large-scale IoT environment consisting of over *10,000 connected devices*, resulting in faster data transmission and reduced downtime.",
      "*Boosted organic search rankings and increased revenue by 50%* by executing a comprehensive SEO strategy, including *100+ high-quality back link acquisitions, meta tag restructuring*, and targeted *keyword optimization*, leading to a significant uptick in website traffic and conversion rates.",
      "*Reduced bounce rate by 35%* and *increased average session duration by 60%* by redesigning UI/UX workflows and implementing performance-first principles like lazy loading, asset compression, and mobile-first responsiveness.",
    ],
    className: "outline-violet-700/30 border-violet-800",
  },
  {
    id: 4,
    logo: "/logo-vir-softech.png",
    title: "Software Engineer",
    company: "Vir Softech PVT. LTD.",
    duration: "May'2022 - Apr'2024",
    location: "Noida, India - on-site",
    desc: [
      "*Accelerated UI development by 35%* by implementing a scalable, *component-based architecture using React and Redux*, significantly reducing repetitive code, enabling reusability, and improving maintainability across multiple features and modules.",
      "*Launched a responsive web application* in collaboration with a *team of 3 developers*, resulting in a *20% increase in customer engagement* through improved mobile accessibility, intuitive UI/UX, and faster load times on all major devices.",
      "*Enhanced developer efficiency by 45%* by establishing a shared component library, introducing code linting and formatting standards (ESLint, Prettier), and organizing regular peer code reviews to ensure consistency and code quality.",
    ],
    className: "outline-blue-700/30 border-blue-800",
  },
];

export const projectImages = [
  "/project-coffee-1.jpg",
  "/project-coffee-2.jpg",
  "/project-coffee-3.jpg",
  "/project-coffee-4.jpg",
  "/project-bookalooza-1.jpg",
  "/project-bookalooza-2.jpg",
  "/project-bookalooza-3.jpg",
  "/project-bookalooza-4.jpg",
  "/project-bookalooza-5.jpg",
  "/project-bookalooza-6.jpg",
  "/project-wemeet-1.jpg",
];

// ============================================
// 🎨 PORTFOLIO CONFIGURATION
// ============================================
// Manage all your site information from here!

export const siteConfig = {
  // Personal Information
  personal: {
    name: "Owais Jafferi",
    username: "owaisjafferi",
    tagline: "Full-Stack Developer & Software Engineer",
    title: "Senior Project Manager & Full-Stack Developer",
    age: 25,
    birthDate: "January 1, 1999",
    location: "Pakistan | Remote Work Available",
    avatar: "https://ugc.production.linktr.ee/6RJk9s2pQZ2yAdcxw3Ir_TXX2dLlNmwM2OFdf?io=true&size=avatar-v3_0",
    email: "muhammad.owais9989@gmail.com",
    phone: "+92 336 3920990 | +92 339 2020990",
    resumeUrl: "/assets/CV/Muhammad Owais - DotNET Core.pdf",
  },

  // About & Bio
  about: {
    intro: "Hi! I'm <strong>Owais Jafferi</strong>, a 25-year-old full-stack developer and software engineer from Pakistan. I specialize in .NET development, project management, and creating innovative software solutions.",
    
    description: `Born on January 1, 1999, in Pakistan, I am a Senior Project Manager and Full-Stack Developer with extensive experience in enterprise software development. 
    I have led development teams and managed complex projects including warehouse management systems, workflow management platforms, 
    POS systems handling 50,000+ user records, and CRM solutions with AI-powered chatbots. My expertise spans .NET Core, ASP.NET MVC, C#, 
    Vue.js, React, and modern web technologies. I focus on creating scalable, high-performance applications that solve real-world business problems.`,
    
    highlights: [
      "👨‍💼 Senior Project Manager at TPLEX (2022-Present)",
      "💻 Full-Stack Developer (.NET Core, React, Vue.js)",
      "🏢 Enterprise Software Solutions (50K+ Users)",
      "🤖 AI-Powered CRM & Workflow Management Systems"
    ]
  },

  // Experience
  experience: [
    {
      title: "Team Lead",
      company: "Freelance",
      duration: "Jan 2025 - Present",
      description: "Leading a dynamic development team of 10+ developers, mentoring junior developers, and driving technical excellence across multiple client projects. Established team processes, code review standards, and agile methodologies to ensure high-quality deliverables. Architected scalable solutions using .NET Core, ASP.NET MVC, C#, and modern web technologies. Conducted technical interviews, performance reviews, and career development planning for team members. Managed project timelines, resource allocation, and stakeholder communication. Implemented CI/CD pipelines, automated testing frameworks, and DevOps best practices. Provided technical guidance on complex system integrations, database optimization, and cloud architecture decisions.",
      icon: "👨‍💼"
    },
    {
      title: "Senior Project Manager | Team Lead",
      company: "TPLEX",
      duration: "April 2022 - Present",
      description: "Led a development team, ensuring efficient project execution, code quality, and best practices. Managed client communication, requirement gathering, and technical implementation. Developed and maintained applications using .NET Core, ASP.NET MVC, and C#. Implemented Hangfire for background job processing and optimized system performance. Designed and developed RESTful APIs, SQL Server databases, and optimized queries. Applied OOP principles, multithreading, and asynchronous programming for scalable solutions. Conducted unit testing, debugging, and troubleshooting to enhance application stability. Managed code versioning with Git, Azure DevOps, and SVN for seamless collaboration. Coordinated effectively with global teams to ensure smooth integration and development.",
      icon: "👨‍💼"
    },
    {
      title: "Contract Software Developer",
      company: "US Jobs",
      duration: "Jan 2021 - Dec 2022",
      description: "Developed healthcare industry solutions using .NET Core, C#, and modern web technologies. Built scalable applications for healthcare management systems, patient data processing, and medical workflow automation. Implemented secure data handling protocols and HIPAA compliance features. Utilized Entity Framework for data access, ASP.NET Core for web APIs, and integrated with healthcare databases. Collaborated with healthcare professionals to understand domain-specific requirements and translate them into technical solutions. Applied best practices for healthcare software development including data encryption, audit trails, and secure authentication systems.",
      icon: "🏥"
    },
    {
      title: "Software Engineer - .NET",
      company: "BOOKINGWHIZZ",
      duration: "Feb 2019 - Dec 2021",
      description: "Integrated third-party APIs (Booking.com, Agoda, Expedia, RateGain, etc.) for seamless system connectivity. Developed and maintained .NET Web APIs, Windows Services, and MVC applications. Led end-to-end project management, from requirement gathering to deployment. Managed a team of developers, conducted code reviews, and ensured best practices. Engaged in direct client communication for requirement analysis and issue resolution. Designed and implemented scalable and optimized solutions for high-performance applications. Worked with cross-functional teams to align technical solutions with business goals. Managed version control, CI/CD pipelines, and cloud deployments (Azure/AWS). Utilized AngularJS key features including Scope, Model, Controller, Sorting, Searching, Pagination, Form Validation, HTTP services, Data Binding, and Directives. Sent and received custom XML documents with XSLT or JSON formatted data from external sources.",
      icon: "💻"
    },
   
  ],

  // Social Media
  social: {
    // facebook: "https://facebook.com/owaisjafferi",
    // instagram: "https://instagram.com/owaisjafferi",
    // telegram: "https://t.me/owaisjafferi",
    // youtube: "https://youtube.com/@owaisjafferi",
    github: "https://github.com/Muhammadowaisjaffery",
    // twitter: "https://twitter.com/owaisjafferi",
    linkedin: "https://linkedin.com/in/muhammad-owais-jafferi-5043151b2",
    discord: "owaisjafferi",
    discordServer: "https://discord.gg/owaisjafferi",
  },

  // Skills & Technologies
  skills: {
    frontend: [
      { name: "React.js", level: 95, icon: "react.svg" },
      { name: "Next.js", level: 90, icon: "nextjs.svg" },
      { name: "Angular", level: 80, icon: "angular.svg" },
      { name: "Vue.js", level: 75, icon: "vue.svg" },
      { name: "JavaScript", level: 95, icon: "javascript.svg" },
      { name: "TypeScript", level: 85, icon: "typescript.svg" },
      { name: "Tailwind CSS", level: 90, icon: "tailwindcss.svg" },
      { name: "HTML5", level: 95, icon: "html.svg" },
      { name: "CSS3", level: 90, icon: "css.svg" },
    ],
    
    backend: [
      { name: "Node.js", level: 90, icon: "nodejs.svg" },
      { name: "Express.js", level: 85, icon: "expressjs.svg" },
      { name: ".NET Core", level: 85, icon: "dotnet.svg" },
      { name: "ASP.NET", level: 80, icon: "dotnet.svg" },
      { name: "C#", level: 90, icon: "csharp.svg" },
      { name: "Python", level: 80, icon: "python.svg" },
      { name: "Entity Framework", level: 75, icon: "dotnet.svg" },
      { name: "Socket.IO", level: 80, icon: "nodejs.svg" },
      { name: "MongoDB", level: 85, icon: "mongodb.svg" },
      { name: "PostgreSQL", level: 80, icon: "mysql.svg" },
      { name: "SQL Server", level: 85, icon: "sqlserver.svg" },
    ],
    
    tools: [
      // Version Control
      { name: "Git", level: 90, icon: "git.svg" },
      { name: "GitHub", level: 90, icon: "github.svg" },
      
      // Code Editors
      { name: "Visual Studio Code", level: 95, icon: "vscode.svg" },
      { name: "Visual Studio", level: 85, icon: "visualstudio.svg" },
      
      // Package Managers
      { name: "npm", level: 90, icon: "npm.svg" },
      
      // Build Tools
      { name: "Webpack", level: 85, icon: "webpack.svg" },
      
      // Testing
      { name: "Jest", level: 85, icon: "jest.svg" },
      
      // Cloud & Deployment
      { name: "AWS", level: 80, icon: "aws.svg" },
      { name: "Docker", level: 85, icon: "docker.svg" },
      
      // API Development
      { name: "Postman", level: 90, icon: "postman.svg" }
    ]
  },

  // Projects - Auto-fetched from API
  githubUsername: "umutxyp",

  // Custom Projects
  customProjects: [
    {
      id: "bergen-logistics",
      title: "Bergen Logistics",
      description: "Designed and developed the entire UI using Vue.js and Fabric.js, including an advanced warehouse map visualization module. The project focused on drag-and-drop features, real-time inventory display, and full warehouse control on a visual canvas.",
      image: "/assets/projects/WMS.png",
      tags: ["Vue.js", "Fabric.js", "Warehouse Management", "Real-time", "Drag & Drop"],
      liveUrl: null,
      githubUrl: null,
      type: "custom",
      featured: true
    },
    {
      id: "pwm-management",
      title: "PWM (Project & Workflow Management)",
      description: "A complex system for handling tasks, orders, and dependencies across different workflows. Developed task scheduling logic and UI modules to support dynamic workflows, inter-task relations, and performance monitoring. Contributed to both frontend architecture and critical logic design.",
      image: "/assets/projects/pwm.png",
      tags: ["Workflow Management", "Task Scheduling", "Frontend Architecture", "Performance Monitoring"],
      liveUrl: null,
      githubUrl: null,
      type: "custom",
      featured: true
    },
    {
      id: "pos-currency-exchange",
      title: "POS (Currency Exchange System)",
      description: "Developed a POS solution handling over 50,000+ user records and teller-based transactions. Implemented real-time reporting, currency conversions, user authentication, and teller-level permission controls. Ensured frontend handled heavy data rendering efficiently.",
      image: "/assets/projects/UGP-POS.png",
      tags: ["POS System", "Currency Exchange", "Real-time Reporting", "User Management", "50K+ Records"],
      liveUrl: null,
      githubUrl: null,
      type: "custom",
      featured: true
    },
    {
      id: "leadmate-crm",
      title: "Leadmate (CRM)",
      description: "Built advanced features in React, focusing on the integration of an AI-powered chatbot and a real estate-focused dashboard. Implemented dynamic UI components to handle inquiry management, customer profiling, and live chat responses. Played a major role in making the CRM adaptive and highly interactive for real estate clients.",
      image: "/assets/projects/leadmate-crm.jpg",
      tags: ["Python","React", "CRM", "AI Chatbot", "Real Estate", "Dashboard", "Live Chat"],
      liveUrl: null,
      githubUrl: null,
      type: "custom",
      featured: true
    },
    {
      id: "hotel-management-system",
      title: "Hotel Management System",
      description: "Comprehensive hotel management solution consisting of two main modules: Channel Manager for multi-platform booking synchronization and Property Management System (PMS) for hotel operations. Developed using .NET MVC, C#, and Node.js to handle real-time booking updates, inventory management, and guest services. Integrated with major booking platforms and payment gateways for seamless operations.",
      image: "/assets/projects/BookingWhizz.png",
      tags: [".NET MVC", "C#", "Node.js", "Channel Manager", "PMS", "Hotel Management"],
      liveUrl: null,
      githubUrl: null,
      type: "custom",
      featured: true
    },
    {
      id: "healthcare-integration-system",
      title: "Healthcare Integration System",
      description: "Developed a comprehensive integration system for healthcare facilities to streamline data flow between different medical systems and departments. Built using .NET, MVC, and C# to ensure secure data exchange, patient record synchronization, and real-time communication between healthcare providers. Implemented HIPAA compliance features and secure API endpoints for medical data integration.",
      image: "/assets/projects/Healthcare.png",
      tags: [".NET", "MVC", "C#", "Healthcare", "Integration", "HIPAA Compliance"],
      liveUrl: null,
      githubUrl: null,
      type: "custom",
      featured: true
    },
    {
      id: "United-Global-Pay",
      title: "United Global Pay (UGP)",
      description: "A comprehensive fintech platform enabling users to buy and sell forex currencies through virtual accounts. Developed using .NET Core, React, and modern web technologies to provide real-time currency exchange, secure transactions, and portfolio management. Features include live forex rates, virtual trading accounts, transaction history, and risk management tools for fintech users.",
      image: "/assets/projects/UGP-client.png",
      tags: [".NET Core", "React", "Fintech", "Forex Trading", "Virtual Accounts", "Real-time Data"],
      liveUrl: null,
      githubUrl: null,
      type: "custom",
      featured: true
    }
  ],

  // Goals & Vision
  goals: [
    "Create groundbreaking full-stack applications that revolutionize user experiences",
    "Build unique software solutions that solve real-world problems with innovative approaches",
    "Develop cutting-edge web applications using the latest technologies and frameworks",
    "Design and implement scalable backend systems that can handle millions of users",
    "Master advanced full-stack technologies including AI integration, microservices, and cloud architecture",
    "Contribute to the developer community by sharing knowledge and open-source projects",
    "Build a portfolio of amazing software products that showcase technical excellence and creativity",
    "Stay at the forefront of technology trends and continuously learn emerging tools and frameworks",
    "Create seamless, intuitive user interfaces that provide exceptional user experiences",
    "Develop robust, secure, and high-performance applications that exceed industry standards"
  ],

  // SEO & Meta
  seo: {
    title: "Owais Jafferi | Senior Project Manager & Full-Stack Developer",
    description: "Senior Project Manager and Full-Stack Developer specializing in .NET Core, React, Vue.js, and enterprise software solutions. Expert in project management, team leadership, and scalable application development.",
    keywords: "owais jafferi, full-stack developer, .net core, react developer, vue.js, project manager, software engineer, enterprise development, pakistan developer",
    ogImage: "/og-image.png",
    twitterHandle: "@owaisjafferi"
  }
};

// Theme Colors (For each theme)
export const themes = {
  dark: {
    name: "Dark",
    colors: {
      primary: "#3B82F6",
      secondary: "#8B5CF6",
      accent: "#06B6D4",
      background: "#0F172A",
      surface: "#1E293B",
      text: "#F1F5F9",
      textSecondary: "#94A3B8",
    },
    styles: {
      fontWeight: "normal",
      headingWeight: "700",
      shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
      glow: "0 0 20px rgba(59, 130, 246, 0.3)",
      cardBorder: "1px solid rgba(148, 163, 184, 0.1)",
    }
  },
  
  light: {
    name: "Light",
    colors: {
      primary: "#2563EB",
      secondary: "#7C3AED",
      accent: "#0891B2",
      background: "#F8FAFC",
      surface: "#FFFFFF",
      text: "#0F172A",
      textSecondary: "#64748B",
    },
    styles: {
      fontWeight: "normal",
      headingWeight: "600",
      shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      glow: "0 0 15px rgba(37, 99, 235, 0.2)",
      cardBorder: "1px solid rgba(226, 232, 240, 1)",
    }
  },
  
  neon: {
    name: "Neon",
    colors: {
      primary: "#FF00FF",
      secondary: "#00FFFF",
      accent: "#FFFF00",
      background: "#000000",
      surface: "#0A0A0A",
      text: "#FFFFFF",
      textSecondary: "#B3B3B3",
    },
    styles: {
      fontWeight: "500",
      headingWeight: "800",
      shadow: "0 0 10px rgba(255, 0, 255, 0.5)",
      glow: "0 0 30px rgba(255, 0, 255, 0.6), 0 0 60px rgba(0, 255, 255, 0.4)",
      cardBorder: "2px solid rgba(255, 0, 255, 0.3)",
    }
  },

  sunset: {
    name: "Sunset",
    colors: {
      primary: "#F97316",
      secondary: "#EC4899",
      accent: "#FBBF24",
      background: "#18181B",
      surface: "#27272A",
      text: "#FAFAFA",
      textSecondary: "#A1A1AA",
    },
    styles: {
      fontWeight: "normal",
      headingWeight: "700",
      shadow: "0 10px 25px -5px rgba(249, 115, 22, 0.3)",
      glow: "0 0 25px rgba(249, 115, 22, 0.4)",
      cardBorder: "1px solid rgba(249, 115, 22, 0.2)",
    }
  },

  forest: {
    name: "Forest",
    colors: {
      primary: "#10B981",
      secondary: "#14B8A6",
      accent: "#84CC16",
      background: "#064E3B",
      surface: "#065F46",
      text: "#ECFDF5",
      textSecondary: "#6EE7B7",
    },
    styles: {
      fontWeight: "normal",
      headingWeight: "700",
      shadow: "0 4px 6px -1px rgba(16, 185, 129, 0.3)",
      glow: "0 0 20px rgba(16, 185, 129, 0.4)",
      cardBorder: "1px solid rgba(16, 185, 129, 0.2)",
    }
  }
};

export default siteConfig;



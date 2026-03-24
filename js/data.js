/**
 * ============================================================
 *  PORTFOLIO DATA — edit this file to update your portfolio
 * ============================================================
 */
const DATA = {

  /* ── Personal Info ── */
  name:          { first: "Bharath Ajay", last: "Gorli" },
  initials:      "BAG",
  brandName:     "Bharath",
  role:          "Data Engineer",
  roleTag:       "ML Practitioner",
  currentCompany:"Unilever",
  location:      "Redmond, WA",

  /* ── Hero ── */
  available: true,   // toggles "Available for opportunities" badge
  heroDesc:  "I build scalable data pipelines, intelligent ML systems, and analytics platforms that turn raw data into real decisions. Currently at <strong>Unilever</strong>, Redmond WA.",
  heroBadges: [
    { pos: "tl", text: "Azure ☁️" },
    { pos: "tr", text: "PySpark ⚡" },
    { pos: "bl", text: "Python 🐍" },
    { pos: "br", text: "ML 🤖" },
  ],
  stats: [
    { number: "2+", label: "Years Exp." },
    { number: "5+", label: "Projects" },
    { number: "2",  label: "Certifications" },
  ],

  /* ── Social Links ── */
  social: {
    github:   "https://github.com/BharathAjayGorli-hub",
    linkedin: "https://www.linkedin.com/in/bharathajaygorli",
    email:    "bharathajaygorli@gmail.com",
  },

  /* ── About ── */
  aboutParagraphs: [
    `Hi, I'm <strong>Bharath</strong>! I'm currently working as a <strong>Data Engineer at Unilever</strong>, building scalable pipelines and analytics solutions for logistics and supply chain management.`,
    `At Unilever, I design data pipelines using <strong>Azure Data Factory</strong> and <strong>Databricks</strong>, perform advanced PySpark transformations, and build Power BI dashboards that drive executive decisions. 📊💡`,
    `I hold a <strong>Master's in Computer Science from NJIT</strong> and I'm proudly certified as a <em>Databricks Data Engineering Professional</em> and <em>Microsoft DP-700 Fabric Data Engineer Associate</em>.`,
    `I'm on an exciting journey in the world of data — from pipelines to ML models to intelligent AI assistants. Let's connect and explore how we can drive innovation together! 🚀`,
  ],
  openToWork: true,

  /* ── Experience ── */
  experience: [
    {
      company:  "Unilever",
      logo:     "🌿",
      title:    "Data Engineer",
      location: "Redmond, WA",
      date:     "May 2025 – Present",
      project:  { name: "Logistics and Supply Chain Management", date: "May 2025 – Present" },
      bullets: [
        `Designed scalable ingestion pipelines using <strong>Azure Data Factory</strong> and <strong>Databricks</strong> to unify data from multiple sources for downstream analytics. 🔧📊`,
        `Advanced <strong>PySpark</strong> transformations — cleansing, deduplication, feature engineering — improved data quality by <strong>25%</strong>, cut duplicates by <strong>40%</strong>. ⚡🧹`,
        `Built optimized fact/dimension models for sales forecasting and supply chain KPIs — query performance up <strong>35%</strong>, report time down <strong>20%</strong>. 📈🚀`,
        `Delivered <strong>Power BI</strong> dashboards that accelerated executive decision-making across logistics operations. 📊💼`,
      ],
      impacts: ["↑25% data quality", "↓40% duplicates", "↑35% query speed", "↓20% report time"],
    },
    {
      company:  "Quadrant Technologies",
      logo:     "⚡",
      title:    "Data Engineer",
      location: "Redmond, WA",
      date:     "Apr 2024 – Apr 2025",
      project:  { name: "Modernizing Azure Synapse Using Microsoft Fabric", date: "Apr 2024 – Apr 2025" },
      bullets: [
        `Built an automated migration framework using <strong>Python and REST APIs</strong> — drastically reduced manual effort in workspace transitions. 🐍🔗`,
        `Migrated pipelines, notebooks, and Spark configs ensuring full business logic consistency across platforms. 🔄✅`,
        `Implemented secure credential management with <strong>Azure Key Vault</strong> for seamless storage and SQL integration. 🔒🗄️`,
        `Validated Fabric ingestion pipelines — achieved a <strong>30% performance improvement</strong> on large-scale ADLS-to-SQL movement. 🚀📦`,
      ],
      impacts: ["↑30% pipeline perf.", "REST API automation", "Zero-downtime migration"],
    },
    {
      company:  "Internship Studio",
      logo:     "🧠",
      title:    "ML Analyst",
      location: "Remote, India",
      date:     "Jan 2022 – Jan 2023",
      project:  { name: "YouTube Ad-View Prediction", date: "Jan 2022 – Jan 2023" },
      bullets: [
        `Data cleaning, preprocessing, and feature engineering on <strong>15,000+ YouTube video records</strong> for predictive ML modeling. 🎥📋`,
        `Implemented <strong>Support Vector Regression</strong> — increased prediction accuracy by <strong>54%</strong>. 🎯📈`,
        `Automated end-to-end ML workflow across four regression models — reduced manual effort by <strong>70%</strong>. 🤖⚙️`,
      ],
      impacts: ["↑54% accuracy", "↓70% manual effort", "15K+ samples"],
    },
  ],

  /* ── Skills ── */
  skills: {
    tabs: [
      {
        id: "lang", label: "Languages",
        items: [
          { icon: "🐍", name: "Python" },
          { icon: "🔥", name: "PySpark" },
          { icon: "🗄️", name: "SQL" },
          { icon: "📊", name: "R" },
        ],
      },
      {
        id: "cloud", label: "Cloud & Data",
        items: [
          { icon: "🏭", name: "Azure Data Factory" },
          { icon: "🧱", name: "Azure Databricks" },
          { icon: "🏔️", name: "ADLS Gen2" },
          { icon: "⚗️", name: "Synapse Analytics" },
          { icon: "🧵", name: "Microsoft Fabric" },
          { icon: "🔑", name: "Azure Key Vault" },
        ],
      },
      {
        id: "ml", label: "Machine Learning",
        items: [
          { icon: "📉", name: "Logistic Regression" },
          { icon: "🌲", name: "Random Forest" },
          { icon: "📐", name: "SVR" },
          { icon: "🔍", name: "KNN" },
          { icon: "🔵", name: "Clustering" },
          { icon: "🧬", name: "Feature Engineering" },
        ],
      },
      {
        id: "tools", label: "Tools",
        items: [
          { icon: "📊", name: "Power BI" },
          { icon: "🐙", name: "Git" },
          { icon: "🔌", name: "REST APIs" },
          { icon: "💻", name: "VS Code" },
          { icon: "⚡", name: "Apache Spark" },
        ],
      },
    ],
    proficiency: [
      { name: "Python & PySpark",      pct: 90 },
      { name: "Azure Databricks & ADF",pct: 88 },
      { name: "SQL & Data Modeling",   pct: 92 },
      { name: "Machine Learning",      pct: 78 },
      { name: "Power BI & Data Viz",   pct: 80 },
      { name: "Microsoft Fabric",      pct: 85 },
    ],
  },

  /* ── Projects ── */
  projects: [
    {
      year:  "2024",
      name:  "Customer Churn Prediction & Analytics Platform",
      desc:  "End-to-end predictive analytics to identify customer churn. Azure Data Factory integration, Logistic Regression and Random Forest models, evaluated on accuracy, precision, recall and F1-score.",
      stack: ["Python", "Azure", "ML"],
      github:"#",
      thumb: "pt1",
      icon:  "📊",
      wide:  false,
    },
    {
      year:  "2024",
      name:  "Agentic AI Data Assistant",
      desc:  "AI-powered assistant using Python and LLM frameworks to query datasets in plain English. SQL-backed dynamic query generation for non-technical users.",
      stack: ["Python", "LLM", "SQL"],
      github:"#",
      thumb: "pt2",
      icon:  "🤖",
      wide:  false,
    },
    {
      year:  "2023",
      name:  "Wine Quality Prediction",
      desc:  "ML project applying classification and regression to predict wine quality from physicochemical features. Full EDA, feature engineering, and model comparison.",
      stack: ["Python", "Scikit-learn"],
      github:"https://github.com/BharathAjayGorli-hub/Wine-quality-Predicition",
      thumb: "pt3",
      icon:  "🍷",
      wide:  false,
    },
    {
      year:  "2023",
      name:  "R — Web Scraping & Journal Analysis",
      desc:  "Used R to scrape academic journal data on neural development research. Tracked publication trends, keyword frequency analysis, and generated visualizations surfacing research patterns.",
      stack: ["R", "rvest", "ggplot2", "Web Scraping"],
      github:"https://github.com/BharathAjayGorli-hub/R--Web-Scraping-Journal--Analysis",
      thumb: "pt4",
      icon:  "📰",
      wide:  true,   // spans 2 columns
    },
  ],

  /* ── Education ── */
  education: [
    {
      logo:     "🎓",
      school:   "New Jersey Institute of Technology",
      degree:   "M.S. in Computer Science",
      location: "Newark, NJ · USA",
      badge:    "Graduate Degree",
    },
    {
      logo:     "🎓",
      school:   "Sagi Rama Krishnam Raju Engineering College",
      degree:   "B.E. in Computer Science",
      location: "India",
      badge:    "Undergraduate Degree",
    },
  ],

  certifications: [
    { icon: "🏅", name: "Databricks Data Engineering Professional" },
    { icon: "🏅", name: "Microsoft DP-700 Fabric Data Engineer Associate" },
  ],

  /* ── Contact ── */
  contact: {
    address: "Redmond, WA, USA",
    email:   "bharathajaygorli@gmail.com",
    phone:   "+1 862-235-7550",
  },

};

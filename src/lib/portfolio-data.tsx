export const profile = {
    name: "Heeya Amin",
    role: "Data Scientist",
    location: "Bloomington, Indiana",
    summary:
      "MS Data Science graduate from Indiana University Bloomington specializing in machine learning, statistical modeling, and cloud computing.",
    aboutTitle: "Turning data into meaningful stories",
    aboutText:
      "I'm an MS Data Science graduate from Indiana University Bloomington with expertise in econometrics, statistical modeling, machine learning, and cloud computing. I've built high-accuracy predictive models, generative AI systems, and multimodal pipelines using structured data from data warehouse environments to support digital content workflows, account-level analytics, and data-driven decision-making.\n\nKnown for strong attention to detail, I ensure data integrity, model reliability, and end-to-end analytical insights. Currently seeking full-time opportunities to apply my skills in AI/ML engineering, data science, and analytics roles.",
    focus: ["Machine Learning", "Cloud Computing", "Statistical Modeling", "NLP", "ETL Pipelines", "Deep Learning"],
    links: {
      email: "heeyaamin03@gmail.com",
      linkedin: "https://linkedin.com/in/heeya-amin",
      github: "https://github.com/HeeyaAmin",
      resume: "/Heeya_Resume_.pdf",
    },
  };
  
  export const education = [
    {
      degree: "Master's in Data Science",
      school: "Indiana University Bloomington",
      location: "Indiana, United States",
      date: "May 2026",
      gpa: "3.50/4.00",
      accent: "from-blue-600 to-indigo-600",
      iconBg: "bg-blue-600",
      courses: ["Machine Learning", "Statistics", "Data Mining", "Cloud Computing", "Human Computer Interaction"],
    },
    {
      degree: "B.Tech in Computer Engineering",
      school: "Gujarat Technological University",
      location: "Gujarat, India",
      date: "June 2024",
      gpa: "4.00/4.00",
      accent: "from-emerald-600 to-teal-600",
      iconBg: "bg-emerald-600",
      courses: ["DSA", "OOP", "DBMS", "Operating Systems", "ML/DL", "Software Engineering", "Big Data Technology", "Compilers"],
    },
  ];
  
  export const skillCards = [
    { title: "Programming", icon: "code", chips: ["Python", "Java", "JavaScript", "TypeScript", "C", "C++", "HTML/CSS"] },
    { title: "Machine Learning & AI", icon: "brain", chips: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "OpenCV", "LangChain"] },
    { title: "Data Science", icon: "chart", chips: ["NLP", "Regression", "Data Modeling", "ETL Pipelines", "Deep Learning", "NumPy"] },
    { title: "Databases & Tools", icon: "db", chips: ["MySQL", "Oracle", "Snowflake", "SQLyog", "Workbench", "Postman"] },
    { title: "Cloud & Big Data", icon: "cloud", chips: ["GCP", "AWS", "Azure", "Apache Spark", "Hadoop", "Vertex AI"] },
    { title: "Dev Tools", icon: "tools", chips: ["Git", "GitHub", "PyCharm", "Visual Studio", "IntelliJ", "Tableau"] },
  ];
  
  export const experience = [
    {
      kind: "Internship",
      date: "June 2025 – Aug 2025",
      role: "AI/ML Engineer",
      org: "Intuz Software Company",
      location: "San Francisco, United States",
      bullets: [
        "Applied AI/ML techniques to analyze 500K+ user interactions, enhancing pricing-conversion forecasting accuracy by 27%",
        "Designed real-time pricing engines and discount simulation pipelines with A/B testing, achieving 22% uplift in call-to-action metrics",
        "Prototyped 3+ dynamic UI components improving SaaS pricing configurator responsiveness by 35%",
      ],
    },
    {
      kind: "Internship",
      date: "Aug 2023 – June 2024",
      role: "AI/ML Engineer",
      org: "Intuz Software Company",
      location: "Gujarat, India",
      bullets: [
        "Built multimodal blog generation platform using LangChain, reducing content creation time by 40%",
        "Designed agentic AI chatbots for customer service using Rasa and NLP pipelines",
        "Enhanced automation through generative LLM-based assistants, reducing response time by 30%",
      ],
    },
    {
      kind: "Internship",
      date: "July 2023 – Aug 2023",
      role: "Machine Learning Research Intern",
      org: "Laurentian University",
      location: "Ontario, Canada",
      bullets: [
        "Researched secure multimodal communication and econometric data modeling, enhancing data concealment capacity by 25%",
        "Built interactive dashboards in Tableau and Power BI across economic indicators, improving engagement by 40%",
        "Developed predictive models for classification and regression with up to 94% accuracy, emphasizing reliable evaluation",
      ],
    },
  ];
  
  export const projects = [
    {
      title: "ML Based Cloud Resource Optimization",
      desc:
        "Engineered ML-based workload scheduler using TensorFlow and Google Cloud AI APIs, reducing idle resource time by 20% and cloud costs by 18%. Built ReactJS dashboard for real-time monitoring.",
      tags: ["TensorFlow", "GCP", "ReactJS", "Cloud Computing"],
      code: "https://github.com/HeeyaAmin/ECC",
      demo: "#",
      tint: "bg-violet-50",
      bar: "bg-violet-600",
    },
    {
      title: "E-commerce Customer Service Chatbot",
      desc:
        "Designed AI chatbot trained on 25K+ queries achieving 89% intent recognition. Improved resolution time by 40% and automated 70% of Tier-1 workflows.",
      tags: ["NLP", "Machine Learning", "API Integration", "Python"],
      code: "https://github.com/HeeyaAmin/customer-support-chatbot",
      demo: "#",
      tint: "bg-sky-50",
      bar: "bg-sky-600",
    },
    {
      title: "AI Powered Blog Generator & Editor",
      desc:
        "Built AI content platform using LangChain, OpenAI API, and Flask reducing blog creation time by 40%. Enhanced query processing by 96% via vectorized SQL and optimized indexing.",
      tags: ["LangChain", "OpenAI", "Flask", "SQL"],
      code: "https://github.com/HeeyaAmin/Blog_Hive",
      demo: "https://youtu.be/dn7ohTjH9ko",
      tint: "bg-emerald-50",
      bar: "bg-emerald-600",
    },
    {
      title: "Explainable AI in Healthcare",
      desc:
        "Published in Springer (Dec 2023). Proposed interpretable ML models combining LIME and SHAP, improving transparency by 35% for healthcare applications.",
      tags: ["LIME", "SHAP", "ML", "Healthcare"],
      code: "https://www.researchgate.net/publication/385147689_Explainable_AI_in_Healthcare_Methods_Concepts_and_Challenges",
      demo: "#",
      tint: "bg-amber-50",
      bar: "bg-amber-600",
    },
    {
      title: "Chatbot for Academic Institutions",
      desc:
        "Published in Springer (Dec 2023). Developed AI-driven chatbot framework to streamline student and faculty interactions in academic settings.",
      tags: ["NLP", "Chatbot", "AI", "Education"],
      code: "https://github.com/HeeyaAmin/ChatBotRepo",
      demo: "#",
      tint: "bg-rose-50",
      bar: "bg-rose-600",
    },
    {
      title: "Predictive Models Suite",
      desc:
        "Created spam detection and car price estimation models with up to 94% accuracy using advanced statistical modeling and feature engineering techniques.",
      tags: ["Scikit-learn", "Python", "Statistics", "ML"],
      code: "https://github.com/HeeyaAmin/OIBSIP_TASK-3",
      demo: "#",
      tint: "bg-indigo-50",
      bar: "bg-indigo-600",
    },
    {
        title: "Food & Nutrition Analytics Dashboard",
        desc:
          "Built an end-to-end food and nutrition analytics dashboard to analyze food prices, nutritional composition, and trends. Implemented data ingestion, preprocessing, and visualization pipelines to support data-driven insights.",
        tags: [
          "Python",
          "Data Analysis",
          "Data Visualization",
          "Dashboard",
          "ETL",
        ],
        code: "https://github.com/HeeyaAmin/food-nutrition-dashboard-",
        demo: "https://youtu.be/bZDk2kw442w",
        tint: "bg-teal-50",
        bar: "bg-teal-600",
      }
      
  ];
  
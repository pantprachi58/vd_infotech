// All copy from the Figma home frame (node 585:1982), kept out of the
// components so text edits never require touching markup.

export const site = {
  email: "info@vdinfotech.in",
  phone: "+91 920-573-1999",
  whatsapp: "919205731999",
  address: "Office No. 505, 5th Floor, CPL Tower 43A, IT Park, Dehradun, Uttarakhand, 248013",
  hours: { days: "Mon - Sat", time: "9:30 a.m - 6:30 p.m" },
};

export const navItems = [
  { label: "Home", href: "#" },
  { label: "Services", children: ["Digital Marketing", "Web Development", "SEO", "Branding"] },
  { label: "Product", children: ["CRM", "Analytics Suite", "AI Assistant"] },
  { label: "Packages", children: ["Starter", "Growth", "Enterprise"] },
  { label: "Technologies", children: ["React", "Next.js", "Laravel", "Node JS"] },
  { label: "AI Agency", children: ["AI Automation", "AI Content", "AI Analytics"] },
  { label: "Company", children: ["About Us", "Careers", "Blog", "Contact Us"] },
  { label: "Market area", children: ["India", "UAE", "USA", "UK"] },
];

// Each hero slide is a separate Figma frame with its own artwork. Titles are
// stored as lines of [text, isAccent] runs so the red words can sit anywhere.
export const heroSlides = [
  {
    id: "marketing-tech-ai",
    image: "/images/hero-slide-1.webp",
    eyebrow: "A Revenue-Focused Technology & Digital Marketing Company",
    titleLines: [
      [["Where Marketing, "], ["Technology", true]],
      [["& AI Work Together"]],
    ],
    body: "Let's look beyond generic traffic and meaningless clicks. We focus on what actually matters for your growth: the right audience, genuine trust, and scaling your business knowing your marketing investment is working for you.",
    pills: [
      { label: "Technology", icon: "desktop" },
      { label: "Marketing", icon: "speaker" },
      { label: "AI", icon: "bulb" },
    ],
    cta: { label: "Get Quotation", icon: "doc" },
  },
  {
    id: "ai-powered-strategy",
    image: "/images/hero-slide-2.webp",
    eyebrow: "Where Digital Marketing Meets Business Growth",
    titleLines: [
      [["Your "], ["Growth", true], [" Isn't Luck"]],
      [["It's AI-Powered Strategy"]],
    ],
    body: "SEO, content, and performance marketing, enhanced with AI insights to turn visibility into revenue, faster.",
    pills: [
      { label: "SEO", icon: "seo" },
      { label: "Lead Generation", icon: "leads" },
      { label: "Social Media Marketing", icon: "trend" },
    ],
    cta: { label: "Get Started", icon: "doc" },
  },
  {
    id: "every-result-tracked",
    image: "/images/hero-slide-3.webp",
    eyebrow: "A ROI-Focused Performance Marketing Company",
    titleLines: [
      [["Every "], ["Result", true], [" Tracked"]],
      [["Every Rupee "], ["Spent", true]],
    ],
    body: "High-converting ad campaigns across Google, Meta & LinkedIn built on data, optimized for ROI",
    pills: [
      { label: "ROAS Focused", icon: "target" },
      { label: "Precision Targeting", icon: "precision" },
      { label: "Real-Time Tracking", icon: "send" },
    ],
    cta: { label: "Launch Your Campaign", icon: "launch" },
  },
  {
    id: "built-to-perform",
    image: "/images/hero-slide-4.webp",
    eyebrow: "A Technology-Driven Web & App Development Company",
    titleLines: [
      [["Built to "], ["Perform", true]],
      [["Designed to Convert"]],
    ],
    body: "Fast, scalable websites and apps \u2014 engineered with the latest tech stack to deliver seamless experiences.",
    pills: [
      { label: "Fast & Scalable", icon: "target" },
      { label: "Mobile-First", icon: "precision" },
      { label: "Secure & Reliable", icon: "send" },
    ],
    cta: { label: "View Our Work", icon: "launch" },
  },
];

// Cards have two states in the design: a dark scrimmed default and a light
// hover that reveals the description and service chips. On touch devices the
// hover state is what shows by default.
export const coreServices = [
  {
    title: "Branding\nPromotion",
    image: "/images/image-of-branding.webp",
    icon: "percent",
    body: "Not just for short-term attention, we're here to turn your business into a trusted brand that stands out everywhere it matters.",
    tags: [
      "Press Release",
      "Influencer Marketing",
      "Brand Image Building",
      "Online Reputation Management",
      "Celebrity Management",
    ],
  },
  {
    title: "Web & App\nDevelopment",
    image: "/images/image-of-web.webp",
    icon: "code",
    body: "Develop modern websites and mobile apps that are fast, improve user experience, and drive higher conversions.",
    tags: [
      "Website Development",
      "Mobile App Development",
      "E-commerce Websites",
      "UI/UX Design",
    ],
  },
  {
    title: "Digital\nMarketing",
    image: "/images/image-of-digital-mrketing.webp",
    icon: "megaphone",
    body: "We connect your business with the right audience and turn attention into real growth.",
    tags: [
      "SEO",
      "Social Media Marketing",
      "Email Marketing",
      "Content Marketing",
      "WhatsApp Marketing",
    ],
  },
  {
    title: "Performance\nMarketing",
    image: "/images/image-of-performance-mrktng.webp",
    icon: "chart",
    body: "We connect your business with the right audience and turn attention into real growth.",
    tags: ["Google Ads", "Meta Ads", "Lead Generation Campaigns", "Remarketing"],
  },
];

export const caseStudies = [
  {
    name: "The Vanity",
    image: "/images/rectangle-3446.webp",
    body: "As a growth-focused digital marketing company, we've helped businesses strengthen their online presence, reach more customers, and achieve meaningful business growth through marketing, branding, and web development solutions.",
    stats: [
      "6K+ Monthly Organic Traffic",
      "900+ Ranking Keywords",
      "Improved Local Visibility",
      "Clear Call-to-Actions",
    ],
  },
  {
    name: "SS Interiors Hub",
    image: "/images/rectangle-3232.webp",
    body: "Transformed the brand's online presence with a modern, responsive website designed and developed to deliver a smooth and engaging user experience across every device.",
    stats: [
      "Responsive Design",
      "Fast & User-Friendly Experience",
      "Lead Generation Focused",
      "Mobile Optimized",
    ],
  },
  {
    name: "Mera Gaon Mera Desh",
    image: "/images/rectangle-3225.webp",
    body: "From a growing content platform to a destination visited by thousands every month, Mera Gaon Mera Desh continues to expand its reach and connect with a wider audience online.",
    stats: [
      "6.6K+ Monthly Visitors",
      "Growing Audience Reach",
      "Strong Digital Presence",
      "Fast Content Delivery",
    ],
  },
];

export const industries = [
  { label: "Real Estate", image: "/images/rectangle-3222.webp" },
  { label: "IT & SaaS", image: "/images/rectangle-3223.webp" },
  { label: "Hospitality", image: "/images/rectangle-3224.webp" },
  { label: "Manufacturing", image: "/images/rectangle-3225.webp" },
  { label: "Automobiles", image: "/images/rectangle-3226.webp" },
  { label: "Healthcare", image: "/images/rectangle-3227.webp" },
  { label: "Travel", image: "/images/rectangle-3228.webp" },
];

export const consultation = {
  meta: [
    { icon: "invest", label: "Investment", value: "₹27,000", suffix: "/only" },
    { icon: "clock", label: "Duration", value: "45", suffix: "minutes" },
    { icon: "screen", label: "Meeting Mode", value: "Virtually", suffix: "Google Meet | Teams | Zoom" },
    { icon: "send", label: "Deliverable", value: "Growth Blueprint" },
  ],
  note: "Before your session, you'll complete a detailed business questionnaire. Our experts review every answer, research your industry, analyze your competitors, and prepare your personalized strategy before the meeting begins — so every minute is spent solving your business challenges, not gathering basic information.",
  analyze: [
    { icon: "📈", label: "Business Model" },
    { icon: "🎯", label: "Target Audience" },
    { icon: "🏆", label: "Competitor Analysis" },
    { icon: "🌐", label: "Website & UX" },
    { icon: "📱", label: "Social Media Presence" },
    { icon: "📢", label: "Advertising Performance" },
    { icon: "🔍", label: "SEO Visibility" },
    { icon: "🧺", label: "AI Opportunities" },
    { icon: "💼", label: "Branding Positioning" },
    { icon: "💰", label: "Lead Generation" },
    { icon: "🛒", label: "Sales Funnel" },
    { icon: "⚙️", label: "Technology Stack" },
  ],
  receive: [
    "Complete Marketing Strategy",
    "Branding Strategy",
    "Advertising Strategy",
    "Sales Funnel Blueprint",
    "Customer Journey Mapping",
    "Lead Generation Strategy",
    "Website Improvement Recommendations",
    "AI Integration Opportunities",
    "Performance Marketing Plan",
    "Technology Recommendations",
    "90-Day Growth Roadmap",
    "Priority Action Plan",
  ],
  strategist: {
    image: "/images/vishal-dagar-9-1.webp",
    role: "Founder & Growth Consultant",
    tags: "Marketing · Branding · Technology · AI",
    blurb: "Helping founders and business owners build growth systems that actually work",
    tagline: "No Guesswork, No Generic Playbooks.",
    badges: [
      { icon: "📊", label: "MARKETING SCORE", value: "87/100" },
      { icon: "📈", label: "GROWTH FORECAST", value: "+34%" },
      { icon: "🌐", label: "WEBSITE AUDIT", value: "12 Fixes" },
      { icon: "🔍", label: "SEO HEALTH", value: "Strong" },
      { icon: "🧺", label: "AI READINESS", value: "62%" },
    ],
    stats: [
      { value: "500+", label: "BUSINESSES" },
      { value: "45 min", label: "SESSION" },
      { value: "90 Days", label: "ROADMAP" },
    ],
  },
};

export const stats = [
  { icon: "box", value: "200+", label: "Projects Delivered" },
  { icon: "star", value: "159+", label: "Happy Clients" },
  { icon: "grid", value: "10+", label: "Industries Serves" },
  { icon: "medal", value: "7+", label: "Years Experience" },
];

export const whatWeDo = [
  {
    label: "Software Development",
    icon: "\u25B6",
    body: "Businesses Need Software That Solves Real Challenges, Improves Efficiency, And Supports Long-Term Growth. At VD Infotech, We Create Custom Software Solutions Tailored To Your Unique Business Processes And Industry Requirements. Our Experienced Developers Use Modern Technologies To Build Secure, Scalable, And High-Performing Applications With Intuitive Interfaces And Seamless Functionality. Every Solution Is Developed With Clean, Maintainable Code And A Future-Ready Architecture, Ensuring Your Software Remains Reliable, Adaptable, And Capable Of Growing Alongside Your Business.",
    tags: ["Laravel", "CodeIgniter", "WordPress", "DotNet", "Angular JS", "Node JS", "React JS", "Ruby On Rails", "Drupal"],
  },
  {
    label: "E Commerce",
    icon: "\uD83D\uDED2",
    title: "E-commerce",
    body: "At VD Infotech, we create powerful eCommerce solutions that help businesses grow, compete, and succeed in the digital marketplace. Our expertise in Shopify, WooCommerce, Magento, and custom eCommerce development enables us to build secure, scalable, and user-friendly online stores that deliver seamless shopping experiences. From store design and development to product management, payment integration, performance optimization, and digital marketing, we provide complete eCommerce solutions designed to increase conversions and support long-term business growth.",
    tags: ["Magento", "Bigcommerce", "WooCommerce", "Shopify", "Walmart", "nopCommerce"],
  },
  {
    label: "Digital Marketing",
    icon: "\uD83D\uDCE2",
    body: "Search, social, content and paid media run as one system rather than disconnected channels. We build the measurement layer first, so every campaign decision is grounded in what actually moves pipeline for your business.",
    tags: ["SEO", "Google Ads", "Meta Ads", "Content", "Email", "Analytics"],
  },
  {
    label: "Amazon Consulting",
    icon: "\uD83C\uDD70",
    body: "Whether you're launching a new product or looking to scale your existing Amazon business, VD Infotech provides expert Amazon consulting services tailored to your goals. Our team helps you optimize product listings, improve marketplace visibility, analyze competitors, and develop data-driven strategies that increase sales and profitability. From account setup and catalog management to advertising optimization and performance tracking, we simplify every stage of selling on Amazon, allowing you to focus on growing your business with confidence.",
    tags: ["Amazon Consulting", "Amazon PPC", "Amazon Store", "Vendor Account Management", "Amazon Dropshipping", "Amazon EBC", "Amazon Virtual Assistance", "Amazon Transparency"],
  },
  {
    label: "Data Management",
    icon: "\uD83D\uDDC4",
    body: "Effective data management is the foundation of smarter business decisions. At VD Infotech, we offer reliable data management services, including data entry, data processing, data cleansing, data migration, data conversion, and system integration. Our experienced team ensures your business data remains accurate, organized, and easily accessible while maintaining the highest standards of security and confidentiality. With streamlined data management solutions, we help businesses improve operational efficiency, reduce errors, and make informed decisions with confidence.",
    tags: ["Data Entry", "Document Processing", "Data Mining", "Data Analysis", "Data Processing", "Data Cleansing", "Data Extraction", "Virtual Assistant Services", "Product Data Entry", "Healthcare Data Mining"],
  },
  {
    label: "BPO/KPO Consulting",
    icon: "\uD83C\uDFA7",
    body: "At VD Infotech, we deliver reliable BPO and KPO solutions that help businesses improve efficiency, reduce operational costs, and focus on core business growth. Our BPO services include customer support, data processing, order management, and back-office operations, ensuring seamless day-to-day business functions. Through our KPO services, we provide specialized expertise in market research, data analytics, business intelligence, and strategic support, enabling organizations to make informed decisions and achieve sustainable growth.",
    tags: ["Inbound Call Center", "Outbound Call Center", "Telemarketing", "Lead Generation", "Customer Support", "Virtual Assistant", "CCTV Monitoring", "Data Processing", "Document Processing", "Healthcare Data Mining"],
  },
  {
    label: "IoT Devices Data Support",
    icon: "\uD83D\uDD0C",
    body: "At VD Infotech, we provide advanced IoT solutions that help businesses harness the power of connected devices and real-time data. Our experts design, develop, and integrate IoT systems that enable seamless data collection, monitoring, and analysis for improved operational efficiency and smarter decision-making. From IoT consulting and custom device integration to deployment, cloud connectivity, and ongoing maintenance, we deliver secure, scalable, and future-ready IoT solutions tailored to your unique business requirements.",
    tags: ["Data Migration Services", "Project Implementation", "Customer Onboarding", "Chat Support", "Voice Support", "Reporting And Analytics", "Data Mining", "Data Analysis"],
  },
  {
    label: "Graphic & Video",
    icon: "\uD83C\uDFA8",
    body: "Great design is more than just aesthetics\u2014it shapes your brand identity and leaves a lasting impression on your audience. At VD Infotech, we offer creative graphic design services tailored to businesses of all sizes and industries. Whether you need branding materials, marketing creatives, social media graphics, or custom visual assets, our designers combine creativity with strategy to deliver impactful designs that strengthen your brand, engage your audience, and support your business growth.",
    tags: ["Video Editing", "Image Enhancement", "Logo Design", "Amazon EBC", "Photo Editing", "Real Estate Image Editing"],
  },
  {
    label: "App Development",
    icon: "\uD83D\uDCF1",
    body: "At VD Infotech, we develop custom mobile and web applications designed to meet your business objectives and deliver exceptional user experiences. Our expertise spans Android, iOS, cross-platform, and web application development, ensuring high performance, scalability, and seamless functionality. From UI/UX design and backend development to API integration, testing, and deployment, we provide end-to-end app development services. Whether you need an eCommerce app, enterprise solution, or customer-focused mobile application, we build secure, future-ready applications that support your business growth.",
    tags: ["Android", "React Native", "iOS"],
  },
  {
    label: "Finance and Accounting",
    icon: "\uD83D\uDCCA",
    body: "Managing business finances requires accuracy, compliance, and strategic planning to support long-term success. VD Infotech offers comprehensive financial and accounting solutions designed to simplify financial operations while helping businesses stay compliant with regulatory standards. Our services include bookkeeping, accounting, tax consulting, financial reporting, budgeting, forecasting, payroll management, and business analysis. With a combination of industry expertise and modern technology, we deliver reliable, customized financial solutions that improve cash flow, enhance financial visibility, and empower businesses of every size to make confident, data-driven decisions.",
    tags: ["Book keeping", "Taxation", "Payroll"],
  },
];

export const ecosystem = {
  circles: [
    {
      key: "creative",
      title: "Creative",
      subtitle: "Build Trust & Recognition",
      items: ["Branding", "Creative Design", "Content Creation", "Video Production"],
    },
    {
      key: "marketing",
      title: "Marketing",
      subtitle: "Drive Visibility & Leads",
      items: ["SEO", "Performance Marketing", "Social Media Marketing", "Lead Generation"],
    },
    {
      key: "technology",
      title: "Technology",
      subtitle: "Build, Automate & Scale",
      items: ["Website Development", "App Development", "Business Automation", "Software Solutions"],
    },
  ],
  orbit: [
    "AI-Powered SEO",
    "AI Content Assistance",
    "AI-Enhanced Ad Optimization",
    "AI Automation Systems",
    "AI Analytics & Insights",
  ],
};

export const toolTabs = [
  {
    label: "Marketing & Analytics",
    icon: "📊",
    tools: [
      { name: "Google Analytics", image: "/images/logo-google-analytics-1.webp" },
      { name: "Google Analytics 4", image: "/images/icons8-power-bi-logo-48-1.webp" },
      { name: "Semrush", image: "/images/semrush-ogo-1.webp" },
      { name: "Ahrefs", image: "/images/ahrefs-logo-1.webp" },
      { name: "Google Tag Manager", image: "/images/google-search-console-1.webp" },
      { name: "Power BI", image: "/images/icons8-power-bi-logo-48-1.webp" },
      { name: "Looker Studio", image: "/images/looker-1.webp" },
    ],
  },
  {
    label: "Advertising",
    icon: "🖥",
    tools: [
      { name: "Google Ads", image: "/images/google-ads-certification-1.webp" },
      { name: "Meta Ads", image: "/images/1723808722meta-logo-png-1.webp" },
      { name: "Bing Ads", image: "/images/bing-logo-2016-svg-3.webp" },
      { name: "LinkedIn Ads", image: "/images/linkedin-marketing-1.webp" },
    ],
  },
  {
    label: "Design & Creative",
    icon: "✒",
    tools: [
      { name: "Shopify", image: "/images/shopify-certified-partner-logo-3.webp" },
      { name: "Semrush Academy", image: "/images/semrush-academy-2.webp" },
    ],
  },
  {
    label: "Development",
    icon: "⟨⟩",
    tools: [
      { name: "AWS", image: "/images/aws-2.webp" },
      { name: "HubSpot", image: "/images/hubspot-1.webp" },
      { name: "ISO 27001", image: "/images/iso-27001-logo-eturia-2.webp" },
    ],
  },
  {
    label: "AI & Automation",
    icon: "🤖",
    tools: [
      { name: "HubSpot", image: "/images/hubspot-1.webp" },
      { name: "Looker Studio", image: "/images/looker-1.webp" },
      { name: "Power BI", image: "/images/icons8-power-bi-logo-48-1.webp" },
    ],
  },
];

export const processSteps = [
  { no: "01.", title: "Decode", body: "AI-Powered Business\n& Market Analysis" },
  { no: "02.", title: "Diagnose", body: "Identify Gaps, Challenges\n& Opportunities" },
  { no: "03.", title: "Direction", body: "Define a Clear\nGrowth strategy" },
  { no: "04.", title: "Design", body: "Build Funnels, Assets\n& Creative Blueprint" },
  { no: "05.", title: "Deploy", body: "Launch SEO, ads,\nContent & Branding" },
  { no: "06.", title: "Drive", body: "Optimize Performance\nwith AI Insights" },
  { no: "07.", title: "Dominate", body: "Scale Growth,\nAuthority & Revenue" },
];

export const experts = [
  {
    name: "Shefali Dhiman",
    role: "Digital Marketing Expert",
    years: "5+",
    image: "/images/ellipse-1627-2-2.webp",
    blurb: "Helping businesses generate more traffic, leads, and sales.",
  },
  {
    name: "Bhumi Jain",
    role: "Growth Strategy Expert",
    years: "6+",
    image: "/images/ellipse-1627-2.webp",
    blurb: "Need a growth roadmap?\nLet's discuss your business goals.",
  },
  {
    name: "Prachi Pant",
    role: "Technology Consultant",
    years: "4+",
    image: "/images/ellipse-1627.webp",
    blurb: "Speak with our expert and unlock your digital growth plan.",
  },
];

export const clientLogos = [
  { name: "Field Crop", image: "/images/white-1-2-1.webp" },
  { name: "The Vanity", image: "/images/the-vanity-logo.webp" },
  { name: "Roshan Machine Tools", image: "/images/om-sai-machine-tools-3-1.webp" },
  { name: "SS Interiorshub", image: null },
  { name: "Boomslang Nutritions", image: "/images/boomslang-logo.webp" },
  { name: "Yogic Company", image: null },
];

export const testimonials = [
  {
    name: "Ankit Singh",
    role: "Business Owner",
    rating: 5,
    body: "If you're looking for genuine growth, VD Infotech is the right choice. They helped scale our online presence and generate quality leads consistently. Transparent communication and strong execution make them stand out.",
  },
  {
    name: "Siddhant Gupta",
    role: "Business Owner",
    rating: 5,
    body: "If you are looking for a reliable SEO and digital marketing company in Dehradun, VD Infotech is the right choice. Their team helped improve our Google rankings, website traffic, and quality leads through structured SEO and paid campaigns.",
  },
  {
    name: "Rhea Malhotra",
    role: "Marketing Head",
    rating: 5,
    body: "We came in with a website that looked fine but converted poorly. Their team rebuilt the funnel end to end and the difference showed within the first quarter. Reporting is clear and honest.",
  },
  {
    name: "Karan Mehta",
    role: "Founder",
    rating: 5,
    body: "What stood out was that they questioned our assumptions before spending anything. The strategy session alone was worth it, and the execution that followed has been consistent ever since.",
  },
];

export const pricing = [
  { title: "Performance\nMarketing", icon: "📈", usd: "419", inr: "₹40,000/-Month" },
  { title: "Website\nDevelopment", icon: "🌐", usd: "529", inr: "₹50,000/-Month" },
  { title: "Digital\nMarketing", icon: "📢", usd: "419", inr: "₹40,000/-Month" },
  { title: "Pay- Per Clip\n(PPC)", icon: "💻", usd: "319", inr: "₹30,000/-Month" },
  { title: "Search Engine\nOptimisation", icon: "🔎", usd: "269", inr: "₹25,000/-Month" },
];

export const blog = {
  featured: {
    title: "Why Every Growing Business Needs a Mobile App",
    body: "Explore how custom mobile applications improve customer engagement, streamline operations, and create new revenue opportunities.",
    date: "July 2026",
    image: "/images/rectangle-3215.webp",
  },
  posts: [
    {
      title: "How AI Automation Is Transforming Small Businesses in 2026",
      body: "Discover how AI-powered automation helps businesses save time, reduce costs, improve customer support, and increase productivity with smart workflows.",
      date: "July 2026",
      image: "/images/rectangle-3135.webp",
    },
    {
      title: "10 Essential Features Every Modern Business Website Must Have",
      body: "From responsive design to SEO optimization and fast loading speed, learn the must-have features that make your business website stand out.",
      date: "July 2026",
      image: "/images/rectangle-3135-2.webp",
    },
    {
      title: "How AI Automation Is Transforming Small Businesses in 2026",
      body: "Discover how AI-powered automation helps businesses save time, reduce costs, improve customer support, and increase productivity with smart workflows.",
      date: "July 2026",
      image: "/images/rectangle-3135.webp",
    },
  ],
};

export const faqs = [
  {
    q: "What services does VD Infotech provide?",
    a: "We work across digital marketing, branding, web and app development, software engineering, and AI adoption. Most clients engage us for a combination — for example SEO and performance marketing alongside a website rebuild — because those pieces perform better when they are planned together.",
  },
  {
    q: "Who do you work with?",
    a: "Startups, SMBs and established enterprises across real estate, IT and SaaS, hospitality, manufacturing, automobiles, healthcare and travel. The common thread is a business that wants measurable growth rather than activity for its own sake.",
  },
  {
    q: "How do you work with clients?",
    a: "Every engagement starts with a strategy session where we study your business, competitors and current performance before recommending anything. From there we agree on a roadmap with clear priorities, then execute in cycles with regular reporting.",
  },
  {
    q: "Why should I choose VD Infotech?",
    a: "Because marketing, technology and AI sit under one roof. You are not coordinating between an agency, a development shop and a consultant — the same team owns the strategy and the implementation, which removes the gaps where results usually get lost.",
  },
  {
    q: "Will you provide support after the project is completed?",
    a: "Yes. Ongoing support and maintenance are part of how we work, whether that is monitoring campaign performance, shipping improvements to your site, or extending a platform as your requirements change.",
  },
];

export const footer = {
  blurb:
    "VD Infotech is a full-service digital marketing agency combining marketing, technology, and AI to help businesses increase visibility, generate qualified leads, and achieve sustainable growth.",
  columns: [
    {
      title: "Company",
      links: ["Home", "Blog", "About Us", "Case Studies", "Careers", "Contact Us"],
    },
    {
      title: "Digital Marketing",
      links: [
        "Search Engine Optimization",
        "Social Media Marketing",
        "WhatsApp Marketing",
        "Lead Generation",
        "Social Media Optimization",
        "Search Engine Marketing",
      ],
    },
    {
      title: "Web & Technology",
      links: [
        "UI/UX Design",
        "AI Solutions",
        "Website Development",
        "Mobile App Development",
        "Software Development",
        "E-commerce Development",
      ],
    },
  ],
  expansionCities: [
    "Greater Noida",
    "Mumbai",
    "Chandigarh",
    "Bengaluru",
    "Ahmedabad",
    "Gurugram",
    "Jaipur",
    "Pune",
    "Guwahati",
    "Indore",
  ],
  targetMarkets: [
    "UK",
    "Malaysia",
    "UAE",
    "Canada",
    "Australia",
    "USA",
    "Indonesia",
    "China",
    "Japan",
    "Germany",
  ],
  certifications: [
    "/images/iab-2.webp",
    "/images/roc-2.webp",
    "/images/pci-logo-2.webp",
    "/images/shopify-certified-partner-logo-3.webp",
    "/images/google-ads-certification-1.webp",
    "/images/nasscom-member-2.webp",
    "/images/iso-27001-logo-eturia-2.webp",
    "/images/aws-2.webp",
    "/images/bing-logo-2016-svg-3.webp",
    "/images/hubspot-1.webp",
    "/images/semrush-academy-2.webp",
    "/images/pan-2.webp",
    "/images/1723808722meta-logo-png-1.webp",
    "/images/linkedin-marketing-1.webp",
    "/images/download-2026-07-08t135816-316-removebg-prev.webp",
  ],
  payments: [
    "/images/visa-card-logo-9-2.webp",
    "/images/db4253052cfc0f80ac281486c19f9d57-removebg-pr.webp",
    "/images/rupay-logo-2.webp",
    "/images/upi-logo-png-lyp5s5-2.webp",
    "/images/google-pay-38-2.webp",
    "/images/pngwing-com-1.webp",
    "/images/paytm-ns-big-2.webp",
    "/images/360-3606562-bhim-logo-bhim-upi-2.webp",
    "/images/download-2026-07-08t135816-316-removebg-prev.webp",
    "/images/pngwing-com-1-1.webp",
  ],
  badges: [
    "/images/dmca-badge-w250-2x1-01-1-2.webp",
    "/images/pngegg-1-1.webp",
    "/images/pngwing-com-37-1.webp",
  ],
  bottomLinks: ["Web Development", "Digital Marketing", "App Development", "Branding"],
  legalLinks: ["Privacy Policy", "Terms & Conditions", "Refund Policy", "Cookie Policy", "Site Map"],
};

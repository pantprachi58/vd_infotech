// All copy from the Figma home frame (node 585:1982), kept out of the
// components so text edits never require touching markup.

export const site = {
  email: "info@vdinfotech.in",
  phone: "+91 920-573-1999",
  whatsapp: "919205731999",
  address: "Office No. 505, 5th Floor, CPL Tower 43A, IT Park, Dehradun, Uttarakhand, 248013",
  hours: { days: "Mon - Sat", time: "9:30 a.m - 6:30 p.m" },
};

const lines = (value) =>
  value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

const group = (heading, items) => ({ heading, links: lines(items) });

const megaImages = {
  "Digital Marketing": "/images/mega-menu/services-digital-marketing.webp",
  "Performance Marketing": "/images/mega-menu/services-performance-marketing.webp",
  "Design & Development": "/images/mega-menu/services-design-development.webp",
  "Brand Promotion & ORM": "/images/mega-menu/services-brand-promotion.webp",
  "Graphic Design": "/images/mega-menu/services-graphic-design.webp",
  "Video Production": "/images/mega-menu/services-video-production.webp",
  "Virtual Assistant": "/images/mega-menu/services-virtual-assistant.webp",
  "Web Technologies": "/images/mega-menu/tech-web.webp",
  "Mobile Technologies": "/images/mega-menu/tech-mobile.webp",
  "E-Commerce Technologies": "/images/mega-menu/tech-ecommerce.webp",
  "Cloud Technologies": "/images/mega-menu/tech-cloud.webp",
  "Testing Technologies": "/images/mega-menu/tech-testing.webp",
  "AI Development": "/images/mega-menu/ai-development.webp",
  "AI Automation": "/images/mega-menu/ai-automation.webp",
  "AI Marketing": "/images/mega-menu/ai-marketing.webp",
  "AI Integration": "/images/mega-menu/ai-integration.webp",
  "Emerging AI Solutions": "/images/mega-menu/ai-emerging.webp",
};

const tab = (label, title, description, columns) => ({
  label,
  title,
  description,
  image: megaImages[label],
  columns,
});

export const navItems = [
  { label: "Home", href: "#" },
  {
    label: "Services",
    mega: {
      variant: "tabbed",
      tabs: [
        tab("Digital Marketing", "Digital Marketing", "Expand your digital presence with smart marketing that delivers real business impact.", [
          group("Search Engine Optimization", "AI SEO Services\nTechnical SEO\nOn-Page SEO\nOff-Page SEO\nLocal SEO\nE-commerce SEO\nSEO Audit\nSEO Consulting"),
          group("Social Media Marketing", "Facebook Marketing\nInstagram Marketing\nLinkedIn Marketing\nYouTube Marketing\nX (Twitter) Marketing\nSocial Media Management\nSocial Media Advertising\nInfluencer Marketing"),
          group("Social Media Optimization", "Profile Optimization\nContent Optimization\nSocial Media Strategy\nContent Calendar\nCommunity Management\nBrand Engagement\nHashtag Strategy\nPerformance Reporting"),
          group("Search Engine Marketing", "Google Ads Management\nBing Ads Management\nPPC Campaign Management\nShopping Ads\nRemarketing Campaigns\nConversion Tracking\nSEM Consulting"),
          group("Google Ads Management", "Google Search Ads\nGoogle Display Ads\nGoogle Shopping Ads\nPerformance Max\nYouTube Advertising\nConversion Tracking Setup\nGoogle Ads Audit\nGoogle Ads Optimization"),
          group("Email Marketing", "Email Campaign Management\nEmail Automation\nNewsletter Marketing\nDrip Email Campaigns\nPromotional Emails\nTransactional Emails\nEmail List Management\nEmail Marketing Analytics"),
          group("WhatsApp Marketing", "WhatsApp Business API\nClick-to-WhatsApp Ads\nBulk Messaging Campaigns\nWhatsApp Automation\nWhatsApp Chatbots\nLead Nurturing\nCustomer Support Automation\nWhatsApp Marketing Strategy"),
          group("E-commerce Marketing", "Shopify Marketing\nWooCommerce Marketing\nMarketplace Marketing\nProduct Listing Optimization\nShopping Ads Management\nE-commerce SEO\nConversion Rate Optimization (CRO)\nE-commerce Marketing Strategy"),
          group("Google Business Listing", "Google Business Profile Setup\nGoogle Business Verification\nGoogle Business Optimization\nGoogle Maps Ranking\nReview Management\nLocal Citation Building\nGBP Posts\nGoogle Business Audit"),
        ]),
        tab("Performance Marketing", "Performance Marketing", "Reach the right audience with precision targeted performance marketing campaigns.", [
          group("Programmatic Advertising", "Display Advertising\nVideo Advertising\nNative Advertising\nAudience Targeting\nRe-targeting\nReal-Time Bidding (RTB)\nCampaign Optimization\nPerformance Reporting"),
          group("Partnership Marketing", "Affiliate Marketing\nInfluencer Partnerships\nBrand Collaborations\nStrategic Partnerships\nCo-Marketing Campaigns\nReferral Marketing\nChannel Partner Marketing\nPartnership Strategy"),
          group("Display Advertising", "Banner Advertising\nResponsive Display Ads\nRich Media Ads\nRe-marketing Display Ads\nGoogle Display Network (GDN)\nAudience Targeting\nDisplay Campaign Optimization\nDisplay Advertising Management"),
          group("Video Advertising", "YouTube Video Ads\nIn-Stream Video Ads\nIn-Feed Video Ads\nShort Video Ads\nOTT & CTV Advertising\nVideo Re-marketing\nVideo Campaign Management\nVideo Ad Optimization"),
          group("Native Advertising", "Native Display Ads\nSponsored Articles\nIn-Feed Advertising\nContent Recommendation Ads\nNative Video Ads\nPublisher Network Advertising\nNative Campaign Management\nPerformance Optimization"),
          group("Social Advertising", "Brand Awareness Campaigns\nLead Generation Campaigns\nTraffic Campaigns\nEngagement Campaigns\nConversion Campaigns\nRe-marketing Campaigns\nAudience Targeting\nSocial Ad Optimization"),
          group("Sponsored Content", "Sponsored Articles\nSponsored Blog Posts\nSponsored Videos\nSponsored Social Posts\nInfluencer Sponsored Content\nPublisher Collaborations\nBranded Content Campaigns\nContent Performance Reporting"),
          group("Full Funnel Marketing", "TOFU, MOFU & BOFU Strategy\nCRM Integration\nGA4 Integration\nConversion Tracking\nMarketing Attribution\nCross-Channel Analytics\nCustomer Journey Mapping\nPerformance Reporting"),
        ]),
        tab("Design & Development", "Design & Development", "Transform your vision into a digital experience that stands out. Our design and development solutions are built for growth, speed, and success.", [
          group("UI/UX Design", "Website UI/UX Design\nMobile App UI/UX Design\nSaaS UI/UX Design\nDashboard Design\nWireframing & Prototyping\nUser Research\nUX Audit\nDesign System"),
          group("Website Design", "Custom Website Design\nResponsive Website Design\nLanding Page Design\nE-Commerce Website Design\nDynamic Design\nStatic Design\nWebsite Re-design"),
          group("Website Development", "Custom Website Development\nCorporate Website Development\nWordpress Development\nShopify Development\nCMS Development\nLanding Page Development\nWebsite Maintenance\nWebsite Migration"),
          group("E-Commerce Development", "Shopify Development\nWooCommerce Development\nCustom E-Commerce Development\nPayment Gateway Integration\nMulti-Vendor Marketplace\nE-Commerce Migration\nE-Commerce Maintenance\nPerformance Optimization"),
          group("Mobile App Development", "Android App Development\niOS App Development\nBlockchain App Development\nE-Commerce App Development\nCryptocurrency app Development\nAI-Powered App Development\nCustom Mobile App Development\nApp Maintenance & Support"),
          group("Software Development", "Custom Software Development\nCRM Software Development\nERP Software Development\nSaaS Application Development\nOperations management\nBusiness Automation Software\nSoftware Maintenance\nSoftware Consulting"),
          group("Custom Web Applications", "Business Web Applications\nCRM Development\nERP Development\nCustomer Portal Development\nAdmin Dashboard Development\nWorkflow Automation\nAPI Integration\nWeb Application Support"),
          group("Website Maintenance & Support", "Website Maintenance\nSecurity Monitoring\nWebsite Backup & Recovery\nWebsite Speed Optimization\nBug Fixes & Troubleshooting\nCMS Updates\nPerformance Monitoring\nTechnical Support"),
        ]),
        tab("Brand Promotion & ORM", "Brand Promotion & ORM", "Grow brand awareness with strategic promotions and proactive reputation management.", [
          group("Press Release", "Media Coverage\nDigital PR\nNews Distribution\nBrand Announcements\nMedia Outreach"),
          group("Influencer Marketing", "Creator Partnerships\nSocial Media Promotions\nCampaign Management\nInfluencer Outreach\nPerformance Tracking"),
          group("Brand Image Building", "Brand Strategy\nBrand Positioning\nReputation Building\nBrand Awareness Campaigns\nDigital Presence Management\nBrand Growth Strategy"),
          group("Celebrity Management", "Celebrity Partnerships\nBrand Endorsements\nCelebrity Campaigns\nTalent Management\nEvent Appearances\nCollaboration Management"),
          group("Media Account Recovery", "Account Recovery\nSecurity Restoration\nSocial Media Recovery\nAccess Management\nData Protection\nAccount Support"),
          group("Online Reputation Management", "Reputation Monitoring\nReview Management\nNegative Content Removal\nBrand Sentiment Analysis\nOnline Presence Management\nReputation Recovery"),
        ]),
        tab("Graphic Design", "Graphic Design", "From creative concepts to impactful visuals, we design experiences that connect with your audience.", [
          group("Logo Designing", "Brand Identity Design\nCustom Logo Concepts\nLogo Redesign\nCreative Direction\nBrand Guidelines"),
          group("Visual Identity Design", "Brand Color Palette\nTypography Design\nBrand Style Guide\nGraphic Elements\nCreative Assets"),
          group("Social Media Design", "Social Media Graphics\nPost Design\nAd Creative Design\nStory & Reel Design\nCampaign Creatives\nContent Templates"),
          group("Packaging Design", "Product Packaging\nLabel Design\nBox Design\nBrand Packaging\nPackaging Mockups\nPrint Ready Files"),
          group("Brochure Designing", "Company Brochures\nProduct Brochures\nService Brochures\nDigital Brochures\nMarketing Brochures\nPrint Ready Design"),
          group("Special Services", "360° Panoramas\nVirtual Staging\n3D Furniture Modeling\nReal Estate 360° Virtual Tours\n2D/3D Floor Plan Conversion"),
        ]),
        tab("Video Production", "Video Production", "Creating engaging visual stories through professional filming, editing, and creative storytelling that elevate your brand presence.", [
          group("Training Video Production", "Employee Training Videos\nEducational Videos\nTutorial Videos\nProduct Training Videos\nInstructional Videos"),
          group("Digital Ad Films", "Brand Films\nProduct Ads\nCommercial Videos\nSocial Media Ads\nPromotional Films"),
          group("Business Introduction Videos", "Company Profile Videos\nBrand Story Videos\nService Overview Videos\nAbout Us Videos\nBusiness Presentation Videos"),
          group("Corporate/Product Videos", "Corporate Films\nProduct Showcase Videos\nProduct Demo Videos\nMarketing Videos\nExplainer Videos"),
          group("Documentary & CSR Videos", "Corporate Documentaries\nSocial Impact Videos\nCSR Campaign Videos\nAwareness Videos\nCommunity Stories"),
        ]),
        tab("Virtual Assistant", "Virtual Assistant", "Streamline your business operations with reliable remote support, managing tasks efficiently and helping you focus on growth.", [
          group("Finance & Accounting Assistant", "Bookkeeping Support\nInvoice Management\nExpense Tracking\nFinancial Data Entry\nAccounting Assistant"),
          group("Administrative Support", "Data Entry\nDocument Management\nFile Organization\nOnline Research\nAdministrative Tasks"),
          group("Customer Support & Email Management", "Customer Query Handling\nEmail Management\nInbox Organization\nClient Communication\nSupport Coordination"),
          group("Social Media Management", "Social Media Scheduling\nContent Publishing\nCommunity Management\nEngagement Tracking\nSocial Media Reporting"),
          group("Scheduling & Appointment Management", "Calendar Management\nAppointment Booking\nMeeting Coordination\nReminder Management\nSchedule Optimization"),
          group("Market Research & Lead Generation", "Market Research\nCompetitor Research\nLead Generation\nData Collection\nProspect List Building"),
          group("E-commerce Management", "Product Listing\nOrder Processing\nInventory Management\nCustomer Support\nOnline Store Assistance"),
          group("Content Writing & Research", "Blog Writing\nWebsite Content\nContent Research\nEditing & Proofreading\nReport Creation"),
          group("Technical Support & IT Assistant", "Software Support\nWebsite Assistance\nTechnical Troubleshooting\nTool Management\nIT Support"),
          group("Project Management & Coordination", "Task Management\nTeam Coordination\nProject Tracking\nWorkflow Management\nProgress Reporting"),
        ]),
      ],
    },
  },
  {
    label: "Product",
    mega: {
      title: "Products",
      image: "/images/mega-menu/products.webp",
      description:
        "Powerful, ready-to-deploy digital products and custom software solutions designed to accelerate business growth and drive innovation.",
      columns: [
        group("On-Demand & Ready Apps", "Grocero – Grocery Delivery App\nInstara – Instant Delivery App\nMedQuick – Medicine Delivery App\nHomeEase – Home Services App\nLaundryGo – Laundry Service App\nAlcoGo – Alcohol Delivery App\nCarSpark – Car Wash App\nDocOnCall – Doctor On-Demand App"),
        group("Enterprise Software Solutions", "EduCore – School, College & University ERP\nTestify – Online Examination Platform\nAstroNova – Astrology Software\nNetWise – MLM Software\nMediSys – Hospital Management System\nInventix – Inventory Management System\nFinora – Nidhi Finance Management Software"),
        group("Trending Digital Products", "Healthify – Healthcare Solution\nDietify – Nutrition & Diet App\nActivo – Fitness App\nEduNova – E-Learning Platform\nARVanta – AR/VR Solution\nEstatex – Real Estate Platform\nLovira – Dating App\nHappenix – Event Booking Platform\nPawNest – Pet Care App"),
        group("E-commerce Solutions", "Fashionix – Fashion E-Commerce Platform\nJewelora – Jewellery E-Commerce Platform\nBeautify – Beauty & Cosmetics E-Commerce\nPresentix – Gifting E-Commerce Platform\nHomeora – Furniture E-Commerce Platform\nB2Bora – B2B E-Commerce Platform\nBuyly – B2C E-Commerce Platform\nD2Cora – D2C E-Commerce Platform\nMarketify – Multi-Vendor Marketplace"),
        group("Ready-Made Software", "Billing Software\nLearning Management System\nField Service Management System\nJob Portal Solution\nShopping Cart Software\nCRM Software\nERP Software\nFood Delivery Solution\nMatrimony Portal"),
      ],
    },
  },
  {
    label: "Packages",
    href: "/packages",
    mega: {
      title: "Packages",
      image: "/images/mega-menu/packages.webp",
      description:
        "From digital presence to business growth, our packages bring every essential solution together.",
      columns: [
        group("Popular Packages", "Website Packages\nSoftware Packages\nGraphics Packages\nApplication Packages\nSEO Packages\nSMO Packages\nPPC Packages\nInfluencer Packages\nAI SEO Packages\nAI Advertising Packages\nAI Content Marketing Packages\nAI Creative Marketing Packages\nEmail Marketing Packages\nVirtual Assistant Packages\nDigital Marketing Packages\nPerformance Marketing Packages"),
      ],
    },
  },
  {
    label: "Technologies",
    mega: {
      variant: "tabbed",
      tabs: [
        tab("Web Technologies", "Web Technologies", "Build fast, secure, and scalable websites using modern web technologies tailored to your business.", [
          group("Frontend Development", "HTML5\nCSS3\nJavaScript\nReact.js\nNext.js\nAngular"),
          group("Backend Development", "PHP\nNode.js\nPython\nLaravel\nCodeIgniter\nExpress.js"),
          group("CMS Development", "WordPress\nShopify\nWooCommerce\nWebflow\nMagento"),
          group("API Development", "REST API\nGraphQL\nPayment Gateway APIs\nThird-Party APIs\nCRM APIs"),
        ]),
        tab("Mobile Technologies", "Mobile Technologies", "Develop fast, secure, and scalable mobile apps that deliver exceptional user experiences.", [
          group("Android Development", "Java\nKotlin\nAndroid SDK"),
          group("iOS Development", "Swift\nSwiftUI\nXcode"),
          group("Cross-Platform Development", "Flutter\nReact Native\nIonic"),
        ]),
        tab("E-Commerce Technologies", "E-Commerce Technologies", "Future-ready e-commerce technologies that help businesses sell smarter, faster, and globally.", [
          group("E-Commerce Platforms", "Shopify\nWooCommerce\nMagento\nOpenCart"),
          group("Marketplace Solutions", "Multi-Vendor Marketplace\nONDC\nMarketplace APIs"),
          group("Payment Solutions", "Razorpay\nStripe\nPayPal\nPayU"),
        ]),
        tab("Cloud Technologies", "Cloud Technologies", "Modernize your business with cloud technologies designed for scalability and reliability.", [
          group("Cloud Platforms", "AWS\nMicrosoft Azure\nGoogle Cloud"),
          group("DevOps", "Docker\nGitHub\nCI/CD"),
          group("Hosting", "VPS Hosting\nCloud Hosting\nShared Hosting"),
          group("Database Technologies", "SQL Databases\nMySQL\nPostgreSQL\nSQL Server"),
          group("NoSQL Databases", "MongoDB\nFirebase\nRedis"),
          group("Database Services", "Database Design\nDatabase Migration\nDatabase Optimization"),
        ]),
        tab("Testing Technologies", "Testing Technologies", "Deliver flawless digital experiences through advanced testing and quality assurance technologies.", [
          group("Automation Testing", "Selenium\nCypress\nPlaywright"),
          group("API Testing", "Postman\nSwagger\nInsomnia"),
          group("Performance Testing", "JMeter\nLoad Testing\nStress Testing"),
        ]),
      ],
    },
  },
  {
    label: "AI Agency",
    mega: {
      variant: "tabbed",
      tabs: [
        tab("AI Development", "AI Development", "Build intelligent AI solutions tailored to automate processes, enhance efficiency, and drive business growth.", [
          group("Conversational AI", "AI Chatbot Development\nAI Voice Bot Development\nAI Virtual Assistant\nMultilingual AI Chatbots"),
          group("AI Agents", "AI Agent Development\nMulti-Agent Systems\nCustom AI Agents\nAutonomous AI Agents"),
          group("AI Applications", "AI SaaS Development\nCustom AI Applications\nAI Model Integration\nGenerative AI Solutions"),
        ]),
        tab("AI Automation", "AI Automation", "Build intelligent AI solutions tailored to automate processes, enhance efficiency, and drive business growth.", [
          group("Business Automation", "AI Chatbot Development\nAI Voice Bot Development\nAI Virtual Assistant\nMultilingual AI Chatbots"),
          group("Sales & Marketing Automation", "CRM Automation\nSales Automation\nMarketing Automation\nLead Automation"),
          group("Customer Automation", "Email Automation\nWhatsApp Automation\nHelpdesk Automation\nCustomer Support Automation"),
        ]),
        tab("AI Marketing", "AI Marketing", "Optimize every campaign with AI-powered strategies that maximize reach, conversions, and growth.", [
          group("AI SEO", "AI SEO Services\nAI Content Optimization\nAI Search Optimization (AEO & GEO)\nAI Keyword Research"),
          group("AI Advertising", "AI PPC Optimization\nAI Ad Copy Generation\nAI Audience Targeting\nAI Campaign Optimization"),
          group("AI Content Marketing", "AI Content Marketing\nAI Social Media Marketing\nAI Email Marketing\nAI Marketing Automation"),
          group("AI Creative Marketing", "AI Graphic Design\nAI Social Media & Ad Creatives\nAI Branding & Visual Identity\nAI Video Creatives"),
        ]),
        tab("AI Integration", "AI Integration", "Connect AI with your business applications for smarter, faster, and more efficient operations.", [
          group("LLM Integration", "Gemini AI Integration\nClaude AI Integration\nOpenAI Integration\nDeepSeek Integration"),
          group("API Integration", "OpenAI API\nGemini API\nAI API Development\nThird-Party AI APIs"),
          group("Business Integration", "CRM Integration\nERP Integration\nWhatsApp API Integration\nBusiness System Integration"),
          group("AI Data & Analytics", "Predictive Analytics\nSales Forecasting\nCustomer Analytics\nDemand Forecasting\nRisk Analysis"),
          group("Business Intelligence", "AI Dashboards\nData Visualization\nAI Reporting\nKPI Monitoring"),
          group("Data Automation", "Data Processing\nData Cleaning\nData Integration\nData Automation"),
        ]),
        tab("Emerging AI Solutions", "Emerging AI Solutions", "Future-ready AI solutions that help businesses innovate, automate, and scale with confidence.", [
          group("Computer Vision", "Image Recognition\nObject Detection\nOCR Solutions\nFace Recognition"),
          group("Natural Language Processing", "NLP Solutions\nSentiment Analysis\nText Classification\nLanguage Translation"),
          group("Intelligent AI Systems", "Voice AI Solutions\nAI Assistants\nAI Consulting\nRecommendation Systems"),
          group("Business Intelligence", "AI Dashboards\nData Visualization\nAI Reporting\nKPI Monitoring"),
          group("Data Automation", "Data Processing\nData Cleaning\nData Integration\nData Automation"),
        ]),
      ],
    },
  },
  {
    label: "Company",
    mega: {
      title: "Company",
      image: "/images/mega-menu/company.webp",
      description:
        "Building innovative digital solutions with a focus on technology, creativity, and measurable growth to help businesses succeed in a competitive world.",
      columns: [
        group("About Us", "Company Overview\nOur Story\nWhy VD Infotech\nVision & Mission\nTestimonials\nCertifications\nCase Studies"),
        group("Portfolio", "UI/UX\nGraphic Design\nVideo Marketing\nDigital Marketing\nWebsite Development\nApp Development\nSoftware Development"),
        group("Careers", "Open Positions\nInternships\nLife at VD Infotech\nApply Now\nFree Courses\nTeam"),
        group("Blog", "Digital Marketing\nBranding\nGoogle and Meta Ads\nDevelopment\nAI & Automation\nBusiness Growth\nTechnology"),
        group("Legal", "Privacy Policy\nTerms & Conditions\nRefund Policy\nDisclaimer\nScam alert\nRule Book\nCookie Policy"),
      ],
    },
  },
  {
    label: "Market Area",
    mega: {
      title: "Market Area",
      image: "/images/mega-menu/market-area.webp",
      description:
        "Serving diverse industries across India with tailored digital solutions that empower businesses to grow, innovate, and succeed in every market.",
      columns: [
        group("Industries", "Healthcare & Wellness\nEducation\nE-Commerce\nReal Estate\nFMCG\nBeauty & Fashion\nManufacturing\nHospitality\nFinance & Legal\nTravel & Tourism\nLogistics & Transportation\nAutomotive\nBuilder & Construction\nIT & SaaS\nStartups\nGovernment"),
        group("Locations (India)", "Goa\nGujarat\nHaryana\nHimachal Pradesh\nKarnataka\nMadhya Pradesh\nMaharashtra\nPunjab\nRajasthan\nUttarakhand\nUttar Pradesh\nDelhi"),
      ],
    },
  },
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
    image: "/images/case-ss-interiors.webp",
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
    image: "/images/case-mera-gaon.webp",
    body: "From a growing content platform to a destination visited by thousands every month, Mera Gaon Mera Desh continues to expand its reach and connect with a wider audience online.",
    stats: [
      "6.6K+ Monthly Visitors",
      "Growing Audience Reach",
      "Strong Digital Presence",
      "Fast Content Delivery",
    ],
  },
  {
    name: "ROSHAN MACHINE TOOLS (RMT)",
    image: "/images/roshanMachineTools.png",
    body: "From precision machinery to advanced manufacturing solutions, Roshan Machine Tools delivers reliable technology engineered for performance, efficiency, and long-term industrial growth.",
    stats: [
      "33+ Years of Expertise",
      "Precision Engineering",
      "Global Industry Reach",
      "High-Performance Machines",
    ],
  }, {
    name: "YOGIC COMPANY",
    image: "/images/yoga.png",
    body: "From mindful breathing to transformative yoga practices, Yogic Company brings ancient yogic wisdom into modern life to support greater balance, vitality, and inner well-being.",
    stats: [
      "Holistic Wellness",
      "Expert Yoga Guidance",
      "Breathwork & Meditation",
      "Mind-Body Balance",
    ],
  },
  {
    name: "FIELD CROP",
    image: "/images/fieldcrop.png",
    body: "From smarter agricultural practices to better crop outcomes, Field Crop focuses on solutions that help farmers improve productivity, efficiency, and sustainable farming performance.",
    stats: [
      "Smart Farming Solutions",
      "Better Crop Productivity",
      "Agriculture-Focused Innovation",
      "Sustainable Growth",
    ],
  },
  {
    name: "BOOMSLANG NUTRITIONS",
    image: "/images/boomslang.png",
    body: "From everyday wellness to active lifestyles, Boomslang Nutritions delivers nutrition-focused solutions designed to support performance, energy, recovery, and healthier daily habits.",
    stats: [
      "Performance Nutrition",
      "Quality-Focused Products",
      "Active Lifestyle Support",
      "Everyday Wellness",
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
    { icon: "/icons/points/📈.png", label: "Business Model" },
    { icon: "/icons/points/🎯.png", label: "Target Audience" },
    { icon: "/icons/points/🏆.png", label: "Competitor Analysis" },
    { icon: "/icons/points/🌐.png", label: "Website & UX" },
    { icon: "/icons/points/📱.png", label: "Social Media Presence" },
    { icon: "/icons/points/📢.png", label: "Advertising Performance" },
    { icon: "/icons/points/🔍.png", label: "SEO Visibility" },
    { icon: "/icons/points/🤖.png", label: "AI Opportunities" },
    { icon: "/icons/points/💼.png", label: "Branding Positioning" },
    { icon: "/icons/points/💰.png", label: "Lead Generation" },
    { icon: "/icons/points/🛒.png", label: "Sales Funnel" },
    { icon: "/icons/points/⚙️.png", label: "Technology Stack" },
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
      { icon: "/icons/startigiest/📊.png", label: "MARKETING SCORE", value: "87/100" },
      { icon: "/icons/startigiest/📈.png", label: "GROWTH FORECAST", value: "+34%" },
      { icon: "/icons/startigiest/🌐.png", label: "WEBSITE AUDIT", value: "12 Fixes" },
      { icon: "/icons/startigiest/🔍.png", label: "SEO HEALTH", value: "Strong" },
      { icon: "/icons/startigiest/🤖.png", label: "AI READINESS", value: "62%" },
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
    icon: "/svg/Vector.svg",
    image: "/images/whatwedo/app.png",
    body: "Businesses Need Software That Solves Real Challenges, Improves Efficiency, And Supports Long-Term Growth. At VD Infotech, We Create Custom Software Solutions Tailored To Your Unique Business Processes And Industry Requirements. Our Experienced Developers Use Modern Technologies To Build Secure, Scalable, And High-Performing Applications With Intuitive Interfaces And Seamless Functionality. Every Solution Is Developed With Clean, Maintainable Code And A Future-Ready Architecture, Ensuring Your Software Remains Reliable, Adaptable, And Capable Of Growing Alongside Your Business.",
    tags: ["Laravel", "CodeIgniter", "WordPress", "DotNet", "Angular JS", "Node JS", "React JS", "Ruby On Rails", "Drupal"],
  },
  {
    label: "E Commerce",
    icon: "/svg/1.svg",
    title: "E-commerce",
    image: "/images/whatwedo/E-commerce.png",
    body: "At VD Infotech, we create powerful eCommerce solutions that help businesses grow, compete, and succeed in the digital marketplace. Our expertise in Shopify, WooCommerce, Magento, and custom eCommerce development enables us to build secure, scalable, and user-friendly online stores that deliver seamless shopping experiences. From store design and development to product management, payment integration, performance optimization, and digital marketing, we provide complete eCommerce solutions designed to increase conversions and support long-term business growth.",
    tags: ["Magento", "Bigcommerce", "WooCommerce", "Shopify", "Walmart", "nopCommerce"],
  },
  {
    label: "Digital Marketing",
    icon: "/svg/Vector (1).svg",
    image: "/images/whatwedo/graphic&video.png",
    body: "Search, social, content and paid media run as one system rather than disconnected channels. We build the measurement layer first, so every campaign decision is grounded in what actually moves pipeline for your business.",
    tags: ["SEO", "Google Ads", "Meta Ads", "Content", "Email", "Analytics"],
  },
  {
    label: "Amazon Consulting",
    icon: "/svg/Vector (2).svg",
    image: "/images/whatwedo/amazon.png",
    body: "Whether you're launching a new product or looking to scale your existing Amazon business, VD Infotech provides expert Amazon consulting services tailored to your goals. Our team helps you optimize product listings, improve marketplace visibility, analyze competitors, and develop data-driven strategies that increase sales and profitability. From account setup and catalog management to advertising optimization and performance tracking, we simplify every stage of selling on Amazon, allowing you to focus on growing your business with confidence.",
    tags: ["Amazon Consulting", "Amazon PPC", "Amazon Store", "Vendor Account Management", "Amazon Dropshipping", "Amazon EBC", "Amazon Virtual Assistance", "Amazon Transparency"],
  },
  {
    label: "Data Management",
    icon: "/svg/Group.svg",
    image: "/images/whatwedo/dataManagment.png",
    body: "Effective data management is the foundation of smarter business decisions. At VD Infotech, we offer reliable data management services, including data entry, data processing, data cleansing, data migration, data conversion, and system integration. Our experienced team ensures your business data remains accurate, organized, and easily accessible while maintaining the highest standards of security and confidentiality. With streamlined data management solutions, we help businesses improve operational efficiency, reduce errors, and make informed decisions with confidence.",
    tags: ["Data Entry", "Document Processing", "Data Mining", "Data Analysis", "Data Processing", "Data Cleansing", "Data Extraction", "Virtual Assistant Services", "Product Data Entry", "Healthcare Data Mining"],
  },
  {
    label: "BPO/KPO Consulting",
    icon: "/svg/2.svg",
    image: "/images/whatwedo/BPO-KPO.png",
    body: "At VD Infotech, we deliver reliable BPO and KPO solutions that help businesses improve efficiency, reduce operational costs, and focus on core business growth. Our BPO services include customer support, data processing, order management, and back-office operations, ensuring seamless day-to-day business functions. Through our KPO services, we provide specialized expertise in market research, data analytics, business intelligence, and strategic support, enabling organizations to make informed decisions and achieve sustainable growth.",
    tags: ["Inbound Call Center", "Outbound Call Center", "Telemarketing", "Lead Generation", "Customer Support", "Virtual Assistant", "CCTV Monitoring", "Data Processing", "Document Processing", "Healthcare Data Mining"],
  },
  {
    label: "IoT Devices Data Support",
    icon: "/svg/Group 48095667.svg",
    image: "/images/whatwedo/LOT.png",
    body: "At VD Infotech, we provide advanced IoT solutions that help businesses harness the power of connected devices and real-time data. Our experts design, develop, and integrate IoT systems that enable seamless data collection, monitoring, and analysis for improved operational efficiency and smarter decision-making. From IoT consulting and custom device integration to deployment, cloud connectivity, and ongoing maintenance, we deliver secure, scalable, and future-ready IoT solutions tailored to your unique business requirements.",
    tags: ["Data Migration Services", "Project Implementation", "Customer Onboarding", "Chat Support", "Voice Support", "Reporting And Analytics", "Data Mining", "Data Analysis"],
  },
  {
    label: "Graphic & Video",
    icon: "/svg/Group 48095668.svg",
    image: "/images/whatwedo/graphic&video.png",
    body: "Great design is more than just aesthetics\u2014it shapes your brand identity and leaves a lasting impression on your audience. At VD Infotech, we offer creative graphic design services tailored to businesses of all sizes and industries. Whether you need branding materials, marketing creatives, social media graphics, or custom visual assets, our designers combine creativity with strategy to deliver impactful designs that strengthen your brand, engage your audience, and support your business growth.",
    tags: ["Video Editing", "Image Enhancement", "Logo Design", "Amazon EBC", "Photo Editing", "Real Estate Image Editing"],
  },
  {
    label: "App Development",
    icon: "/svg/Vector (3).svg",
    image: "/images/whatwedo/app.png",
    body: "At VD Infotech, we develop custom mobile and web applications designed to meet your business objectives and deliver exceptional user experiences. Our expertise spans Android, iOS, cross-platform, and web application development, ensuring high performance, scalability, and seamless functionality. From UI/UX design and backend development to API integration, testing, and deployment, we provide end-to-end app development services. Whether you need an eCommerce app, enterprise solution, or customer-focused mobile application, we build secure, future-ready applications that support your business growth.",
    tags: ["Android", "React Native", "iOS"],
  },
  {
    label: "Finance and Accounting",
    icon: "/svg/Vector (5).svg",
    image: "/images/whatwedo/finance.png",
    body: "Managing business finances requires accuracy, compliance, and strategic planning to support long-term success. VD Infotech offers comprehensive financial and accounting solutions designed to simplify financial operations while helping businesses stay compliant with regulatory standards. Our services include bookkeeping, accounting, tax consulting, financial reporting, budgeting, forecasting, payroll management, and business analysis. With a combination of industry expertise and modern technology, we deliver reliable, customized financial solutions that improve cash flow, enhance financial visibility, and empower businesses of every size to make confident, data-driven decisions.",
    tags: ["Book keeping", "Taxation", "Payroll"],
  },
];

export const ecosystem = {
  circles: [
    {
      key: "creative",
      icon: "/svg/Frame 48095893.svg",
      title: "Creative",
      subtitle: "Build Trust & Recognition",
      items: ["Branding", "Creative Design", "Content Creation", "Video Production"],
    },
    {
      key: "marketing",
      icon: "/svg/Frame 48095897.svg",
      title: "Marketing",
      subtitle: "Drive Visibility & Leads",
      items: ["SEO", "Performance Marketing", "Social Media Marketing", "Lead Generation"],
    },
    {
      key: "technology",
      title: "Technology",
      icon: "/svg/Frame 48095896.svg",
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
    icon: "",
    tools: [
      { name: "Google Analytics", image: "/images/MARKETING TOOLS/1.png" },
      { name: "Google Analytics 4", image: "/images/MARKETING TOOLS/2.png" },
      { name: "Semrush", image: "/images/MARKETING TOOLS/3.png" },
      { name: "Ahrefs", image: "/images/MARKETING TOOLS/4.png" },
      { name: "Google Tag Manager", image: "/images/MARKETING TOOLS/5.png" },
      { name: "Power BI", image: "/images/MARKETING TOOLS/6.png" },
      { name: "Looker Studio", image: "/images/MARKETING TOOLS/7.png" },
    ],
  },
  {
    label: "Advertising",
    icon: "",
    tools: [
      { name: "Google Ads", image: "/images/ADS TOOLS/google-ads-icon 1.png" },
      { name: "Meta Ads", image: "/images/ADS TOOLS/meta-ads 1.png" },
      { name: "Bing Ads", image: "/images/ADS TOOLS/6123d6a31a3fdbbc32fd31c5_bingads-377x377x0x17x377x344x1671128046 1.png" },
      { name: "LinkedIn Ads", image: "/images/ADS TOOLS/linkedin-ads 1.png" },
      { name: "Amazon Ads", image: "/images/ADS TOOLS/amazon-ads 1.png" },
      { name: "Pinterest Ads", image: "/images/ADS TOOLS/conn-pinterestads 1.png" },
      { name: "Twitter Ads", image: "/images/ADS TOOLS/_6B26560D-8FE8-493C-9E87-354BE89EA072_-removebg-preview 1.png" },
    ],
  },
  {
    label: "Design & Creative",
    icon: "",
    tools: [
      { name: "Adobe Photoshop", image: "/images/Design tools/adobe-photoshop-icon 1.png" },
      { name: "Adobe Illustrator", image: "/images/Design tools/adobe-illustrator-icon 1.png" },
      { name: "Figma", image: "/images/Design tools/figma 1.png" },
      { name: "Canva", image: "/images/Design tools/canva-icon 1.png" },
      { name: "Premiere Pro", image: "/images/Design tools/premiere-pro 1.png" },
      { name: "CapCut", image: "/images/Design tools/capcut-icon 1.png" },
      { name: "CorelDRAW", image: "/images/Design tools/coral.png" },
    ],
  },
  {
    label: "Development",
    icon: "",
    tools: [
      { name: "HTML", image: "/images/development (1)/html 1.png" },
      { name: "React", image: "/images/development (1)/React-icon.svg 1.png" },
      { name: "Next.js", image: "/images/development (1)/nextjs-icon 1.png" },
      { name: "Node.js", image: "/images/development (1)/nodejs-logo 1.png" },
      { name: "MongoDB", image: "/images/development (1)/mongodb 1.png" },
      { name: "WordPress", image: "/images/development (1)/word press 1.png" },
      { name: "Shopify", image: "/images/development (1)/shopify logo 1.png" },
    ],
  },
  {
    label: "AI & Automation",
    icon: "",
    tools: [
      { name: "HubSpot", image: "/images/MARKETING TOOLS/ai/1.png" },
      { name: "Looker Studio", image: "/images/MARKETING TOOLS/ai/2.png" },
      { name: "Power BI", image: "/images/MARKETING TOOLS/ai/3.png" },
       { name: "HubSpot", image: "/images/MARKETING TOOLS/ai/4.png" },
      { name: "Looker Studio", image: "/images/MARKETING TOOLS/ai/5.png" },
      { name: "Power BI", image: "/images/MARKETING TOOLS/ai/6.png" },
      { name: "Power BI", image: "/images/MARKETING TOOLS/ai/7.png" },
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
  { name: "Roshan Machine Tools", image: "/images/om-sai-machine-tools-3-1.jpeg" },
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
  socials: [
    { name: "Facebook", icon: "facebook", href: "#" },
    { name: "Instagram", icon: "instagram", href: "#" },
    { name: "YouTube", icon: "youtube", href: "#" },
    { name: "LinkedIn", icon: "linkedin", href: "#" },
    { name: "X", icon: "x", href: "#" },
    { name: "Pinterest", icon: "pinterest", href: "#" },
    { name: "Quora", icon: "quora", href: "#" },
    { name: "Reddit", icon: "reddit", href: "#" },
    { name: "Medium", icon: "medium", href: "#" },
    { name: "Behance", icon: "behance", href: "#" },
  ],
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
  // Head office / international blocks: illustration, label, and the red rule
  // that sits between the label and its caption.
  presence: {
    head: {
      image: "/images/footer/city-dehradun.webp",
      label: "Dehradun, India",
      caption: "Head Office",
    },
    international: {
      image: "/images/footer/world-map.webp",
      label: "International Presence",
    },
  },
  expansion: {
    icon: "/images/footer/icon-upcoming.webp",
    title: "Upcoming Expansion:",
    items: [
      { name: "Greater Noida", image: "/images/footer/city-greater-noida.webp" },
      { name: "Mumbai", image: "/images/footer/city-mumbai.webp" },
      { name: "Chandigarh", image: "/images/footer/city-chandigarh.webp" },
      { name: "Bengaluru", image: "/images/footer/city-bengaluru.webp" },
      { name: "Ahmedabad", image: "/images/footer/city-ahmedabad.webp" },
      { name: "Gurugram", image: "/images/footer/city-gurugram.webp" },
      { name: "Jaipur", image: "/images/footer/city-jaipur.webp" },
      { name: "Pune", image: "/images/footer/city-pune.webp" },
      { name: "Guwahati", image: "/images/footer/city-guwahati.webp" },
      { name: "Indore", image: "/images/footer/city-indore.webp" },
    ],
  },
  markets: {
    icon: "/images/footer/icon-target.webp",
    title: "Target Markets:",
    items: [
      { name: "UK", image: "/images/footer/flag-uk.webp" },
      { name: "Malaysia", image: "/images/footer/flag-malaysia.webp" },
      { name: "UAE", image: "/images/footer/flag-uae.webp" },
      { name: "Canada", image: "/images/footer/flag-canada.webp" },
      { name: "Australia", image: "/images/footer/flag-australia.webp" },
      { name: "USA", image: "/images/footer/flag-usa.webp" },
      { name: "Indonesia", image: "/images/footer/flag-indonesia.webp" },
      { name: "China", image: "/images/footer/flag-china.webp" },
      { name: "Japan", image: "/images/footer/flag-japan.webp" },
      { name: "Germany", image: "/images/footer/flag-germany.webp" },
    ],
  },
  comingSoon: "Coming soon",
  certifications: {
    title: "Certifications & Registrations",
    // 5 per row, in the order they appear in the design
    items: [
      { name: "IAB Certification Program", image: "/images/footer/cert-iab.webp" },
      { name: "Ministry of Corporate Affairs", image: "/images/footer/cert-mca.webp" },
      { name: "PCI-DSS Compliance", image: "/images/footer/cert-pci-dss.webp" },
      { name: "Shopify Partner", image: "/images/footer/cert-shopify.webp" },
      { name: "Google Ads Certified", image: "/images/footer/cert-google-ads.webp" },
      { name: "NASSCOM Member", image: "/images/footer/cert-nasscom.webp" },
      { name: "ISO 27001", image: "/images/footer/cert-iso-27001.webp" },
      { name: "AWS Certified", image: "/images/footer/cert-aws.webp" },
      { name: "Bing Partner", image: "/images/footer/cert-bing.webp" },
      { name: "HubSpot Certified Partner", image: "/images/footer/cert-hubspot.webp" },
      { name: "SEMrush Academy", image: "/images/footer/cert-semrush.webp" },
      { name: "PAN India", image: "/images/footer/cert-pan-india.webp" },
      { name: "Meta", image: "/images/footer/cert-meta.webp" },
      { name: "YouTube Advertising", image: "/images/footer/cert-youtube.webp" },
      { name: "LinkedIn Marketing", image: "/images/footer/cert-linkedin.webp" },
      { name: "Google Certifications", image: "/images/footer/cert-google.webp" },
      { name: "MSME", image: "/images/footer/cert-msme.webp" },
      { name: "GST", image: "/images/footer/cert-gst.webp" },
      { name: "DPIIT", image: "/images/footer/cert-dpiit.webp" },
      { name: "CIM", image: "/images/footer/cert-cim.webp" },
    ],
  },
  payments: {
    title: "Accepted Payment Methods",
    items: [
      { name: "Visa", image: "/images/Paymets apps/visa-card-logo-9 2.png" },
      { name: "Mastercard", image: "/images/Paymets apps/logos_mastercard.png" },
      { name: "RuPay", image: "/images/Paymets apps/Rupay-Logo 2.png" },
      { name: "UPI", image: "/images/Paymets apps/UPI_logo_PNG_lyp5s5 2.png" },
      { name: "Google Pay", image: "/images/Paymets apps/google-pay-38 2.png" },
      { name: "PhonePe", image: "/images/Paymets apps/phonepay.png" },
      { name: "Paytm", image: "/images/Paymets apps/PAYTM.NS_BIG 2 (2).png" },
      { name: "BHIM", image: "/images/Paymets apps/bhim.png" },
      { name: "Net Banking", image: "/images/Paymets apps/net banking.png" },
      { name: "Razorpay", image: "/images/Paymets apps/Razor pay.png" },
    ],
  },
  badges: [
    { name: "DMCA Protected", image: "/images/footer/badge-dmca.webp" },
    { name: "Make in India", image: "/images/footer/badge-make-in-india.webp" },
    { name: "Digital India", image: "/images/footer/badge-digital-india.webp" },
  ],
  craftedWith: "Crafted with \u2764\ufe0f by VD Infotech",
  bottomLinks: ["Web Development", "Digital Marketing", "App Development", "Branding"],
  copyright: "Copyright \u00a9 2026 VD Infotech Technologies Pvt. Ltd. All Rights Reserved.",
  legalLinks: ["Privacy Policy", "Terms & Conditions", "Refund Policy", "Cookie Policy", "Site Map"],
  logo: "/images/footer/logo-white.webp",
};

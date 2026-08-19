// Plan columns, in display order
export const PLANS = [
  "Starter",
  "Growth",
  "Accelerator",
  "Ace",
  "Dominator",
  "Conqueror",
];

// Cell value shorthand:
//  "c"  -> green check
//  "x"  -> red cross
//  string/number -> printed as-is
//  "startNow" -> special "Start Now" link style

export const TOP_TABLE = {
  rows: [
    { label: "Start Your Journey With Us", values: Array(6).fill("startNow") },
    { label: "Total Keywords Targeted", values: ["Upto 15", "Upto 30", "Upto 50", "Upto 80", "Upto 100", "Upto 120"] },
    { label: "Primary Focused Keywords", values: [10, 15, 20, 30, 40, 60] },
    { label: "Supporting Keywords", values: [20, 25, 30, 45, 60, 90] },
    { label: "Total Contextual Backlinks", values: [10, 20, 30, 45, 60, 100] },
    { label: "Total Traditional Backlinks", values: [50, 75, 100, 150, 200, 300] },
    { label: "Service/Blog Pages Targeted", values: ["Upto 10", "Upto 15", "Upto 25", "Upto 35", "Upto 50", "Upto 75"] },
    { label: "Organic Ranking Growth (Top 10)", values: ["20-25%", "22-30%", "25-40%", "30-55%", "40-80%", "50-90%"] },
    { label: "Minimum Time Period", values: ["3 Months", "3 Months", "3 Months", "4 Months", "6 Months", "6 Months"] },
  ],
};

export const SECTIONS = [
  {
    title: "Initial Review & Analysis Tasks",
    rows: [
      { label: "Full Website Audit", values: Array(6).fill("c") },
      { label: "Backlink Analysis", values: Array(6).fill("c") },
      { label: "Duplicate Content Check", values: Array(6).fill("c") },
      { label: "Google Penalty Check", values: Array(6).fill("c") },
      { label: "SEMRUSH Audit Report", values: Array(6).fill("c") },
      { label: "Keywords Research & Analysis", values: Array(6).fill("c") },
      { label: "Baseline Ranking Report", values: Array(6).fill("c") },
      { label: "Keywords URL Mapping", values: Array(6).fill("c") },
      { label: "Competitor Analysis Report (No. of Competitors)", values: Array(6).fill("c") },
      { label: "Screaming Frog Report (Customized)", values: Array(6).fill("c") },
      { label: "Broken Links Check", values: Array(6).fill("c") },
      { label: "Website Usability Check", values: Array(6).fill("c") },
    ],
  },
  {
    title: "On Page Tasks",
    rows: [
      { label: "SEO Friendly URLs (URL Rewriting)", values: Array(6).fill("c") },
      { label: "Meta Tag, Header Tag, Alt, Title Tag Optimization", values: ["Upto 20", "Upto 30", "Upto 50", "Upto 75", "Upto 100", "Upto 150"] },
      { label: "Existing Website Content Optimization", values: Array(6).fill("c") },
      { label: "New Page Creation", values: ["x", "x", "c", "c", "c", "c"] },
      { label: "Schema Markup Suggestions", values: [2, 3, 3, 4, 5, 8] },
      { label: "Webmaster Tools + Crawl Error Resolution", values: ["x", "x", "c", "c", "c", "c"] },
      { label: "Website Page Load Optimization", values: ["x", "x", "x", "c", "c", "c"] },
      { label: "Custom 404 Error Page Setup", values: ["x", "x", "x", "x", "c", "c"] },
      { label: "Internal Linking & Anchor Text Optimization", values: Array(6).fill("c") },
      { label: "Robots.txt Creation & Analysis", values: Array(6).fill("c") },
      { label: "XML Sitemap Creation & Analysis", values: Array(6).fill("c") },
      { label: "Google Webmaster Setup", values: Array(6).fill("c") },
      { label: "Google Analytics Setup", values: Array(6).fill("c") },
      { label: "Image Alt Tag Optimization", values: ["x", "c", "c", "c", "c", "c"] },
      { label: "Core Web Vital Analysis & Recommendation", values: ["x", "x", "x", "c", "c", "c"] },
      { label: "URL Canonicalization Check", values: ["x", "c", "c", "c", "c", "c"] },
      { label: "Navigation Analysis & Recommendations", values: ["x", "x", "x", "c", "c", "c"] },
      { label: "H1-H2-H3 Suggestions", values: ["x", "c", "c", "c", "c", "c"] },
      { label: "Breadcrumbs Implementation", values: Array(6).fill("c") },
    ],
  },
  {
    title: "Content Marketing",
    rows: [
      { label: "Guest Blog Writing", values: [2, 3, 5, 7, 10, 15] },
      { label: "Article Writing & Submission", values: [3, 6, 10, 12, 15, 20] },
      { label: "Q&A Submissions (Quora)", values: [5, 8, 10, 12, 15, 20] },
      { label: "Press Release Writing & Submission", values: [0, 0, 1, 1, 2, 3] },
      { label: "Blog Posting", values: [0, 2, 4, 6, 8, 12] },
      { label: "Premium Guest Posting*", values: Array(6).fill("Additional Charges"), muted: true },
    ],
  },
  {
    title: "Off Page Optimization",
    rows: [
      { label: "Content Curation/Syndication", values: Array(6).fill("c") },
      { label: "Social Bookmarking", values: Array(6).fill("c") },
      { label: "Social Sharing", values: Array(6).fill("c") },
      { label: "PPT/PDF Submission", values: ["x", "x", "c", "c", "c", "c"] },
      { label: "Web 2.0 Profile Creation", values: ["x", "x", "c", "c", "c", "c"] },
    ],
  },
  {
    title: "Local Optimization",
    rows: [
      { label: "Google My Business Setup", values: Array(6).fill("c") },
      { label: "Bing Local Listing Setup", values: ["x", "c", "c", "c", "c", "c"] },
      { label: "Local Business Listings", values: [0, 5, 10, 12, 15, 25] },
      { label: "Local Company Profile Creation", values: [0, 5, 10, 12, 15, 25] },
      { label: "Review Postings", values: [0, 5, 10, 15, 20, 30] },
    ],
  },
  {
    title: "SEO Reporting",
    rows: [
      { label: "Google Analytics Report", values: ["Monthly", "Monthly", "Bi-Weekly", "Bi-Weekly", "Weekly", "Weekly"] },
      { label: "Keyword Ranking Report", values: ["Monthly", "Monthly", "Bi-Weekly", "Bi-Weekly", "Weekly", "Weekly"] },
      { label: "Progress Report", values: ["Monthly", "Monthly", "Bi-Weekly", "Bi-Weekly", "Weekly", "Weekly"] },
      { label: "SEO Activity Report", values: ["Monthly", "Monthly", "Bi-Weekly", "Weekly", "Weekly", "Weekly"] },
      { label: "Action Plan", values: Array(6).fill("Quarterly") },
    ],
  },
  {
    title: "Customer Support",
    rows: [
      { label: "Email/Chat (WhatsApp/Teams/Slack)", values: Array(6).fill("c") },
      { label: "Voice Support", values: ["Monthly", "Monthly", "Bi-Weekly", "Bi-Weekly", "Weekly", "Weekly"] },
      { label: "Project Dashboard", values: ["Monthly", "Monthly", "Bi-Weekly", "Bi-Weekly", "Weekly", "Weekly"] },
      { label: "Monthly SEO Consulting (Hrs)", values: [2, 3, 5, 7, 10, 15] },
    ],
  },
];
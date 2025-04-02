
export const marketStats = {
  studentCount: 2475,
  seniorPassRate: 91.2,
  juniorPassRate: 87.5,
  freshmanPassRate: 84.7,
  dailyChange: 2.3,
  weeklyChange: -4.8,
  totalEnrollment: 2475,
  academicPerformance: 86.5
};

export const tvlGaugeData = {
  current: 468,
  dailyChange: 10.2,
  weeklyChange: 68.7
};

export const fearGreedIndex = {
  value: 72,
  indicator: "Top 100",
  previousValue: 65,
  previousChange: 7
};

export const trendingTokens = [
  { id: 1, name: "Mathematics", symbol: "MATH", category: "Grade One", change: 12.4 },
  { id: 2, name: "Physics", symbol: "PHY", category: "Grade Two", change: 8.7 },
  { id: 3, name: "Chemistry", symbol: "CHEM", category: "Grade Three", change: -3.2 },
  { id: 4, name: "Biology", symbol: "BIO", category: "Grade One", change: 15.3 },
  { id: 5, name: "History", symbol: "HIST", category: "Grade Two", change: 9.1 },
  { id: 6, name: "Geography", symbol: "GEO", category: "Grade Three", change: 4.3 },
  { id: 7, name: "Literature", symbol: "LIT", category: "Grade Two", change: 21.8 },
  { id: 8, name: "Computer Science", symbol: "CS", category: "Grade One", change: 11.9 },
];

export const recentlyAddedProjects = [
  { id: 1, name: "Class 1A", symbol: "1A", brokerScore: 7.8, price: 42, priceChange: 8.7, rank: 78 },
  { id: 2, name: "Class 1B", symbol: "1B", brokerScore: 6.9, price: 38, priceChange: -4.2, rank: 126 },
  { id: 3, name: "Class 2A", symbol: "2A", brokerScore: 8.2, price: 45, priceChange: 12.3, rank: 65 },
  { id: 4, name: "Class 2B", symbol: "2B", brokerScore: 8.7, price: 40, priceChange: 15.3, rank: 52 },
  { id: 5, name: "Class 3A", symbol: "3A", brokerScore: 7.4, price: 39, priceChange: 3.5, rank: 89 },
  { id: 6, name: "Class 3B", symbol: "3B", brokerScore: 6.8, price: 37, priceChange: -2.8, rank: 142 },
  { id: 7, name: "Class 3C", symbol: "3C", brokerScore: 8.5, price: 43, priceChange: 7.6, rank: 74 },
];

export const cryptoCategories = [
  { id: "all", name: "All" },
  { id: "grade1", name: "Grade One" },
  { id: "grade2", name: "Grade Two" },
  { id: "grade3", name: "Grade Three" },
];

// New data for Top ROI page
export const topPerformingStudents = [
  { name: "Mathematics", ticker: "MATH", roi: "94.8%", period: "Spring Term", students: "128" },
  { name: "Physics", ticker: "PHY", roi: "92.3%", period: "Spring Term", students: "95" },
  { name: "Chemistry", ticker: "CHEM", roi: "89.6%", period: "Spring Term", students: "86" },
  { name: "English Literature", ticker: "LIT", roi: "87.5%", period: "Spring Term", students: "112" },
  { name: "Computer Science", ticker: "CS", roi: "91.2%", period: "Spring Term", students: "76" },
];

// New data for School Insights page
export const schoolInsights = {
  enrollment: 2475,
  graduationRate: 94.5,
  teacherCount: 148,
  academicRanking: 12,
  scholarshipRate: 23.5
};

// New data for Social Trends page
export const socialTrendingTopics = [
  { topic: "#MathOlympiad", mentions: "124", sentiment: "positive", change: "+15%" },
  { topic: "#ScienceFair", mentions: "98", sentiment: "positive", change: "+8%" },
  { topic: "#DebateTeam", mentions: "76", sentiment: "positive", change: "+22%" },
  { topic: "#SportsDay", mentions: "45", sentiment: "neutral", change: "+3%" },
  { topic: "#GradNight", mentions: "32", sentiment: "positive", change: "+7%" },
];

// New data for Portfolios page
export const studentPrograms = [
  { 
    name: "Science Track", 
    totalValue: "92.3%", 
    dailyChange: 2.4,
    assets: [
      { name: "Physics", ticker: "PHY", allocation: "45%", value: "94.5%" },
      { name: "Chemistry", ticker: "CHEM", allocation: "30%", value: "91.2%" },
      { name: "Biology", ticker: "BIO", allocation: "15%", value: "89.8%" },
      { name: "Mathematics", ticker: "MATH", allocation: "10%", value: "95.1%" }
    ]
  },
  { 
    name: "Humanities Track", 
    totalValue: "88.5%", 
    dailyChange: -1.2,
    assets: [
      { name: "Literature", ticker: "LIT", allocation: "25%", value: "87.6%" },
      { name: "History", ticker: "HIST", allocation: "35%", value: "86.4%" },
      { name: "Geography", ticker: "GEO", allocation: "20%", value: "89.2%" },
      { name: "Languages", ticker: "LANG", allocation: "20%", value: "91.5%" }
    ]
  }
];

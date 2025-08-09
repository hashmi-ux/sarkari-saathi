export interface Scheme {
  id: string;
  name: string;
  description: string;
  category: string;
  eligibility: string;
  benefits: string;
  applicationLink: string;
  states: string[];
}

export const categories = [
  "Education",
  "Agriculture", 
  "Healthcare",
  "Housing",
  "Women & Child Welfare",
  "Employment",
  "Entrepreneurship"
];

export const statesAndUTs = [
  // States
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  // Union Territories
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

export const schemes: Scheme[] = [
  {
    id: "pm-kisan",
    name: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    description: "Direct income support to farmers with landholdings up to 2 hectares",
    category: "Agriculture",
    eligibility: "Small and marginal farmers with landholding up to 2 hectares",
    benefits: "₹6,000 per year in three equal installments of ₹2,000 each",
    applicationLink: "https://pmkisan.gov.in/",
    states: statesAndUTs
  },
  {
    id: "ayushman-bharat",
    name: "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana",
    description: "Health insurance scheme providing coverage up to ₹5 lakhs per family per year",
    category: "Healthcare",
    eligibility: "Families covered under Socio-Economic Caste Census (SECC) 2011",
    benefits: "Health coverage up to ₹5 lakhs per family per year for secondary and tertiary care",
    applicationLink: "https://pmjay.gov.in/",
    states: statesAndUTs
  },
  {
    id: "pm-awas-yojana",
    name: "PM Awas Yojana - Housing for All",
    description: "Affordable housing scheme for urban and rural poor",
    category: "Housing",
    eligibility: "Families without pucca house, annual income below specified limits",
    benefits: "Financial assistance for construction/purchase of house, interest subsidy",
    applicationLink: "https://pmaymis.gov.in/",
    states: statesAndUTs
  },
  {
    id: "digital-india",
    name: "Digital India Initiative",
    description: "Transform India into digitally empowered society and knowledge economy",
    category: "Employment",
    eligibility: "Citizens, businesses, government departments",
    benefits: "Digital infrastructure, digital services, digital literacy programs",
    applicationLink: "https://digitalindia.gov.in/",
    states: statesAndUTs
  },
  {
    id: "beti-bachao-beti-padhao",
    name: "Beti Bachao Beti Padhao",
    description: "Scheme to address declining child sex ratio and promote girls' education",
    category: "Women & Child Welfare",
    eligibility: "Girls and their families in selected districts",
    benefits: "Education support, awareness campaigns, incentives for girl child education",
    applicationLink: "https://wcd.nic.in/bbbp-scheme",
    states: statesAndUTs
  },
  {
    id: "startup-india",
    name: "Startup India",
    description: "Initiative to build strong ecosystem for nurturing innovation and startups",
    category: "Entrepreneurship",
    eligibility: "Startups recognized by Department for Promotion of Industry and Internal Trade",
    benefits: "Tax exemptions, faster patent processing, easier compliance, funding support",
    applicationLink: "https://startupindia.gov.in/",
    states: statesAndUTs
  },
  {
    id: "skill-india",
    name: "Skill India Mission",
    description: "Skill development initiative to enable youth to take up industry-relevant skill training",
    category: "Employment",
    eligibility: "Youth aged 15-45 years",
    benefits: "Free skill training, certification, job placement assistance",
    applicationLink: "https://skillindia.gov.in/",
    states: statesAndUTs
  },
  {
    id: "jan-dhan-yojana",
    name: "Pradhan Mantri Jan Dhan Yojana",
    description: "National Mission for Financial Inclusion to provide banking services",
    category: "Employment",
    eligibility: "All households without bank account",
    benefits: "Zero balance bank account, RuPay debit card, insurance coverage",
    applicationLink: "https://pmjdy.gov.in/",
    states: statesAndUTs
  },
  {
    id: "mudra-yojana",
    name: "Pradhan Mantri MUDRA Yojana",
    description: "Micro finance scheme for non-corporate, non-farm small/micro enterprises",
    category: "Entrepreneurship",
    eligibility: "Non-corporate, non-farm small/micro enterprises",
    benefits: "Loans up to ₹10 lakhs without collateral",
    applicationLink: "https://mudra.org.in/",
    states: statesAndUTs
  },
  {
    id: "ssy",
    name: "Sukanya Samriddhi Yojana",
    description: "Small savings scheme for girl child with attractive interest rates",
    category: "Women & Child Welfare",
    eligibility: "Girl child below 10 years of age",
    benefits: "High interest rate, tax benefits, maturity amount for higher education/marriage",
    applicationLink: "https://www.nsiindia.gov.in/",
    states: statesAndUTs
  },
  {
    id: "swachh-bharat",
    name: "Swachh Bharat Mission",
    description: "Clean India campaign for sanitation and waste management",
    category: "Housing",
    eligibility: "All citizens, rural and urban households",
    benefits: "Toilet construction incentives, waste management systems",
    applicationLink: "https://swachhbharatmission.gov.in/",
    states: statesAndUTs
  },
  {
    id: "pm-fasal-bima",
    name: "Pradhan Mantri Fasal Bima Yojana",
    description: "Crop insurance scheme to protect farmers against crop losses",
    category: "Agriculture",
    eligibility: "All farmers growing notified crops in notified areas",
    benefits: "Insurance coverage against crop losses due to natural calamities",
    applicationLink: "https://pmfby.gov.in/",
    states: statesAndUTs
  },
  {
    id: "atal-pension-yojana",
    name: "Atal Pension Yojana",
    description: "Pension scheme for workers in unorganized sector",
    category: "Employment",
    eligibility: "Citizens aged 18-40 years with bank account",
    benefits: "Guaranteed pension between ₹1,000 to ₹5,000 per month",
    applicationLink: "https://npscra.nsdl.co.in/",
    states: statesAndUTs
  },
  {
    id: "ujjwala-yojana",
    name: "Pradhan Mantri Ujjwala Yojana",
    description: "LPG connection scheme for women from Below Poverty Line households",
    category: "Women & Child Welfare",
    eligibility: "Women from BPL households",
    benefits: "Free LPG connection, financial assistance for gas stove and refills",
    applicationLink: "https://pmuy.gov.in/",
    states: statesAndUTs
  },
  {
    id: "poshan-abhiyaan",
    name: "POSHAN Abhiyaan",
    description: "National nutrition mission to reduce malnutrition",
    category: "Healthcare",
    eligibility: "Pregnant women, lactating mothers, children under 6 years",
    benefits: "Nutrition services, growth monitoring, behavior change programs",
    applicationLink: "https://poshanabhiyaan.gov.in/",
    states: statesAndUTs
  },
  {
    id: "kaushal-vikas-yojana",
    name: "Pradhan Mantri Kaushal Vikas Yojana",
    description: "Skill development scheme to enable youth to take up industry-relevant skill training",
    category: "Education",
    eligibility: "Youth who are school/college dropouts or unemployed",
    benefits: "Free skill training with certification and job placement assistance",
    applicationLink: "https://pmkvyofficial.org/",
    states: statesAndUTs
  }
];
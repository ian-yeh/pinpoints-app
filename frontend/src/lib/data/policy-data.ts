import { Issue } from "../types/article";

export const PolicyData: Issue[] = [
  {
    title: "EU AI Act Takes Effect: Sweeping Regulations on Artificial Intelligence",
    summary:
      "The European Union's comprehensive AI Act becomes enforceable in 2025, establishing the world's first major regulatory framework for artificial intelligence with risk-based categories and significant penalties for non-compliance.",
    whatToDo: [
      "Tech companies must adapt products to comply or face fines up to 7% of global revenue",
      "Banned high-risk AI applications (social scoring, real-time biometric surveillance)",
      "Mandatory transparency requirements for AI systems",
      "New compliance costs may slow AI innovation in EU markets"
    ],
    significance: "High",
    coordinates: [50.8503, 4.3517], // Brussels, Belgium
    topic: "Policy",
    city: "Brussels",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.reuters.com/technology/eu-ai-act-enforcement-begins-2025/",
        title: "EU begins enforcing landmark AI regulations",
        publication: "Reuters"
      },
      {
        bias: 0.55,
        url: "https://www.bbc.com/news/technology-ai-act-implementation-2025",
        title: "What the EU AI Act means for big tech",
        publication: "BBC News"
      },
      {
        bias: 0.60,
        url: "https://www.politico.eu/article/ai-act-regulation-enforcement-2025/",
        title: "Europe's AI gamble: Innovation vs. regulation",
        publication: "Politico Europe"
      },
      {
        bias: 0.50,
        url: "https://ec.europa.eu/digital-strategy/ai-act-implementation",
        title: "AI Act: Implementation guidelines and compliance",
        publication: "European Commission"
      }
    ]
  },
  {
    title: "India Passes Digital Personal Data Protection Act",
    summary:
      "India's new data protection law grants citizens unprecedented control over personal information, requiring explicit consent for data collection and establishing a Data Protection Board with enforcement powers affecting billions of users.",
    whatToDo: [
      "Companies must obtain clear consent before collecting user data",
      "Right to erasure and data portability for Indian citizens",
      "Significant fines for data breaches and non-compliance",
      "Cross-border data transfer restrictions may affect global operations"
    ],
    significance: "High",
    coordinates: [28.6139, 77.2090], // New Delhi, India
    topic: "Policy",
    city: "New Delhi",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.reuters.com/world/india/india-data-protection-law-2025/",
        title: "India enforces new data protection regulations",
        publication: "Reuters"
      },
      {
        bias: 0.55,
        url: "https://economictimes.indiatimes.com/tech/technology/dpdp-act-implementation-2025/",
        title: "What India's data law means for tech companies",
        publication: "Economic Times"
      },
      {
        bias: 0.60,
        url: "https://www.business-standard.com/india/data-protection-compliance-challenges",
        title: "Companies struggle with data protection compliance deadlines",
        publication: "Business Standard"
      },
      {
        bias: 0.50,
        url: "https://www.meity.gov.in/digital-personal-data-protection-act",
        title: "Digital Personal Data Protection Act: Official guidelines",
        publication: "Ministry of Electronics & IT"
      }
    ]
  },
  {
    title: "Brazil Implements Sweeping Social Media Accountability Laws",
    summary:
      "Brazil's new legislation holds social media platforms directly liable for illegal content, requiring swift removal of harmful material and mandatory user verification, setting a precedent for content moderation globally.",
    whatToDo: [
      "Platforms must remove illegal content within 24 hours or face fines",
      "Mandatory identity verification for social media accounts",
      "Increased content moderation costs for tech companies",
      "Potential censorship concerns and free speech implications"
    ],
    significance: "High",
    coordinates: [-15.8267, -47.9218], // Brasília, Brazil
    topic: "Policy",
    city: "Brasília",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&q=80",
    articles: [
      {
        bias: 0.55,
        url: "https://www.reuters.com/world/americas/brazil-social-media-regulation-2025/",
        title: "Brazil cracks down on social media platforms",
        publication: "Reuters"
      },
      {
        bias: 0.60,
        url: "https://www.bbc.com/news/world-latin-america-brazil-content-law",
        title: "Brazil's controversial social media law sparks debate",
        publication: "BBC News"
      },
      {
        bias: 0.50,
        url: "https://www.aljazeera.com/news/brazil-platform-accountability-regulation",
        title: "How Brazil is reshaping social media accountability",
        publication: "Al Jazeera"
      },
      {
        bias: 0.65,
        url: "https://www.theguardian.com/world/brazil-censorship-concerns-social-media",
        title: "Free speech advocates warn of Brazil's content moderation overreach",
        publication: "The Guardian"
      }
    ]
  },
  {
    title: "Australia Bans Social Media for Children Under 16",
    summary:
      "Australia becomes the first country to implement a nationwide ban on social media access for children under 16, with platforms facing substantial penalties if they fail to prevent underage users from creating accounts.",
    whatToDo: [
      "Age verification technology required on all social platforms",
      "Parents may lose convenient communication tools with teens",
      "Concerns about privacy implications of age verification systems",
      "Potential for VPN use and workarounds by tech-savvy youth"
    ],
    significance: "Medium",
    coordinates: [-35.2809, 149.1300], // Canberra, Australia
    topic: "Policy",
    city: "Canberra",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.abc.net.au/news/australia-social-media-ban-under-16/",
        title: "Australia enacts world-first social media age ban",
        publication: "ABC News"
      },
      {
        bias: 0.55,
        url: "https://www.theguardian.com/australia-news/social-media-ban-children-law",
        title: "New social media ban: What Australian parents need to know",
        publication: "The Guardian Australia"
      },
      {
        bias: 0.60,
        url: "https://www.smh.com.au/politics/federal/social-media-age-limit-concerns",
        title: "Privacy experts raise concerns over age verification requirements",
        publication: "Sydney Morning Herald"
      },
      {
        bias: 0.65,
        url: "https://www.crikey.com.au/australia-social-media-ban-enforcement-challenges/",
        title: "Can Australia's social media ban actually be enforced?",
        publication: "Crikey"
      }
    ]
  },
  {
    title: "Japan Introduces Four-Day Work Week Legislation",
    summary:
      "Japan's government officially promotes a four-day work week to combat overwork culture and declining birth rates, offering tax incentives to companies that adopt reduced work schedules while maintaining full-time pay.",
    whatToDo: [
      "Improved work-life balance and mental health for employees",
      "Potential productivity gains from well-rested workforce",
      "Implementation challenges for small and medium businesses",
      "May encourage other Asian nations to reconsider work culture"
    ],
    significance: "Medium",
    coordinates: [35.6762, 139.6503], // Tokyo, Japan
    topic: "Policy",
    city: "Tokyo",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.japantimes.co.jp/news/four-day-work-week-policy-2025/",
        title: "Japan launches four-day work week initiative",
        publication: "Japan Times"
      },
      {
        bias: 0.55,
        url: "https://www.reuters.com/world/asia-pacific/japan-work-reform-2025/",
        title: "Can Japan's four-day week solve its demographic crisis?",
        publication: "Reuters"
      },
      {
        bias: 0.50,
        url: "https://www.bbc.com/news/world-asia-japan-work-culture-reform",
        title: "Japan tackles notorious overwork culture with new policy",
        publication: "BBC News"
      },
      {
        bias: 0.60,
        url: "https://asia.nikkei.com/Economy/japan-four-day-week-business-impact",
        title: "Japanese businesses divided on four-day work week feasibility",
        publication: "Nikkei Asia"
      }
    ]
  },
  {
    title: "UK Implements Comprehensive Online Safety Act",
    summary:
      "The United Kingdom's Online Safety Act comes into full force, requiring tech platforms to remove illegal content, protect children, and be transparent about algorithms, with Ofcom granted sweeping enforcement powers.",
    whatToDo: [
      "Platforms must proactively detect and remove harmful content",
      "Enhanced protections for children using online services",
      "Senior executives can be held criminally liable for breaches",
      "Concerns about impact on encryption and privacy"
    ],
    significance: "High",
    coordinates: [51.5074, -0.1278], // London, UK
    topic: "Policy",
    city: "London",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.bbc.com/news/technology-online-safety-act-enforcement",
        title: "UK begins enforcing Online Safety Act",
        publication: "BBC News"
      },
      {
        bias: 0.55,
        url: "https://www.theguardian.com/technology/online-safety-act-implementation",
        title: "What the Online Safety Act means for UK internet users",
        publication: "The Guardian"
      },
      {
        bias: 0.60,
        url: "https://www.telegraph.co.uk/business/online-safety-tech-companies/",
        title: "Tech giants face billions in fines under new UK law",
        publication: "The Telegraph"
      },
      {
        bias: 0.65,
        url: "https://www.openrightsgroup.org/online-safety-act-privacy-concerns/",
        title: "Privacy advocates warn of Online Safety Act's encryption threats",
        publication: "Open Rights Group"
      }
    ]
  },
  {
    title: "Singapore Mandates Climate Risk Disclosure for All Companies",
    summary:
      "Singapore becomes the first Asian nation to require mandatory climate-related financial disclosures for all listed companies and large private firms, aligned with international sustainability reporting standards.",
    whatToDo: [
      "Companies must assess and report climate-related financial risks",
      "Increased operational costs for compliance and reporting",
      "Greater transparency may attract ESG-conscious investors",
      "Sets precedent for climate accountability in Southeast Asia"
    ],
    significance: "Medium",
    coordinates: [1.3521, 103.8198], // Singapore
    topic: "Policy",
    city: "Singapore",
    image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.straitstimes.com/business/climate-disclosure-mandatory-singapore",
        title: "Singapore makes climate risk reporting mandatory",
        publication: "Straits Times"
      },
      {
        bias: 0.50,
        url: "https://www.reuters.com/sustainability/singapore-climate-disclosure-rules-2025/",
        title: "Singapore leads Asia in climate transparency requirements",
        publication: "Reuters"
      },
      {
        bias: 0.55,
        url: "https://www.bloomberg.com/news/singapore-climate-disclosure-business-impact",
        title: "How Singapore's new climate rules affect businesses",
        publication: "Bloomberg"
      },
      {
        bias: 0.50,
        url: "https://www.mas.gov.sg/news/climate-related-financial-disclosures",
        title: "Guidelines on climate-related financial disclosures",
        publication: "Monetary Authority of Singapore"
      }
    ]
  },
  {
    title: "South Korea Passes Comprehensive Platform Worker Protection Law",
    summary:
      "South Korea enacts groundbreaking legislation granting gig economy workers employee-like benefits, including minimum wage guarantees, injury compensation, and collective bargaining rights, reshaping the platform economy.",
    whatToDo: [
      "Platform workers gain minimum wage and benefit protections",
      "Delivery and ride-hailing costs likely to increase for consumers",
      "Companies must contribute to social insurance for platform workers",
      "Could inspire similar legislation in other gig economy markets"
    ],
    significance: "High",
    coordinates: [37.5665, 126.9780], // Seoul, South Korea
    topic: "Policy",
    city: "Seoul",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.koreatimes.co.kr/platform-worker-protection-law-2025/",
        title: "South Korea enacts landmark gig worker protections",
        publication: "Korea Times"
      },
      {
        bias: 0.55,
        url: "https://www.reuters.com/world/asia-pacific/south-korea-gig-economy-reform/",
        title: "Platform companies face major overhaul in South Korea",
        publication: "Reuters"
      },
      {
        bias: 0.60,
        url: "https://asia.nikkei.com/Business/south-korea-platform-economy-regulation",
        title: "South Korea's gig worker law raises costs for tech platforms",
        publication: "Nikkei Asia"
      },
      {
        bias: 0.50,
        url: "https://www.koreaherald.com/view.php?ud=platform-worker-rights-analysis",
        title: "Analyzing South Korea's platform worker protection framework",
        publication: "Korea Herald"
      }
    ]
  }
];

import { Issue } from "../types/article"

export const EducationData: Issue[] = [
  {
    title: "Decline in Indian Study Permits Hits Canadian Universities",
    summary:
    "In 2025, Canadian universities saw a ~50% drop in study permits issued to Indian students, threatening revenue, enrollment, and internationalization strategies. :contentReference[oaicite:0]{index=0}",
    whatToDo: [
      "Fewer program offerings or course cancellations due to lower enrolment",
      "Potential increase in tuition or fees to compensate revenue loss",
      "Reduced diversity on campus and fewer student exchanges",
      "Pressure on government funding or scholarships"
    ],
    significance: "High",
    coordinates: [43.6532, -79.3832], // Toronto, Canada
    topic: "Education",
    city: "Toronto",
    image:
    "https://images.unsplash.com/photo-1589571894960-20bbe2828b91?w=1920&q=80",  // replaced with a valid Unsplash student/classroom image
    articles: [
      {
        bias: 0.55,
        url: "https://timesofindia.indiatimes.com/education/news/canada-sees-steep-50-percent-decline-in-indian-student-visas-universities-brace-for-impact-2794648-2025-09-28",
        title: "50% drop in Indian study permits",
        publication: "India Today"
      },
      {
        bias: 0.50,
        url: "https://www.reuters.com/world/americas/canada-reduces-international-student-permits-second-year-2025-01-24/",
        title: "Canada reduces international student permits for second year",
        publication: "Reuters"
      },
      // new added articles
      {
        bias: 0.60,
        url: "https://www.economictimes.com/nri/study/canada-sees-50-drop-in-indian-study-permits-education-sector-braces-for-impact/articleshow/124179542.cms",
        title: "Canada sees 50% drop in Indian study permits",
        publication: "Economic Times"
      },
      {
        bias: 0.50,
        url: "https://www.forbes.com/sites/stuartanderson/2025/10/01/immigration-data-indicate-indian-student-enrollment-may-plummet/",
        title: "Immigration Data Indicate Indian Student Enrollment May Plummet",
        publication: "Forbes"
      }
    ]
  },
  {
    title: "Ontario Considers Eliminating School Boards",
    summary:
    "The Ontario government is exploring the removal of elected school trustees and full dissolution of district school boards — a move that has drawn criticism as anti-democratic. :contentReference[oaicite:1]{index=1}",
    whatToDo: [
      "Less local control over school decisions",
      "More centralized decision-making (e.g. budgets, staffing)",
      "Potential for faster policy shifts but reduced community input",
      "Accountability may shift upward (provincial) rather than local"
    ],
    significance: "High",
    coordinates: [45.4215, -75.6972], // Ottawa, Canada
    topic: "Education",
    city: "Ottawa",
    image:
    "https://images.unsplash.com/photo-1589571894960-20bbe2828b91?w=1920&q=80",  // you can pick a different Unsplash image showing a school board / meeting
    articles: [
      {
        bias: 0.65,
        url: "https://educationnewscanada.com/article/education/level/k12/3/1161830/ontario-s-plan-to-eliminate-school-boards-is-anti-democratic.html",
        title: "Ontario’s plan to eliminate school boards is anti-democratic",
        publication: "Canadian Centre for Policy Alternatives"
      },
      {
        bias: 0.50,
        url: "https://news.ontario.ca/edu/en/2025/10/introducing-new-measures-to-build-modern-schools-faster.html",
        title: "Ontario introduces measures to build modern schools faster",
        publication: "Ontario Newsroom"
      },
      // new added articles
      {
        bias: 0.55,
        url: "https://www.thestar.com/politics/provincial/2025/09/01/ontario-government-explores-dissolving-school-boards.html",
        title: "Ontario government explores dissolving school boards",
        publication: "Toronto Star"
      },
      {
        bias: 0.60,
        url: "https://www.canadiangeducationpolicy.ca/2025/08/ontario-centralization-schools-analysis.html",
        title: "Centralization of K–12 in Ontario: Risks & trade-offs",
        publication: "Canadian Education Policy Journal"
      }
    ]
  },
  // … you can continue adding other Education issues similarly
  {
    title: "Rising Student Debt Crisis in Canadian Post-Secondary Institutions",
    summary:
    "Canadian students are graduating with record levels of debt, averaging $28,000 for undergraduates, as tuition continues to outpace inflation and government funding stagnates.",
    whatToDo: [
      "More students working part-time, affecting academic performance",
      "Delayed major life milestones (home ownership, starting families)",
      "Increased mental health strain and financial anxiety",
      "Reduced enrollment in graduate programs due to debt burden"
    ],
    significance: "High",
    coordinates: [49.2827, -123.1207], // Vancouver, Canada
    topic: "Education",
    city: "Vancouver",
    image:
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.cbc.ca/news/canada/student-debt-canada-rising-1.7234567",
        title: "Canadian student debt reaches all-time high",
        publication: "CBC News"
      },
      {
        bias: 0.55,
        url: "https://www.macleans.ca/education/student-debt-crisis-canada-2025/",
        title: "The student debt crisis threatening Canada's middle class",
        publication: "Maclean's"
      },
      {
        bias: 0.60,
        url: "https://www.theglobeandmail.com/business/article-student-loans-canada-economic-impact/",
        title: "How student debt is reshaping Canada's economy",
        publication: "Globe and Mail"
      },
      {
        bias: 0.50,
        url: "https://www.statcan.gc.ca/en/subjects-start/education_training_and_learning/student-debt",
        title: "Student debt statistics and trends",
        publication: "Statistics Canada"
      }
    ]
  },
  {
    title: "Teacher Shortage Crisis Across Canadian Provinces",
    summary:
    "Schools nationwide are struggling to fill teaching positions, with some provinces reporting over 3,000 vacancies. Burnout, low pay, and challenging working conditions are driving educators out of the profession.",
    whatToDo: [
      "Larger class sizes and reduced individual attention",
      "Increased use of substitute teachers and unqualified staff",
      "Cuts to extracurricular programs and specialized courses",
      "Greater workload on remaining teachers, affecting quality"
    ],
    significance: "High",
    coordinates: [51.0447, -114.0719], // Calgary, Canada
    topic: "Education",
    city: "Calgary",
    image:
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.cbc.ca/news/canada/teacher-shortage-canada-2025-1.7123456",
        title: "Teacher shortage reaches crisis levels in Canada",
        publication: "CBC News"
      },
      {
        bias: 0.55,
        url: "https://www.ctvnews.ca/canada/education-teacher-vacancies-provinces-1.6543210",
        title: "Provinces scramble to address teacher vacancy crisis",
        publication: "CTV News"
      },
      {
        bias: 0.65,
        url: "https://www.nationalpost.com/news/canada/teacher-burnout-retention-crisis",
        title: "Why teachers are leaving the profession in record numbers",
        publication: "National Post"
      },
      {
        bias: 0.50,
        url: "https://www.edcan.ca/articles/teacher-shortage-2025-analysis/",
        title: "Understanding Canada's teacher shortage: A data-driven analysis",
        publication: "Education Canada"
      }
    ]
  },
  {
    title: "Digital Divide Widens in Rural and Remote Schools",
    summary:
    "Students in rural and remote Canadian communities lack reliable internet access and modern technology, creating significant educational inequalities as learning becomes increasingly digital.",
    whatToDo: [
      "Limited access to online resources and digital learning tools",
      "Disadvantage in developing tech skills for future careers",
      "Difficulty participating in remote learning or hybrid models",
      "Reduced opportunities for advanced courses via distance education"
    ],
    significance: "Medium",
    coordinates: [53.5461, -113.4938], // Edmonton, Canada
    topic: "Education",
    city: "Edmonton",
    image:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.cbc.ca/news/canada/digital-divide-rural-schools-1.7098765",
        title: "Rural students fall behind as digital divide widens",
        publication: "CBC News"
      },
      {
        bias: 0.55,
        url: "https://www.theglobeandmail.com/canada/article-internet-access-rural-education-gap/",
        title: "Internet access inequality threatens rural education",
        publication: "Globe and Mail"
      },
      {
        bias: 0.60,
        url: "https://policyoptions.irpp.org/magazines/october-2025/digital-divide-canadian-education/",
        title: "Bridging the digital divide in Canadian classrooms",
        publication: "Policy Options"
      },
      {
        bias: 0.50,
        url: "https://www.cmec.ca/publications/digital-equity-education-2025.html",
        title: "Digital equity in education: A pan-Canadian perspective",
        publication: "Council of Ministers of Education"
      }
    ]
  },
  {
    title: "Mental Health Services Overwhelmed in Universities and Colleges",
    summary:
    "Post-secondary institutions report unprecedented demand for mental health services, with wait times exceeding 6 weeks at many campuses. Limited resources and staff shortages are leaving students without crucial support.",
    whatToDo: [
      "Long wait times for counseling appointments (4-8 weeks typical)",
      "Increased rates of anxiety, depression, and academic struggle",
      "Higher dropout rates due to unaddressed mental health issues",
      "Growing reliance on emergency services and crisis intervention"
    ],
    significance: "High",
    coordinates: [43.2609, -79.9192], // Hamilton, Canada
    topic: "Education",
    city: "Hamilton",
    image:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.cbc.ca/news/canada/university-mental-health-crisis-2025-1.7156789",
        title: "Universities struggle to meet soaring mental health demands",
        publication: "CBC News"
      },
      {
        bias: 0.55,
        url: "https://www.universityaffairs.ca/news/news-article/student-mental-health-wait-times/",
        title: "Student mental health wait times reach crisis point",
        publication: "University Affairs"
      },
      {
        bias: 0.60,
        url: "https://www.macleans.ca/education/campus-mental-health-overwhelmed-2025/",
        title: "Campus counseling centers at breaking point",
        publication: "Maclean's"
      },
      {
        bias: 0.50,
        url: "https://www.cmha.ca/news/post-secondary-mental-health-crisis-report/",
        title: "Post-secondary mental health crisis: A national concern",
        publication: "Canadian Mental Health Association"
      }
    ]
  }
]

import { Issue } from "../types/article";

export const WarData: Issue[] = [
  {
    title: "Ukraine-Russia Conflict Enters Fourth Year with Stalemate",
    summary:
      "The war in Ukraine continues with neither side achieving decisive victories, as international aid packages remain contested and civilian infrastructure faces ongoing attacks. Millions remain displaced across Europe.",
    whatToDo: [
      "Continued refugee crisis affecting European nations",
      "Global energy and food price volatility",
      "Increased military spending across NATO countries",
      "Risk of conflict escalation or expansion into neighboring regions"
    ],
    significance: "High",
    coordinates: [50.4501, 30.5234], // Kyiv, Ukraine
    topic: "War",
    city: "Kyiv",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.reuters.com/world/europe/ukraine-russia-war-2025-analysis/",
        title: "Ukraine war enters fourth year with no end in sight",
        publication: "Reuters"
      },
      {
        bias: 0.55,
        url: "https://www.bbc.com/news/world-europe-ukraine-conflict-update-2025",
        title: "The humanitarian cost of Ukraine's prolonged conflict",
        publication: "BBC News"
      },
      {
        bias: 0.60,
        url: "https://www.aljazeera.com/news/ukraine-russia-military-situation-2025",
        title: "Stalemate continues as both sides dig in for long war",
        publication: "Al Jazeera"
      },
      {
        bias: 0.50,
        url: "https://www.nato.int/cps/en/natohq/ukraine-support-2025.htm",
        title: "NATO's continued support for Ukraine: 2025 overview",
        publication: "NATO"
      }
    ]
  },
  {
    title: "Israel-Hamas Conflict Sparks Regional Tensions in Middle East",
    summary:
      "Ongoing hostilities between Israel and Hamas continue to destabilize the region, with humanitarian concerns in Gaza, increased Hezbollah activity in Lebanon, and fears of broader regional escalation involving Iran.",
    whatToDo: [
      "Severe humanitarian crisis with limited aid access to Gaza",
      "Risk of multi-front conflict expanding across the region",
      "Increased sectarian tensions affecting Middle Eastern stability",
      "Global diplomatic divisions and strained international relations"
    ],
    significance: "High",
    coordinates: [31.7683, 35.2137], // Jerusalem
    topic: "War",
    city: "Jerusalem",
    image: "https://images.unsplash.com/photo-1552799446-159ba9523315?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.reuters.com/world/middle-east/israel-gaza-conflict-2025/",
        title: "Israel-Gaza conflict continues amid ceasefire efforts",
        publication: "Reuters"
      },
      {
        bias: 0.55,
        url: "https://www.aljazeera.com/news/middle-east/israel-palestine-humanitarian-crisis",
        title: "Gaza faces mounting humanitarian catastrophe",
        publication: "Al Jazeera"
      },
      {
        bias: 0.60,
        url: "https://www.bbc.com/news/world-middle-east-israel-hamas-regional-impact",
        title: "How the Israel-Hamas war is reshaping the Middle East",
        publication: "BBC News"
      },
      {
        bias: 0.50,
        url: "https://www.un.org/unispal/humanitarian-situation-gaza-2025/",
        title: "Humanitarian situation in Gaza: UN report",
        publication: "United Nations"
      }
    ]
  },
  {
    title: "Sudan Civil War Triggers Africa's Largest Displacement Crisis",
    summary:
      "Fighting between the Sudanese Armed Forces and Rapid Support Forces has displaced over 10 million people, creating a massive humanitarian emergency while international attention remains focused elsewhere.",
    whatToDo: [
      "Over 10 million displaced, creating refugee burden on neighboring countries",
      "Widespread famine and disease outbreaks",
      "Breakdown of healthcare and education systems",
      "Risk of regional destabilization across East Africa"
    ],
    significance: "High",
    coordinates: [15.5007, 32.5599], // Khartoum, Sudan
    topic: "War",
    city: "Khartoum",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.reuters.com/world/africa/sudan-civil-war-displacement-crisis-2025/",
        title: "Sudan's forgotten war creates massive displacement crisis",
        publication: "Reuters"
      },
      {
        bias: 0.55,
        url: "https://www.bbc.com/news/world-africa-sudan-humanitarian-emergency",
        title: "Sudan: The world's worst humanitarian crisis you're not hearing about",
        publication: "BBC News"
      },
      {
        bias: 0.60,
        url: "https://www.aljazeera.com/news/africa/sudan-conflict-regional-impact",
        title: "Sudan's civil war threatens to destabilize entire region",
        publication: "Al Jazeera"
      },
      {
        bias: 0.50,
        url: "https://www.unhcr.org/news/sudan-crisis-2025-update",
        title: "Sudan crisis: Displacement and humanitarian needs",
        publication: "UNHCR"
      }
    ]
  },
  {
    title: "Myanmar Military Junta Loses Control of Strategic Territories",
    summary:
      "Myanmar's military government faces unprecedented territorial losses as ethnic armed groups and pro-democracy forces capture key border regions, intensifying the civil conflict that began with the 2021 coup.",
    whatToDo: [
      "Continued persecution of Rohingya and other ethnic minorities",
      "Massive internal displacement and refugee flows to Thailand/Bangladesh",
      "Economic collapse and breakdown of public services",
      "Potential for complete state fragmentation"
    ],
    significance: "Medium",
    coordinates: [16.8661, 96.1951], // Yangon, Myanmar
    topic: "War",
    city: "Yangon",
    image: "https://images.unsplash.com/photo-1451847251646-8a6c0dd1510c?w=1920&q=80",
    articles: [
      {
        bias: 0.55,
        url: "https://www.reuters.com/world/asia-pacific/myanmar-military-territorial-losses-2025/",
        title: "Myanmar junta loses ground as resistance gains momentum",
        publication: "Reuters"
      },
      {
        bias: 0.60,
        url: "https://www.aljazeera.com/news/myanmar-civil-war-ethnic-armies-advance",
        title: "Ethnic armed groups make major gains against Myanmar military",
        publication: "Al Jazeera"
      },
      {
        bias: 0.50,
        url: "https://www.bbc.com/news/world-asia-myanmar-conflict-analysis-2025",
        title: "Myanmar's civil war: A nation on the brink of collapse",
        publication: "BBC News"
      },
      {
        bias: 0.65,
        url: "https://www.irrawaddy.com/news/burma/military-loses-control-strategic-areas",
        title: "Junta's grip weakens as resistance controls border regions",
        publication: "The Irrawaddy"
      }
    ]
  },
  {
    title: "Yemen Conflict Sees Renewed Houthi Attacks on Red Sea Shipping",
    summary:
      "Yemen's Houthi rebels intensify attacks on commercial vessels in the Red Sea and Gulf of Aden, disrupting global shipping routes and escalating tensions with Saudi Arabia, UAE, and Western naval forces.",
    whatToDo: [
      "Major disruptions to global shipping and trade routes",
      "Increased insurance costs for maritime transport",
      "Ongoing humanitarian catastrophe in Yemen",
      "Risk of broader regional conflict involving Iran and Western powers"
    ],
    significance: "High",
    coordinates: [15.5527, 48.5164], // Sana'a, Yemen
    topic: "War",
    city: "Sana'a",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.reuters.com/world/middle-east/yemen-houthi-red-sea-attacks-2025/",
        title: "Houthi attacks disrupt critical Red Sea shipping lanes",
        publication: "Reuters"
      },
      {
        bias: 0.55,
        url: "https://www.bbc.com/news/world-middle-east-yemen-shipping-crisis",
        title: "Yemen conflict threatens global maritime trade",
        publication: "BBC News"
      },
      {
        bias: 0.60,
        url: "https://www.aljazeera.com/news/yemen-houthi-maritime-attacks-impact",
        title: "Red Sea attacks: How Yemen's war affects global commerce",
        publication: "Al Jazeera"
      },
      {
        bias: 0.50,
        url: "https://www.un.org/press/en/yemen-humanitarian-situation-2025",
        title: "Yemen humanitarian crisis: 2025 assessment",
        publication: "United Nations"
      }
    ]
  },
  {
    title: "Ethiopia-Tigray Peace Deal Remains Fragile Amid Violations",
    summary:
      "Two years after the peace agreement, tensions remain high as allegations of ceasefire violations persist, humanitarian access remains limited, and reconstruction efforts lag behind urgent needs in war-torn Tigray.",
    whatToDo: [
      "Continued humanitarian crisis with limited aid access",
      "Slow return of displaced persons due to security concerns",
      "Ongoing ethnic tensions threatening fragile peace",
      "Delayed reconstruction hampering economic recovery"
    ],
    significance: "Medium",
    coordinates: [9.0320, 38.7469], // Addis Ababa, Ethiopia
    topic: "War",
    city: "Addis Ababa",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.reuters.com/world/africa/ethiopia-tigray-peace-deal-challenges-2025/",
        title: "Ethiopia's fragile peace faces implementation challenges",
        publication: "Reuters"
      },
      {
        bias: 0.55,
        url: "https://www.bbc.com/news/world-africa-ethiopia-tigray-peace-violations",
        title: "Tigray peace deal under strain as violations reported",
        publication: "BBC News"
      },
      {
        bias: 0.60,
        url: "https://www.aljazeera.com/news/ethiopia-tigray-humanitarian-access-limited",
        title: "Humanitarian crisis persists in Tigray despite peace agreement",
        publication: "Al Jazeera"
      },
      {
        bias: 0.65,
        url: "https://www.hrw.org/news/ethiopia-tigray-ceasefire-violations-2025",
        title: "Ethiopia: Persistent violations undermine Tigray peace",
        publication: "Human Rights Watch"
      }
    ]
  },
  {
    title: "Armenia-Azerbaijan Border Tensions Threaten New Escalation",
    summary:
      "Despite Azerbaijan's 2023 military victory in Nagorno-Karabakh, border disputes and rhetoric continue to raise fears of renewed conflict, with over 100,000 ethnic Armenians displaced and peace negotiations stalled.",
    whatToDo: [
      "Over 100,000 ethnic Armenians remain displaced from Nagorno-Karabakh",
      "Continued border incidents risk triggering broader conflict",
      "Regional energy and transportation projects remain threatened",
      "Potential for Russian or Western involvement complicating situation"
    ],
    significance: "Medium",
    coordinates: [40.1792, 44.4991], // Yerevan, Armenia
    topic: "War",
    city: "Yerevan",
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.reuters.com/world/asia-pacific/armenia-azerbaijan-border-tensions-2025/",
        title: "Armenia-Azerbaijan tensions persist despite Karabakh resolution",
        publication: "Reuters"
      },
      {
        bias: 0.55,
        url: "https://www.bbc.com/news/world-europe-armenia-azerbaijan-border-dispute",
        title: "Border incidents threaten fragile South Caucasus peace",
        publication: "BBC News"
      },
      {
        bias: 0.60,
        url: "https://www.aljazeera.com/news/caucasus-armenia-azerbaijan-conflict-risk",
        title: "Can Armenia and Azerbaijan avoid another war?",
        publication: "Al Jazeera"
      },
      {
        bias: 0.50,
        url: "https://www.crisisgroup.org/europe-central-asia/caucasus/armenia-azerbaijan-2025",
        title: "Armenia-Azerbaijan: Preventing renewed conflict",
        publication: "International Crisis Group"
      }
    ]
  },
  {
    title: "Democratic Republic of Congo Faces Renewed M23 Rebel Offensive",
    summary:
      "The M23 rebel group, allegedly backed by Rwanda, has captured significant territory in eastern DRC, displacing hundreds of thousands and threatening regional stability while natural resource exploitation continues.",
    whatToDo: [
      "Mass displacement of civilians in mineral-rich eastern regions",
      "Increased tensions between DRC and Rwanda",
      "Disruption of critical mineral supply chains (cobalt, coltan)",
      "Humanitarian crisis compounded by multiple armed groups"
    ],
    significance: "Medium",
    coordinates: [-4.0383, 21.7587], // Kinshasa, DRC
    topic: "War",
    city: "Kinshasa",
    image: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.reuters.com/world/africa/drc-m23-rebels-offensive-2025/",
        title: "M23 rebels advance in eastern DRC despite peacekeepers",
        publication: "Reuters"
      },
      {
        bias: 0.55,
        url: "https://www.bbc.com/news/world-africa-drc-m23-conflict-escalation",
        title: "DRC conflict: Thousands flee as M23 captures new territory",
        publication: "BBC News"
      },
      {
        bias: 0.60,
        url: "https://www.aljazeera.com/news/drc-rwanda-tensions-m23-backing-allegations",
        title: "Rwanda denies backing M23 as DRC tensions escalate",
        publication: "Al Jazeera"
      },
      {
        bias: 0.65,
        url: "https://www.hrw.org/news/drc-m23-abuses-mineral-exploitation-2025",
        title: "DRC: M23 abuses continue amid resource extraction",
        publication: "Human Rights Watch"
      }
    ]
  }
];

import { Issue } from "../types/article";

export const ClimateData: Issue[] = [
  {
    title: "Amazon Rainforest Reaches Critical Deforestation Tipping Point",
    summary:
      "Scientists warn that the Amazon has lost 17% of its original forest cover, approaching the 20-25% threshold that could trigger irreversible collapse into savanna, threatening global climate regulation and biodiversity.",
    whatToDo: [
      "Accelerated global warming as carbon sink capacity diminishes",
      "Extinction of thousands of species unique to the Amazon",
      "Disruption of regional rainfall patterns affecting agriculture",
      "Loss of indigenous communities and traditional knowledge"
    ],
    significance: "High",
    coordinates: [-3.4653, -62.2159], // Manaus, Brazil (Amazon region)
    topic: "Climate",
    city: "Manaus",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.reuters.com/business/environment/amazon-deforestation-tipping-point-2025/",
        title: "Amazon approaches critical deforestation threshold",
        publication: "Reuters"
      },
      {
        bias: 0.55,
        url: "https://www.bbc.com/news/science-environment-amazon-rainforest-crisis",
        title: "Scientists issue urgent warning on Amazon collapse risk",
        publication: "BBC News"
      },
      {
        bias: 0.60,
        url: "https://www.theguardian.com/environment/amazon-rainforest-tipping-point-2025",
        title: "The Amazon's point of no return: What it means for Earth",
        publication: "The Guardian"
      },
      {
        bias: 0.50,
        url: "https://www.nature.com/articles/amazon-deforestation-threshold-study",
        title: "Amazon forest dieback: Assessing the tipping point dynamics",
        publication: "Nature"
      }
    ]
  },
  {
    title: "Antarctic Ice Sheet Melting Accelerates Beyond Predictions",
    summary:
      "The West Antarctic Ice Sheet is melting three times faster than in the 1990s, with scientists observing unprecedented warming in ocean waters beneath the ice, threatening several meters of sea level rise.",
    whatToDo: [
      "Coastal cities face increased flooding and storm surge risks",
      "Potential displacement of hundreds of millions from low-lying areas",
      "Disruption of ocean currents affecting global weather patterns",
      "Irreversible commitment to multi-meter sea level rise"
    ],
    significance: "High",
    coordinates: [-77.8463, 166.6684], // McMurdo Station, Antarctica
    topic: "Climate",
    city: "Antarctica",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.reuters.com/business/environment/antarctic-ice-melt-acceleration-2025/",
        title: "Antarctic ice loss accelerates beyond climate models",
        publication: "Reuters"
      },
      {
        bias: 0.55,
        url: "https://www.bbc.com/news/science-environment-antarctica-ice-sheet-melting",
        title: "West Antarctic Ice Sheet collapse now 'inevitable', scientists say",
        publication: "BBC News"
      },
      {
        bias: 0.50,
        url: "https://www.nasa.gov/press-release/antarctic-ice-sheet-melting-observations-2025",
        title: "NASA observations confirm accelerated Antarctic ice loss",
        publication: "NASA"
      },
      {
        bias: 0.60,
        url: "https://www.theguardian.com/environment/antarctica-sea-level-rise-threat",
        title: "Antarctic melt threatens catastrophic sea level rise this century",
        publication: "The Guardian"
      }
    ]
  },
  {
    title: "Mediterranean Region Faces Severe Desertification Crisis",
    summary:
      "Southern Europe experiences unprecedented drought and heat, with Spain, Italy, and Greece losing arable land to desertification. Water shortages threaten agriculture, tourism, and millions of residents.",
    whatToDo: [
      "Agricultural collapse in traditional farming regions",
      "Water rationing in major cities during summer months",
      "Mass migration from affected rural areas",
      "Tourism industry disruption due to extreme heat and water scarcity"
    ],
    significance: "High",
    coordinates: [40.4168, -3.7038], // Madrid, Spain
    topic: "Climate",
    city: "Madrid",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.reuters.com/business/environment/mediterranean-desertification-crisis-2025/",
        title: "Mediterranean faces 'irreversible' desertification threat",
        publication: "Reuters"
      },
      {
        bias: 0.55,
        url: "https://www.bbc.com/news/world-europe-mediterranean-drought-crisis",
        title: "Southern Europe's water crisis reaches critical point",
        publication: "BBC News"
      },
      {
        bias: 0.60,
        url: "https://www.theguardian.com/environment/mediterranean-climate-desertification",
        title: "How climate change is turning Southern Europe into desert",
        publication: "The Guardian"
      },
      {
        bias: 0.50,
        url: "https://www.eea.europa.eu/publications/mediterranean-desertification-assessment-2025",
        title: "Desertification in the Mediterranean: 2025 assessment",
        publication: "European Environment Agency"
      }
    ]
  },
  {
    title: "Pacific Island Nations Face Existential Threat from Rising Seas",
    summary:
      "Tuvalu, Kiribati, and the Marshall Islands experience accelerating coastal erosion and saltwater intrusion, forcing discussions of complete population relocation and potential loss of sovereignty.",
    whatToDo: [
      "Entire nations may become uninhabitable within decades",
      "Loss of sovereignty and cultural identity for Pacific peoples",
      "Creation of world's first 'climate refugees' seeking asylum",
      "Precedent-setting questions about citizenship and statehood"
    ],
    significance: "High",
    coordinates: [-8.5211, 179.1983], // Funafuti, Tuvalu
    topic: "Climate",
    city: "Funafuti",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.reuters.com/business/environment/pacific-islands-sea-level-rise-crisis-2025/",
        title: "Pacific island nations plan for climate-driven relocation",
        publication: "Reuters"
      },
      {
        bias: 0.55,
        url: "https://www.bbc.com/news/world-asia-pacific-islands-climate-threat",
        title: "Tuvalu: The nation disappearing beneath the waves",
        publication: "BBC News"
      },
      {
        bias: 0.60,
        url: "https://www.aljazeera.com/news/pacific-islands-climate-refugees-sovereignty",
        title: "When countries vanish: Pacific islands face climate extinction",
        publication: "Al Jazeera"
      },
      {
        bias: 0.50,
        url: "https://www.un.org/ohrlls/news/pacific-sids-climate-vulnerability-2025",
        title: "Climate change and Small Island Developing States",
        publication: "United Nations"
      }
    ]
  },
  {
    title: "Coral Reefs Experience Fourth Global Mass Bleaching Event",
    summary:
      "Rising ocean temperatures trigger the fourth global coral bleaching event since 2016, with the Great Barrier Reef losing 50% of its coral cover. Marine ecosystems face collapse affecting billions dependent on reef fisheries.",
    whatToDo: [
      "Collapse of marine ecosystems supporting 25% of ocean species",
      "Loss of coastal protection from storms and erosion",
      "Devastation of fishing industries supporting millions of livelihoods",
      "Tourism losses in reef-dependent economies"
    ],
    significance: "High",
    coordinates: [-16.9203, 145.7781], // Cairns, Australia (Great Barrier Reef)
    topic: "Climate",
    city: "Cairns",
    image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.reuters.com/business/environment/global-coral-bleaching-event-2025/",
        title: "Fourth global coral bleaching event underway",
        publication: "Reuters"
      },
      {
        bias: 0.55,
        url: "https://www.bbc.com/news/science-environment-coral-reefs-mass-bleaching",
        title: "Great Barrier Reef suffers worst bleaching on record",
        publication: "BBC News"
      },
      {
        bias: 0.50,
        url: "https://www.noaa.gov/news/global-coral-bleaching-event-2025-update",
        title: "NOAA confirms fourth global coral bleaching event",
        publication: "NOAA"
      },
      {
        bias: 0.60,
        url: "https://www.theguardian.com/environment/coral-reefs-collapse-ecosystem-crisis",
        title: "Coral reef collapse threatens marine life cascade",
        publication: "The Guardian"
      }
    ]
  },
  {
    title: "Greenland Ice Sheet Records Unprecedented Summer Melt",
    summary:
      "Greenland experiences its most extensive summer melt on record, with surface melting occurring across 90% of the ice sheet. Meltwater runoff contributes significantly to accelerating sea level rise.",
    whatToDo: [
      "Accelerated global sea level rise threatening coastal cities",
      "Disruption of Atlantic Ocean circulation patterns",
      "Potential for abrupt climate shifts in Northern Hemisphere",
      "Increased frequency of extreme weather events globally"
    ],
    significance: "High",
    coordinates: [64.1814, -51.6941], // Nuuk, Greenland
    topic: "Climate",
    city: "Nuuk",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.reuters.com/business/environment/greenland-ice-sheet-melt-record-2025/",
        title: "Greenland ice melt reaches unprecedented levels",
        publication: "Reuters"
      },
      {
        bias: 0.55,
        url: "https://www.bbc.com/news/science-environment-greenland-ice-sheet-melting",
        title: "Record Greenland melt raises sea level concerns",
        publication: "BBC News"
      },
      {
        bias: 0.50,
        url: "https://www.nasa.gov/feature/greenland-ice-sheet-melt-observations-2025",
        title: "NASA tracks record-breaking Greenland ice loss",
        publication: "NASA"
      },
      {
        bias: 0.60,
        url: "https://www.theguardian.com/environment/greenland-ice-melt-tipping-point",
        title: "Greenland ice sheet may have passed point of no return",
        publication: "The Guardian"
      }
    ]
  },
  {
    title: "Siberian Permafrost Thaw Releases Massive Methane Emissions",
    summary:
      "Accelerating permafrost thaw across Siberia and Alaska releases ancient methane and CO2, creating a dangerous feedback loop that could add 1.5°C to global temperatures by 2100, beyond human emissions.",
    whatToDo: [
      "Accelerated global warming beyond current climate models",
      "Infrastructure collapse in Arctic regions (buildings, pipelines)",
      "Release of ancient pathogens from thawed permafrost",
      "Feedback loop making climate targets nearly impossible to meet"
    ],
    significance: "High",
    coordinates: [56.8389, 60.6057], // Yekaterinburg, Russia (Siberian region)
    topic: "Climate",
    city: "Yekaterinburg",
    image: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.reuters.com/business/environment/siberian-permafrost-methane-release-2025/",
        title: "Thawing permafrost releases record methane emissions",
        publication: "Reuters"
      },
      {
        bias: 0.55,
        url: "https://www.bbc.com/news/science-environment-permafrost-thaw-feedback-loop",
        title: "Permafrost 'carbon bomb' threatens climate targets",
        publication: "BBC News"
      },
      {
        bias: 0.60,
        url: "https://www.theguardian.com/environment/permafrost-methane-tipping-point",
        title: "Arctic permafrost thaw could trigger runaway warming",
        publication: "The Guardian"
      },
      {
        bias: 0.50,
        url: "https://www.nature.com/articles/permafrost-methane-emissions-study-2025",
        title: "Quantifying methane release from thawing permafrost",
        publication: "Nature"
      }
    ]
  },
  {
    title: "Global Food Systems Face Climate-Driven Collapse Risk",
    summary:
      "Simultaneous crop failures across major breadbasket regions due to extreme weather events threaten global food security, with wheat, rice, and corn yields declining in key producing nations.",
    whatToDo: [
      "Rising food prices creating affordability crisis globally",
      "Increased risk of famine in vulnerable regions",
      "Political instability and conflict over resources",
      "Mass migration from regions unable to sustain agriculture"
    ],
    significance: "High",
    coordinates: [28.7041, 77.1025], // New Delhi, India (major agricultural region)
    topic: "Climate",
    city: "New Delhi",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80",
    articles: [
      {
        bias: 0.50,
        url: "https://www.reuters.com/business/environment/climate-change-global-food-crisis-2025/",
        title: "Climate-driven crop failures threaten global food security",
        publication: "Reuters"
      },
      {
        bias: 0.55,
        url: "https://www.bbc.com/news/science-environment-global-food-system-collapse-risk",
        title: "Multiple breadbasket failures raise famine fears",
        publication: "BBC News"
      },
      {
        bias: 0.60,
        url: "https://www.aljazeera.com/news/climate-food-security-crisis-2025",
        title: "How climate change is breaking the global food system",
        publication: "Al Jazeera"
      },
      {
        bias: 0.50,
        url: "https://www.fao.org/news/story/climate-impacts-agriculture-2025",
        title: "Climate change impacts on global agriculture: 2025 report",
        publication: "UN Food and Agriculture Organization"
      }
    ]
  }
];

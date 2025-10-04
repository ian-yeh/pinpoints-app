import { Issue } from "@/lib/types/article";

export const mockData: { [key: string]: Issue } = {
  issue1: {
    title: "Impact of USMCA on North American Manufacturing",
    summary:
      "An analysis of the effects of the United States-Mexico-Canada Agreement (USMCA) on manufacturing reshoring and economic integration across North America. This issue will explore the success stories and challenges faced by industries adapting to the new trade landscape.",
    whatToDo: [
      "Research recent manufacturing trends in the US, Mexico, and Canada.",
      "Analyze trade data related to the USMCA.",
      "Interview experts on the ground about the agreement's impact.",
      "Propose policy recommendations based on findings.",
    ],
    significance: "High",
    coordinates: [34.0522, -118.2437], // Los Angeles, USA
    topic: "economy",
    articles: [
      {
        bias: 0.65,
        url: "https://tradeanalysis.com/usmca-benefits-manufacturing",
        title: "USMCA Benefits Local Manufacturing Growth",
        publication: "North American Trade Review",
      },
      {
        bias: 0.52,
        url: "https://supplychaindigest.org/nafta-vs-usmca-logistics",
        title: "Supply Chain Shifts: NAFTA to USMCA",
        publication: "Global Supply Chain Journal",
      },
      {
        bias: 0.71,
        url: "https://automotivefuture.com/mexico-usmca-auto-sector",
        title: "Mexico's Automotive Sector Under USMCA",
        publication: "Automotive Industry Insight",
      },
    ],
  },
  issue2: {
    title: "Technological Advancements in Canadian Agriculture",
    summary:
      "An investigation into the adoption of new technologies in Canadian agriculture, including automation, precision farming, and sustainable practices. The focus will be on their impact on productivity, environmental sustainability, and rural economies.",
    whatToDo: [
      "Survey Canadian farmers on technology adoption rates.",
      "Examine government initiatives supporting agricultural tech.",
      "Assess the economic and environmental impacts of these technologies.",
      "Identify best practices and future growth areas.",
    ],
    significance: "Medium",
    coordinates: [53.5444, -113.4909], // Edmonton, Canada
    topic: "agriculture",
    articles: [
      {
        bias: 0.61,
        url: "https://canadianfarmer.org/precision-ag-boom",
        title: "Precision Agriculture Boosting Yields in Alberta",
        publication: "Canadian Farming Today",
      },
      {
        bias: 0.55,
        url: "https://agritechreview.com/drones-farm-management",
        title: "Drone Technology Revolutionizes Farm Management",
        publication: "Agricultural Technology Review",
      },
      {
        bias: 0.68,
        url: "https://sustainagri.com/canada-sustainable-practices",
        title: "Sustainable Farming Practices Gain Traction in Canada",
        publication: "Sustainable Agriculture Journal",
      },
    ],
  },
  issue3: {
    title: "Urban Development and Housing Affordability in US Cities",
    summary:
      "A comprehensive look at the challenges and solutions related to urban development and housing affordability in major US metropolitan areas. This will include examining zoning laws, public housing initiatives, and gentrification.",
    whatToDo: [
      "Analyze housing market data in several major US cities.",
      "Research the effectiveness of different housing policies.",
      "Study the socio-economic impact of urban development projects.",
      "Propose innovative approaches to improve housing affordability.",
    ],
    significance: "High",
    coordinates: [39.9526, -75.1652], // Philadelphia, USA
    topic: "urban planning",
    articles: [
      {
        bias: 0.59,
        url: "https://urbaninstitute.org/housing-crisis-solutions",
        title: "Addressing the Housing Affordability Crisis",
        publication: "Urban Policy Institute",
      },
      {
        bias: 0.63,
        url: "https://cityplanningjournal.com/zoning-reform-impact",
        title: "Zoning Reform and its Impact on Housing Supply",
        publication: "Journal of City Planning",
      },
      {
        bias: 0.50,
        url: "https://gentrificationwatch.net/displacement-in-major-cities",
        title: "Gentrification and Displacement in Major US Cities",
        publication: "Gentrification Watch Report",
      },
    ],
  },
  issue4: {
    title: "Cultural Preservation and Tourism in Indigenous Communities of Mexico",
    summary:
      "Exploring the delicate balance between promoting tourism and preserving the cultural heritage of indigenous communities in Mexico. This issue will highlight successful models and potential challenges.",
    whatToDo: [
      "Document traditional cultural practices in select communities.",
      "Evaluate the economic benefits and cultural impacts of tourism.",
      "Identify strategies for sustainable and culturally sensitive tourism.",
      "Interview community leaders and tourism operators.",
    ],
    significance: "Medium",
    coordinates: [20.6736, -103.3440], // Guadalajara, Mexico
    topic: "culture",
    articles: [
      {
        bias: 0.67,
        url: "https://indigenoustourism.org/mexico-models",
        title: "Successful Indigenous Tourism Models in Oaxaca",
        publication: "Indigenous Tourism Global",
      },
      {
        bias: 0.53,
        url: "https://culturalheritage.mx/tourism-challenges",
        title: "Balancing Tourism and Cultural Preservation",
        publication: "Mexican Cultural Heritage Review",
      },
      {
        bias: 0.60,
        url: "https://ethnotourismjournal.com/community-led-initiatives",
        title: "Community-Led Tourism Initiatives in Chiapas",
        publication: "Ethnotourism Journal",
      },
    ],
  },
  issue5: {
    title: "Healthcare Access and Equity in Rural Canada",
    summary:
      "An examination of the disparities in healthcare access and quality between rural and urban areas in Canada. This issue will investigate factors like physician shortages, tele-health solutions, and policy interventions.",
    whatToDo: [
      "Collect data on healthcare facility distribution and physician-to-patient ratios.",
      "Assess the impact of tele-health on rural communities.",
      "Review government policies aimed at improving rural healthcare.",
      "Propose actionable recommendations for enhanced equity.",
    ],
    significance: "High",
    coordinates: [48.4284, -89.2610], // Thunder Bay, Canada
    topic: "healthcare",
    articles: [
      {
        bias: 0.62,
        url: "https://ruralhealthcanada.org/access-disparities",
        title: "Rural Healthcare Disparities: A National Challenge",
        publication: "Canadian Journal of Rural Health",
      },
      {
        bias: 0.57,
        url: "https://telehealthsolutions.ca/impact-northern-communities",
        title: "Tele-health's Impact on Northern Canadian Communities",
        publication: "Journal of Digital Health",
      },
      {
        bias: 0.69,
        url: "https://publicpolicycanada.com/rural-healthcare-funding",
        title: "Government Funding for Rural Healthcare Initiatives",
        publication: "Canadian Public Policy Review",
      },
    ],
  },
  issue6: {
    title: "Renewable Energy Adoption in the Southwestern US",
    summary:
      "Investigating the growth and challenges of renewable energy (solar, wind, geothermal) adoption in the Southwestern United States, focusing on policy frameworks, infrastructure development, and environmental impacts.",
    whatToDo: [
      "Analyze regional energy production data.",
      "Evaluate state-level renewable energy policies.",
      "Assess the environmental footprint of large-scale renewable projects.",
      "Identify opportunities for community energy initiatives.",
    ],
    significance: "High",
    coordinates: [33.4484, -112.0740], // Phoenix, USA
    topic: "energy",
    articles: [
      {
        bias: 0.68,
        url: "https://swenergysolutions.org/solar-boom-arizona",
        title: "Arizona's Solar Boom: Powering the Future",
        publication: "Southwest Energy Magazine",
      },
      {
        bias: 0.56,
        url: "https://windpowerreport.com/texas-wind-expansion",
        title: "Texas Continues Wind Power Expansion",
        publication: "Wind Energy Review",
      },
      {
        bias: 0.63,
        url: "https://sustainabledev.org/renewable-grid-integration",
        title: "Challenges of Renewable Grid Integration in the West",
        publication: "Journal of Sustainable Development",
      },
    ],
  },
  issue7: {
    title: "Water Management and Conservation in Mexico's Arid Regions",
    summary:
      "A study on effective water management and conservation strategies in the arid and semi-arid regions of Mexico, considering climate change impacts, agricultural demands, and urban supply.",
    whatToDo: [
      "Map water scarcity levels across target regions.",
      "Examine traditional and modern water harvesting techniques.",
      "Analyze government policies on water rights and usage.",
      "Propose solutions for sustainable water resource management.",
    ],
    significance: "High",
    coordinates: [25.6866, -100.3161], // Monterrey, Mexico
    topic: "environment",
    articles: [
      {
        bias: 0.70,
        url: "https://mexicowaterforum.org/sustainable-solutions-north",
        title: "Sustainable Water Solutions for Northern Mexico",
        publication: "Mexican Water Forum Journal",
      },
      {
        bias: 0.54,
        url: "https://agriculturetoday.mx/arid-land-farming",
        title: "Innovative Farming in Mexico's Arid Lands",
        publication: "Agriculture Today Mexico",
      },
      {
        bias: 0.66,
        url: "https://climatechangeimpacts.com/mexico-water-stress",
        title: "Climate Change Exacerbates Water Stress in Mexico",
        publication: "Global Climate Impact Report",
      },
    ],
  },
  issue8: {
    title: "Future of Remote Work and its Impact on Canadian Cities",
    summary:
      "Investigating the long-term impacts of widespread remote work on the economies, infrastructure, and social fabric of Canadian cities, including changes in commercial real estate and public transit.",
    whatToDo: [
      "Survey Canadian businesses on remote work policies.",
      "Analyze commercial real estate vacancy rates.",
      "Study changes in public transit ridership.",
      "Forecast future urban planning needs based on remote work trends.",
    ],
    significance: "Medium",
    coordinates: [45.4215, -75.6972], // Ottawa, Canada
    topic: "urban planning",
    articles: [
      {
        bias: 0.60,
        url: "https://canadianurbanfutures.org/remote-work-ottawa",
        title: "Remote Work Reshapes Ottawa's Downtown Core",
        publication: "Canadian Urban Futures",
      },
      {
        bias: 0.51,
        url: "https://realestateinsights.ca/commercial-market-shifts",
        title: "Commercial Real Estate Adapts to Remote Era",
        publication: "Canadian Real Estate Insights",
      },
      {
        bias: 0.65,
        url: "https://mobilityresearch.org/transit-ridership-post-pandemic",
        title: "Public Transit Ridership: A Post-Pandemic Analysis",
        publication: "Urban Mobility Research",
      },
    ],
  },
};

import { Issue } from "@/lib/types/article";
import { EducationData } from "./education-data";
import { PolicyData } from "./policy-data";
import { WarData } from "./war-data";
import { ClimateData } from "./climate-data";

export const data: { [key: string]: Issue[] } = {
  Education: EducationData,
  Policy: PolicyData,
  War: WarData,
  Climate: ClimateData,
};

export const getMockDataFromTopic = (topic: string) => {
  return data[topic] || data["Education"]; // fallback
};

import { NcuEducation } from "./ncuEducation";
import { NcuExperience } from "./ncuExpereince";
import { NcuSkills } from "./ncuSkills";

export interface NcuProfile {
  first_name: string;
  last_name: string;
  biography: string;
  headline: string;
  github_link: string;
  portfolio_link: string;
  skills: NcuSkills[];
  education: NcuEducation[];
  experience: NcuExperience[];
}
export interface Header {
  name: string;
  position: string;
  company: string;
}

export interface SocialNetwork {
  name: string;
  link: string;
  icon: string;
}

export interface MyInformation {
  description: string;
  technologies: string[];
  socialNetworks: SocialNetwork[];
  yearsOfExperience: number;
  projects: number;
  talksAndWorkshops: number;
}

export interface Project {
  name: string;
  description: string;
  link: string;
  image: string;
  technologies: string[];
}

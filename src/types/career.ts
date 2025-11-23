export interface Tecnologies {
    name: string;
    icon: React.ReactNode;
  }
  
  export interface CareerItem {
    title: string;
    icon: React.ReactNode;
    company: string;
    date: string;
    description: string[];
    technologies: Tecnologies[]
  }
  
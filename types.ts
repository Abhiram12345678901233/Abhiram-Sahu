
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
  dark?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface InsightResponse {
  insight: string;
  principles: string[];
}

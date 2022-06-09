// temporary user object
export interface User {
  id: number;
  name: string;
}

export interface Post {
  user: User;
  publishedAt: Date;
  topic: string;
  title: string;
  content: string;
  id: number;
}

export type SortingCriterion = "none" | "top" | "popular" | "controversial";

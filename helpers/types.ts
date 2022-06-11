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

export interface Comment {
  user: User;
  content: string;
  publishedAt: Date;
  postId: number;
  id: number;
}

export interface Topic {
  name: string;
  id: number;
  subscribers: number;
}

export type SortingCriterion = "none" | "top" | "popular" | "controversial";
export type ItemTypes = "posts" | "comments" | "list";

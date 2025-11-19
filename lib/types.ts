export interface User {
  id: string
  email: string
  username: string
  createdAt: string
}

export interface HistoryItem {
  id: string
  type: 'review' | 'news' | 'guide' | 'community'
  title: string
  date: string
  slug: string
}

export interface Review {
  id: string
  title: string
  content: string
  excerpt: string
  image: string
  rating: number
  category: string
  slug: string
  author: string
  date: string
  readTime: string
}

export interface NewsItem {
  id: string
  title: string
  content: string
  excerpt: string
  image: string
  category: string
  slug: string
  author: string
  date: string
  readTime: string
}

export interface Guide {
  id: string
  title: string
  content: string
  excerpt: string
  image: string
  category: string
  slug: string
  author: string
  date: string
  readTime: string
}

export interface CommunityPost {
  id: string
  title: string
  content: string
  images?: string[]
  author: string
  authorId: string
  date: string
  comments: Comment[]
}

export interface Comment {
  id: string
  postId: string
  author: string
  authorId: string
  content: string
  images?: string[]
  date: string
}

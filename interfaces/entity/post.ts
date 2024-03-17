import { Author } from "./author"
import { Category } from "./category"

export interface Post {
  id: string
  title: string
  excerpt: string
  fk_cover_image: string
  slug: string
  author: Author
  categories: Array<Category>
  created_at: Date
  updated_at: Date
  published_at: Date
  content: string
  cover_image_url: string
}
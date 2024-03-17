import { AuthorEntity } from "./author"
import { CategoryEntity } from "./category"

export interface PostEntity {
  id: string
  title: string
  excerpt: string
  fk_cover_image: string
  slug: string
  author: AuthorEntity
  categories: Array<CategoryEntity>
  created_at: Date
  updated_at: Date
  published_at: Date
  content: string
  cover_image_url: string
}
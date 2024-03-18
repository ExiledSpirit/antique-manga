import { AuthorEntity } from "./author"
import { CategoryEntity } from "./category"

export interface PostEntity {
  id: string
  title: string
  excerpt: string
  coverImageUrl: string
  slug: string
  author: AuthorEntity
  categories: Array<CategoryEntity>
  createdAt: Date
  updatedAt: Date | null
  publishedAt: Date | null
  content: string
}
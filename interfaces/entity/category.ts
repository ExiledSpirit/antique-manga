export interface CategoryEntity {
  id: string
  name: string
  description: string
  created_at: Date
  updated_at: Date | null
  post_quantity: number
}
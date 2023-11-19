import { CategoryType } from '@/types/categories'

export interface IArticleData {
  id: number
  createdAt: Date
  title: string
  category: CategoryType
  image: string
  content: string
  url: string
}

export interface IForm {
  firstname: string
  lastname: string
  email: string
  phone: string
}

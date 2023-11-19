import { IArticleData, IForm } from '@/interfaces/articles'
import APIRequest from './api-request'

class ArticleServices extends APIRequest {
  async GET_ARTICLES_LIST(optionSelected?: string): Promise<IArticleData[]> {
    const response: IArticleData[] = await this.get(`/api/articles`, {
      params: { filter: optionSelected },
    })
    return response
  }
  async POST_NEWSLETTER(data: IForm) {
    const response = await this.post(`/api/newsletter`, data)
    return response
  }
}

export const articleServices = new ArticleServices()

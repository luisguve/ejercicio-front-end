import { useQuery } from '@tanstack/react-query'
import { articleServices } from '@/services/articles'
import { useParams } from 'react-router'

export const useFetchArticlesList = () => {
  const { category } = useParams()
  const optionSelected = category === 'Todos' ? '' : category
  return useQuery({
    queryKey: ['articlesList'],
    queryFn: () => articleServices.GET_ARTICLES_LIST(optionSelected),
  })
}

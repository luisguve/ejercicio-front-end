import './styles/grid.scss'
import './styles/articles.scss'
import ArticlesItems from './items'
import Filter from '@/components/common/Filter'
import categories from '../../utils/consts/categories'
import SearchLoader from '@/components/common/Loader/search'
import { useFetchArticlesList } from '../../hooks/useFetchArticles'

function Articles() {
  const { data, isLoading } = useFetchArticlesList()
  console.log(data)
  return (
    <div className="articles">
      <div className="articles__layout">
        <aside className="articles__filter">
          <Filter items={categories} />
        </aside>
        <main className="articles__list">
          <section
            style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
          >
            {isLoading ? (
              <SearchLoader />
            ) : (
              <ul className="grid ul">
                {data?.map((item) => (
                  <li className="articles__item" id={`article_${item.id}`}>
                    <ArticlesItems
                      image={item?.image}
                      id={item?.id}
                      title={item?.title}
                      text={item?.content}
                    />
                  </li>
                ))}
              </ul>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}

export default Articles

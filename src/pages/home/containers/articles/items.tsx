import '../../styles/card.scss'
import Card from '@/components/common/Card'
import { IArticleItemProps } from '../../interfaces/articles'
const ArticlesItems: React.FC<IArticleItemProps> = ({
  id,
  image,
  title,
  text,
}) => {
  return (
    <Card className="card" id={String(id)}>
      <article className="card__article">
        <figure className="card__figure">
          <img
            className="card__img"
            src={image ?? ''}
            alt={title}
            style={{ width: '100%', height: '100%' }}
          />
        </figure>
        <div className="card__description">
          <h2 className="card__title">{title}</h2>
          <div className="card__text">
            <p>{text}</p>
          </div>
          <a className="card__link" href="">
            Ver más
          </a>
        </div>
      </article>
    </Card>
  )
}

export default ArticlesItems

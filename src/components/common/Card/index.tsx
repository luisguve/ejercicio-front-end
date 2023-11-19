import { CSSProperties, FC, PropsWithChildren } from 'react'

interface ICardProps {
  id: string
  style?: CSSProperties
  className?: string
}

const Card: FC<PropsWithChildren & ICardProps> = ({
  id,
  style,
  className,
  children,
}) => {
  return (
    <div style={style} id={id} className={className}>
      {children}
    </div>
  )
}

export default Card

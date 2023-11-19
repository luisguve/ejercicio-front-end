import { useNavigate } from 'react-router'
import './filter.scss'
import React, { useState } from 'react'
interface IFilterData {
  id: number
  title: string
}

interface IFilterProps {
  items: IFilterData[]
}

const Tabs: React.FC<IFilterProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState(items[0].title)
  const navigate = useNavigate()
  const handleTabClick = (category: string) => {
    setActiveTab(category)
    navigate(`/articles/${category}`)
  }

  return (
    <div className="filter">
      <ul className="filter__list">
        {items.map((item) => (
          <li
            key={item.title}
            className={`filter__item${
              item.title === activeTab ? '--active' : ''
            }`}
            onClick={() => handleTabClick(item.title)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tabs

import { useState } from 'react'
import { AddCategory, GifGrid } from './components'


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (newCategory) => {
      // console.log(newCategory);
      // setCategories(['Valorant', ...categories]) MÉTODO 1
      if (categories.includes(newCategory)) return
      // MÉTODO 2
      setCategories(cat => ([newCategory, ...cat ]))
  }

  return (
    <>
        <h1>GifExpertApp</h1>      
        <AddCategory
          onNewCategory={onAddCategory}
        />
        {
          categories.map( (category) => (
          <GifGrid 
            key={category}
            category={category}
          />)
          )
        }
    </>
  )
}

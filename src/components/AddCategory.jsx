import {useState} from 'react'

export const AddCategory = ({onNewCategory}) => {

   const [inputValue, setInputValue] = useState()

   const onIpuntChange = ({target}) => {
        // console.log(target.value);
        setInputValue(target.value)
   }

   const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return // Si la longitud es mayor o igual a 1 no hace nada
        // setCategories(categories => ([inputValue, ...categories]))
        onNewCategory( inputValue.trim() )
        setInputValue('') // Vacíar input
   }

  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onIpuntChange}
        />
    </form>
  )
}

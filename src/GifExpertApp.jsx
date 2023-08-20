import { useState } from 'react';
import { Addcategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ]);
  
  const onAddCategory = (nuevaCategoria) => {
   // const nuevaCategoria = 'Valorant' + categories.length.toString();
    //let otherCategory = [...categories];
    //otherCategory.push(nuevaCategoria);
    //setCategories( otherCategory);
    if( categories.includes(nuevaCategoria) ) return
    setCategories([ nuevaCategoria, ...categories ]);
  }

  return (
    <>
        {/** titulo */}
        <h1>GiftExpertApp</h1>

        {/** Input */}
        <Addcategory 
        //setCategories={ setCategories }
          onNewCategory={ (value) => onAddCategory(value) }
        />

        {/** Listado de Gif */}

        {/* <button onClick={ (event) => onAddCategory() }>Agregar</button> */}


        {
          categories.map( (category) => (
              <GifGrid 
                  key={ category }
                  category={category}/>
          ))
        }

    </>
  )
}

//import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
    //Se hace asi por ahora
    //La explicación es porque cada que el FC se renderiza hace que la función se ejecuta
    /*const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=phf7HaXPZhzVQTwzH7xvviF7Pobr2RYW&q=${category}&limit=20`;
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => ({//De esta forma se retorna un objeto si es lo único que se hace en el map
            id: img.id,
            tittle: img.title,
            url: img.images.downsized_medium.url
        }));

        console.log(gifs);
    }*/

    //Ojooooooooooooooo debes llamar a la función dfdddks*****
    //Hook que evita que se llame la función cada vez que se actualiza el FC
   /* useEffect( () => {
        getGifs(category);
    }, [])*///Se hace el cambio y hay 2 formas de hacerlo
////////////////////////////////////Se cambia por el customHook y se hace lleva esta lógica para allá

/*
    const [images, setImages] = useState([])
    //Forma 1
    useEffect( () => {
        getGifs(category)
            .then( newImages => setImages(newImages) );
    }, [])
*/
    const { images, isloading } = useFetchGifs( category );
    console.log({ isloading });

//////////    /////////////////////////////////////////////////
    //Forma 2 Crear una nueva función y llamar esta en el useEffect
    /*
    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
    }
    */

    //Ojo si el map lo dejo entre llaves debo hacer el return especifico
    /**
     * {images.map((imagen) => {
                return <li key={imagen.id}>{imagen.title}</li>
            })}
     */
    /**
     * Asi era antes de usar un FC para renderizar los items
     * <>
        <h3>{ category }</h3>
        
        <ol>
     *   {images.map( ({id, title}) => (
                <li key={id}>{title}</li>
            ))
            
            }
        </ol>
        </>
     */
  return (
    <>
        <h3>{ category }</h3>
        {
            isloading && ( <h2>Cargando...</h2> )//Aquí un AND lógico
        }
        <div className="card-grid">
            {images.map( (image) => (
                <GifItem 
                    key={ image.id }
                    { ...image }
                />
            ))           
            }
            
        </div>
    </>
  )
}

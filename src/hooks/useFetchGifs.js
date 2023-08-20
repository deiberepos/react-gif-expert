import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true )
    //Forma 1
    useEffect( () => {
        getGifs(category)
            .then( newImages => setImages(newImages), setIsLoading(false));
             //setIsLoading(false)
    }, [])
  return {
    images,//ojo como se retorna
    isloading: isLoading
  }
}

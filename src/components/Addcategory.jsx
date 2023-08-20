import { useState } from "react"

export const Addcategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = (event) => {
       
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {//el argumento event no está en el llamado de la función
        event.preventDefault();//sin este método se pierde el valor por el refresh del formulario
        if( inputValue.trim().length <=1 ) return;
        console.log(inputValue);
       // setCategories([...categories, inputValue]);mi solución incluí enviar el arreglo también
       // setCategories( categories => [ inputValue, ...categories  ] );Se hace la actualización el el comp hijo
       onNewCategory( inputValue.trim() );
        setInputValue('');
    }


    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="buscar gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>

    )
}
 
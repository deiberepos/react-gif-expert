export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=phf7HaXPZhzVQTwzH7xvviF7Pobr2RYW&q=${category}&limit=7`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({//De esta forma se retorna un objeto si es lo único que se hace en el map
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    console.log(gifs);
    return gifs;
}
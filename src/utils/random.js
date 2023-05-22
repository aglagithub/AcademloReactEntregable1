
export const getRandomQuote= (arreglo) => {
    const randomIndex = Math.floor(Math.random() * arreglo.length)
    return arreglo[randomIndex]
  }


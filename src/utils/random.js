
export const getRandom = (arreglo) => {
    const randomIndex = Math.floor(Math.random() * arreglo.length)
    return arreglo[randomIndex]
  }


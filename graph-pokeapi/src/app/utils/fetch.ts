
export const fetchPoke = async () => {
  let data = []
  const limit = 151
  for (let i = 1; i <= limit; i++) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      const response = await res.json()
      console.log(response)
      const pokemon = {
        name: response?.name,
        id: response?.id,
        type: response?.types[0]?.type?.name,
        img: response?.sprites?.front_default,
      }
      data.push(pokemon)
  }
  return data
}

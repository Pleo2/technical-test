export const fetchPoke = async () => {
  let data = [{}]
  const limit = 151
  for (let i = 1; i <= limit; i++) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      const response = await res.json()
      const pokemon = {
        name: response?.name,
        img: response?.sprites?.front_default,
      }
      data.push(pokemon)
  }
<<<<<<< HEAD
  catch(err){
    console.log(err)
  }
  return 
}
=======
  return data
}
>>>>>>> parent of 973d8b1... feat(Name-2D): :sparkles: add graph NAME 2D and style changes in the header

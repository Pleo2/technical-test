import { type RootRequest } from "../Interfaces/fetchs/FetchData"
import { PokeState } from "./types"

export const fetchPoke = async (): Promise<PokeState[] | undefined>  => {
  let data: PokeState[] = [];
  const limit = 151
  try{
    for (let i = 1; i <= limit; i++) {
        const res  = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        if (res.ok) {
          const response :RootRequest = await res.json()
          const pokemon = {
            id: response?.id,
            name: response?.name,
            img: response?.sprites?.front_default,
            type: response?.types[0].type.name
          }
          data.push(pokemon)
        }
    }
    if(data.length > 0) {
      return data
    }
  }
  catch(err){
    console.error(err)
  }
  return 
}
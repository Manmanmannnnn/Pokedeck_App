const base_url='https://pokeapi.co/api/v2/'

export async function getTypePokemon(type){
    const response=await fetch(`${base_url}${type}`)
    const data= await response.json()
    return data;
}

export async function searchPokemon(name) {
    const response=await fetch(`${base_url}pokemon/${encodeURIComponent(name)}`)
    const data= await response.json()
    return data;
}
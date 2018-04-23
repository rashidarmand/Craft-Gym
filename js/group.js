class GymLeaders {

    constructor() {
        this.group = [];
    }

    all() {
        return this.group;
    }

}

myGymLeaders = new GymLeaders
myGymLeaders.group.push(ivan.all()) 
myGymLeaders.group.push(professor.all)

// Invoke this function which puts the pokemon in Ivan's party
IvansPokemon()


// Ivan's pokemon
function myTrainer() {
    return ivan
}

// Do all 3 AJAX calls create the pokemon and push it to the 'party' array in my Ivan object
function IvansPokemon() {

let url1 = "https://pokeapi.co/api/v2/pokemon/150/"
let url2 = "https://pokeapi.co/api/v2/pokemon/151/"
let url3 = "https://pokeapi.co/api/v2/pokemon/384/"


axios.all([
  axios.get(url1),
  axios.get(url2),
  axios.get(url3)
])
.then(responses => {

  responses.forEach(response => {

let pokemonData = response.data

let name = document.createElement("li")
let hp = document.createElement("li")
let attack = document.createElement("li")
let defence = document.createElement("li")
let abilities = document.createElement("li")

let getAbilities = (()=> {
    let array = [];
    let i = 0;
    while(i < response.data.abilities.length) {
        array.push(response.data.abilities[i].ability['name']);
        i++;
    } 
    return array;
})

let pokemon = new Pokemon(
    pokemonData['name'], // Name
    pokemonData.stats[5]['base_stat'], // HP
    pokemonData.stats[4]['base_stat'], // Attack
    pokemonData.stats[3]['base_stat'], // Defense
    pokemonData.stats[2]['base_stat'], // Special Attack
    pokemonData.stats[1]['base_stat'], // Special Defense
    getAbilities() // Calls the function that returns the array of the pokemon abilities

)

  ivan.party.push(pokemon)

let cardInsert = document.querySelector(`#${pokemon.name}`)


  name.innerHTML = "Name: " + pokemon.name
  hp.innerHTML = "HP: " + pokemon.hp
  attack.innerHTML = "Attack: " + pokemon.attack
  defence.innerHTML = "Defence: " + pokemon.defense
  abilities.innerHTML = "Abilities: " + pokemon.abilities
  
  cardInsert.appendChild(name)
  cardInsert.appendChild(hp)
  cardInsert.appendChild(attack)
  cardInsert.appendChild(defence)
  cardInsert.appendChild(abilities)

  })

myTrainer(ivan)
})

}

// Professor's Pokemon
// Ivysaur
axios.get("https://pokeapi.co/api/v2/pokemon/2/")
.then((response) => {

    let ul = document.querySelector("#ivysaur")
    
    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let ivysaur = new Pokemons(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name + ", " + pokeData.abilities[1].ability.name
    )

    professor.add(ivysaur)

    pokeData.innerHTML = ivysaur.data

    name.innerHTML = "Name: " + ivysaur.name
    hp.innerHTML = "Hp: " + ivysaur.hp
    attack.innerHTML = "Attack: " + ivysaur.attack
    defence.innerHTML = "Defence: " + ivysaur.defence
    abilities.innerHTML = "Abilities: " + ivysaur.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

}).catch((error) => {
    console.log(error)
})

// Charizard
axios.get("https://pokeapi.co/api/v2/pokemon/6/")
.then((response) => {

    let ul = document.querySelector("#charizard")
    
    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let charizard = new Pokemons(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name + ", " + pokeData.abilities[1].ability.name
    )

    professor.add(charizard)

    pokeData.innerHTML = charizard.data

    name.innerHTML = "Name: " + charizard.name
    hp.innerHTML = "Hp: " + charizard.hp
    attack.innerHTML = "Attack: " + charizard.attack
    defence.innerHTML = "Defence: " + charizard.defence
    abilities.innerHTML = "Abilities: " + charizard.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

}).catch((error) => {
    console.log(error)
})

// Blastoise
axios.get("https://pokeapi.co/api/v2/pokemon/9/")
.then((response) => {

    let ul = document.querySelector("#blastoise")
    
    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let blastoise = new Pokemons(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name + ", " + pokeData.abilities[1].ability.name
    )

    professor.add(blastoise)

    pokeData.innerHTML = blastoise.data

    name.innerHTML = "Name: " + blastoise.name
    hp.innerHTML = "Hp: " + blastoise.hp
    attack.innerHTML = "Attack: " + blastoise.attack
    defence.innerHTML = "Defence: " + blastoise.defence
    abilities.innerHTML = "Abilities: " + blastoise.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

}).catch((error) => {
    console.log(error)
})
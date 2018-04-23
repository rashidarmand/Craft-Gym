//The JS code is based on what was done in class and class workshops. All credits goes to Orlando Caraballo from NYCDA.
class professorCoke {
    constructor(){
        this.all = []
    }

    add(pokemons) {
        this.all.push(pokemons)
    }
    get(pokemons){
        for (let i = 0; i < this.all.length; i++){
            if (this.name === this.all[i].name) {
                return this.all[i]
            }
        }
    }
}

class Pokemons {
    constructor(name, hp, attack, defence, abilities) {
        this.name = name
        this.hp = hp
        this.attack = attack
        this.defence = defence
        this.abilities = abilities
    }
}

let professor = new professorCoke()


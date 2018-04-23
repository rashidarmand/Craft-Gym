// Initialize all Materialize Plugins. Function is defined in Materialize JS
M.AutoInit();

// Creates the Trainer class with two methods: add() & get(name)
class Ivan {

    constructor() {
        this.party = [];
    }

    all() {
        // Return back a list of all pokemon objects in the 'this.party' array
        return this.party;
        // console.log(this.party);
    }

    get(name) {
        // Return just one Pokemon object based on a name being passed as a string. Not case-sensitive.
        for (let element of this.party) {
            if (name.toLowerCase() === element.name){
                return element;
                
            }
        }
    }

    getMove(moveName) {
        // Return just one PokemonMoves object based on a name being passed as a string. Not case-sensitive.
        for (let element of this.party) {
            
            if(moveName.toLowerCase() === element.moveName.toLowerCase()){
                return element;
            }

        }

    }

}

// Creates a new Trainer object named 'Ivan'
let ivan = new Ivan();

// Creates the Pokemon class and defines the parameters that it accepts
class Pokemon {

    constructor(name, hp, attack, defense, specialAttack, specialDefense, abilities) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.specialAttack = specialAttack;
        this.specialDefense = specialDefense;
        this.abilities = abilities;
    }

}

//  Creates the PokemonMoves class and defines the parameters that it accepts
class PokemonMoves {
    
    constructor(moveName, accuracy, pp, power) {
        this.moveName = moveName;
        this.accuracy = accuracy;
        this.pp = pp;
        this.power = power;
    }
}

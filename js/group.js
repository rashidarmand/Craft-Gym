class GymLeaders {

    constructor() {
        this.group = [];
    }

    all() {
        return this.group;
    }

    get(name) {
        for (let element of this.party) {
            if (name.toLowerCase() === element.name){
                return element;
                
            }
        }
    }

    getMove(moveName) {
        for (let element of this.party) {
            
            if(moveName.toLowerCase() === element.moveName.toLowerCase()){
                return element;
            }

        }

    }

}




myGymLeaders.group.push(ivan.all())
myGymLeaders.group.push(professor.all)


// console.log(professor)
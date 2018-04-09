class GymLeaders {
    constructor(){
        this.gymleaders = gymLeaders
    }

    all(){
        return this.gymleaders
    }

    get(name){
        for (let element of this.party) {
            if (name.toLowerCase() === element.name){
                return element;
                
            }
        }
    }
    
}
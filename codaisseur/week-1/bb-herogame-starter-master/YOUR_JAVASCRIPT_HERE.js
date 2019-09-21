const hero = {name: '',
            heroic: true,
            inventory: [],
            health: 10,
            weapon: {type: 'test', damage: 2}
}


function rest(checkHealth) {
    let resting = {health: 2}
    checkHealth.health = Object.assign(resting, hero)
        
    }

   
rest(hero)



 function pickUpItem() {
    let myObj = Object.create({weapon: {type: 'test', damage: 2}}, {
        getName: {
            inventory: function () { return this.name; }
        }
    });
   
}

pickUpItem(hero, weapon)




function equipWeapon() {
    
}


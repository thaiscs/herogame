const hero = {name: '',
            heroic: true,
            inventory: [],
            health: 10,
            weapon: {type: 'test', damage: 2}
}


function rest(checkHealth) {
    Object.keys(data).forEach(item => {
        console.log(item);
      });
        
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


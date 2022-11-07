let alienArr = [] //alien array

//CLASS SHIP is blue print for sub classes HumanShip & Alien Ship
class Ship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}
//#region HUMAN CLASS //Extends is the method that connects the sub-classes to parent ship
class HumanShip extends Ship {
    constructor(hull, firepower, accuracy) {
       super(hull, firepower, accuracy)
    }
    attack(meanAlien) {
        if (this.hull > 0) {
            if (Math.random() < this.accuracy ) {
                 if (meanAlien.hull -= this.firepower) {
                console.log(`This humanship attacked the alien ship they have ${meanAlien.hull} left`)
            }
            }
            else {
                console.log('Earthship attack missed!')
            }
           

        }

        else {
            for (let i = 0; i < alienArr.length; i++) {
                if (alienArr[i].hull < 0) {
                   console.log("Continue attack or Retreat") 
                }
                    
            }
        }


    }

}

//#endregion

//#region  ALIEN CLASS
class AlienShip extends Ship {
    constructor(hull, firepower, accuracy) {
      super(hull, firepower, accuracy)
        this.hull = hull //between 3-6
        this.firepower = firepower// between 2-4
        this.accuracy = accuracy //between .6-.8
    }
    attack(niceHuman) {
        if (this.hull > 0) {
           if( Math.random() > this.accuracy) 
             BunnyShip.hull = BunnyShip.hull -= this.firepower
               console.log(`The enemy ship atttacked the humanship. The earth ship has this ${BunnyShip.hull} much left!`)  
                      
               
        }
        else{
            console.log("You hit the Human Ship!")     
        }
             
                
        
    }
}
//#endregion

//#region Random Num function 
//created a funtion for each aline class paramater then called that function when making
//new alien ships
let randomNumMaker = (a, b) => {
    let c = Math.floor(Math.random() * 4) + 3;
    return c
}


let randomNumMaker2 = (a, b) => {
    let c = Math.floor(Math.random() * 3) + 2;
    return c
}


 let randomNumMaker3 = (a,b) => {
    let c = (Math.floor(Math.random() * 3) + 6) / 10;
    return c
 }


//called functions in new ship class

const newAlienShip1 = new AlienShip(randomNumMaker(), randomNumMaker2(), randomNumMaker3());
const newAlienShip2 = new AlienShip(randomNumMaker(), randomNumMaker2(), randomNumMaker3());
const newAlienShip3 = new AlienShip(randomNumMaker(), randomNumMaker2(), randomNumMaker3());
const newAlienShip4 = new AlienShip(randomNumMaker(), randomNumMaker2(), randomNumMaker3());
const newAlienShip5 = new AlienShip(randomNumMaker(), randomNumMaker2(), randomNumMaker3());
const newAlienShip6 = new AlienShip(randomNumMaker(), randomNumMaker2(), randomNumMaker3());
//#endregion


const BunnyShip = new HumanShip(20, 5, .7);
alienArr.push(newAlienShip1, newAlienShip2, newAlienShip3, newAlienShip4, newAlienShip5, newAlienShip6);



//#region  Create battle btwn Bunny's ship and alien ship using booleans
const battleRound = (aliens, earthShip) => {
    // let winnerOfRound;
   
    if (earthShip.hull > 0 && aliens[0].hull > 0) {
        console.log('Attack the Aliens!!')
        earthShip.attack(aliens)
        
    }
    if (aliens[0].hull > 0 && earthShip.hull > 0){
        console.log("Oh no, They're targeting BunnyShip")
        aliens[0].attack(earthShip)
      }
    if (earthShip.hull > 0 && aliens[0].hull < 1 ) {
        console.log('We are defeating the Aliens!')
        earthShip.attack(aliens[0])
    }
    else {
        console.log("You Lose. Game Over.")
    }
  
}
battleRound(alienArr,BunnyShip);

//#endregion

//#region GAME OBJECT ///////
let game = {
    checkEarthWon = () =>      //checks life status of alien ife
        {if(meanAlien.hull < 1) {
            console.log('Aliens have been destroyed!!');
        }
        },

    checkAlienWon: function () {  //checks status of Bunny's life
        if(BunnyShip.hull < 1) {
            return true
        }    
   },

   checkALienHealth: function () { // alien's hull left
    return alienArr[0].hull
   },

   checkBunnyHealth: function () { // Bunny's hull left
    return BunnyShip.hull
   }

}

// startBattle() {
//     while((this.checkPlayerHP()) && (this.checkAlienHP())){
//         USS_Terminator.attack(alienFleet[0]) && alienFleet[0].attack(USS_Terminator)
//         console.log("USS_Terminator locks on to ALien Ship")
//         this.humanShip.attack(this.enemyShips[0])
//         console.log(`Alien has ${this.enemyShips[0].hull} left`)
//         console.log("Alien takes aim at USS_Terminator")
//         this.enemyShips[0].attack(this.humanShip)
//         console.log(`USS_Terminator has ${this.humanShip.hull} left`)
//     }
//     if(this.checkAlienHP() == false){
//         console.log("USS_Terminator has defeated an alien ship")
//     }else if(this.checkPlayerHP() == false){
//         console.log("Aliens have destroyed the USS_Terminator")
//     }
// }



//#endregion


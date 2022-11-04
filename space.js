let alienArr = [] //alien array

//CLASS SHIP is blue print for sub classes HUmanSHip & Alien Ship
class Ship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}
//#region HUMAN CLASS
//Extends is the method that connects the sub-classes to parent ship
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
            else{
                console.log('Earthship attack missed!')
            }
           

        }

        else {
            for (let i = 0; i < alienArr.length; i++) {
                if (alienArr[i].hull < 3) {
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

    }
    attack(niceHuman) {
        if (this.hull < 0) {
           if( Math.random() < this.accuracy) 
                if (BunnyShip.hull -= this.firepower){

                }
        }
        else{
            console.log(`The enemy ship atttacked the humanship. Th earth ship has this ${BunnyShip.hull} much left!`)
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
    let c = Math.floor(Math.random() * 3) + 6 / 10;
    return c
 }

//#endregion

//#region Alien Ships
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



// #region Create battle btwn Bunny's ship and alien ship using booleans
const battleRound = (aliens, earthShip) => {
    if (earthShip) {
        earthShip.attack(aliens[0])
      
    }
    if (aliens[0].hull > 0){
        aliens[0].attack(earthShip)
      }
    if (earthShip.hull > 0){
        earthShip.attack(aliens[0])
    }
}
battleRound(alienArr,BunnyShip);
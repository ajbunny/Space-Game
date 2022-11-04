let alienArr = [] //alien array

//CLASS SHIP is blue print for sub classes HUmanSHip & Alien Ship
class Ship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}
//#region 
//Extends is the method that connects the sub-classes to parent ship
class HumanShip extends Ship {
    constructor() {
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = .7;
    }
    attack(meanAlien) {
        if (this.hull > 0) {
            if (alienArr[0].hull -= this.firepower) {

            }

        }

        else {
            for (let i = 0; i < alienArr.length; i++) {
                if (alienArr[i].hull < 3)
                    console.log("Continue attack or Retreat")
            }
        }


    }

}
//#endregion

class AlienShip extends Ship {
    constructor() {
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = Math.floor(Math.random() * 3) + 6 / 10;

    }
    attack(niceHuman) {
        if (this.hull > 3) {
            if (BunnyShip.hull -= this.firepower)
                console.log(`I have this much ${this.hull} left!`)
        }
    }
}
//#region Random Num function 
//put this into a fuction 
let randomNumMaker = (a, b) => {
    let c = Math.floor(Math.random() * 4) + 3;
    return c
}
console.log(randomNumMaker())

let randomNumMaker2 = (a, b) => {
    let c = Math.floor(Math.random() * 3) + 2;
    return c
}
 console.log(randomNumMaker2())

 let randomNumMaker3 = (a,b) => {
    let c = Math.floor(Math.random() * 3) + 6 / 10;
    return c
 }
console.log(randomNumMaker3())
//#endregion

let a = Math.floor(Math.random() * 4) + 3;
let b = Math.floor(Math.random() * 3) + 2;
let c = Math.floor(Math.random() * 3) + 6 / 10;

const newAlienShip1 = new Ship(randomNumMaker(), randomNumMaker2(), randomNumMaker3());
const newAlienShip2 = new Ship(randomNumMaker(), randomNumMaker2(), randomNumMaker3());
const newAlienShip3 = new Ship(randomNumMaker(), randomNumMaker2(), randomNumMaker3());
const newAlienShip4 = new Ship(randomNumMaker(), randomNumMaker2(), randomNumMaker3());
const newAlienShip5 = new Ship(randomNumMaker(), randomNumMaker2(), randomNumMaker3());
const newAlienShip6 = new Ship(randomNumMaker(), randomNumMaker2(), randomNumMaker3());
//#endregion




const BunnyShip = new Ship(20, 5, .7);
alienArr.push(newAlienShip1, newAlienShip2, newAlienShip3, newAlienShip4, newAlienShip5, newAlienShip6);

console.log(BunnyShip);
console.log(alienArr)

// const newAlienShip1 = new newAlienShip(' ', ' ',)


// const battleRound = (newAlienShip, newHumanShip) => {
//     if (newHumanShip)
// }


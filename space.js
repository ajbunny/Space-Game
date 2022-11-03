class Ship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}

// class humanShip extends Ship {
//     constructor() {
//         this.hull = 20;
//         this.firepower = 5;
//         this.accuracy = .7;
//     }

// }

// class alienShip extends Ship {
//     constructor() {
//         this.hull = Math.floor(Math.random() * 4) + 3;
//         this.firepower = Math.floor(Math.random() * 3) + 2;
//         this.accuracy = Math.floor(Math.random() * 3) + 6 / 10;

//     }
// }

let a = Math.floor(Math.random() * 4) + 3;
let b = Math.floor(Math.random() * 3) + 2;
let c = Math.floor(Math.random() * 3) + 6 / 10;

const newAlienShip = new Ship(a, b, c,);
const newHumanShip = new Ship(20, 5, .7);

console.log(newAlienShip);
console.log(newHumanShip);

// const newAlienShip1 = new newAlienShip(' ', ' ',)

const battleRound = (newAlienShip, newHumanShip) => {
    if (newHumanShip)
}


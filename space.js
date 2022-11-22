let alienArr = []; //alien array
// const button = document.getElementById("btn");

// button.addEventListener("click", function (e) {
//   console.log(game.welcome);
// });

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
    super(hull, firepower, accuracy);
  }
  attack(meanAlien) {
    // if (this.hull > 0) {
    if (this.checkAlienAccuracy(this.accuracy)) {
      meanAlien.hull -= this.firepower;
      console.log(
        `BunnyShip attacked the Alien ship and they have ${alienArr[0].hull} hull left`
      );
    } else {
      console.log("We missed! Load the next missile!");
    }
    return meanAlien.hull;
  }

  checkAlienAccuracy(accuracy) {
    let check = Math.random();
    if (check < accuracy) {
      return true;
    } else {
      return false;
    }
  }
}
//#endregion

//#region  ALIEN CLASS
class AlienShip extends Ship {
  constructor(hull, firepower, accuracy) {
    super(hull, firepower, accuracy);
    this.hull = hull; //between 3-6
    this.firepower = firepower; // between 2-4
    this.accuracy = accuracy; //between .6-.8
  }
  attack(niceHuman) {
    if (this.checkBunnyAccuracy(this.accuracy)) {
      niceHuman.hull -= this.firepower;
      console.log(
        `The Alien ship attacked the Bunnyship. The earth ship has ${BunnyShip.hull} hull left!`
      );
    } else {
      console.log("They hit BunnyShip!");
    }
    return niceHuman.hull;
  }

  checkBunnyAccuracy(accuracy) {
    let check = Math.random();
    if (check < accuracy) {
      return true;
    } else {
      return false;
    }
  }
}

//#endregion

//#region Random Num function
//created a funtion for each aline class paramater then called that function when making
//new alien ships
let randomNumMaker = (a, b) => {
  let c = Math.floor(Math.random() * 4) + 3;
  return c;
};

let randomNumMaker2 = (a, b) => {
  let c = Math.floor(Math.random() * 3) + 2;
  return c;
};

let randomNumMaker3 = (a, b) => {
  let c = (Math.floor(Math.random() * 3) + 6) / 10;
  return c;
};

//called functions in new ship class

const newAlienShip1 = new AlienShip(
  randomNumMaker(),
  randomNumMaker2(),
  randomNumMaker3()
);
const newAlienShip2 = new AlienShip(
  randomNumMaker(),
  randomNumMaker2(),
  randomNumMaker3()
);
const newAlienShip3 = new AlienShip(
  randomNumMaker(),
  randomNumMaker2(),
  randomNumMaker3()
);
const newAlienShip4 = new AlienShip(
  randomNumMaker(),
  randomNumMaker2(),
  randomNumMaker3()
);
const newAlienShip5 = new AlienShip(
  randomNumMaker(),
  randomNumMaker2(),
  randomNumMaker3()
);
const newAlienShip6 = new AlienShip(
  randomNumMaker(),
  randomNumMaker2(),
  randomNumMaker3()
);
//#endregion

const BunnyShip = new HumanShip(20, 5, 0.7);
alienArr.push(
  newAlienShip1,
  newAlienShip2,
  newAlienShip3,
  newAlienShip4,
  newAlienShip5,
  newAlienShip6
);

// for (let i = 0; i < alienArr.length; i++){ just added pop to array
//  return alienArr.pop
// }

//#region  Create battle btwn Bunny's ship and alien ship using booleans
welcome();

  for (let i = 0; i < alienArr.length; i++) {
  const battleRound = (aliens, earthShip) => {

    let winnerOfRound = true;
    let response = this.response;
    while (winnerOfRound) {
      if (earthShip.hull > 0 && aliens[0].hull >= 1) {
        console.log("Attack the Aliens!!");
        earthShip.attack(aliens[0]);
      }
      if (aliens[0].hull > 0 && earthShip.hull > 0) {
        console.log("Oh no, They're targeting BunnyShip");
        aliens[0].attack(earthShip);
      }
      if (earthShip.hull > 0 && aliens[0].hull <= 0) {
        console.log("We are defeating the Aliens!");
        winnerOfRound = false;
        console.log("YOU SAVED THE PLANET");
        return response
        
      } else {
        console.log("You Lose. Game Over.");
        winnerOfRound = true;
      }
      return winnerOfRound;
    }
  
};
  battleRound(alienArr, BunnyShip);
}


//#endregion

//

// #region GAME OBJECT ///////
function welcome() {
  console.log(
    "Earth is being invaded by mean aliens who are here to rule Earth. Much like the 1%ers... Help us defeat them and sending them packing"
  );
}

let game = {
  retreat: function () {
    console.log(
      "We must retreat and regroup! We lost the battle, not the war!!🚀"
    );
  },

  RunOrFight: function () {
    
    const response = prompt(`Game over! Thanks for playing, please click OK`
    );
    if (response.toLowerCase() === "X") {
      console.log( "You have did not complete your mission! Retreat and regroup!");
  
    } else if (response.toLowerCase() === "C") {
      return battleRound();
    }

  
  },


};

game.RunOrFight();


console.log(game);

//#endregion

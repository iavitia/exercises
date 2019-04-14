// Reference type
var object1 = { value1: 10 };
var object = object1;
var object3 = { value: 10 };

// Context
const object4 = {
  a: function() {
    console.log(this);
  }
};

// Instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi, I am ${this.name}. I am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    //use super to have access to Player's constructor
    super(name, type);
  }
  play() {
    console.log("I am a ${this.type}");
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard1 = new Wizard("Shawn", "Dark Magician");

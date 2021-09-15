class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 0;
    }
    sayName() {
        console.log("Hi, my name is ${this.name}");
    }
    showStatus(){
        console.log(this.name, this.strength, this.speed);
    };
    drinkSake(){
        this.health += 10;
        console.log(this.health);
    }
}

const igaNinja = new Ninja ("Hattori", 10, 3, 0);
igaNinja.sayName();
igaNinja.showStatus();
igaNinja.drinkSake();
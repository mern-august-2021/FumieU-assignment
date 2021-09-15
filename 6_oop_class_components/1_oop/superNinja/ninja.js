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

class SuperSensei extends Ninja {
    constructor (wisdom){
        super("master splinter", 10, 200, 10);
        this.wisdom = 10;
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }

}

const igaNinja = new Ninja ("Hattori", 10, 3, 0);
igaNinja.sayName();
igaNinja.showStatus();
igaNinja.drinkSake();

const kogaNinja = new SuperSensei ("Momochi")
kogaNinja.speakWisdom();
kogaNinja.showStatus();
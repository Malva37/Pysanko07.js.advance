 // Для виконання цього завдання використайте prototype.
// Напишіть функцію CoffeeMake, яка буде мати впрототипах 2 методи: on(),off().
// Далі напишіть ще методи для 3х типів кавоварок: капельна, ріжкова, каво-машина, які будуть наслідувати базовий функціонал CoffeeMake,а також мати власний.

function CoffeeMake() {}
CoffeeMake.prototype.on = function () {
    console.log('You turn ON', this.cup, 'starts to fill up ');
}
CoffeeMake.prototype.off = function () {
    console.log('You turn OFF', this.cup, 'is full');
}

//капельна

function DripCoffee(cup) {
    this.cup = cup;
}
DripCoffee.prototype = CoffeeMake.prototype;
DripCoffee.prototype.overheating = function () {
    console.log('You turn overheating function');
}
const dripCoffee = new DripCoffee('cup');

dripCoffee.on();
dripCoffee.off();
dripCoffee.overheating();

//ріжкова

function CarobCoffee(cup) {
    this.cup = cup;
}
CarobCoffee.prototype = CoffeeMake.prototype;
CarobCoffee.prototype.checkWaterLevel = function () {
    console.log('You check water level');
}
const carobCoffee = new CarobCoffee('cup');

carobCoffee.on();
carobCoffee.off();
carobCoffee.checkWaterLevel();

//каво-машина

function   CoffeeMachine(cup) {
    this.cup = cup;
}
CoffeeMachine.prototype = CoffeeMake.prototype;
CoffeeMachine.prototype.coretto = function () {
    console.log(`You check a ${this.cup} of coretto`);
}
CoffeeMachine.prototype.macchiato = function () {
    console.log(`You check  ${this.cup} of macchiato`);
}

const coffeeMachine = new CoffeeMachine('cup');

coffeeMachine.on();
coffeeMachine.off();
coffeeMachine.coretto();
coffeeMachine.macchiato();


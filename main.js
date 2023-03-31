//this is mainc class 
class Vehicle {
    constructor (name, type, year){
        this.name = name;
        this.type = type;
        this.year = year;
    };
    about(){
        console.log(`${this.name} is ${this.type} and is released in ${this.year}`);
    };
};

// sub- Class Car 
class Car extends Vehicle {
    constructor (name, type, year, mileage){
        super(name, type, year);
        this.mileage = mileage;
    };
    addMileage (mileage){
        this.mileage.push(mileage);
    };
    can(){
        console.log(`${this.name} is ${this.type}, is made in ${this.year} and can run ${this.mileage} km/h `)
    };
};
let tesla = new Car ('Tesla', 'car', 2020, 140);
tesla.about();
tesla.can();
let audi = new Car ('Audi', 'car', 2016, 200);
audi.about();
audi.can();

//sub-Class Bycicle
class Bycicle extends Vehicle {
    constructor(name, type, year, price){
        super(name, type, year);
        this.price = price;
    };
    addCost (price) {
        this.price.push(price);
    };
    getInfo(){
        console.log(`${this.name} is ${this.type} which was made in ${this.year} and costs ${this.price}$`)
    };
}
let roubaix = new Bycicle ('Roubaxi', 'Bycicle', 2020, 200);
roubaix.getInfo();
let galaxy = new Bycicle ('Galaxy', 'bycicle', 2011, 120);
galaxy.getInfo();










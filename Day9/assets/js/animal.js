//inheratens 
class Animal{
    constructor(name){
        this.name=name;
    }
    print(){
        console.log(`${this.name} is an animal.`);

    }
}
class rabit extends Animal{
    constructor(name,speed){
        super(name);
        this.speed=speed;
    }
    Details(){
        this.print();
        console.log(`Animal name is : ${this.name}\n it's speed is : ${this.speed}`);

    }
}
let animal = new rabit("Bunny", 2.5);
animal.Details();
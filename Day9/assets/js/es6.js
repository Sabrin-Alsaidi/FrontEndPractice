class User{
    cnt=0;

    constructor(name,address,age){
        this.cnt+=1;
        this.name=name;
        this.address=address;
        this.age=age;
    }

    getinfo(){
        console.log(`Hello Ms. ${this.name} \n your age is : ${this.age}\n  your address is : ${this.address}`);

    }
}
let user = new User("Sabrin ", "Muscat" , 28);
user.getinfo();
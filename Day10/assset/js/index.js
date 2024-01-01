let user={
    name: "Sabrin",
    age:28,
    Address: "Muscat",
}

let{name:userName , age:userAge, Address:userAddress}=user;
let{name,age,Address}=user;
let{name:MyName}=user;

console.log(userName ,userAge,userAddress);
console.log(name,age,Address);
console.log(MyName);
console.log("----------------------")
let users=["Sabrin",28,"Saba",20];
let[fname,age1, sName]=users;
console.log(fname,age1,sName);
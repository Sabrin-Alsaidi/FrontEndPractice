// let x= "Hello World";
// let y ="from JavaScript ";

// let myInfo={
//     name:"Saabrin",
//     age:28,
//     address:"Muscat",
// };
// console.log(x + " " +y+" "+myInfo.name);
// console.log(`${x} ${y} ${myInfo.name}`);

// let isDivisable=(x)=>(x%3==0);
// let number = prompt("Enter a number");
// let results = alert(isDivisable (number)? "It is Divisable by 3" : "It's not divisable by 3");
// console.log(results);

let tagName= document.getElementsByTagName("div");
let className= document.getElementsByClassName("sec");
let idName= document.getElementById("uni");
let aId=document.getElementById("try");

idName.addEventListener("click" , (e)=>{

    console.log(e.target);// it show where the action is happening 
    idName.style.backgroundColor ="lightblue";
})

aId.addEventListener("click",()=>{
    aId.style.textDecorationLine="underline";
})

// console.log(username);
// username.addEventListener("change",(e)=>{
//     console.log(e.target);
// })
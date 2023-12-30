let addbtn= document.querySelector("#addNewBook");
let bookName= document.querySelector("#newBook");
let BookList= document.querySelector("#bookList");
let dlebtn= document.getElementsByClassName(".dtl");
let hidebtn= document.querySelector("#hideBookList");
let search=document.querySelector("#search");
//add new book
addbtn.addEventListener("click",(e)=>{
    let name=bookName.value;
    let Li= document.createElement("li");
    let spn=document.createElement("span");
    let spn2=document.createElement("span");
    spn.textContent=name;
    spn2.textContent="Delete";
    Li.className="my-4";
    spn2.className +="btn btn-dark dtl";
    Li.appendChild(spn);
    Li.appendChild(spn2);
    BookList.appendChild(Li);
    bookName.value="";


});

//Search
searchBook = search.value;


//delete book 
BookList.addEventListener("click",(e)=>{
    if(e.target.className="btn btn-dark dtl"){
     e.target.parentElement.remove();   
    }

});

//hide button 
let flag=true;
hidebtn.addEventListener("click",()=>{
    if(flag){
        BookList.style.display="none";
        hidebtn.textContent="Unhide List";
        flag=false;
        

    }else{
        BookList.style.display="block";
        hidebtn.textContent="Hide List";
        flag=true;
    }
});
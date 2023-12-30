let Pname =document.getElementById("Pname");
let Pprice =document.getElementById("Pprice");
let Ptaxes =document.getElementById("Ptaxes");
let Pads =document.getElementById("Pads");
let discount =document.getElementById("discount");
let total =document.getElementById("total");
let count =document.getElementById("count");
let category =document.getElementById("category");
let submit =document.getElementById("submit");
// let nameSearch = document.querySelector("searchByName");
// let categorySearch = document.querySelector("searchByCategory");


let mood="Create";
let tmp;

//get total
function getTotal(){
    if(Pprice.value!=''){
        let result=(+Pprice.value + +Ptaxes.value + +Pads.value)- +discount.value;
        total.innerHTML=result;
        total.style.background='#040';
    }else{
        total.innerHTML=' ';
        total.style.background='#8e2020';
    }
}
//add product
let Pdata;
if(localStorage.product!=null){
    Pdata=JSON.parse(localStorage.product)
}else{
     Pdata=[];
}

submit.onclick=function(){
    let newProduct={
        name:Pname.value.toLowerCase(),
        price:Pprice.value,
        taxes:Ptaxes.value,
        ads:Pads.value,
        dis:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value.toLowerCase(),
    }
    //for update
    if(Pname.value!=" " 
    && Pprice.value!=" " 
    && category.value!=" " 
    && newProduct.count<=150){
        if(mood==="create"){
            for(let i=0;i<newProduct.count;i++){
                Pdata.push(newProduct);
            }
        }else{
            Pdata[tmp]=newProduct;
            mood="create";
            submit.innerHTML="Create";
            count.style.display="block";
    
    
        }
        clearData();
    }

   
    //count 
    if(newProduct.count >1){
        for(let i=0;i<newProduct.count;i++){
            Pdata.push(newProduct);
        }
    }else{
        Pdata.push(newProduct);
    }
   
    //save local storage 
localStorage.setItem('product', JSON.stringify(Pdata) );
//clearData();
ShowData();

}
//clear input 
function clearData(){
    Pname.value="";
    Pprice.value="";
    Ptaxes.value="";
    Pads.value="";
    discount.value="";
    total.innerHTML="";//because it is not input type 
    count.value="";
    category.value="";
}
//read /view data 

function ShowData(){
    let table='';
    for(let i=0;i<Pdata.length;i++){
        table +=`
        <tr>
            <td>${i+1}</td>
            <td>${Pdata[i].name}</td>
            <td>${Pdata[i].price}</td>
            <td>${Pdata[i].taxes}</td>
            <td>${Pdata[i].ads}</td>
            <td>${Pdata[i].dis}</td>
            <td>${Pdata[i].total}</td>
            <td>${Pdata[i].category}</td>
            <td><button id="update" onclick="updateDsta(${i})">Update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>

        </tr> `;
    }
    document.getElementById('tBody').innerHTML=table;
    //show Delete all button
    let btnDelete=document.getElementById("deleteAll")
    if (Pdata.length>0){
        btnDelete.innerHTML=` <button id="delete" onclick="deletealldata()">Delete All(${Pdata.length})</button>`;
    }else{
        btnDelete.innerHTML='';
    }
}
ShowData();
//delete
function deleteData(i){
    Pdata.splice(i,1);
    localStorage.product = JSON.stringify(Pdata);
    ShowData();
}
//Delete all 
function deletealldata(){
    localStorage.clear();
    Pdata.splice(0);
    ShowData();
}

//update 
function updateDsta(i){
    Pname.value=Pdata[i].name;
    Pprice.value=Pdata[i].price;
    Ptaxes.value=Pdata[i].taxes;
    Pads.value=Pdata[i].ads;
    discount.value=Pdata[i].dis;
    getTotal();
    count.style.display="none";
    category.value=Pdata[i].category;
    submit.innerHTML="Update";
    mood="update";
    tmp=i;
    scroll({
        top:0,
        behavior:"smooth",
    })
   
}
//search
let searchMood="Pname";

function getSearchMood(id){
    // console.log(id);
    let searchtxt=document.getElementById("search");

    if(id == "searchByName" ){
        searchMood = "Pname";
        searchtxt.placeholder = "Search By Name";
    }else{
        searchMood = "category";
        searchtxt.placeholder = "Search By Category";

    }
    searchtxt.focus();
    searchtxt.value="";
    ShowData();

}
function searchDate(value){
    let table='';
    if(searchMood === 'Pname'){
        for(let i = 0; i < Pdata.length; i++)
        {
            if(Pdata[i].name.includes(value.toLowerCase())){
                table +=`
                <tr>
                    <td>${i}</td>
                    <td>${Pdata[i].name}</td>
                    <td>${Pdata[i].price}</td>
                    <td>${Pdata[i].taxes}</td>
                    <td>${Pdata[i].ads}</td>
                    <td>${Pdata[i].dis}</td>
                    <td>${Pdata[i].total}</td>
                    <td>${Pdata[i].category}</td>
                    <td><button id="update" onclick="updateDsta(${i})">Update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>
                </tr> `;
            } 
        }
    }else{
        for(let i = 0; i < Pdata.length; i++)
        {
            if(Pdata[i].category.includes(value.toLowerCase())){
                table +=`
                <tr>
                    <td>${i}</td>
                    <td>${Pdata[i].name}</td>
                    <td>${Pdata[i].price}</td>
                    <td>${Pdata[i].taxes}</td>
                    <td>${Pdata[i].ads}</td>
                    <td>${Pdata[i].dis}</td>
                    <td>${Pdata[i].total}</td>
                    <td>${Pdata[i].category}</td>
                    <td><button id="update" onclick="updateDsta(${i})">Update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>
                </tr> `;
            }
        }
    }
    document.getElementById('tBody').innerHTML=table;
}
//validation / clean data 


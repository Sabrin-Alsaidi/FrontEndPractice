fetch('https://fakestoreapi.com/products')
.then(res=>res.json)
.then(json=>console.log(json))
.catch(err=>console.log("There is no internet connection"));

async function GetAllProdects(){
    console.log("hello")
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    // return data;
    console.log(data);
}
GetAllProdects();


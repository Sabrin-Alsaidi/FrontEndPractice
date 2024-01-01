
let userInput= prompt("Enter your GitHub username");
let url= `http://api.github.com/users/${userInput} `;
// fetch(url)
// .then(respone => respone.json())
// .then(json => console.log(json))
// .catch(err=> console.log(err))


async function loadData(){
    let obj = await fetch(url);
    let dtt= await obj.json();
    await console.log(dtt);

    document.querySelector("#main").innerHTML=`<img src=${dtt.avatar_url} alt="avatars_url" width="50px"; height="50px">`;
}
loadData();
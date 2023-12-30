 const Tasks = document.querySelectorAll(".task");
 const WeekDaysBox = document.querySelectorAll(".sec-1-pt-1");
 const todoinput= document.getElementById("todo-task");
 const inputForm = document.getElementById("SundayTask");
 //const inputForm = document.getElementById("input-form");
const sundayBox=document.querySelector(".suday");

//  Tasks.forEach(task => {
//     task.addEventListener
//  });

Tasks.forEach((task) => {
    task.addEventListener("dragstart",()=>{
        task.classList.add("is_dragging");
    });  

    task.addEventListener("dragend",()=>{
        task.classList.remove("is_dragging");
    });
});
WeekDaysBox.forEach((zone)=>{
    zone.addEventListener("dragover",(e)=>{
        
        e.preventDefault();
        const bottomTask = insertAboveTask(zone, e.clientY);
        const cutTask=document.querySelector(".is_dragging");
        if(!bottomTask){
            zone.appendChild(cutTask);
        }else{
            zone.insertBefore(cutTask, bottomTask);
        }
        
    });
});

const insertAboveTask=(zone,mouseY)=>{
    const els =zone.querySelectorAll(".task:not(.is_dragging")
    let closestTask=null;
    let closestOffset=Number.NEGATIVE_INFINITY;

    els.forEach((task)=>{
        const {top}=task.getBoundingClientRect();
        const offset=mouseY-top;
        if(offset<0&&offset>closestOffset){
            closestOffset=offset;
            closestTask=task;
        }
    });
    return closestTask;
};

//Add button
inputForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const inputData=todoinput.value;
    if(!inputData)return;
        //alert("Please write your task first");

    console.log("hello");

    const newDiv=document.createElement("div");
    const nesCBox=document.createElement("");
    const newTask=document.createElement("div");

    newTask.classList.add("task");
    newTask.setAttribute("draggable","true");
    newTask.innerText=inputData;
        
    Tasks.forEach((task) => {
        task.addEventListener("dragstart",()=>{
            task.classList.add("is_dragging");
        });  
    
        task.addEventListener("dragend",()=>{
            task.classList.remove("is_dragging");
        });
    });

    sundayBox.appendChild(newTask);
    todoinput.value="";
});




// inputForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const inputData=todoinput.value;
//     if(!inputData)return;
//         //alert("Please write your task first");

//     console.log("hello");

//     const newTask=document.createElement("p");
//     newTask.classList.add("task");
//     newTask.setAttribute("draggable","true");
//     newTask.innerText=inputData;
        
//     Tasks.forEach((task) => {
//         task.addEventListener("dragstart",()=>{
//             task.classList.add("is_dragging");
//         });  
    
//         task.addEventListener("dragend",()=>{
//             task.classList.remove("is_dragging");
//         });
//     });

//     sundayBox.appendChild(newTask);
    /*todoinput.value="";*/
// });

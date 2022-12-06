
//DEFINATIONS 

const input = document.querySelector('.input-bar');
const addbutton = document.querySelector('.addtoTask-btn');
const divtask = document.querySelector('.tasks');
//SAVING VALUE AS ARRAY  IN LOCALSTORAGE
const tasksCollection = [];
//
//1. const completed = document.querySelector('.fa-sharp');
//2. const remove = document.querySelector('.fa-xmark');
//3. const clearall = document.querySelector(".clearall");
const currenttask = document.querySelectorAll('.clearall');
const completedtask = document.querySelectorAll('.itemBlock.completed');



//ACTIVE AND DISABLE BUTTONS

input.addEventListener('keyup', ()=> {
    if (input.value.trim() !==0){
        addbutton.classList.add('active')
    }
    else {
        addbutton.classList.remove('.active')
        
    }
})


//ADDING / INPUTING TASKS

document.querySelector('.addtoTask-btn').onclick = function(){
    if (document.querySelector('#newtask input').value.length == 0){
        alert("Please Input a Task")
    }
    else{
        tasksCollection.push(input.value)
        document.querySelector('.tasks').innerHTML +=
        `
        <div class="icon-btn">
        <p class="parag">${input.value}</p>
        <div>
        <i class="fa-sharp fa-solid fa-pencil"></i>
        <i class="fa-solid fa-xmark"></i>
        </div>
        </div>
        `;


        //ADDING TO LOCAL STORAGE

        window.localStorage.setItem("tasks", JSON.stringify(tasksCollection));
        input.value = "";
    } 
};

// 4.       //COMPLETED

//        tasks.addEventListener('click', (e) => {
//            if (e.target.classList.contains('fa-solid fa-pencil')){
//         window.localStorage.removeItem('parag');
//       }
//  });

//       // DELETE ITEMS FROM LISTS

//         tasks.addEventListener('click', (e) => {
//             if (e.target.classList.contains('fa-xmark')){
//                 window.localStorage.removeItem('itemBlock');
//    }
// });
// // CLEAR-ALL ITEMS FROM LISTS

// tasks.addEventListener('click', (e) => {
//     if (e.target.classList.contains('clearall')){
//         window.localStorage.clear('iclearall');
// }
// });
for (var i = 0; i <currenttask.length; i++){
    currenttask[i].onclick = function (){
        this.parentNode.remove();
    }
};

for(var i = 0; i < tasksCollection.length; i++){
    completedtask[i].onclick = function (){
        this.classList.toggle('itemBlock.completed');
    }
};






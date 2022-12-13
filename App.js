//DEFINITIONS 

const input = document.querySelector('.input-bar');
const addbutton = document.querySelector('.addtoTask-btn');
const divtask = document.querySelector('.tasks');
//SAVING VALUE AS ARRAY  IN LOCALSTORAGE
const tasksCollection = [];
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
        alert("Please input a Task")
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

      //CLEARING ITEMS FROM THE LIST

for (var i = 0; i < currenttask.length; i++){
    currenttask[i].onclick = function (){
        this.parentNode.remove();
    }
};

    //COMPLETE

for(var i = 0; i < tasksCollection.length; i++){
    completedtask[i].onclick = function (){
        this.classList.toggle('itemBlock.completed');
    }
};
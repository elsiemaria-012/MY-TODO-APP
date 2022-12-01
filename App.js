
//DEFINATIONS

const input = document.querySelector('.input-bar');
const addbutton = document.querySelector('.addtoTask');
const divtask = document.querySelector('.tasks');


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

document.querySelector('.addtoTask').onclick = function(){
    if (document.querySelector('#newtask input').value.length == 0){
        alert("Please Inpute a Task")
    }
    else{
        document.querySelector('.tasks').innerHTML +=
        `<p>${input.value}</p>
        <div class = "icon-btn">
        <i class="fa-sharp fa-solid fa-pencil"></i>
        <i class="fa-solid fa-xmark"></i>`
    } 
}

//DELETE ITEMS FROM LISTS


tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})

//COMPLETED

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-solid fa-pencil')){
        e.target.parentElement.parentElement.toggle(completed  );
    }
})


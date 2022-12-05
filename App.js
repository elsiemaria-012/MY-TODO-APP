
//DEFINATIONS 

const input = document.querySelector('.input-bar');
const addbutton = document.querySelector('.addtoTask-btn');
const divtask = document.querySelector('.tasks');
const tasksCollection = [];
const completed = document.querySelector('.fa-sharp');
const remove = document.querySelector('.fa-xmark');


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
        alert("Please Inpute a Task")
    }
    else{
        tasksCollection.push(input.value)
        document.querySelector('.tasks').innerHTML +=
        `
        <div class="icon-btn">
        <p>${input.value}</p>
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

       //COMPLETED

       tasks.addEventListener('click', (e) => {
           if (e.target.classList.contains('fa-solid fa-pencil')){
        window.localStorage.removeItem('fa-solid fa-pencil');
      }
 });

      // DELETE ITEMS FROM LISTS

        tasks.addEventListener('click', (e) => {
            if (e.target.classList.contains('fa-xmark')){
                window.localStorage.removeItem('fa-solid fa-pencil');
   }
});




document.querySelector('.addtoTask').onclick = function(){
    if (document.querySelector('#newtask input').value.length !== 0){
        alert("Please Inpute a Task")
    }   
}

//DEFINATIONS

let input = document.querySelector('.input-bar');
let addbutton = document.querySelector('.addtoTask');
let divtask = document.querySelector('.tasks');
 
//ACTIVE AND DISABLE BUTTONS

input.addEventListener('keyup', ()=> {
    if (input.value.trim() !=0){
        addbutton.classList.add('active')
    }
    else {
        addbutton.classList.remove('.active')
    }
})

//ADDING LIST ITEMS TO LIST

addbutton.addEventListener('click', ()=> {
    if(input.value.trim() !=0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${ input.value }</p>
        <div class="item-btn">
            <i class="fa-sharp fa-solid fa-pencil"></i>
            <i class="fa-solid fa-xmark"></i>
        </div>`

        trasks.appendChild(newItem);
        input.value = '';
    } else {
        alert ('Please enter a Task')
    }
})
import { updateValue } from "./btnHandlers";
import { iconChanger } from "./iconChanger";

// import { taskRegex } from "./regex"

export const addTaskHandler = (inp, cancelIcn) => {
    const input = document.querySelector(inp);
    const cancelIcon = document.querySelector(cancelIcn);
    // visibility handle of cancel Icon --->
    input.addEventListener('input', (e)=>{
        
        if (!input.value.trim()) {
            iconChanger(cancelIcon,'inline-flex', 'hidden');
        }
        else{
            iconChanger(cancelIcon, 'hidden', 'inline-flex');
        }
    })

    cancelIcon.addEventListener('click', (e) => {
        input.value = '';
        iconChanger(cancelIcon,'inline-flex','hidden');
    })

}

// .add-btn table  tbody

export const todoHandler = () => {
    const addTaskBtn = document.querySelector('.add-btn');
    const tbody = document.querySelector('tbody');
    const inputValue = document.querySelector('#search');
    const tasks = [];

    // for modal 
    const editedInput = document.querySelector('#edit-task-input');
    const updatedButton = document.querySelector('#update-task-btn');
    const closeButton = document.querySelector('#cancel-edit-btn');


    
    addTaskBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let newTasks = {
                id: `${new Date().getTime()}`,
                task: inputValue.value.trim(),
                buttons: {
                    edit : `<button class="edit-btn py-1 px-2 bg-gray-400 rounded" data-id="${new Date().getTime()}">Edit</button>`,
                    complete: `<button class="done-btn py-1 px-2 bg-green-400 rounded">complete</button>`,
                    remove : `<button class="delete-btn py-1 px-2 bg-red-400 rounded">remove</button>`
                }
    
        }

     tasks.push(newTasks);
     tbody.innerHTML = '';

     tasks.forEach((task, index)=>{
        let row = document.createElement('tr');
        row.classList.add('text-white');
        row.setAttribute('data-id', task.id);
        row.innerHTML =`
            <td class="p-2">${index < 9 ? '0' + (index + 1) : index + 1}</td>
            <td class="p-2">${task.id}</td>
            <td class="p-2">${task.task}</td>
            <td class="p-2" >${task.buttons.edit}</td>
            <td class="p-2">${task.buttons.complete}</td>
            <td class="p-2">${task.buttons.remove}</td>
        `;
        tbody.appendChild(row);
    })
    inputValue.value = '';
    updateValue(tasks)
})

}

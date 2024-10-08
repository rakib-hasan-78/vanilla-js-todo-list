import { btnToComplete, updateValue } from "./btnHandlers";
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
    const cancelIcon = document.querySelector('.cancel-mark');
    const addTaskBtn = document.querySelector('.add-btn');
    const tbody = document.querySelector('tbody');
    const inputValue = document.querySelector('#search');
    const tasks = [];
    
    addTaskBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let newTasks = {
                id: `${new Date().getTime()}`,
                task: inputValue.value.trim(),
                completed: false,
                buttons: {
                    edit : `<button class="edit-btn py-1 px-2 bg-gray-400 rounded" data-id="${new Date().getTime()}">Edit</button>`,
                    complete: `<button class="done-btn py-1 px-2 bg-green-400 rounded">complete</button>`,
                    remove : `<button class="delete-btn py-1 px-2 bg-red-400 rounded">remove</button>`
                }
    
        }

     tasks.push(newTasks);
     tbody.innerHTML = '';
     cancelIcon.classList.remove('inline-flex');
     cancelIcon.classList.add('hidden');
     tasks.forEach((task, index)=>{
        let taskClass = task.completed&&'line-through';
        let completeBtnText = task.completed ? 'Undo' : 'Complete';
        const editBtnDisabled = task.completed ? 'disabled' : '';
        let row = document.createElement('tr');
        row.classList.add('text-white','bg-blue-500');
        row.setAttribute('data-id', task.id);
        row.innerHTML =`
            <td class="p-2">${index < 9 ? '0' + (index + 1) : index + 1}</td>
            <td class="p-2">${task.id}</td>
            <td class="p-2 ${taskClass}">${task.task}</td>
            <td class="p-2" >${task.buttons.edit}</td>
            <td class="p-2 ">${task.buttons.complete}</td>
            <td class="p-2">${task.buttons.remove}</td>
        `;
        tbody.appendChild(row);

        // Now handle button states after the row is added
        const editBtn = row.querySelector('.edit-btn');
        const completeBtn = row.querySelector('.done-btn');
        
        // Disable edit button if the task is completed
        if (task.completed) {
            editBtn.setAttribute('disabled', true);
        }

        // Update the complete button text
        completeBtn.textContent = completeBtnText;
    })

    inputValue.value = '';
    updateValue(tasks);
    btnToComplete(tasks )
})

}

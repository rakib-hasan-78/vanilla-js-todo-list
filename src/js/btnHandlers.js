import { updateModal } from "./updateModal";

export const updateValue = (tasks) => {

    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row=>{
        const btn = row.querySelector('.edit-btn');
        btn.addEventListener('click', (e)=>{
            e.preventDefault();
            const taskId = e.target.getAttribute('data-id');
            const taskToEdit = tasks.find(task=>task.id===taskId)
            if (taskToEdit) {
                updateModal(taskToEdit, tasks)
            }
        })
    })
}

export const  btnToComplete = (tasks) => {
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row=>{
        const editBtn = row.querySelector('.edit-btn');
        const btn = row.querySelector('.done-btn');
        btn.addEventListener('click', (e) =>{
            e.preventDefault();
            const rowId = row.getAttribute('data-id')
            const task = tasks.find(task=> task.id===rowId);
            if (task) {
                task.completed=!task.completed;
                const item = row.querySelector('td:nth-child(3)');
                if (task.completed) {
                    item.classList.add('line-through');
                    editBtn.disabled = true;
                    btn.textContent = `undo`

                }else {
                    item.classList.remove('line-through')
                    editBtn.disabled = false;
                    btn.textContent = `complete`

                }
            }
        })
    })
} 

export const  btnToRemove = (tasks) => {
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row=>{
        const btnDelete = row.querySelector('.delete-btn');
        btnDelete.addEventListener('click',(e)=>{
            e.preventDefault();
            const rowId = row.getAttribute('data-id');
            const taskIndex = tasks.findIndex(task => task.id === rowId);
            if (taskIndex!==-1) {
                tasks.splice(taskIndex,1);
                row.remove();
            }
        })
    })
} 
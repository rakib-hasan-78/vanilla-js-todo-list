import { updateModal } from "./updateModal";

export const updateValue = (tasks) => {

    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row=>{
        const btn = row.querySelector('.edit-btn');
        btn.addEventListener('click', (e)=>{
            const taskId = e.target.getAttribute('data-id');
            const taskToEdit = tasks.find(task=>task.id===taskId)
            if (taskToEdit) {
                updateModal(taskToEdit, tasks)
            }
        })
    })
}


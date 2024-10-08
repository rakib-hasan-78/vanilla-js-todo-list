       
export const updateModal = (taskToEdit, tasks) => {
    const mainModal = document.querySelector('#edit-modal');
    mainModal.classList.remove('hidden');
    mainModal.innerHTML=`

        <div class="bg-gradient-to-r from-cyan-600 to-sky-600 p-6 rounded-lg shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 z-30">
            <h2 class="text-2xl font-extrabold mb-4 text-center text-sky-50 uppercase">update Task</h2>
            <input id="edit-task-input" type="text" class=" p-2 w-full mb-4 bg-gradient-to-r from-cyan-700 to-sky-800 rounded-md outline-0 border-0 text-sky-50 shadow-md capitalize placeholder:text-sky-50" placeholder="Update your task here...">
            <div class="flex justify-center gap-4">
                <button id="update-task-btn" class="py-2 px-4 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 text-sky-50 capitalize rounded shadow-md outline-0">Update</button>

                <button id="cancel-edit-btn" class="py-2 px-4 bg-gradient-to-r from-red-500 via-pink-600 to-rose-600 text-sky-50 rounded capitalize shadow-md outline-0">Cancel</button>
            </div>
        </div>

    `;
    // pre-fill value of actual tasks ---->
    const editedInput = document.getElementById('edit-task-input');
    editedInput.value = taskToEdit.task;

    // grabbing update & cancel buttons
    const updateButton = document.getElementById('update-task-btn');
    const cancelBtn = document.getElementById('cancel-edit-btn');
    // setting button dataId
    updateButton.setAttribute('data-id', taskToEdit.id);

    updateButton.addEventListener('click', (e) => {
     const updatedValue = editedInput.value.trim();

     if (updatedValue) {
         const taskId = taskToEdit.id;
         const taskIndex = tasks.findIndex(task=>task.id===taskId);

         if (taskIndex!==-1) {
            tasks[taskIndex].task = updatedValue;
            updateToDom(updatedValue, taskId);
            mainModal.classList.add('hidden');
        }
    }
    
})

// modal cancel button 
const cancelModal = () => {
    cancelBtn.addEventListener('click', () => {
            mainModal.classList.add('hidden');

        })
    }
    cancelModal()
}




// UI Update 
const updateToDom = (updatedValue, taskId) => {
    const taskRow = document.querySelector(`tbody tr[data-id="${taskId}"]`);
    const taskCell = taskRow.querySelector(`td:nth-child(3)`);
    taskCell.textContent = updatedValue;
}


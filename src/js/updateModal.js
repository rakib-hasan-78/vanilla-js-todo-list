       
// export const updateModal = (taskToEdit, tasks) => {
//     const mainModal = document.querySelector('#edit-modal');
//     mainModal.classList.remove('hidden');
//     mainModal.innerHTML=`

//         <div class="bg-gradient-to-r from-cyan-600 to-sky-600 p-6 rounded-lg shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 z-30">
//             <h2 class="text-2xl font-extrabold mb-4 text-center text-sky-50 uppercase">update Task</h2>
//             <input id="edit-task-input" type="text" class=" p-2 w-full mb-4 bg-gradient-to-r from-cyan-700 to-sky-800 rounded-md outline-0 border-0 text-sky-50 shadow-md capitalize placeholder:text-sky-50" placeholder="Update your task here...">
//             <div class="flex justify-center gap-4">
//                 <button id="update-task-btn" class="py-2 px-4 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 text-sky-50 capitalize rounded shadow-md outline-0">Update</button>

//                 <button id="cancel-edit-btn" class="py-2 px-4 bg-gradient-to-r from-red-500 via-pink-600 to-rose-600 text-sky-50 rounded capitalize shadow-md outline-0">Cancel</button>
//             </div>
//         </div>

//     `
//     const editedInput = document.getElementById('edit-task-input');
//     editedInput.value = taskToEdit.task;
//     const updateButton = document.getElementById('update-task-btn');
//     const cancelBtn = document.getElementById('cancel-edit-btn');
//     updateButton.setAttribute('data-id', taskToEdit.id);


//     updateButton.addEventListener('click', ()=>{
//         const updatedInput = editedInput.value.trim();
//         if (updatedInput) {
//             const taskId = taskToEdit.id;
//             console.log(taskId)
//             const taskIndex = tasks.findIndex(task=>task.id===taskId);
//             if (taskIndex!==-1) {
//                 tasks[taskId].task = updatedInput;
//                 updateTaskInDOM(taskId, updatedTask);
//             } 
//         }
//     })




// }
        
        
// // Update the task in the DOM (specific table row)
// const updateTaskInDOM = (taskId, updatedTask) => {
//     const taskRow = document.querySelector(`tbody tr td[data-id="${taskId}"]`).parentNode;
//     const taskCell = taskRow.querySelector('td:nth-child(3)');
//     taskCell.textContent = updatedTask;
// };




export const updateModal = (taskToEdit, tasks) => {
    const mainModal = document.querySelector('#edit-modal');
    mainModal.classList.remove('hidden');
    
    mainModal.innerHTML = `
        <div class="bg-gradient-to-r from-cyan-600 to-sky-600 p-6 rounded-lg shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 z-30">
            <h2 class="text-2xl font-extrabold mb-4 text-center text-sky-50 uppercase">Update Task</h2>
            <input id="edit-task-input" type="text" class="p-2 w-full mb-4 bg-gradient-to-r from-cyan-700 to-sky-800 rounded-md outline-0 border-0 text-sky-50 shadow-md capitalize placeholder:text-sky-50" placeholder="Update your task here...">
            <div class="flex justify-center gap-4">
                <button id="update-task-btn" class="py-2 px-4 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 text-sky-50 capitalize rounded shadow-md outline-0">Update</button>
                <button id="cancel-edit-btn" class="py-2 px-4 bg-gradient-to-r from-red-500 via-pink-600 to-rose-600 text-sky-50 rounded capitalize shadow-md outline-0">Cancel</button>
            </div>
        </div>
    `;

    // Pre-fill the input with the current task value
    const editedInput = document.getElementById('edit-task-input');
    editedInput.value = taskToEdit.task;

    // Get references to the buttons
    const updateButton = document.getElementById('update-task-btn');
    const cancelButton = document.getElementById('cancel-edit-btn');

    // Set task ID to the update button
    updateButton.setAttribute('data-id', taskToEdit.id);

    // Handle Update Button Click
    updateButton.addEventListener('click', () => {
        const updatedTask = editedInput.value.trim();
        
        if (updatedTask) {
            // Find the task in the array by id
            const taskId = taskToEdit.id;
            const taskIndex = tasks.findIndex(task => task.id === taskId);
            
            if (taskIndex !== -1) {
                tasks[taskIndex].task = updatedTask;

                // Update the UI
                updateTaskInDOM(taskId, updatedTask);

                // Close the modal
                mainModal.classList.add('hidden');
            } else {
                console.error(`Task with ID ${taskId} not found in the array.`);
            }
        } else {
            console.error('Updated task input is empty.');
        }
    });

    // Handle Cancel Button Click
    cancelButton.addEventListener('click', () => {
        mainModal.classList.add('hidden');
    });
};

const updateTaskInDOM = (taskId, updatedTask) => {
    // Find the table row based on the task ID in the row's data-id attribute
    const taskRow = document.querySelector(`tbody tr[data-id="${taskId}"]`);
    
    if (taskRow) {
        // Locate the third column (which contains the task description) and update it
        const taskCell = taskRow.querySelector('td:nth-child(3)');
        taskCell.textContent = updatedTask;
    } else {
        console.error(`Task row with ID ${taskId} not found in the DOM.`);
    }
};

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

// #search, .add-btn .cancel-mark

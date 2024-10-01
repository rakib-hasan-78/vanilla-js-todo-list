
export const textAnimation = (value) => {
    
    const text = document.querySelector(value);
    const letters = text.innerHTML.split('');
    text.innerHTML = '';
    [...letters].forEach(letter=>{
        text.innerHTML += `<span class="letter">${letter}</span>`
    });
}


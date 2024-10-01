export const capitalize = (id) => {
    let mainText = document.getElementById(id);
    let text = mainText.textContent;
    let modifiedText = text.toLocaleLowerCase().split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ')
    
    mainText.textContent = modifiedText;
}
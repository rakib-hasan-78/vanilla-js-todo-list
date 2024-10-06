export const iconChanger =(targetKey, removeClass, addClass) => {
    targetKey.classList.remove(removeClass);
    targetKey.classList.add(addClass);
}
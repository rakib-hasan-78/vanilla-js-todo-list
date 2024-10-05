export const dateSet = (userDate) => {
    const date = new Date();
    const weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const monthList = ['january','february','march','april', 'may', 'june', 'july','august','september','october', 'november', 'december'];
    const today = weekDays[date.getDay()]
    const currentMonth = monthList[date.getMonth()];
    const monthDay = date.getDate();
    document.querySelector(userDate).innerHTML=`${today}, ${currentMonth} ${monthDay}, ${date.getFullYear()}`
}

export const watch = (userWatch) => {

    setInterval(()=>{
        
        const date = new Date();
        const mins = date.getMinutes();
        let hours = date.getHours();
        hours = hours%12 ||12;
        
        const seconds = date.getSeconds();
        document.querySelector(userWatch).innerHTML=`${hours<10 ? '0'+hours : hours} : ${mins<10 ? '0'+mins:mins} : ${seconds<10 ? '0'+seconds:seconds} ${hours>=12 ? 'PM' : 'AM'}.`;

    },1000)
}

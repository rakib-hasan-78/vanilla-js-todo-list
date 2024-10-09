export const footer = () => {
 document.querySelector('#footer').innerHTML=`
    <p>&copy; ${new Date().getFullYear()} All the Rights Reserved.</p>
    <p>Developed By <span class="text-sky-600 font-bold font-serif">Md Rakibul Hasan</span></p>
 `   
}
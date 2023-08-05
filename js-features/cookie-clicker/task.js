
const imgCookie_ID = document.getElementById('cookie');

imgCookie_ID.onclick = function(){
    const clickCounter_ID = document.getElementById('clicker__counter');
    clickCounter_ID.textContent++
    imgCookie_ID.width = 250;
    imgCookie_ID.height = 200;
    setTimeout(()=>{
        imgCookie_ID.width = 200;
        imgCookie_ID.height = 150;
    },100) 
}


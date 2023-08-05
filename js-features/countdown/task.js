

//const intervalId = null;
// function counter () {
//     const timer = document.getElementById('timer');
//     timer.textContent--;
//     if(timer.textContent == '50')
//     {
//         alert('Вы победили в конкурсе!');
//         clearInterval(intervalId);
//     }
// }
// intervalId = setInterval(counter,1000);



//const intervalId = setInterval(()=>{
//     const timer = document.getElementById('timer');
//     timer.textContent--;
//     if(timer.textContent == '50')
//     {
//         alert('Вы победили в конкурсе!');
//         clearInterval(intervalId);
//     }
// },1000);



function reverseTimer(idHTML, min=0, sec=0){
    let intervalId = null;
    return function(){
        intervalId = setInterval(()=>{
            sec--;
            const strMin = min < 10 ? "0" + min : min;
            const stSsec = sec < 10 ? "0" + sec : sec;
            idHTML.textContent = `00:${strMin}:${stSsec}`;
            if(sec == 0 && min == 0){
                alert('Вы победили в конкурсе!')
                clearInterval(intervalId);
            }
            if(sec == 0){ min--, sec=59 }
        },1000);

    }
}

const revTimer = reverseTimer(document.getElementById('timer'), 1,3);
revTimer();






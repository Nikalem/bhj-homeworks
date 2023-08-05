
const deadID = document.getElementById("dead");
const lostID = document.getElementById("lost");

for(let index = 1; index < 10; index++){
    const holeID = document.getElementById(`hole${index}`);

    holeID.onclick = function(){
        if(holeID.className.includes('hole_has-mole')){
            deadID.textContent++
        }else {
            lostID.textContent++
        }

        if(deadID.textContent >= 10){
            alert('Вы победили!');
            deadID.textContent = 0;
            lostID.textContent = 0;
        }
        if(lostID.textContent >= 5){
            alert('Вы проиграли!');
            deadID.textContent = 0;
            lostID.textContent = 0;
        }
    }
}





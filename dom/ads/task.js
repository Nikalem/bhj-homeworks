
const rotators = document.querySelectorAll(".rotator__case");

let i=0;


setInterval(() => {
    if(i >= rotators.length-1){
        rotators[i].classList.remove('rotator__case_active')
        rotators[0].classList.add('rotator__case_active');
        i=0;
    } else {
        if(rotators[i].classList.contains('rotator__case_active')){
            rotators[i].classList.remove('rotator__case_active');
            rotators[i+1].classList.add('rotator__case_active');
            i++;
        }
    }

}, 1000);

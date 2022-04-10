let chk = document.getElementById('chk');
let lbCircle = document.getElementById('lb-circle');

lbCircle.onclick = function(){

    if(chk.checked){
        lbCircle.classList.add('justify-content-end');
        lbCircle.classList.add('buzz-bg-4');
    }
    else  {
        lbCircle.classList.remove('justify-content-end');
        lbCircle.classList.remove('buzz-bg-4');
    }
}

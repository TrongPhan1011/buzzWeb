let chk = document.getElementById('chk');
let lbCircle = document.getElementById('lb-circle');

lbCircle.onclick = function () {

    if (chk.checked) {
        lbCircle.classList.add('justify-content-end');
        lbCircle.classList.add('buzz-bg-4');
    }
    else {
        lbCircle.classList.remove('justify-content-end');
        lbCircle.classList.remove('buzz-bg-4');
    }
}


var left = document.getElementById('attack-left');
var right = document.getElementById('attack-right');
left.onclick = function () {
    left.setAttribute("style", "border-right: 60px solid var(--buzz-color-4);");
    right.setAttribute("style", "border-left: 60px solid var(--buzz-color-3);");
}

right.onclick = function () {
    left.setAttribute("style", "border-right: 60px solid var(--buzz-color-3);");
    right.setAttribute("style", "border-left: 60px solid var(--buzz-color-4);");
}
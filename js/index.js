

function getInputNumber(id){
    return  `<input type="checkbox" id="${"chk-"+id}" style="display:none" />`;
}

function handleClickBtn(id) {
    let btn = document.getElementById(id);
    let inputBtn = document.getElementById("chk-"+id);


    btn.onclick = function (){
        btn.classList.add('buzz-btn-click');
    }
    btn.ondblclick = function () {
        
        
        btn.classList.remove('buzz-btn-click');
    }
}

function clickListHomeNumber(position){
    for (let i = 0; i < 5; i++) {
        handleClickBtn(`btn-home-number${position}-${i}`);
        
    }
}
function getListHomeNumber(position) {
    let s = '';
    for (let i = 0; i < 5; i++) {
        let temp = i + 1;
        // let inputBtnNumber = getInputNumber(`btn-home-number${position}-${i}`);
        s = s + ` <button id="btn-home-number${position}-${i}" class="buzz-btn">${temp}</button> ` ;
    }
    return s;
}


function getList60s(position) {
    let s = '';
    for (let i = 0; i < 5; i++) {
        
        if(i==0||i==4){
            s = s + `  <div id="btn-60s${position}-${i}" class="buzz-btn buzz-pos-re-hidden" >60s</div> `;

        }
        else {
            // let inputBtnNumber = getInputNumber(`btn-60s${position}-${i}`);
            s = s + `<button id="btn-60s${position}-${i}" class="buzz-btn ">60s</button>` ;
        }

    }
    return s;
}

function clickList60s(position){
    for (let i = 0; i < 5; i++) {
        handleClickBtn(`btn-60s${position}-${i}`);
        
    }
}

function handleClickCheck(chk, blockContent, btnPlus, i) {
    if (!chk.checked) {
        blockContent.classList.remove('buzz-h-40');
        blockContent.classList.remove('buzz-overflow');
        blockContent.classList.add('h-100');

        btnPlus.classList.add('d-none');

        let s = '';
       
        let listNumber = getListHomeNumber(i);
        let list60s = getList60s(i);

        blockContent.innerHTML = `
            <div id="" class="row m-0  w-100" style="height : 170px" >
                <div  class="col-1 p-0 d-flex align-items-center ">
                    <button id="btn-home-minus-${i}" type="button"  class="btn-minus-plus"><i class="fas fa-minus-circle buzz-text-color-4" style="font-size: 25px;"></i></button>
                    
                </div>
                <div id="txtItemTeam-${i}" class="col-10 p-0 pt-2 buzz-item-team" >
                    00
                </div>
                <div class="col-1 p-0 d-flex align-items-center justify-content-end " >
                    <button id="btn-home-plus-${i}" type="button" class="btn-minus-plus"><i class="fas fa-plus-circle buzz-text-color-4" style="font-size: 25px;"></i></button>
                    
                </div>
            </div>
            <div class="row m-0  " style="height:35%">
                <div class="row m-0  w-100 d-flex justify-content-between" style="font-size: 22px;">
                `+ listNumber + `
                    
                </div>
                <div class="row pt-3 m-0   w-100 d-flex justify-content-between">
                    `+list60s+`
                
                </div>
            </div>  
        `
        clickListHomeNumber(i);
        clickList60s(i);

    }
    else {
        blockContent.classList.add('buzz-h-40');
        blockContent.classList.add('buzz-overflow');
        blockContent.classList.remove('h-100');

        btnPlus.classList.remove('d-none');
        let s = '';
        for (let i = 0; i < 5; i++) {
            s += `
            
            <div class="row m-0  w-100 buzz-overflow pr-3 pl-3 ">
                <div class="col-3 p-1 d-flex justify-content-center ">
                    <button type="btn" class="buzz-btn buzz-btn-2"> 3 </button>
                </div>
                <div class="col-9 p-1  d-flex justify-content-between align-items-center">
                    <button type="btn" class="buzz-btn buzz-btn-3"> 1 </button>
                    <button type="btn" class="buzz-btn buzz-btn-3"> 2 </button>
                    <button type="btn" class="buzz-btn buzz-btn-3"> 3 </button>
                    <button type="btn" class="buzz-btn buzz-btn-3"> 4 </button>
                    <button type="btn" class="buzz-btn buzz-btn-3"> 5 </button>
                    
                </div>
            </div>
        
        `

        }
        blockContent.innerHTML = s;
    }


}



function clickCheck() {

    for (let i = 1; i < 3; i++) {
        const chk = document.getElementById('chk-' + i);
        const lbCircle = document.getElementById('lb-circle-' + i);
        const blockContent = document.getElementById('block-content-' + i);
        const btnPlus = document.getElementById('btn-plus-' + i);

        lbCircle.onclick = function () {

            if (chk.checked) {
                lbCircle.classList.add('justify-content-end');
                lbCircle.classList.add('buzz-bg-4');
            }
            else {
                lbCircle.classList.remove('justify-content-end');
                lbCircle.classList.remove('buzz-bg-4');

            }
            handleClickCheck(chk, blockContent, btnPlus, i);
            clickBtnHomeMinus();
            clickBtnHomePlus();



        }
        handleClickCheck(chk, blockContent, btnPlus, i);
    }


}

clickCheck();



function clickPlus() {
    for (let i = 1; i < 3; i++) {




        const btnPlus = document.getElementById('btn-plus-' + i);
        const blockContent = document.getElementById('block-content-' + i);

        btnPlus.onclick = function () {

            blockContent.innerHTML = blockContent.innerHTML + `
            <div class="row m-0  w-100 buzz-overflow pr-3 pl-3">
                <div class="col-3 p-1 d-flex justify-content-center ">
                    <button type="btn" class="buzz-btn  buzz-btn-2"> 3 </button>
                </div>
                <div class="col-9 p-1  d-flex justify-content-between align-items-center">
                    <button type="btn" class="buzz-btn buzz-btn-3"> 1 </button>
                    <button type="btn" class="buzz-btn buzz-btn-3"> 2 </button>
                    <button type="btn" class="buzz-btn buzz-btn-3"> 3 </button>
                    <button type="btn" class="buzz-btn buzz-btn-3"> 4 </button>
                    <button type="btn" class="buzz-btn buzz-btn-3"> 5 </button>
                    
                </div>
            </div>
        
        `
        }
    }
}
clickPlus();



function clickOpenFile() {
    for (let i = 1; i < 3; i++) {

        const lb = document.getElementById('lb-' + i);
        const input = document.getElementById('imgupload-' + i);

        lb.onclick = function (event) {
            event.preventDefault();
        }
        lb.ondblclick = function () {
            input.click();
        }
    }

}
clickOpenFile();



function clickBtnHomePlus() {
    for (let i = 1; i < 3; i++) {
        let btnPlus = document.getElementById("btn-home-plus-" + i);
        let txtItemTeam = document.getElementById(`txtItemTeam-${i}`);
        if (btnPlus != null) {

            btnPlus.onclick = function () {
                if (parseInt(txtItemTeam.innerHTML) < 9) {
                    let number = (parseInt(txtItemTeam.innerHTML) + 1)
                    txtItemTeam.innerHTML = "0" + number;
                }
                else txtItemTeam.innerHTML = parseInt(txtItemTeam.innerHTML) + 1;
            }
        }
    }
}
clickBtnHomePlus();

function clickBtnHomeMinus() {
    for (let i = 1; i < 3; i++) {
        let btnMinus = document.getElementById("btn-home-minus-" + i);
        let txtItemTeam = document.getElementById(`txtItemTeam-${i}`);

        if (btnMinus != null) {

            btnMinus.onclick = function () {
                if (parseInt(txtItemTeam.innerHTML) < 1) {
                    txtItemTeam.innerHTML = "00";
                }
                else if (parseInt(txtItemTeam.innerHTML) < 9) {
                    let number = (parseInt(txtItemTeam.innerHTML) - 1)
                    txtItemTeam.innerHTML = "0" + number;
                }
                else txtItemTeam.innerHTML = parseInt(txtItemTeam.innerHTML) - 1;
            }
        }
    }
}
clickBtnHomeMinus();

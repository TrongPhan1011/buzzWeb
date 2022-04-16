function handleClickCheck(chk, lbCircle, blockContent, btnPlus) {
    if (!chk.checked) {
        blockContent.classList.remove('buzz-h-40');
        blockContent.classList.remove('buzz-overflow');
        blockContent.classList.add('h-100');
        btnPlus.classList.add('d-none');
        blockContent.innerHTML = `
            <div id="" class="row m-0 w-100" style="70%">
                <div  class="col-1 p-0 d-flex align-items-center ">
                    <button type="button"  class="btn-minus-plus"><i class="fas fa-minus-circle buzz-text-color-4" style="font-size: 25px;"></i></button>
                    
                </div>
                <div class="col-10 p-0 buzz-item-team" >
                    00
                </div>
                <div class="col-1 p-0 d-flex align-items-center justify-content-end ">
                    <button type="button" class="btn-minus-plus"><i class="fas fa-plus-circle buzz-text-color-4" style="font-size: 25px;"></i></button>
                    
                </div>
            </div>
            <div class="row m-0 " style="height:30%">
                <div class="row m-0  w-100 d-flex justify-content-between" style="font-size: 22px;">
                    <button class="buzz-btn" style="font-size: 20px;">1</button>
                    <button class="buzz-btn">2</button>
                    <button class="buzz-btn">3</button>
                    <button class="buzz-btn">4</button>
                    <button class="buzz-btn">5</button>
                </div>
                <div class="row pt-3 m-0   w-100 d-flex justify-content-between">
                    <div class="buzz-btn buzz-pos-re-hidden" >60s</div>
                    <button class="buzz-btn ">60s</button>
                    <button class="buzz-btn ">60s</button>
                    <button class="buzz-btn ">60s</button>
                    <div class="buzz-btn buzz-pos-re-hidden"  >60s</div>
                
                </div>
            </div>  
        `

    }
    else {
        blockContent.classList.add('buzz-h-40');
        blockContent.classList.add('buzz-overflow');
        blockContent.classList.remove('h-100');
        btnPlus.classList.remove('d-none');
        let s = '';
        for (let i = 0; i < 5; i++) {
            s += `
            <div class="row m-0  w-100 buzz-overflow pr-3 pl-3">
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
            handleClickCheck(chk, lbCircle, blockContent, btnPlus);

        }
        handleClickCheck(chk, lbCircle, blockContent, btnPlus);
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
    }
}
clickPlus();
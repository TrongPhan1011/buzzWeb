

var thoiLuong = 0;
var stopWatchThiDau;
var stopWatchTanCong;


function bienDoiSoGiay(thoiLuongPhut, thoiLuongGiay) {

    return thoiLuongPhut * 60 + thoiLuongGiay;
}
function chayTranDau() {
    let dongHo = document.getElementById('buzz-DongHo');
    let chkDongHo = document.getElementById('chk-dongho');
    dongHo.onclick = function () {
        chkDongHo.click();
        if (chkDongHo.checked) {
            thoiGianTranDau();
        }
        else {
            tamDungTranDau();
            tamDungTanCong();
        }
    }
}

function thoiGianTranDau() {


    thoiLuong = 0;
    thoiLuongPhut = parseInt(document.getElementById('soPhut').innerHTML);
    thoiLuongGiay = parseInt(document.getElementById('soGiay').innerHTML);

    thoiLuong = bienDoiSoGiay(thoiLuongPhut, thoiLuongGiay);
    //ham dem nguoc

    clearTimeout(stopWatchThiDau);
    demNguoc();
    tanCong24s();
}
chayTranDau();

function demNguoc() {
    thoiLuong--;
    soPhut = Math.floor(thoiLuong / 60);
    soGiay = thoiLuong % 60;

    soPhut = soPhut < 10 ? "0" + soPhut : soPhut;
    soGiay = soGiay < 10 ? "0" + soGiay : soGiay;
    //dien vao so phut va so giay 
    document.getElementById("soPhut").innerHTML = soPhut;
    document.getElementById("soGiay").innerHTML = soGiay;


    if (thoiLuong > 0)
        stopWatchThiDau = setTimeout(demNguoc, 1000);
}
var thoiLuongTanCong = 0;
var thoiGianTanCong = document.getElementById('buzz-24s');
function tanCong24s() {
    thoiLuongTanCong = document.getElementById('buzz-24s').innerHTML;
    clearTimeout(stopWatchTanCong);
    demNguocTanCong();

}

function demNguocTanCong() {
    thoiLuongTanCong--;
    soGiay = thoiLuongTanCong % 60;
    soGiay = soGiay < 10 ? "0" + soGiay : soGiay;
    //dien vao so giay 
    document.getElementById("buzz-24s").innerHTML = soGiay;

    if (thoiLuongTanCong > 0)
        stopWatchTanCong = setTimeout(demNguocTanCong, 1000);



}


function tamDungTanCong() {
    clearTimeout(stopWatchTanCong);
}
function tamDungTranDau() {
    clearTimeout(stopWatchThiDau);
}


var btn14s = document.getElementById('buzz-btn-14s');
btn14s.onclick = function () {
    tamDungTranDau();
    tamDungTanCong();
    document.getElementById("buzz-24s").innerHTML = 14;
}

var btnReset = document.getElementById('buzz-btn-reset');
btnReset.onclick = function () {
    tamDungTanCong();
    tamDungTranDau();
    document.getElementById("buzz-24s").innerHTML = 24;
}

var left = document.getElementById('attack-left');
var right = document.getElementById('attack-right');
left.onclick = function () {
    left.setAttribute("style", "border-right: 60px solid var(--buzz-color-4);");
    right.setAttribute("style", "border-left: 60px solid var(--buzz-color-3);");
    document.getElementById("buzz-24s").innerHTML = 24;
    tanCong24s();
}


right.onclick = function () {
    left.setAttribute("style", "border-right: 60px solid var(--buzz-color-3);");
    right.setAttribute("style", "border-left: 60px solid var(--buzz-color-4);");
    document.getElementById("buzz-24s").innerHTML = 24;
    tanCong24s();
}


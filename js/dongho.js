

var thoiLuong = 0;
var stopWatchThiDau;
var stopWatchTanCong;
var dongHo = document.getElementById('buzz-DongHo');

function bienDoiSoGiay(thoiLuongPhut, thoiLuongGiay) {

    return thoiLuongPhut * 60 + thoiLuongGiay;
}

dongHo.onclick = function thoiGianTranDau() {
    thoiLuong = 0;
    thoiLuongPhut = parseInt(document.getElementById('soPhut').innerHTML);
    thoiLuongGiay = parseInt(document.getElementById('soGiay').innerHTML);

    thoiLuong = bienDoiSoGiay(thoiLuongPhut, thoiLuongGiay);
    //ham dem nguoc

    clearTimeout(stopWatchThiDau);
    demNguoc();

    tanCong24s();
}


function demNguoc() {
    thoiLuong--;
    soPhut = Math.floor(thoiLuong / 60);
    soGiay = thoiLuong % 60;
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
}


right.onclick = function () {
    left.setAttribute("style", "border-right: 60px solid var(--buzz-color-3);");
    right.setAttribute("style", "border-left: 60px solid var(--buzz-color-4);");
}

const checkDongHo = document.getElementById('chk-dongho');

checkDongHo.onclick = function chayTranDau() {
    if (!checkDongHo) {
        tamDungTranDau();
    }
    else {
        thoiGianTranDau();
    }
}
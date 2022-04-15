
var thoiLuong = 0;
var stopWatchThiDau;
var stopWatchTanCong;

function thoiGianTranDau(x) {
    thoiLuong = x;
    //ham dem nguoc
    clearTimeout(stopWatchThiDau);
    demNguoc();
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
thoiGianTanCong.onclick = function () {
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


function tamDung() {
    clearTimeout(stopWatchTanCong);
}

var btn14s = document.getElementById('buzz-btn-14s');
btn14s.onclick = function () {
    tamDung();
    document.getElementById("buzz-24s").innerHTML = 14;
}

var btnReset = document.getElementById('buzz-btn-reset');
btnReset.onclick = function () {
    tamDung();
    document.getElementById("buzz-24s").innerHTML = 24;
}

/* upadte clock */
function update_clock() {
    var d = new Date();
    var hour = ("0" + d.getHours()).slice(-2);
    var minute = ("0" + d.getMinutes()).slice(-2);
    var second = ("0" + d.getSeconds()).slice(-2);
    document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second;
}

$(function () {
    // initial
    update_clock();
    // loop per second
    setInterval(function () {
        update_clock();
    }, 1000);
})

//spinner start
var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();
//spinner end
var suhu1;
var suhu2;
var suhu3;
var suhu4;
var suhu5;
var suhu6;
var hum1;
var hum2;
var hum3;
var hum4;
var hum5;
var hum6;

$(document).ready(function() {
    //sidebar toggle start
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });

    var database = firebase.database();

    database.ref().child('Temp').on("value",function(snap){
        suhu1 = snap.val().suhu1;
        suhu2 = snap.val().suhu2;
        suhu3 = snap.val().suhu3;
        suhu4 = snap.val().suhu4;
        suhu5 = snap.val().suhu5;
        suhu6 = snap.val().suhu6;
        hum1 = snap.val().hum1;
        hum2 = snap.val().hum2;
        hum3 = snap.val().hum3;
        hum4 = snap.val().hum4;
        hum5 = snap.val().hum5;
        hum6 = snap.val().hum6;


        /* document.getElementById("t1").innerHTML = suhu1 + '°C';
        document.getElementById("t2").innerHTML = suhu2 + '°C'; */
        update(suhu1, hum1, suhu2, hum2, suhu3, hum3, suhu4, hum4, suhu5, hum5, suhu6, hum6)

    });
});

function update(num1, hum1, num2, hum2, num3, hum3, num4, hum4, num5, hum5, num6, hum6) {
    gauge1.setValueAnimated(num1,2)
    gauge2.setValueAnimated(num2,2)
    gauge3.setValueAnimated(num3,2)
    gauge4.setValueAnimated(num4,2)
    gauge5.setValueAnimated(num5,2)
    gauge6.setValueAnimated(num6,2)
    gauge1hum.setValueAnimated(hum1,2)
    gauge2hum.setValueAnimated(hum2,2)
    gauge3hum.setValueAnimated(hum3,2)
    gauge4hum.setValueAnimated(hum4,2)
    gauge5hum.setValueAnimated(hum5,2)
    gauge6hum.setValueAnimated(hum6,2)
}
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
var suhu7;
var suhu8;

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
        suhu7 = snap.val().suhu7;
        suhu8 = snap.val().suhu8;

        /* document.getElementById("t1").innerHTML = suhu1 + '°C';
        document.getElementById("t2").innerHTML = suhu2 + '°C'; */
        update(suhu1, suhu2, suhu3, suhu4, suhu5, suhu6, suhu7, suhu8);

    });
});

function update(num1, num2, num3, num4, num5, num6, num7, num8) {
    gauge1.setValueAnimated(num1,2)
    gauge2.setValueAnimated(num2,2)
    gauge3.setValueAnimated(num3,2)
    gauge4.setValueAnimated(num4,2)
    gauge5.setValueAnimated(num5,2)
    gauge6.setValueAnimated(num6,2)
    gauge7.setValueAnimated(num7,2)
    gauge8.setValueAnimated(num8,2)
    
}
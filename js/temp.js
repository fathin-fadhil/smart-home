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

var hum1;
var hum2;
var hum3;

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

        hum1 = snap.val().hum1;
        hum2 = snap.val().hum2;
        hum3 = snap.val().hum3;


        /* document.getElementById("t1").innerHTML = suhu1 + '°C';
        document.getElementById("t2").innerHTML = suhu2 + '°C'; */
        update(suhu1, suhu2, suhu3, hum1, hum2, hum3);

    });
});

function update(num1, num2, num3, num4, num5, num6) {
    gauge1.setValueAnimated(num1,2)
    gauge2.setValueAnimated(num2,2)
    gauge3.setValueAnimated(num3,2)
    gauge1hum.setValueAnimated(num4,2)
    gauge2hum.setValueAnimated(num5,2)
    gauge3hum.setValueAnimated(num6,2)
    
}
// Spinner
var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();
//spinner end



$(document).ready(function() {
    //sidebar toggle start
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });

    var database = firebase.database();
    var StatusRelay1;
    var StatusRelay2;
    var StatusRelay3;
    var StatusRelay4;
    var suhu1;
    var suhu2;
    var suhu3;
    var suhu4;
    var kran1;
    var kran2;
    var kran3;

    database.ref().child('Relay').on("value",function(snap){
        StatusRelay1 = snap.val().StatusRelay1;
        StatusRelay2 = snap.val().StatusRelay2;
        StatusRelay3 = snap.val().StatusRelay3;
        StatusRelay4 = snap.val().StatusRelay4;

        document.getElementById("dh-sts-terasdepan").innerHTML = StatusRelay1
        document.getElementById("dh-sts-ruangtamu").innerHTML = StatusRelay2
        document.getElementById("dh-sts-kamardepan").innerHTML = StatusRelay3
        document.getElementById("dh-sts-ruangtengah").innerHTML = StatusRelay4
            
        if(StatusRelay1 == "ON"){
            $("#dh-ic-terasdepan").removeClass("nav-link disabled");
            $("#dh-ic-terasdepan").addClass("nav-link active");
        } else {            
            $("#dh-ic-terasdepan").removeClass("nav-link active");
            $("#dh-ic-terasdepan").addClass("nav-link disabled");
        }

        if(StatusRelay2 == "ON"){            
            $("#dh-ic-ruangtamu").removeClass("nav-link disabled");
            $("#dh-ic-ruangtamu").addClass("nav-link active");
        } else {            
            $("#dh-ic-ruangtamu").removeClass("nav-link active");
            $("#dh-ic-ruangtamu").addClass("nav-link disabled");
        }

        if(StatusRelay3 == "ON"){            
            $("#dh-ic-kamardepan").removeClass("nav-link disabled");
            $("#dh-ic-kamardepan").addClass("nav-link active");
        } else {            
            $("#dh-ic-kamardepan").removeClass("nav-link active");
            $("#dh-ic-kamardepan").addClass("nav-link disabled");
        }

        if(StatusRelay4 == "ON"){                    
            $("#dh-ic-ruangtengah").removeClass("nav-link disabled");
            $("#dh-ic-ruangtengah").addClass("nav-link active");
        } else {            
            $("#dh-ic-ruangtengah").removeClass("nav-link active");
            $("#dh-ic-ruangtengah").addClass("nav-link disabled");
        }
    })

    database.ref().child('Temp').on("value",function(snap){
        suhu1 = snap.val().suhu1;
        suhu2 = snap.val().suhu2;
        suhu3 = snap.val().suhu3;
        suhu4 = snap.val().suhu4;

        document.getElementById("temp-ruangtamu").innerHTML = suhu1;
        document.getElementById("temp-teras").innerHTML = suhu2;
        document.getElementById("temp-kamardepan").innerHTML = suhu3;
        document.getElementById("temp-ruangtengah").innerHTML = suhu4;
    })

    database.ref().child('Kran').on('value', function (snap){
        kran1 = snap.val().kran1;
        kran2 = snap.val().kran2;
        kran3 = snap.val().kran3;

        document.getElementById('dh-sts-tteras').innerHTML = kran1;
        document.getElementById('dh-sts-tgantung').innerHTML = kran2;
        document.getElementById('dh-sts-tsamping').innerHTML = kran3;

        if(kran1 == "ON"){
            $("#dh-ic-tteras").removeClass("nav-link disabled");
            $("#dh-ic-tteras").addClass("nav-link active");
        } else {
            $("#dh-ic-tteras").removeClass("nav-link active");
            $("#dh-ic-tteras").addClass("nav-link disabled");
        }

        if(kran2 == "ON"){
            $("#dh-ic-tgantung").removeClass("nav-link disabled");
            $("#dh-ic-tgantung").addClass("nav-link active");
        } else {
            $("#dh-ic-tgantung").removeClass("nav-link active");
            $("#dh-ic-tgantung").addClass("nav-link disabled");
        }

        if(kran3 == "ON"){
            $("#dh-ic-tsamping").removeClass("nav-link disabled");
            $("#dh-ic-tsamping").addClass("nav-link active");
        } else {
            $("#dh-ic-tsamping").removeClass("nav-link active");
            $("#dh-ic-tsamping").addClass("nav-link disabled");
        }
    })
});
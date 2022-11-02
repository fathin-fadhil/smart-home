// Spinner
var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');            
        }
    }, 1000);
};
spinner();
//spinner end

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }

manualView()

$(document).ready(function() {
    //sidebar toggle start
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });

    var database = firebase.database();
    var StatusRelay1
    var StatusRelay2
    var StatusRelay3
    var StatusRelay4
    var suhu1
    var suhu2
    var suhu3
    var suhu4
    var kran1
    var kran2
    var kran3
    var hum1
    var hum2
    var hum3
    var hum4
    var fan1
    var fan2
    var volt
    var tWatt
    var watt
    var curr

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
        hum1 = snap.val().hum1;
        hum2 = snap.val().hum2;
        hum3 = snap.val().hum3;
        hum4 = snap.val().hum4;

        document.getElementById("temp-ruangtamu").innerHTML = suhu1;
        document.getElementById("temp-teras").innerHTML = suhu2;
        document.getElementById("temp-kamardepan").innerHTML = suhu3;
        document.getElementById("temp-ruangtengah").innerHTML = suhu4;

        document.getElementById("hum-ruangtamu").innerHTML = hum1;
        document.getElementById("hum-teras").innerHTML = hum2;
        document.getElementById("hum-kamardepan").innerHTML = hum3;
        document.getElementById("hum-ruangtengah").innerHTML = hum4;
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

    database.ref().child('Fan').on('value', function (snap){
        fan1 = snap.val().fan1
        fan2 = snap.val().fan2
        isAuto = snap.val().isAuto

        $("#sts-fan1").text(fan1)
        $("#sts-fan2").text(fan2)

        if (fan1 == "ON") {
            $("#ic-fan1").removeClass("fanoff")
        } else {
            $("#ic-fan1").addClass("fanoff")
        }

        if (fan2 == "ON") {
            $("#ic-fan2").removeClass("fanoff")
        } else {
            $("#ic-fan2").addClass("fanoff")
        }

        if (isAuto) {
            autoView()
        } else {
            manualView()
        }
    })

    database.ref().child('Wmeter').on('value', function (snap){
        watt = snap.val().watt
        volt = snap.val().volt
        tWatt = snap.val().tWatt
        curr = snap.val().current

        $("#dt-watt").text(watt)
        $("#dt-volt").text(volt)
        $("#dt-tWatt").text(tWatt)
        $("#dt-curr").text(curr)

    })
});

function autoView() {
    $("#manualView").fadeOut();
    $("#autoView").fadeIn();
    
}

function manualView() {
    $("#autoView").fadeOut();
    $("#manualView").fadeIn();    
}
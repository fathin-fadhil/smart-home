var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();
//spinner end

var Fan1;
var Fan2;
var isAuto;

showManual()

$(document).ready(function() {
    //sidebar toggle
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    }); 

    var database = firebase.database();
    
    $("#auto").click(function(){
        var firebaseRef = firebase.database().ref().child("Fan/isAuto");
        firebaseRef.set(true);
    });

    $("#manual").click(function(){
        var firebaseRef = firebase.database().ref().child("Fan/isAuto");
        firebaseRef.set(false);
    });

    database.ref().child('Fan').on("value",function(snap){
        Fan1 = snap.val().fan1;
        Fan2 = snap.val().fan2;
        isAuto = snap.val().isAuto;

        if (isAuto) {
            showAuto()
        } else {
            showManual()
        }
            
        if(Fan1 == "ON"){
            $("#sts-kipas-1").text("ON");
            $("#ic-fan1").removeClass("fan-ic-off");
            $("#ic-fan1").addClass("fan-ic-on");
            $("#ic-fan1").attr("src","img/fan-on.png");
        } else {
            $("#sts-kipas-1").text("OFF");
            $("#ic-fan1").removeClass("fan-ic-on");
            $("#ic-fan1").addClass("fan-ic-off");
            $("#ic-fan1").attr("src","img/fan-off.png");
        }

        if(Fan2 == "ON"){
            $("#sts-kipas-2").text("ON");
            $("#ic-fan2").removeClass("fan-ic-off");
            $("#ic-fan2").addClass("fan-ic-on");
            $("#ic-fan2").attr("src","img/fan-on.png");
        } else {
            $("#sts-kipas-2").text("OFF");
            $("#ic-fan2").removeClass("fan-ic-on");
            $("#ic-fan2").addClass("fan-ic-off");
            $("#ic-fan2").attr("src","img/fan-off.png");
        }
    })
});

function globalUpdate(field) {
    var database = firebase.database();
    var fieldVal;
    database.ref().child('Fan/' + field).on("value",function(snap){
        fieldVal = snap.val();
    })

    var firebaseRef = firebase.database().ref().child("Fan/" + field);
    if(fieldVal == "ON"){
            firebaseRef.set("OFF");
            fieldVal="OFF";
        } else {
            firebaseRef.set("ON");
            fieldVal="ON";
        }
}

function showAuto() {
    $(document).ready(function() {
        $("#pulu").fadeOut();
        $('#manualMode').fadeIn();
    })    
}

function showManual() {
    $(document).ready(function() {        
        $("#pulu").fadeIn();
        $('#manualMode').fadeOut();        
    })    
}


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

var kran1;
var kran2;
var kran3;

$(document).ready(function() {
    //sidebar toggle start
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });
    
    var database = firebase.database();    

    database.ref().child('Kran').on('value', function (snap){
        kran1 = snap.val().kran1;
        kran2 = snap.val().kran2;
        kran3 = snap.val().kran3;

        if(kran1 == "ON"){
            $("#sts-tteras").text("ON");
            $("#ic-tteras").addClass("ic-active");
            $("#ic-tteras").removeClass("fas fa-tint-slash");
            $("#ic-tteras").addClass("fas fa-tint");
        } else {
            $("#sts-tteras").text("OFF");
            $("#ic-tteras").removeClass("ic-active");
            $("#ic-tteras").removeClass("fas fa-tint");
            $("#ic-tteras").addClass("fas fa-tint-slash");
        }

        if(kran2 == "ON"){
            $("#sts-tgantung").text("ON");
            $("#ic-tgantung").addClass("ic-active");
            $("#ic-tgantung").removeClass("fas fa-tint-slash");
            $("#ic-tgantung").addClass("fas fa-tint");
        } else {
            $("#sts-tgantung").text("OFF");
            $("#ic-tgantung").removeClass("ic-active");
            $("#ic-tgantung").removeClass("fas fa-tint");
            $("#ic-tgantung").addClass("fas fa-tint-slash");
        }

        if(kran3 == "ON"){
            $("#sts-tsamping").text("ON");
            $("#ic-tsamping").addClass("ic-active");
            $("#ic-tsamping").removeClass("fas fa-tint-slash");
            $("#ic-tsamping").addClass("fas fa-tint");
        } else {
            $("#sts-tsamping").text("OFF");
            $("#ic-tsamping").removeClass("ic-active");
            $("#ic-tsamping").removeClass("fas fa-tint");
            $("#ic-tsamping").addClass("fas fa-tint-slash");
        }
    })
});

function globalUpdate(field) {
    var database = firebase.database();
    var fieldVal;
    database.ref().child('Kran/' + field).on("value",function(snap){
        fieldVal = snap.val();
    })

    var firebaseRef = firebase.database().ref().child("Kran/" + field);
    if(fieldVal == "ON"){
            firebaseRef.set("OFF");
            fieldVal="OFF";
        } else {
            firebaseRef.set("ON");
            fieldVal="ON";
        }
    
}


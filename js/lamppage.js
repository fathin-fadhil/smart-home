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

var StatusRelay1;
var StatusRelay2;
var StatusRelay3;
var StatusRelay4;
var StatusRelay5;
var StatusRelay6;


$(document).ready(function() {
    //sidebar toggle start
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });
    
    var database = firebase.database();    

    database.ref().child('Relay').on("value",function(snap){
        StatusRelay1 = snap.val().StatusRelay1;
        StatusRelay2 = snap.val().StatusRelay2;
        StatusRelay3 = snap.val().StatusRelay3;
        StatusRelay4 = snap.val().StatusRelay4;
        StatusRelay5 = snap.val().StatusRelay5;
        StatusRelay6 = snap.val().StatusRelay6;
            
        if(StatusRelay1 == "ON"){
            $("#sts-terasdepan").text("ON");
            $("#ic-terasdepan").addClass("ic-active");
            $("#ic-terasdepan").removeClass("bi-lightbulb-off-fill");
            $("#ic-terasdepan").addClass("bi-lightbulb-fill");
        } else {
            $("#sts-terasdepan").text("OFF");
            $("#ic-terasdepan").removeClass("ic-active");
            $("#ic-terasdepan").removeClass("bi-lightbulbfill");
            $("#ic-terasdepan").addClass("bi-lightbulb-off-fill");
        }

        if(StatusRelay2 == "ON"){
            $("#sts-ruangtamu").text("ON");
            $("#ic-ruangtamu").addClass("ic-active");
            $("#ic-ruangtamu").removeClass("bi-lightbulb-off-fill");
            $("#ic-ruangtamu").addClass("bi-lightbulb-fill");
        } else {
            $("#sts-ruangtamu").text("OFF");
            $("#ic-ruangtamu").removeClass("ic-active");
            $("#ic-ruangtamu").removeClass("bi-lightbulbfill");
            $("#ic-ruangtamu").addClass("bi-lightbulb-off-fill");
        }

        if(StatusRelay3 == "ON"){
            $("#sts-kamardepan").text("ON");
            $("#ic-kamardepan").addClass("ic-active");
            $("#ic-kamardepan").removeClass("bi-lightbulb-off-fill");
            $("#ic-kamardepan").addClass("bi-lightbulb-fill");
        } else {
            $("#sts-kamardepan").text("OFF");
            $("#ic-kamardepan").removeClass("ic-active");
            $("#ic-kamardepan").removeClass("bi-lightbulbfill");
            $("#ic-kamardepan").addClass("bi-lightbulb-off-fill");
        }

        if(StatusRelay4 == "ON"){            
            $("#sts-ruangtengah").text("ON");
            $("#ic-ruangtengah").addClass("ic-active");
            $("#ic-ruangtengah").removeClass("bi-lightbulb-off-fill");
            $("#ic-ruangtengah").addClass("bi-lightbulb-fill");
        } else {
            $("#sts-ruangtengah").text("OFF");
            $("#ic-ruangtengah").removeClass("ic-active");
            $("#ic-ruangtengah").removeClass("bi-lightbulbfill");
            $("#ic-ruangtengah").addClass("bi-lightbulb-off-fill");
        }

        if(StatusRelay5 == "ON"){            
            $("#sts-terassamping").text("ON");
            $("#ic-terassamping").addClass("ic-active");
            $("#ic-terassamping").removeClass("bi-lightbulb-off-fill");
            $("#ic-terassamping").addClass("bi-lightbulb-fill");
        } else {
            $("#sts-terassamping").text("OFF");
            $("#ic-terassamping").removeClass("ic-active");
            $("#ic-terassamping").removeClass("bi-lightbulbfill");
            $("#ic-terassamping").addClass("bi-lightbulb-off-fill");
        }

        if(StatusRelay6 == "ON"){            
            $("#sts-kamarbelakang").text("ON");
            $("#ic-kamarbelakang").addClass("ic-active");
            $("#ic-kamarbelakang").removeClass("bi-lightbulb-off-fill");
            $("#ic-kamarbelakang").addClass("bi-lightbulb-fill");
        } else {
            $("#sts-kamarbelakang").text("OFF");
            $("#ic-kamarbelakang").removeClass("ic-active");
            $("#ic-kamarbelakang").removeClass("bi-lightbulbfill");
            $("#ic-kamarbelakang").addClass("bi-lightbulb-off-fill");
        }
    })
});

function globalUpdate(field) {
    var database = firebase.database();
    var fieldVal;
    database.ref().child('Relay/' + field).on("value",function(snap){
        fieldVal = snap.val();
    })

    var firebaseRef = firebase.database().ref().child("Relay/" + field);
    if(fieldVal == "ON"){
            firebaseRef.set("OFF");
            fieldVal="OFF";
        } else {
            firebaseRef.set("ON");
            fieldVal="ON";
        }
    
}


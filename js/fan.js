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
var Fan_2;


$(document).ready(function() {
    //sidebar toggle start
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });
    
    var database = firebase.database();    

    database.ref().child('Fan').on("value",function(snap){
        Fan1 = snap.val().fan1;
        Fan2 = snap.val().fan2;

            
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

// mode 
function myFunction() {
    var x = document.getElementById("MyContainer");
    var z= document.getElementById("Button");
    var T = x,z;
    if (T.style.display === "none") {
      T.style.display = "block";
      $("Button").removeClass("Btn-Manu");

  
    } else {
      T.style.display = "none";
    }
  }
  
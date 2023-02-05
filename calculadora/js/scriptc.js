function suma() {

    var num1 = document.getElementById("num1").value;
    var numReal= parseInt(num1);

    var num2 = document.getElementById("num2").value;
    var numReal16= parseInt(num2);

    var Ans = numReal + numReal16;

    console.log("resultado : " + Ans)
}

function divi() {

    var num1 = document.getElementById("num1").value;
    var numReal= parseInt(num1);

    var num2 = document.getElementById("num2").value;
    var numReal16= parseInt(num2);

    var Ans = numReal / numReal16;

    console.log("resultado : " + Ans)
}

function resta() {

    var num1 = document.getElementById("num1").value;
    var numReal= parseInt(num1);

    var num2 = document.getElementById("num2").value;
    var numReal16= parseInt(num2);

    var Ans = numReal - numReal16;

    console.log("resultado : " + Ans)
}

function multi() {

   var num1 = document.getElementById("num1").value;
    var numReal= parseInt(num1);

    var num2 = document.getElementById("num2").value;
    var numReal16= parseInt(num2);

    var Ans = numReal * numReal16;

    console.log("resultado : " + Ans) 
}

function cleaner() {
    var num1 = document.getElementById("num1").value = "";
    var num2 = document.getElementById("num2").value = ""; 
}

function carita() {
 var carita =[":=0"]

    console.log(carita)

}
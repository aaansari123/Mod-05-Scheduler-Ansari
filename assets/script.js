// console.log(x.getAttribute("id"));

// function to figure out past present future
var eightAm = document.getElementById("8");
var nineAm = document.getElementById("9");
var tenAm = document.getElementById("10");
var elevenAm = document.getElementById("11");
var twelvePm = document.getElementById("12");
var onePm = document.getElementById("13");
var twoPm = document.getElementById("14");
var threePm = document.getElementById("15");
var fourPm = document.getElementById("16");
var fivePm = document.getElementById("17");

function pastPresentFuture(){
    var now = moment().hour();
    for (var i = 8; i < 18; i++){
        var timeIs = document.getElementById(i);
        var time = timeIs.getAttribute("id");
        console.log(timeIs);
        console.log(time);
        if (time < now){
            timeIs.classList.toggle("past");
        } else if(time == now){
            timeIs.classList.toggle("present");
        }
        else{
            timeIs.classList.toggle("future");
        }
    
    }


}

// var now = moment().hour();
// console.log(now);

pastPresentFuture();
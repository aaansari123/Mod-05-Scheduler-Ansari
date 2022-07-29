

// get all imporatant elements
var headerElement = document.querySelector(".lead");
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
var saveButton = document.querySelector(".saveBtn1");
var saveButton2 = document.querySelector(".saveBtn2");
var saveButton3 = document.querySelector(".saveBtn3");
var saveButton4 = document.querySelector(".saveBtn4");
var saveButton5 = document.querySelector(".saveBtn5");
var saveButton6 = document.querySelector(".saveBtn6");
var saveButton7 = document.querySelector(".saveBtn7");
var saveButton8 = document.querySelector(".saveBtn8");
var saveButton9 = document.querySelector(".saveBtn9");
var saveButton10 = document.querySelector(".saveBtn10");
var saveButtons = [saveButton, saveButton2, saveButton3, saveButton4, saveButton5,saveButton6,saveButton7,saveButton8,saveButton9, saveButton10];
var appointment1 = document.querySelector(".description1");
var appointment2 = document.querySelector(".description2");
var appointment3 = document.querySelector(".description3")
var appointment4 = document.querySelector(".description4")
var appointment5 = document.querySelector(".description5")
var appointment6 = document.querySelector(".description6")
var appointment7 = document.querySelector(".description7")
var appointment8 = document.querySelector(".description8")
var appointment9 = document.querySelector(".description9")
var appointment10 = document.querySelector(".description10");
var appointments = [appointment1, appointment2, appointment3, appointment4, appointment4, appointment5, appointment6, appointment7, appointment8, appointment9, appointment10];

// function to color code
function pastPresentFuture(){
    var now = moment().hour();
    for (var i = 8; i < 18; i++){
        var timeIs = document.getElementById(i);
        var time = timeIs.getAttribute("id");
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


// function for handling save button click

function handleSave(event){
    var inputVal;
    event.preventDefault();
    for (i = 0; i < appointments.length; i++){
        inputVal = $(appointments[i]).val();
        localStorage.setItem(i, inputVal);
    }
    


    // $(appointment).val(inputVal);
    console.log("test");
}

function addEventListeners(){
    for (var i = 0; i< saveButtons.length; i++){
        saveButtons[i].addEventListener('click',handleSave);
    }
}

// repopulates with saved values
function refillValues(){
    var x;
    for (var i = 0; i < appointments.length; i++){
        x = localStorage.getItem(i);
        $(appointments[i]).val(x);
    }
    

}
// update time at top of page
function updateTime(){
    var currentTime = moment().format("LLLL" );
    headerElement.innerHTML += "<br>" + currentTime;
}

// call all functions
pastPresentFuture();
refillValues();
addEventListeners();
updateTime();
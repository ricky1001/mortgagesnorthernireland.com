"use strict";

//This files purpose is to control the quick call icon ie it opens the quick call box closes it changes the appearance side it does not control the values or the contents of the inputs that is controled by bookingCalendar/bookCallBackIcon

//Icon Listeners
var quickCallIcon = document.querySelector(".call-us-icon-box");
var quickCallBox = document.getElementById("quick-call");

//Listens for a click on the Phone Icon and expands the div 
quickCallIcon.addEventListener("click", function (e) {
    if (quickCallBox.className === "quick-call-down") {
        quickCallBox.className = "quick-call-up";

        setTimeout(function () {
            document.getElementById("quick-call-head").className = "show";
            document.getElementById("quick-call-body").className = "show";
            quickCallInput.className = "show";
            quickCallBtn.className = "show";
        }, 1000);
    } else if (quickCallBox.className === "quick-call-up") {
        quickCallBox.className = "quick-call-down";

        if (formBox.className == "show") {
            setTimeout(function () {
                formBox.className = "hidden";
            }, 300);
        }

        setTimeout(function () {
            document.getElementById("quick-call-head").className = "hidden";
            document.getElementById("quick-call-body").className = "hidden";
            document.getElementById("quick-call-input").className = "hidden";
            document.getElementById("quick-call-btn").className = "hidden";
        }, 200);
        quickCallBody.innerHTML = bodyTextReset;
        quickCallInput.innerHTML = inputReset;
        quickCallBtn.innerHTML = btnReset;
    }
});

//Schedule button listener
var scheduleBtn = document.getElementById("quick-call-btn");
var contactNum = document.getElementById("quickCallNum");
//Selecting different elements within the quick call div that need to be updated
var quickCallBody = document.getElementById("quick-call-body");
var quickCallInput = document.getElementById("quick-call-input");
var quickCallBtn = document.querySelector("#quick-call-btn");
var formBox = document.getElementById("quick-call-form-box");
//Listens for a click on the schedule call back button and grabs te contact number from the input and updates the interface of the quick call div
scheduleBtn.addEventListener("click", function (e) {
    var num = document.getElementById("quickCallNum").value;
    //First block runs if the contact number is too short and displays a temporary message
    if (num.length < 10) {
        document.getElementById("schedule-btn").textContent = "Enter a Number";
        setInterval(function () {
            document.getElementById("schedule-btn").textContent = "Schedule a Call Back";
        }, 1000);
        //Second block runs if the number is of 10 characters or more and updates the content of the quick call box
    } else if (num.length >= 10) {
        num = quickCallNum.value;
        quickCallBody.innerHTML = bodyText;

        quickCallInput.className = "hidden";
        quickCallBtn.className = "hidden";
        formBox.className = "show";
        document.querySelector("#clientContactNum").value = num;
    }
});

//Elements that will be used outside the main functions to update the dom
var bodyText = "<p>Please choose the best time for us to call you back<br>\n<span class=\"sm-text\">The following times are in London Timezone<span>\n</p>";

var bodyTextReset = "        <p>\nCall us today for <strong>Free on <a class=\"callUsNum\" href=\"tel:08009756476\">0800 975 6476</a></strong> or enter your number below then schedule a call back at a time that suits you.\n</p>";

var inputReset = " <div class=\"quick-call-contact-box\">\n                      <span>+44</span> \n                       <input type=\"tel\" placeholder=\"Enter Your Number\" id=\"quickCallNum\">\n                     </div>";

var btnReset = " <button class=\"scheduleBtn\">\n                     Schedule a Call Back\n                   </button>";
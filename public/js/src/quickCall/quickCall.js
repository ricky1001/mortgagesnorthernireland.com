//This files purpose is to control the quick call icon ie it opens the quick call box closes it changes the appearance side it does not control the values or the contents of the inputs that is controled by bookingCalendar/bookCallBackIcon

//Icon Listeners
const quickCallIcon = document.querySelector(".call-us-icon-box");
const quickCallBox = document.getElementById("quick-call");


//Listens for a click on the Phone Icon and expands the div 
quickCallIcon.addEventListener("click", function(e){
    console.log("click")
    if(quickCallBox.className === "quick-call-down"){  
        quickCallBox.className = "quick-call-up";

        setTimeout(function(){
            document.getElementById("quick-call-head").className = "show";
            document.getElementById("quick-call-body").className = "show";
            quickCallInput.className = "show";
            quickCallBtn.className = "show";

        }, 1000)

    }else if(quickCallBox.className === "quick-call-up"){
        quickCallBox.className = "quick-call-down";

        if(formBox.className == "show"){
            setTimeout(function(){
                formBox.className = "hidden"
            }, 300) 
        }

        setTimeout(function(){
            document.getElementById("quick-call-head").className = "hidden";
            document.getElementById("quick-call-body").className = "hidden";
            document.getElementById("quick-call-input").className = "hidden";
            document.getElementById("quick-call-btn").className = "hidden";
        }, 200)
        quickCallBody.innerHTML = bodyTextReset;
        quickCallInput.innerHTML = inputReset;
        quickCallBtn.innerHTML = btnReset;

    }
});

//Schedule button listener
const scheduleBtn = document.getElementById("quick-call-btn");
const contactNum = document.getElementById("quickCallNum");
//Selecting different elements within the quick call div that need to be updated
const quickCallBody = document.getElementById("quick-call-body");
const quickCallInput = document.getElementById("quick-call-input");
const quickCallBtn = document.querySelector("#quick-call-btn");
const formBox = document.getElementById("quick-call-form-box");
//Listens for a click on the schedule call back button and grabs te contact number from the input and updates the interface of the quick call div
scheduleBtn.addEventListener("click", function(e){
    let num = document.getElementById("quickCallNum").value;
    //First block runs if the contact number is too short and displays a temporary message
     if(num.length < 10){  
        document.getElementById("schedule-btn").textContent = "Enter a Number";
        setInterval(function(){ document.getElementById("schedule-btn").textContent = "Schedule a Call Back"; }, 1000);
    //Second block runs if the number is of 10 characters or more and updates the content of the quick call box
     }else if(num.length >= 10){
        num = quickCallNum.value;
        quickCallBody.innerHTML = bodyText;

        quickCallInput.className = "hidden";
        quickCallBtn.className = "hidden";
        formBox.className = "show";
        document.querySelector("#clientContactNum").value = num;
     }
});



//Elements that will be used outside the main functions to update the dom
const bodyText = `<p>Please choose the best time for us to call you back<br>
<span class="sm-text">The following times are in London Timezone<span>
</p>`;

const bodyTextReset = `        <p>
Call us today for <strong>Free on <a class="callUsNum" href="tel:08009756476">0800 975 6476</a></strong> or enter your number below then schedule a call back at a time that suits you.
</p>`

const inputReset = ` <div class="quick-call-contact-box">
                      <span>+44</span> 
                       <input type="tel" placeholder="Enter Your Number" id="quickCallNum">
                     </div>`

const btnReset = ` <button class="scheduleBtn">
                     Schedule a Call Back
                   </button>`
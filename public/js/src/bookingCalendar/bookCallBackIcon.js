//Remember that this file accsesses adjustedTimes, times, todaysTimes, hoursPastNine in the parsed format from bookCallBackdvert in the js file above

const pickCallBackDayIcon = document.getElementById("quickCallIconDayPicker");
const pickCallBackTimeIcon = document.getElementById("quickCallIconTimePicker");

pickCallBackDayIcon.addEventListener("change", function(){
    
    if(pickCallBackDayIcon.value.substring(0, 5) !== "Today"){
        pickCallBackTimeIcon.innerHTML = fullTimes;
    }else{
        setTimeout(function(){
            pickCallBackTimeIcon.innerHTML = todaysTimes;
        })
    }
})




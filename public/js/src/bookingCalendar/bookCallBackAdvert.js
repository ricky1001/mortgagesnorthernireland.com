adjustedTimes = JSON.parse(adjustedTimes);
times = JSON.parse(times)
hoursPastNine = JSON.parse(hoursPastNine)
dayStrings = JSON.parse(dayStrings)



const fullTimes =`
             <option class="pickATimeOption" value="9am-10am">9am - 10am</option>
             <option class="pickATimeOption" value="10am-11am">10am - 11am</option>   
             <option class="pickATimeOption" value="11am-12am">11am - 12am</option>
             <option class="pickATimeOption" value="12am-1pm">12am - 1pm</option>
             <option class="pickATimeOption" value="1pm-2pm">1pm - 2pm</option>
             <option class="pickATimeOption" value="2pm-3pm">2pm - 3pm</option>
             <option class="pickATimeOption" value="3pm-4pm">4pm - 5pm</option>
             <option class="pickATimeOption" value="5pm-6pm">5pm - 6pm</option>
             <option class="pickATimeOption" value="6pm-7pm">6pm - 7pm</option>
             <option class="pickATimeOption" value="7pm-8pm">7pm - 8pm</option>
            `

let todaysTimes = "";

adjustedTimes.forEach(function(item){
    todaysTimes += `<option class="pickATimeOption" value="${item}">${item}</option>`
})



const pickCallBackDay = document.getElementById("pickCallBackDay");
const pickCallBackTime = document.getElementById("pickATime");

pickCallBackDay.addEventListener("change", function(){
    
    if(pickCallBackDay.value.substring(0, 5) !== "Today"){
        pickCallBackTime.innerHTML = fullTimes;
    }else{
        pickCallBackTime.innerHTML = todaysTimes;
    }
})




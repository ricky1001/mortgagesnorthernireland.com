"use strict";

adjustedTimes = JSON.parse(adjustedTimes);
times = JSON.parse(times);
hoursPastNine = JSON.parse(hoursPastNine);
dayStrings = JSON.parse(dayStrings);

var fullTimes = "\n             <option class=\"pickATimeOption\" value=\"9am-10am\">9am - 10am</option>\n             <option class=\"pickATimeOption\" value=\"10am-11am\">10am - 11am</option>   \n             <option class=\"pickATimeOption\" value=\"11am-12am\">11am - 12am</option>\n             <option class=\"pickATimeOption\" value=\"12am-1pm\">12am - 1pm</option>\n             <option class=\"pickATimeOption\" value=\"1pm-2pm\">1pm - 2pm</option>\n             <option class=\"pickATimeOption\" value=\"2pm-3pm\">2pm - 3pm</option>\n             <option class=\"pickATimeOption\" value=\"3pm-4pm\">4pm - 5pm</option>\n             <option class=\"pickATimeOption\" value=\"5pm-6pm\">5pm - 6pm</option>\n             <option class=\"pickATimeOption\" value=\"6pm-7pm\">6pm - 7pm</option>\n             <option class=\"pickATimeOption\" value=\"7pm-8pm\">7pm - 8pm</option>\n            ";

var todaysTimes = "";

adjustedTimes.forEach(function (item) {
    todaysTimes += "<option class=\"pickATimeOption\" value=\"" + item + "\">" + item + "</option>";
});

var pickCallBackDay = document.getElementById("pickCallBackDay");
var pickCallBackTime = document.getElementById("pickATime");

pickCallBackDay.addEventListener("change", function () {

    if (pickCallBackDay.value.substring(0, 5) !== "Today") {
        pickCallBackTime.innerHTML = fullTimes;
    } else {
        pickCallBackTime.innerHTML = todaysTimes;
    }
});



    function createNumAfter(num){
       if(num === 1 || num === 21 || num === 31) {
           return "st";
         } else if(num === 2 || num === 22) {
           return "nd";
         } else if(num === 3 || num === 23 ) {
           return "rd";
         } else {
           return x = "th";
         }
                   }
     
        function createDays(){
         let today = new Date();
         let tomorrow = new Date();
         tomorrow = tomorrow.setDate(new Date().getDate() +1);
         tomorrow = new  Date(tomorrow)
         let nextDay = new Date();
         nextDay = nextDay.setDate(new Date().getDate() +2);
         nextDay = new Date(nextDay);
         return {
             today: today,
             tomorrow: tomorrow,
             nextDay: nextDay
                }
 
         }
 
         function skipDayForward(x){
                   x.setDate(x.getDate() + 1);
                   return new Date(x);
               }
 
               //Function to create a timestamp for 9am today
        function createTimeStamp9am(){
              let today = new Date();
      
              var ms = today.getTime();
              var msPerDay = 86400 * 1000;
              var msto9am = 32400000;
              let nineAMToday = ms - (ms % msPerDay) + msto9am;
              return nineAMToday;  
          }
 
           //Function to create a timestamp for 9am today
        function createTimeStamp8pm(){
           let today = new Date();
   
           var ms = today.getTime();
           var msPerDay = 86400 * 1000;
           var msto8pm = 72000000;
           let eightPMToday = ms - (ms % msPerDay) + msto8pm;
           return eightPMToday;  
       }
 
       function createNowMillSec(){
         let today = new Date();
   
         return today.getTime();
 
       }
           
 



const nineAMToday = createTimeStamp9am();
const eightPMToday = createTimeStamp8pm();
const nowToday = createNowMillSec();

let times = ["9am - 10am", "10am - 11am", "11am - 12am", "12am - 1pm", "1pm - 2pm", "2pm - 3pm", "3pm - 4pm", "4pm - 5pm", "5pm - 6pm", "6pm - 7pm", "7pm - 8pm"];

//Work out how many hours it is currently past 9am
var hoursPastNine = nowToday - nineAMToday;
hoursPastNine = hoursPastNine / 1000;
hoursPastNine = hoursPastNine / 60;
hoursPastNine = hoursPastNine / 60;
hoursPastNine = Math.floor(hoursPastNine);

//Create a variable that will change depending on the time of the day
var adjustedTimes = new Array();
if(nowToday < nineAMToday){
   adjustedTimes = times;
}else if(nowToday >= eightPMToday){
   adjustedTimes = ["There are no more available times today please select another day"]
}else{
    adjustedTimes = times.splice(hoursPastNine, times.length);     
}



times = ["9am - 10am", "10am - 11am", "11am - 12am", "12am - 1pm", "1pm - 2pm", "2pm - 3pm", "3pm - 4pm", "4pm - 5pm", "5pm - 6pm", "6pm - 7pm", "7pm - 8pm"];

module.exports = {
    adjustedTimes: adjustedTimes,
    hoursPastNine: hoursPastNine,
    times: times
}
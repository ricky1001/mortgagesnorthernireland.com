module.exports = {

    callBackStrings: function(){
        //create three time stamps for today tomorrow and the next day
        const days = createDays();
       
        //convert all of the time stamps to strings 
        dayOneString = days.today.toString();
        dayTwoString = days.tomorrow.toString();
        dayThreeString = days.nextDay.toString();
        //Get the first three letters from each indicating the day of the week
        let dayOneDay = dayOneString.substring(0, 3);
        let dayTwoDay = dayTwoString.substring(0,3);
        let dayThreeDay = dayThreeString.substring(0,3);
        //Chec to see if any of the days are a Sunday if they are we need to skip any following days on +1
        if(dayOneDay === "Sun"){
            //Move Day one ahead 
            days.today = skipDayForward(days.today);
            //Move Day Two ahead 
            days.tomorrow = skipDayForward(days.tomorrow);
            //Move Day Three ahead
            days.nextDay = skipDayForward(days.nextDay);
        }else if(dayTwoDay === "Sun"){
            //Move Day Two ahead 
            days.tomorrow = skipDayForward(days.tomorrow);
            //Move Day Three ahead
            days.nextDay = skipDayForward(days.nextDay);

        }else if(dayThreeDay === "Sun"){
            //Move Day Three ahead
            days.nextDay = skipDayForward(days.nextDay);
         }

       let dayOne = days.today.toString();
       let dayTwo =  days.tomorrow.toString();
       let dayThree = days.nextDay.toString();
       //Create the ending for each day ie th rd etc
        let dayOneEnding = createNumAfter(parseInt(dayOne.substring(8,10)));
        let dayTwoEnding = createNumAfter(parseInt(dayTwo.substring(8,10)));
        let dayThreeEnding = createNumAfter(parseInt(dayThree.substring(8,10)));
        //todayString :  
        return {
            todayString :"Today " + dayOne.substring(0, 3) + " " + dayOne.substring(8, 10) + dayOneEnding + " " + dayOne.substring(4, 7),

            tomorrowString: "Tomorrow " + dayTwo.substring(0, 3) + " " + dayTwo.substring(8, 10) + dayTwoEnding +" " + dayTwo.substring(4, 7),

            nextDayString: dayThree.substring(0, 3) + " " + dayThree.substring(8, 10) + dayThreeEnding + " " + dayThree.substring(4, 7) 
        }

        
    }
           
 
   }



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

    function  createNowMillSec(){
      let today = new Date();

      return today.getTime();

    }
     

 
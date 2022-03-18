
  module.exports = {

   createNumAfter: function(num){
      if(num === 1 || num === 21 || num === 31) {
          return "st";
        } else if(num === 2 || num === 22) {
          return "nd";
        } else if(num === 3 || num === 23 ) {
          return "rd";
        } else {
          return x = "th";
        }
                  },
    
      createDays: function(){
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

        },

        skipDayForward: function(x){
                  x.setDate(x.getDate() + 1);
                  return new Date(x);
              },

              //Function to create a timestamp for 9am today
         createTimeStamp9am: function(){
             let today = new Date();
     
             var ms = today.getTime();
             var msPerDay = 86400 * 1000;
             var msto9am = 32400000;
             let nineAMToday = ms - (ms % msPerDay) + msto9am;
             return nineAMToday;  
         },

          //Function to create a timestamp for 9am today
          createTimeStamp8pm: function(){
          let today = new Date();
  
          var ms = today.getTime();
          var msPerDay = 86400 * 1000;
          var msto8pm = 72000000;
          let eightPMToday = ms - (ms % msPerDay) + msto8pm;
          return eightPMToday;  
      },

      createNowMillSec: function(){
        let today = new Date();
  
        return today.getTime();

      }
          

  }
    
//Creates 3 time stamps one for today one for tomorrow and one for the next day


//  //Function to skip a day forward
//  module.exports = function skipDayForward(x){
//         x.setDate(x.getDate() + 1);
//         return new Date(x);
//     }


var SDcalc = document.querySelector(".calculateSD");

SDcalc.addEventListener("click", function(){
    var stampDuty;
   
 var buyerType = $("#SDbuyerStatusID").val();
 var loanAmount = $("#SDloanAmountID").val();

  loanAmount = parseInt(loanAmount, 10);

  if(buyerType === "First Time Buyer"){ 
    if(loanAmount < 300000){
      stampDuty = 0;
    } if(loanAmount > 300000 && loanAmount < 925000){
        stampDuty = (loanAmount - 300000) /100 * 5 ;
    } if (loanAmount > 925000 && loanAmount < 1500000){
        FTBrateXH = (loanAmount - 925000) / 100 * 10;
        FTBrateH = (925000 - 300000) / 100 * 5; 
        stampDuty = FTBrateXH + FTBrateH;
    } if (loanAmount > 1500000){
        FTBrateXXH = (loanAmount - 1500000) / 100 * 12;
        FTBrateXH  = (1500000 - 925000) / 100 * 10;
        FTBrateH = (925000 - 300000) / 100 * 5;
        stampDuty = FTBrateXXH + FTBrateXH + FTBrateH;
    }
  } else if (buyerType === "Home Mover"){
      
    if(loanAmount < 125000){
        stampDuty = 0;
    } if (loanAmount > 125000 && loanAmount < 250000){
        stampDuty = (loanAmount - 125000) / 100 * 2;
    } if (loanAmount > 250000 && loanAmount < 925000){
        HMrateH = (loanAmount - 250000) / 100 * 5;
        HMrateSH = (250000 -125000 ) / 100 * 2;

        stampDuty = HMrateH + HMrateSH;
    } if (loanAmount > 925000 & loanAmount < 1500000){
        HMrateXH = (loanAmount - 925000) / 100 * 10;
        stampDuty = HMrateXH + 36250;  
    } if(loanAmount > 1500000){
        HMrateXXH = (loanAmount - 1500000) / 100 * 12;
        stampDuty = HMrateXXH + 93750;
    }
  } else {

    if(loanAmount < 125000){
        stampDuty = loanAmount / 100 * 3;

    } if (loanAmount > 125000 && loanAmount < 250000){
        stampDutyR = (loanAmount - 125000) / 100 * 2;
        stampDutyX = loanAmount / 100 * 3;

        stampDuty = stampDutyR + stampDutyX;

    } if (loanAmount > 250000 && loanAmount < 925000){
        HMrateH = (loanAmount - 250000) / 100 * 5;
        HMrateSH = (250000 -125000 ) / 100 * 2;

        stampDutyR = HMrateH + HMrateSH;
        stampDutyX = loanAmount / 100 * 3;

        stampDuty = stampDutyR + stampDutyX;

    } if (loanAmount > 925000 & loanAmount < 1500000){
        HMrateXH = (loanAmount - 925000) / 100 * 10;

        stampDutyR = HMrateXH + 36250;  
        stampDutyX =loanAmount / 100 * 3;

        stampDuty = stampDutyR + stampDutyX;

    } if(loanAmount > 1500000){
        HMrateXXH = (loanAmount - 1500000) / 100 * 12;

        stampDutyR = HMrateXXH + 93750;
        stampDutyX = loanAmount / 100 * 3;

        stampDuty = stampDutyR + stampDutyX;
    }

  }

var show = document.getElementById("SDresultID");

show.className = "SDresultshow";

var sp = document.getElementById("SDcalc");
sp.innerHTML = "£" + stampDuty.toLocaleString('en');
});
"use strict";

//How Much can I Borrow
var show = document.querySelector(".addSecondApp");

show.addEventListener("click", function () {
  $("#secondAppHidden.secondAppInput").toggleClass("secondAppInputDisplay");
  $(".addSecondApp").toggleClass("secondAppInput");
});

var btn = document.querySelector(".totalBorrow");

btn.addEventListener("click", function () {

  var secondIncome = "0";
  var secondBonus = "0";
  var firstBonus = "0";

  var firstIncome = $('#firstIncome').val();
  fB = $("#firstBonus").val();
  sI = $("#secondIncome").val();
  sB = $("#secondBonus").val();

  if (sI !== "") {
    secondIncome = sI;
  }

  if (sB !== "") {
    secondBonus = sB;
  }

  if (fB !== "") {
    firstBonus = fB;
  }

  firstIncome = parseInt(firstIncome, 10);
  firstBonus = parseInt(firstBonus, 10);
  secondIncome = parseInt(secondIncome, 10);
  secondBonus = parseInt(secondBonus, 10);

  maxLoan = (firstIncome + firstBonus + secondIncome + secondBonus) * 5;

  //$( "#maxBorrow.youCouldBorrow" ).toggleClass( "youCouldBorrowShow" );
  var showMax = document.getElementById("maxBorrow");
  showMax.className = "youCouldBorrowShow";

  var sp = document.getElementById("totLoan");
  sp.innerHTML = "£" + maxLoan.toLocaleString('en');
});

//Monthly Repayments
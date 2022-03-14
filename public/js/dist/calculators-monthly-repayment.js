"use strict";

var submit = document.querySelector(".MRbutton");

submit.addEventListener("click", function () {

    var loanAmount = $('#MRloanAmountID').val();
    var rate = $('#MRinterestRateID').val();
    var term = $('#MRtermID').val();
    var type = $('#MRmortgageTypeID').val();

    loanAmount = parseInt(loanAmount, 10);
    rate = parseFloat(rate, 10).toFixed(2);
    term = parseInt(term, 10);

    rate = rate / 100 / 12;
    term = term * 12;

    if (type === "Repayment") {
        formulaRate = rate + 1;

        toThePowerOfRate = Math.pow(rate + 1, term);
        topNum = rate * toThePowerOfRate;
        bottomNum = toThePowerOfRate - 1;

        var monthlyPayment = topNum / bottomNum * loanAmount;

        monthlyPayment = monthlyPayment.toFixed(2);
    } else {

        monthlyPayment = rate * loanAmount;
        monthlyPayment = monthlyPayment.toFixed(2);
    }

    var hidden = document.getElementById("MRresultID");
    hidden.className = "MRresultShow";

    var sp = document.getElementById("MRcalc");
    sp.innerHTML = "£" + monthlyPayment.toLocaleString('en');
});
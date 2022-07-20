
// const submit = document.getElementById("submit");
// const form = document.getElementById("quick-enquiry-form");
// var tabs = document.getElementsByClassName("tab");
// var currentTab = 0;

// showTab(currentTab)

// submit.addEventListener("click", function(e){
//    e.preventDefault();
//    inputs = tabs[currentTab].getElementsByTagName("textarea");
//    var valid = true;
//    valid = validateForm(inputs, valid);
//    if(valid){
//       //Gather all data in the form and post it to a route
//       console.log("About too  run fetch")

//       const formData = {
//          firstName: document.getElementById("fname").value,
//          lastName: document.getElementById("lname").value,
//          email: document.getElementById("email").value,
//          contactNumber: document.getElementById("number").value,
//          enquiry: document.getElementById("enquiry").value
//       }
//       fetch("/testing-fetch", {
//          method: "POST",
//          body: JSON.stringify(formData),
//          headers: {
//            "Content-Type": "application/json",
//          },
//       })
//       .then(function (response){
//          return response.json();
//       })
//       .then((data =>{
//          form.style.display = "none";
//          document.getElementById("thankyou").style.display = "block";
//          document.getElementById("thankyou").textContent = data.message;
//          console.log("success" + data.message)
//       }))
//       .catch(function (error){
//          console.log(error)
//       })
      
//    }
   
// })



// function nextPrev(n){
//    var valid = true;
//    // Validate the current tab if n = 1
//    if(n == 1){
//       inputs = tabs[currentTab].getElementsByTagName("input");
//       valid = validateForm(inputs, valid);
//    }
//    if(valid == true){
//       tabs[currentTab].style.display = "none"
//       currentTab = currentTab + n;
//       tabs[currentTab].style.display = "block";
//       showTab(currentTab)
//    }
   
// }

// //Function to validate a form
// function validateForm(inputsHTMLList, v){

//    //loop through the inputs and set invalid class to any applicable fields if any field changes the value of valid to false it will never change back 
//    for(var i = 0; i < inputsHTMLList.length; i++){
//       if(inputsHTMLList[i].value == ""){
//          inputsHTMLList[i].className += " invalid"; 
//          v =  false;
//       }
//       if(inputsHTMLList[i].type == "email"){
//          var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//          if (!inputsHTMLList[i].value.match(validRegex)) {
//             inputsHTMLList[i].className += " invalid"
//             v = false;
//           } 
//       }
//    }
//    return v;
// }

// //Function declaration this function decides which tab and buttons to show
// function showTab(ct){
//    console.log("show tab is running")
//    var tabs = document.getElementsByClassName("tab");
//    var nextBtn = document.getElementById("nextBtn");
//    var prevBtn = document.getElementById("prevBtn");
//    var submitBtn = document.getElementById("submit");
//    tabs[ct].style.display = "block";

//    // if the tab is o only display the next button
//    if(ct === 0){
//       //If you are on the first pagge of the form 
//       prevBtn.style.display = "none";
//       submitBtn.style.display = "none";
//       nextBtn.style.display = "inline"
//    }else if (ct == (tabs.length -1)){
//       //If you are on the last page of the form
//       nextBtn.style.display = "none";
//       submitBtn.style.display = "inline"
//    }else{
//       //If you are anywhere in the middle of the form
//       prevBtn.style.display = "inline";
//       nextBtn.style.display = "inline";
//       submitBtn.style.display = "none";
//    }
  
// }
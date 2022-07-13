
const submit = document.getElementById("submit");
const form = document.getElementById("quick-enquiry-form");
var tabs = document.getElementsByClassName("tab");
var currentTab = 0;

showTab(currentTab)

submit.addEventListener("click", function(e){
   console.log("currentab below")
    console.log(currentTab)
   e.preventDefault();
   inputs = tabs[currentTab].getElementsByTagName("textarea");
   console.log("inputs below")
   console.log(inputs)
   var valid = true;
   valid = validateForm(inputs, valid);
   console.log("returned value of valid below")
   console.log(valid)
   if(valid){
      //Figure out way to submit data
      console.log("about to fetch")
      fetch("/testing-fetch", {
         method: "POST",
         body: {
            firstName: "Richard"
         }
      }).then((data =>{
         console.log(data)
         form.style.display = "none";
         document.getElementById("thankyou").style.display = "block"
      })).catch(function (error){
         console.log(error)
      })
      
   }
   
})



function nextPrev(n){
   console.log("next prev running")

   
   var valid = true;

   // Validate the current tab if n = 1

   if(n == 1){
      inputs = tabs[currentTab].getElementsByTagName("input");
      valid = validateForm(inputs, valid);

   }

   if(valid == true){
      console.log("currenttab before increment " + currentTab)
      console.log(tabs)
      console.log(tabs[2])
   
      tabs[currentTab].style.display = "none";

      currentTab = currentTab + n;
      console.log("currenttab after increment " + currentTab)
    
  
      tabs[currentTab].style.display = "block";
      console.log(currentTab )
      showTab(currentTab)
   }
   
}

//Function to validate a form
function validateForm(inputsHTMLList, v){

   //loop through the inputs and set invalid class to any applicable fields if any field changes the value of valid to false it will never change back 
   for(var i = 0; i < inputsHTMLList.length; i++){
      console.log("inputsHTMLList below")
      console.log(inputsHTMLList)

      if(inputsHTMLList[i].value == ""){
        
         inputsHTMLList[i].className += " invalid";
         
         v =  false;
      }
      if(inputsHTMLList[i].type == "email"){
        
         var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
         if (!inputsHTMLList[i].value.match(validRegex)) {
            inputsHTMLList[i].className += " invalid"
            v = false;
          } 
      }

   }

   return v;
}

//Function declaration this function decides which tab and buttons to show
function showTab(ct){
   console.log("running showtab")
   var tabs = document.getElementsByClassName("tab");
   var nextBtn = document.getElementById("nextBtn");
   var prevBtn = document.getElementById("prevBtn");
   var submitBtn = document.getElementById("submit");
   tabs[ct].style.display = "block";

   // if the tab is o only display the next button
   if(ct === 0){
      //If you are on the first pagge of the form 
      console.log("ct is equalt to 0")
      prevBtn.style.display = "none";
      submitBtn.style.display = "none";
      nextBtn.style.display = "inline"
   }else if (ct == (tabs.length -1)){
      //If you are on the last page of the form
      nextBtn.style.display = "none";
      submitBtn.style.display = "inline"
   }else{
      //If you are anywhere in the middle of the form
      prevBtn.style.display = "inline";
      nextBtn.style.display = "inline";
      submitBtn.style.display = "none";
   }
  
}
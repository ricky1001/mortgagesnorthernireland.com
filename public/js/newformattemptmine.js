
const submit = document.getElementById("submit");
const form = document.getElementById("quick-enquiry-form");
var tabs = document.getElementsByClassName("tab");
var currentTab = 0;


showTab(currentTab)

submit.addEventListener("click", function(e){

   e.preventDefault();
   inputs = tabs[currentTab-1].getElementsByTagName("textarea");
   var valid = true;
   valid = validateForm(inputs, valid);
   console.log("returned value of valid below")
   console.log(valid)
   if(valid){
      form.submit();
      form.style.display = "none";
      document.getElementById("thankyou").style.display = "block"
   }else{
      console.log("not valid")
      tabs[currentTab].className = " invalid";
   }
   
})



function nextPrev(n){

   var tabs = document.getElementsByClassName("tab");
   var nextBtn = document.getElementById("nextBtn");
   var valid = true;

   // Validate the current tab if n = 1

   if(n == 1){
      inputs = tabs[currentTab].getElementsByTagName("input");
      valid = validateForm(inputs, valid);

   }

   if(valid == true){
   
      tabs[currentTab].style.display = "none";

      currentTab = currentTab + n;
  
      tabs[currentTab].style.display = "block";
      showTab(currentTab)
   }
   
}

//Function to validate a form
function validateForm(inputsHTMLList, v){

   //loop through the inputs and set invalid class to any applicable fields if any field changes the value of valid to false it will never change back 
   for(var i = 0; i < inputsHTMLList.length; i++){

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
   console.log("current Tab Below")
   console.log(currentTab)
   if(ct == 0){
      prevBtn.style.display = "none";
      submitBtn.style.display = "none";
      nextBtn.style.display = "inline"
   }
   // if the tab is the length of the tab list -1 the next button becomes the submit button
   if(ct == (tabs.length -1)){
      nextBtn.style.display = "none";
      submitBtn.style.display = "inline"
      
   }else{
      prevBtn.style.display = "inline";
      nextBtn.style.display = "inline";
      submitBtn.style.display = "none";
   }
}
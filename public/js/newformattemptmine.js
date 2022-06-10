var currentTab = 0;

showTab(currentTab)

function nextPrev(n){
   var tabs = document.getElementsByClassName("tab");
  var valid = true;
   // Validate the current tab if n = 1
   if(n = 1){
      inputs = tabs[currentTab].getElementsByTagName("input");
      valid = validateForm(inputs);
      console.log("returned value of valid below")
      console.log(valid)
   }
   if(valid = true){
      tabs[currentTab].style.display = "none";

      currentTab = currentTab + n;
  
      tabs[currentTab].style.display = "block";
        console.log(currentTab)
      showTab(currentTab)
   }
}

//Function to validate a form
function validateForm(inputsHTMLList){
   console.log("validate form running")
   console.log(inputsHTMLList)
   for(var i = 0; i < inputsHTMLList.length; i++){
      console.log("value of the input below")
         console.log(inputsHTMLList[i].value)
      if(inputsHTMLList[i].value == ""){
         console.log("setting invalid")
         inputsHTMLList[i].className += " invalid";
         console.log(inputsHTMLList[i].className)
         return false;
      }
      if(inputsHTMLList[i].type == "email"){
         console.log("checking email")
         var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
         if (!inputsHTMLList[i].value.match(validRegex)) {
            inputsHTMLList[i].className += " invalid"
            return false;
          } 
      }
   }
   console.log("about to return true")
   return true;
}

//Function declaration this function decides which tab and buttons to show
function showTab(ct){
   console.log("running showtab")
   var tabs = document.getElementsByClassName("tab");
   var nextBtn = document.getElementById("nextBtn");
   var prevBtn = document.getElementById("prevBtn");
   tabs[ct].style.display = "block";

   // if the tab is o only display the next button
   if(ct == 0){
      prevBtn.style.display = "none";
   }
   // if the tab is the length of the tab list -1 the next button becomes the submit button
   if(ct == (tabs.length -1)){
      nextBtn.innerHTML = "Submit";
   }else if(ct > 0 && ct <= (tabs.length - 1)){
      prevBtn.style.display = "block";
      prevBtn.style.display = "inline";
   }
}
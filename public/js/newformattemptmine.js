
const submit = document.getElementById("submit");
const form = document.getElementById("quick-enquiry-form");
var tabs = document.getElementsByClassName("tab");
var currentTab = 0;


showTab(currentTab)

submit.addEventListener("click", function(e){
   console.log(tabs)
   console.log(currentTab)
   console.log(tabs[2])
   e.preventDefault();
   inputs = tabs[currentTab].getElementsByTagName("input");
   var valid = true;
   valid = validateForm(inputs, valid);
   console.log(valid)
   if(valid){
      form.style.display = "none";
      document.getElementById("thankyou").style.display = "block"
   }
   
})



function nextPrev(n){
   console.log("this is n below top")
   console.log(n)
   var tabs = document.getElementsByClassName("tab");
   var nextBtn = document.getElementById("nextBtn");
   var valid = true;

   // Validate the current tab if n = 1
   console.log("this is n below below")
   console.log(n)
   if(n == 1){
      inputs = tabs[currentTab].getElementsByTagName("input");
      valid = validateForm(inputs, valid);
      console.log("returned value of valid below")
      console.log(valid)

      console.log("tabs -1 below")
      console.log(tabs.length -1)
      console.log("currenttab below")
      console.log(currentTab)



      // if(currentTab == (tabs.length -1) && valid == true){
      //    console.log("form gets submitted")
      //    form.submit();
         
  
      // }
   }

   if(valid == true){
      console.log("running n")
      tabs[currentTab].style.display = "none";

      currentTab = currentTab + n;
  
      tabs[currentTab].style.display = "block";
        console.log(currentTab)
      showTab(currentTab)
   }
   
}

//Function to validate a form
function validateForm(inputsHTMLList, v){
   console.log("validate form running")
   console.log(inputsHTMLList)
   //loop through the inputs and set invalid class to any applicable fields if any field changes the value of valid to false it will never change back 
   for(var i = 0; i < inputsHTMLList.length; i++){
      console.log("value of the input below")
         console.log(inputsHTMLList[i].value)
      if(inputsHTMLList[i].value == ""){
         console.log("setting invalid")
         inputsHTMLList[i].className += " invalid";
         
         v =  false;
      }
      if(inputsHTMLList[i].type == "email"){
         console.log("checking email")
         var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
         if (!inputsHTMLList[i].value.match(validRegex)) {
            inputsHTMLList[i].className += " invalid"
            v = false;
          } 
      }
   }
   console.log("about to return true")
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
   if(ct == 0){
      prevBtn.style.display = "none";
      submitBtn.style.display = "none";
   }
   // if the tab is the length of the tab list -1 the next button becomes the submit button
   if(ct == (tabs.length -1)){
      nextBtn.style.display = "none";
      submitBtn.style.display = "inline"
      
   }else if(ct > 0 && ct <= (tabs.length - 1)){
      prevBtn.style.display = "block";
      prevBtn.style.display = "inline";
      submitBtn.style.display = "none";
   }
}
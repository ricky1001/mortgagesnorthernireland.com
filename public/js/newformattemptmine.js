var currentTab = 0;

showTab(currentTab)

function showTab(ct){
   var tabs = document.getElementsByClassName("tab");
   tabs[ct].style.display = "block";

}
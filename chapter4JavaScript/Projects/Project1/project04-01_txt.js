/*    JavaScript 7th Edition
      Chapter 4
      Project 04-01

      Application to calculate total moving cost
      Author: 
      Date:   

      Filename: project04-01.js
*/

// Global Constants
const COST_PER_LB = .50;
const COST_PER_MILE = .75;
const SETUP_COST = 500;

// Global Variables
let wgtBox = document.getElementById("wgtBox");
let distBox = document.getElementById("distBox");
let msgBox = document.getElementById("msgBox");


// Event Handlers
document.getElementById("wgtBox").onchange = calcTotal;
document.getElementById("distBox").onchange = calcTotal;
document.getElementById("setupBox").onclick = calcTotal;

function calcTotal() {
   let totalCost = 0;      // Set the initial estimate to $0
   msgBox.innerHTML = "";  // Erase any warnings in the message box
   
      try {
         if(!(wgtBox.value > 0))
            throw "!! Enter a positive weight";
         totalCost += wgtBox.value * COST_PER_LB;  
      } catch(error) {
         msgBox.innerHTML = error;
      }
          
      try {
         if(!(distBox.value > 0))
            throw "!! Enter a positive mileage";
         totalCost += distBox.value * COST_PER_MILE; 
      } catch(error) {
         msgBox.innerHTML = error;
      }
         
   if (document.getElementById("setupBox").checked) {
      totalCost += SETUP_COST
   }
   
   document.getElementById("totalBox").innerHTML = formatCurrency(totalCost);
}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
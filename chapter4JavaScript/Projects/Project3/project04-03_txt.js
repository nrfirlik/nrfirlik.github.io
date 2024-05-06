/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: 
      Date:   

      Filename: project04-03.js
*/

// Maximum Length of Review
const MAX_REVIEW = 1000;
document.getElementById("limit").innerHTML = MAX_REVIEW;

let wordCountBox = document.getElementById("countValue");
let warningBox = document.getElementById("warningBox");

document.getElementById("comment").addEventListener("keyup", updateCount);

function updateCount() {
   warningBox.innerHTML = "";
   
   let commentText = document.getElementById("comment").value;
   let charCount = countCharacters(commentText);
   
   try {
      if(charCount > MAX_REVIEW)
         throw "You have exceeded the character count limit";
      wordCountBox.innerHTML = charCount;
   } catch(error) {
      warningBox.innerHTML = error;
   }
   finally {
      wordCountBox.innerHTML = charCount;
   }
}

/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
} 
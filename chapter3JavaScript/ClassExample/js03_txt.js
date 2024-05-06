/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: 
     Date:   

     Filename: js03.js
 */

// Days of the week
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

window.addEventListener("load", addWeekDays);
window.addEventListener("load", showGames);

//Function to write game information into the calendar
function showGames() {
	for (let i = 0; i < gameDates.length; i++) {
		let gameInfo = "";
		
		// Open the paragraph
		switch (gameResults[i]) {
			case "W":
				gameInfo += "<p class='win'>";
				break;
			case "L":
				gameInfo += "<p class='lose'>";
				break;
			case "S":
				gameInfo += "<p class='suspended'>";
				break;
			case "P":
				gameInfo += "<p class='postponed'>";
				break;
		}
		
		// Display the game location
		if (gameLocations[i] === "h") {
			gameInfo += "vs. "; 
		} else if (gameLocations[i] === "a") {
			gameInfo += "@ ";
		}			
		
		// Include the opponent
		gameInfo += gameOpponents[i] + "<br>";
		
		// Include result and score
		gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";
		
		// Display innings played for suspended, shortened, or extra-inning games
		if (gameInnings[i] < 5) {
			gameInfo += " [" + gameInnings[i]+"]***";
		} else if (gameInnings[i] < 9) {
			gameInfo += " [" + gameInnings[i]+"]*";
		} else if (gameInnings[i] > 9) {
			gameInfo += " [" + gameInnings[i]+"]";
		}
		
		// Close the paragraph
		gameInfo += "</p>";
		
		// Write the information into a table cell
		let tableCell = document.getElementById(gameDates[i]);
		tableCell.insertAdjacentHTML("beforeEnd", gameInfo)
	}
}


function addWeekDays() {
	let i = 0; 
	let headingCells = document.getElementsByTagName("th");
	while (i < 7) {
		headingCells[i].innerHTML = weekDays[i];
		i++;
	}
}
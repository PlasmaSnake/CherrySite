window.onload = function(){
	createCalendar();
}

function createCalendar(){
	var d = new Date();
	var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var dayName = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	var currentMonth = d.getMonth();
	var currentYear = d.getFullYear();
	var firstDateOfMonth = monthName[currentMonth] + " " + 1 + currentYear; // Format: Month Day Year
	var temp = new Date(firstDateOfMonth).toDateString();
	
	var firstDay = temp.substring(0,3); 
	var firstDayNumb = dayName.indexOf(firstDay); // Sets day of first day of Month
	var days = new Date(currentYear, currentMonth, 0).getDate(); // Returns # of days in Month
	var calendar = getCalendar(firstDayNumb, days);
	document.getElementById("calendar-mo-yr").innerHTML = monthName[currentMonth]+" "+currentYear;
	document.getElementById("calendar-dates").appendChild(calendar);

	
}

function getCalendar(firstDayNumb, days){
	var table = document.createElement('table');
	var tr = document.createElement('tr');
	for (var c = 0; c <= 6; c++){
		var td = document.createElement('td');
		td.innerHTML = "SMTWTFS"[c];
		tr.appendChild(td);
	}
	table.appendChild(tr);
	// Set Space in 2nd row
	tr = document.createElement('tr');
	var i = 0;
	for (;i <= 6; i++){
		if (i == firstDayNumb) break;
		td =  document.createElement('td');
		td.innerHTML = "";
		tr.appendChild(td);
	}
	table.appendChild(tr);
	// Set the rest of the 2nd row as numbers
	var day = 1;
	for (; i <= 6; i++){
		td =  document.createElement('td');
		td.innerHTML = day; // put in day
		day++;
		tr.appendChild(td);
	}
	table.appendChild(tr);
	for (var row = 3; row <= 7; row++){
		tr = document.createElement('tr');
		for (var j = 0; j <= 6; j++){
			if (day > days) { 

				table.appendChild(tr);
				return table;
			}
			td =  document.createElement('td');
			td.innerHTML = day; // put in day
			day++;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
}

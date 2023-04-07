const form = document.querySelector("form");
const resultsContainer = document.getElementById("results-container");

function calculateSalary(event) {
	event.preventDefault();

	const hourlyRate = parseFloat(document.getElementById("hourly-rate").value);
	const hoursPerWeek = parseFloat(document.getElementById("hours-per-week").value);

	if (isNaN(hourlyRate) || isNaN(hoursPerWeek)) {
		alert("Please enter valid numbers.");
		return;
	}

	const weeklySalary = hourlyRate * hoursPerWeek;
	const monthlySalary = weeklySalary * 4;
	const annualSalary = weeklySalary * 52;

	document.getElementById("weekly-salary").textContent = weeklySalary.toFixed(2);
	document.getElementById("monthly-salary").textContent = monthlySalary.toFixed(2);
	document.getElementById("annual-salary").textContent = annualSalary.toFixed(2);
	
	const response = `Weekly Salary: $${weeklySalary.toFixed(2)}\nMonthly Salary: $${monthlySalary.toFixed(2)}\nAnnual Salary: $${annualSalary.toFixed(2)}`;
	
	alert(response);

	resultsContainer.style.display = "block";
}

form.addEventListener("submit", calculateSalary);

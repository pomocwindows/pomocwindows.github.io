var day = new Date()
var utc = parseInt(day.getUTCHours()) + 2;
var weekdays = new Array("Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota");
var timearray = new Array(14, 16, 18, 20, 22);
var terms = new Array();

if (utc < 14 - 2) {
	for (let i = 0; i < 3; i++) {
		terms.push(weekdays[day.getDay()] + " " + day.getUTCDate() + "." + (parseInt(day.getUTCMonth()) + 1) + "." + day.getUTCFullYear() + "<br>" + timearray[i] + ":00 - " + timearray[i + 1] + ":00");
	}
} else if (utc < 16 - 2) {
	for (let i = 1; i < 4; i++) {
		terms.push(weekdays[day.getDay()] + " " + day.getUTCDate() + "." + (parseInt(day.getUTCMonth()) + 1) + "." + day.getUTCFullYear() + "<br>" + timearray[i] + ":00 - " + timearray[i + 1] + ":00");
	}
} else if (utc < 18 - 2) {
	terms.push(weekdays[day.getDay()] + " " + day.getUTCDate() + "." + (parseInt(day.getUTCMonth()) + 1) + "." + day.getUTCFullYear() + "<br>" + timearray[2] + ":00 - " + timearray[3] + ":00");
	terms.push(weekdays[day.getDay()] + " " + day.getUTCDate() + "." + (parseInt(day.getUTCMonth()) + 1) + "." + day.getUTCFullYear() + "<br>" + timearray[3] + ":00 - " + timearray[4] + ":00");
	terms.push(weekdays[day.getDay() + 1] + " " + (parseInt(day.getUTCDate()) + 1) + "." + (parseInt(day.getUTCMonth()) + 1) + "." + day.getUTCFullYear() + "<br>" + timearray[0] + ":00 - " + timearray[1] + ":00");
} else if (utc < 20 - 2) {
	terms.push(weekdays[day.getDay()] + " " + day.getUTCDate() + "." + (parseInt(day.getUTCMonth()) + 1) + "." + day.getUTCFullYear() + "<br>" + timearray[3] + ":00 - " + timearray[4] + ":00");
	terms.push(weekdays[day.getDay() + 1] + " " + (parseInt(day.getUTCDate()) + 1) + "." + (parseInt(day.getUTCMonth()) + 1) + "." + day.getUTCFullYear() + "<br>" + timearray[0] + ":00 - " + timearray[1] + ":00");
	terms.push(weekdays[day.getDay() + 1] + " " + (parseInt(day.getUTCDate()) + 1) + "." + (parseInt(day.getUTCMonth()) + 1) + "." + day.getUTCFullYear() + "<br>" + timearray[1] + ":00 - " + timearray[2] + ":00");
} else {
	for (let i = 0; i < 3; i++) {
		terms.push(weekdays[day.getDay() == 6 ? 0 : day.getDay() + 1] + " " + (parseInt(day.getUTCDate()) + 1) + "." + (parseInt(day.getUTCMonth()) + 1) + "." + day.getUTCFullYear() + "<br>" + timearray[i] + ":00 - " + timearray[i + 1] + ":00");
	}
}

(function(window, document, undefined){
emailjs.init("iwDeETNr74wRgR8My");
window.onload = init;

  function init(){
    document.getElementById("term0").innerHTML = terms[0];
	document.getElementById("term1").innerHTML = terms[1];
	document.getElementById("term2").innerHTML = terms[2];
	  
	document.getElementById('contactform').addEventListener('submit', function(event) {
		event.preventDefault();
		
		document.getElementById('submit').disabled = true;
		
		var params = {
			//name: document.getElementById("termname").value,
			phone: document.getElementById("termtel").value,
			//termin: document.getElementById("termtime").value,
			//message: document.getElementById("termjob").value
		};

		emailjs.send('service_dj0u2uf', 'template_9a7t8fn', params)
						.then(function() {
							document.getElementById("contactform").reset();
							alert("WYSŁANO!");
						});
	});
}

})(window, document, undefined);

function order(x) {
	document.getElementById("termtime").value = terms[x].replace('<br>', ', ').replaceAll(':00', '')
}

function job(y) {
	document.getElementById("termjob").value = y;
}
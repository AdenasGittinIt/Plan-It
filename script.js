var d = new Date();
var minutes = d.getMinutes();
var hour = d.getHours();
var date = d.getDate();
var dayIndex = d.getDay();
var timeNow = hour + ":" + minutes;

console.log(timeNow);
  
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var today = days[dayIndex];

var monthIndex = d.getMonth();
var allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var month = allMonths[monthIndex];
var year = d.getFullYear();

$("#today").text(today +" " + month +" " + date + ", " + year);
 
var apptInput = $(".hour-input");
var apptCount = 0
var appointments = ["",  "", "",  "",  "",  "",  "",  "",  ""];

//when the page loads get the items from local storage and display them on the page

$().ready(function() {
  var storedAppts = JSON.parse(localStorage.getItem("appts"));
  if (storedAppts!== null) {
    appointments = storedAppts
  }
  console.log(storedAppts);
  // appointments.splice(i, 1, apptInput[i].value)
});


function keepAppts() {
  localStorage.setItem("appts", JSON.stringify(appointments));
}


$(".button").click(function(event) {
  event.preventDefault();

    for (var i = 0; i < appointments.length; i++) {

      //put the value of the input in the appointments array and set the value of each element in the appointments array equal to the input text
      appointments.splice(i, 1, apptInput[i].value)
    }    
    //then save it to local storage
    console.log(appointments); 
    keepAppts();  
  });
  
   


//I'll need way to track the current day and time.  

//A formula that will color code an hour that has passed

//A conditional statment.
// if the div id is greater than or equal to the time style background color green else color grey
// do this in a loop
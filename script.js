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
var inputArray = $(".hour-input");

$("#today").text(today +" " + month +" " + date + ", " + year);
  

// $().ready(function() {
//   for (i = 0; i < inputArray.length; i++) {
//     var appointment = localStorage.getItem("appt");
//     inputArray[i].value appointment
//   }
// });

//I'll need a function to capture the user input and saving it in local storage
//each input field will need it's own save button

  $(".button").click(function(e) {
  for (i = 0; i < inputArray.length; i++) {
    localStorage.setItem("appt", inputArray[i].value);
  };
  
  console.log(inputArray);

  });
   


//I'll need way to track the current day and time.  

//A formula that will color code an hour that has passed

//A conditional statment.
// if the div id is greater than or equal to the time style background color green else color grey

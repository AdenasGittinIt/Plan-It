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


//When the page loads, check local storage,
//if anything exists, load it into the corresponding time slot
//This will be a .get function??? I'll need to loop through an array get and display an values?



//I'll need a method for capturing the user input and saving it in local storage
//each input field will need it's own save button

  var inputArray = $(".hour-input");


  $(".button").click(function(e) {
  for (i = 0; i < inputArray.length; i++) {
    localStorage.setItem("appt", inputArray[i].value);
  }
  
  console.log(inputArray);

  });
   


//I'll need way to track the current day and time.  

//A formula that will color code an hour that has passed

//A conditional statment.
// if the div id is greater than or equal to the time style background color green else color grey

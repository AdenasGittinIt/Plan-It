//In my HTML I'll need div that will hold the time table
//A div or header that shows the current day
  //js has a DateObject() built in

  var d = new Date();
  var minutes = d.getMinutes();
  var hour = d.getHours();
  var date = d.getDate();
  var dayIndex = d.getDay();

  console.log(hour + ":" + minutes)
  
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  var today = days[dayIndex];

  var monthIndex = d.getMonth();
  
  var allMonths = ["January",
    "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var month = allMonths[monthIndex];
  var year = d.getFullYear();
 
  $("#today").text(today +" " + month +" " + date + ", " + year);

//Input fields inside the div for the eight hours in the day
  //When the page loads, check local storage,
  //if anything exists, load it into the corresponding time slot




//I'll need a method for capturing the user input and saving it in local storage
  //each input field will need it's own save button

//I'll need way to track the current day and time.  

//A formula that will color code an hour that has passed

//A conditional statment.
// if the div id is greater than or equal to the time style background color green else color grey

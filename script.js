//In my HTML I'll need div that will hold the time table
//I div or header that shows the current day
  //js has a DateObject() built in

  var d = new Date();
  var dayIndex = d.getDay();
  var date = d.getDate();

  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  var currentDay = days[dayIndex];
  $("#today").html(currentDay);

  console.log(currentDay);
  console.log(date);

//Input fields inside the div for the eight hours in the day
  //When the page loads, check local storage,
  //if anything exists, load it into the corresponding time slot


//I'll need a method for capturing the user input and saving it in local storage
  //each input field will need it's own save button

//I'll need way to the current day and time.  

//A formula that will color code an hour that has passed

//

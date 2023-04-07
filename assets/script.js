var timeDisplayEl = $("#currentDay");
var saveButton = $(".saveBtn");
var scheduleInputEl = $(".description");

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Displays time
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

displayTime();
setInterval(displayTime, 1000);

//saves text to local storage
$(saveButton).click(function() {
  alert("SAVE BUTTON");
  event.preventDefault();
  var text = $(scheduleInputEl).val();
  localStorage.setItem("toDo", JSON.stringify(text));
});

//shows saved text on webpage
function readProjectsFromStorage() {
  var text =JSON.parse(localStorage.getItem("toDo"))
}  

//Change Class based off of time
$(document).ready(function () {
  let time = dayjs().$H;      

function classChanger(relativeTime) {

  if (relativeTime < time) {
      $("div").addClass("past");
  } else if (relativeTime == time) {
      $("div").addClass("present");
  } else {
      $("div").addClass("future");
  }
}

classChanger();
});



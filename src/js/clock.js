function currentTime() {
  /////////////////
  /////// Variables
  /////////////////

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "AM";

  /////////////////
  // clock display
  /////////////////

  //choosing session (PM or AM)
  if (hours > 12) {
    session = "PM";
  }
  //time display control by ternary operators
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  //time display style
  let time = hours + " : " + minutes + " : " + seconds;

  //geting clock display paragraph from DOM
  document.querySelector(".clock__display").innerText = time;

  let t = setTimeout(currentTime, 1000);
}

function currentDay() {
  /////////////////
  /////// Variables
  /////////////////

  const date = new Date();
  const today = date.getDay();
  var weekdays = [
    document.querySelector("#sunday"),
    document.querySelector("#monday"),
    document.querySelector("#tuesday"),
    document.querySelector("#wednesday"),
    document.querySelector("#thursday"),
    document.querySelector("#friday"),
    document.querySelector("#saturday"),
  ];

  /////////////////////
  // Week day selector
  /////////////////////

  for (const weekday of weekdays) {
    if (weekdays.indexOf(weekday) === today) {
      weekday.classList.add("active");
      return;
    }

    weekday.classList.remove("active");
  }

  let t = setTimeout(currentDay, 1000);
}

//calling functions
currentTime();
currentDay();

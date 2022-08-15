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
  let time = hours + " : " + minutes + " : " + seconds + "   " + session;

  //geting clock display paragraph from DOM
  document.querySelector(".clock__display").innerText = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}

function currentDay() {
  /////////////////
  /////// Variables
  /////////////////

  let date = new Date();
  let today = date.getDay();
  var weekday = [
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

  today =
    today == 0
      ? weekday[0].classList.add("active")
      : weekday[0].classList.remove("active");
  today =
    today == 1
      ? weekday[1].classList.add("active")
      : weekday[1].classList.remove("active");
  today =
    today == 2
      ? weekday[2].classList.add("active")
      : weekday[2].classList.remove("active");
  today =
    today == 3
      ? weekday[3].classList.add("active")
      : weekday[3].classList.remove("active");
  today =
    today == 4
      ? weekday[4].classList.add("active")
      : weekday[4].classList.remove("active");
  today =
    today == 5
      ? weekday[5].classList.add("active")
      : weekday[5].classList.remove("active");
  today =
    today == 6
      ? weekday[6].classList.add("active")
      : weekday[6].classList.remove("active");

  let t = setTimeout(function () {
    currentDay();
    1000;
  });
}

//calling functions
currentTime();
currentDay();

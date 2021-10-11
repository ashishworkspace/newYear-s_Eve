const days =  document.getElementById('days__current');
const hours =  document.getElementById("hour__current");
const min =  document.getElementById("min__current");
const sec =  document.getElementById("sec__current");


var newYears = "1 Jan 2022";

function countDown() {
  const currentDate = new Date();
  const newYearDate = new Date(newYears);
  const totalSeconds = (newYearDate - currentDate) / 1000;
  const totalDays = Math.floor(totalSeconds / 3600 / 24);
  const totalHours = Math.floor(totalSeconds / 3600) % 24;
  const totalMin = Math.floor(totalSeconds / 60) % 60;
  const totalSec = Math.floor(totalSeconds) % 60;

  days.innerHTML = totalDays;
  hours.innerHTML = totalHours;
  min.innerHTML = totalMin;
  sec.innerHTML = totalSec;
}

// initial Call
countDown();

setInterval(countDown, 1000);

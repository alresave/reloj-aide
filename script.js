const clock = document.querySelector("#clock");
const clockMain = document.querySelector("#clock-main");
const clockSeconds = document.querySelector("#clock-seconds");
const clockPeriod = document.querySelector("#clock-period");

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const displayHours = hours % 12 || 12;
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";

  clockMain.textContent = `${displayHours}:${minutes}`;
  clockSeconds.textContent = seconds;
  clockPeriod.textContent = period;
  clock.dateTime = now.toISOString();
}

updateClock();
setInterval(updateClock, 1000);

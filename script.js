const clock = document.querySelector("#clock");

const formatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

function updateClock() {
  const now = new Date();
  const value = formatter.format(now);

  clock.textContent = value;
  clock.dateTime = now.toISOString();
}

updateClock();
setInterval(updateClock, 1000);

const hourElement = document.getElementById("hour");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

const updateClock = () => {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let ampm = "AM";

  if (hours >= 12) {
    ampm = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  }

  // Handle 12 AM case
  if (hours === 0) {
    hours = 12;
  }

  // Add leading zero if needed
  // @ts-ignore
  hours = hours < 10 ? "0" + hours : hours;
  // @ts-ignore
  minutes = minutes < 10 ? "0" + minutes : minutes;
  // @ts-ignore
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // @ts-ignore
  hourElement.innerText = hours;
  // @ts-ignore
  minutesElement.innerText = minutes;
  // @ts-ignore
  secondsElement.innerText = seconds;
  // @ts-ignore
  ampmElement.innerText = ampm;
};

setInterval(updateClock, 1000); // Update the clock every second
updateClock(); // Initial call to display the time immediately

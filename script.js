const daysDisplay = document.getElementById("days")
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

const christmas = "25 Dec 2021"

function countdown() {
    const christmasDate = new Date(christmas);
    const currentDate = new Date();

    const totalSeconds = (christmasDate - currentDate) /1000;

    const days = Math.floor(totalSeconds /3600/24);
    const hours = Math.floor(totalSeconds / 3600) %24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysDisplay.innerHTML = days;
    hoursDisplay.innerHTML = hours;
    minutesDisplay.innerHTML = minutes;
    secondsDisplay.innerHTML = seconds;

    console.log(days, hours, minutes, seconds);
}


//initial call
countdown();

setInterval(countdown, 1000);

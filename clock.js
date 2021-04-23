import "./styles.css";

// You're gonna need this
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h2");

const khSecond = 1000;
const khMinute = khSecond * 60;
const khHour = khMinute * 60;
const khDay = khHour * 24;

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900"),
    today = new Date();

  const gapTime = xmasDay - today;
  const day = Math.floor(gapTime / khDay);
  const hour = Math.floor((gapTime % khDay) / khHour);
  const minute = Math.floor((gapTime % khHour) / khMinute);
  const second = Math.floor((gapTime % khMinute) / khSecond);
  clockTitle.innerText = `${day}d ${hour < 10 ? `0${hour}` : `${hour}`}h ${
    minute < 10 ? `0${minute}` : `${minute}`
  }m ${second < 10 ? `0${second}` : `${second}`}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
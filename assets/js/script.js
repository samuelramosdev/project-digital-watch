const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const watch = setInterval(function time() {
  let dateToday = new Date();
  let h = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();

  h < 10 ? '0' + h : h
  min < 10 ? '0' + min : min
  sec < 10 ? '0' + sec : sec

  hours.textContent = h;
  minutes.textContent = min;
  seconds.textContent = sec;

})

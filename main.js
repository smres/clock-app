// const clockDiv = document.querySelector(".clock");

// setInterval(clockHandler, 1000);

// let second = 55;
// function clockHandler() {
//   const clockHours = new Date();
//   let hour = clockHours.getHours();
//   console.log(hour);
//   let minute = clockHours.getMinutes();
//     let second = clockHours.getSeconds();

//   if (second === 60) {
//     second = "0";
//   }
//   if (second >= 0 && second <= 9) {
//     clockDiv.innerText = `${hour} : ${minute} : 0${second} `;
//   } else {
//     clockDiv.innerText = `${hour} : ${minute} : ${second} `;
//   }
// }

// ==================================================================

function showTime() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  if (h === 0) {
    h = 12;
  }

  if (h > 12) {
    h -= 12;
    session = "PM";
  }

  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;

  let time = `${h}:${m}:${s} ${session}`;

  document.querySelector(".clock").innerText = time;;
}
setInterval(showTime, 1000);

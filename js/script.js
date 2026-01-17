'use strict';

const dateText = document.querySelector('.date-text');
const dayText = document.querySelector('.day-text');
const timeText = document.querySelector('.time-text');

/*----------------- OLD STYLE -----------------*/

/*---- Date & Time ----*/
// const now = new Date();

// const monthArray = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];

// const weekDay = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
// ];

/*---- Date & Day Display ----*/
// dateText.textContent = `${monthArray[now.getMonth()]} ${String(
//   now.getDate().toString().padStart(2, '0')
// )}, ${now.getFullYear()}`;

// dayText.textContent = `${weekDay[now.getDay()]}`;

/*---- Time Display ----*/
// setInterval(() => {
//   const options = {
//     timeZone: 'Asia/Kolkata',
//     hour12: true,
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//   };

//   const now = new Date().toLocaleString('en-US', options);
//   const timer = now.split(' ')[0];
//   const ampm = now.split(' ')[1];

//   timeText.innerHTML = `${timer}<span>${ampm}</span>`;
// }, 1000);

/*----------------- NEW STYLE -----------------*/

/*------- Date Create -------*/

const options = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
};

const formatterDate = new Intl.DateTimeFormat(navigator.language, options);
const parts = formatterDate.formatToParts(new Date());

/*------- Date UI -------*/

const calcFind = (find) => parts.find((p) => p.type === find).value;

const month = calcFind('month');
const date = calcFind('day');
const year = calcFind('year');
const day = calcFind('weekday');

dateText.textContent = `${month} ${date}, ${year}`;
dayText.textContent = day;

/*------- Time UI -------*/

const formatterTime = new Intl.DateTimeFormat(navigator.language, options);

setInterval(() => {
  const parts = formatterTime.formatToParts(new Date());
  const get = (t) => parts.find((p) => p.type === t)?.value;

  timeText.innerHTML = `${get('hour')}:${get('minute')}:${get(
    'second'
  )}<span>${get('dayPeriod')}</span>`;
}, 1000);

let interval;

var timer2 = () => {
let date = new Date('May 25, 2025 10:00:00 GMT+04:00') - new Date();
let days = String(Math.floor(date/(1000*60*60*24))).padStart(2, '0');
let hours = String(Math.floor(date % (1000*60*60*24) / (1000*60*60))).padStart(2, '0');
let minutes = String(Math.floor(date % (1000*60*60) / (1000*60))).padStart(2, '0');
let seconds = String(Math.floor(date % (1000*60) / (1000))).padStart(2, '0');

if (date<0){
    days ="🥳";
    hours = "🎉";
    minutes = "🎊";
    seconds = "🪅";
    clearInterval(interval)
}
document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;
}

var timer1 = () => {
let date = new Date('June 1, 2025 10:00:00 GMT+04:00') - new Date();
let days = String(Math.floor(date/(1000*60*60*24))).padStart(2, '0');
let hours = String(Math.floor(date % (1000*60*60*24) / (1000*60*60))).padStart(2, '0');
let minutes = String(Math.floor(date % (1000*60*60) / (1000*60))).padStart(2, '0');
let seconds = String(Math.floor(date % (1000*60) / (1000))).padStart(2, '0');

if (date<0){
    days ="🥳";
    hours = "🎉";
    minutes = "🎊";
    seconds = "🪅";
    clearInterval(interval)
}
document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;
}

interval=setInterval (timer1,1000)
timer1();

function btn2() {
    clearInterval(interval)
    interval=setInterval (timer2,1000)
    timer2();
}

function btn1() {
    clearInterval(interval)
    interval=setInterval (timer1,1000)
    timer1();
}

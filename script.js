const NewYear = "1 Jan 2023";


const daysel = document.getElementById('days');
const hoursel = document.getElementById('hours');
const minsel = document.getElementById('mins');
const secondsel = document.getElementById('seconds');

function countdown() {

    const NewDate = new Date(NewYear);
    const CurrDate = new Date();

    const TotalSeconds = (NewDate - CurrDate) / 1000;

    const days = Math.floor(TotalSeconds / 3600 / 24);
    const hours = Math.floor(TotalSeconds / 3600) % 24;
    const mins = Math.floor(TotalSeconds / 60) % 60;
    const seconds = Math.floor(TotalSeconds) % 60;


    daysel.innerHTML = time(days);
    hoursel.innerHTML = time(hours);
    minsel.innerHTML = time(mins);
    secondsel.innerHTML = time(seconds);
}

function time(time) {
    return time < 10 ? (`0${time}`) : time;
}

setInterval(countdown, 1000);
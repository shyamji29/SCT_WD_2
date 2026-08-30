// Getting the elements from HTML
const display = document.getElementById("display");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const lapBtn = document.getElementById("lapBtn");
const resetBtn = document.getElementById("resetBtn");

const lapList = document.getElementById("lapList");


// Variables for stopwatch
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

let timer = null;


// Check whether stopwatch is running
let running = false;


// =========================
// START BUTTON
// =========================

startBtn.addEventListener("click", function () {

    // Don't start another timer if already running
    if (running === false) {

        running = true;

        timer = setInterval(function () {

            milliseconds++;

            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }


            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }


            updateDisplay();

        }, 10);

    }

});


// =========================
// PAUSE BUTTON
// =========================

pauseBtn.addEventListener("click", function () {

    if (running === true) {

        clearInterval(timer);

        running = false;

    }

});


// =========================
// RESET BUTTON
// =========================

resetBtn.addEventListener("click", function () {

    // Stop the timer
    clearInterval(timer);

    running = false;


    // Reset time
    milliseconds = 0;
    seconds = 0;
    minutes = 0;


    // Update display
    updateDisplay();


    // Remove all lap times
    lapList.innerHTML = "";

});


// =========================
// LAP BUTTON
// =========================

lapBtn.addEventListener("click", function () {

    // Lap should only work when stopwatch is running
    if (running === true) {

        const lapItem = document.createElement("li");

        const lapNumber = lapList.children.length + 1;

        lapItem.innerHTML =
            "<span>Lap " + lapNumber + "</span>" +
            "<span>" + getCurrentTime() + "</span>";


        lapList.appendChild(lapItem);

    }

});


// =========================
// UPDATE DISPLAY
// =========================

function updateDisplay() {

    let min = minutes;

    let sec = seconds;

    let ms = milliseconds;


    // Add zero before single digit numbers
    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    if (ms < 10) {
        ms = "0" + ms;
    }


    display.innerText =
        min + ":" + sec + ":" + ms;
}


// =========================
// GET CURRENT TIME
// =========================

function getCurrentTime() {

    let min = minutes;

    let sec = seconds;

    let ms = milliseconds;


    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    if (ms < 10) {
        ms = "0" + ms;
    }


    return min + ":" + sec + ":" + ms;
}
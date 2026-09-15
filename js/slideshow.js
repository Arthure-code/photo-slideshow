"use strict";

// Delays between two slides, in milliseconds
const SLOW = 1500;
const MEDIUM = 1000;
const FAST = 500;
const DELAYS = { fast: FAST, medium: MEDIUM, slow: SLOW };

// index of the slide on screen
let slideIndex = 0;
// the timer, when auto mode runs
let timer;
// current delay of the timer
let currentDelay = FAST;
// whether the slideshow advances on its own
let autoMode = false;

// Alt text of each slide
const captions = [
    "The boat",
    "View from the helicopter",
    "What a beautiful mountain!",
    "A pretty little harbour",
    "A glacier. It was absolutely breathtaking!",
    "A train crossing the mountains",
    "The view from the train"
];

const slideImage = document.getElementById("slideImage");

document.getElementById("btnNext").addEventListener("click", next);

function next()
{
    slideIndex++;

    // Back to the first slide after the last one
    if (slideIndex == captions.length)
    {
        slideIndex = 0;
    }

    slideImage.src = "images/slide" + slideIndex + ".jpg";
    slideImage.alt = captions[slideIndex];
}

const btnOnOff = document.getElementById("btnOnOff");
const delaySelect = document.getElementById("delay");

btnOnOff.addEventListener("click", toggleAutoMode);
delaySelect.addEventListener("change", changeSpeed);

// Auto mode on: the timer calls next() every currentDelay milliseconds.
// Auto mode off: the timer is cleared and the button offers auto mode again.
function toggleAutoMode()
{
    autoMode = !autoMode;

    if (autoMode)
    {
        startTimer();
        btnOnOff.textContent = "Manual mode";
    }
    else
    {
        stopTimer();
        btnOnOff.textContent = "Auto mode";
    }
}

// A running timer keeps its delay: to change speed it has to be stopped and
// started again with the new one. In manual mode only the delay is stored.
function changeSpeed()
{
    currentDelay = DELAYS[delaySelect.value];

    if (autoMode)
    {
        stopTimer();
        startTimer();
    }
}

function startTimer()
{
    timer = setInterval(next, currentDelay);
}

function stopTimer()
{
    clearInterval(timer);
}

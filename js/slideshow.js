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

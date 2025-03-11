var title = $(".title.text");
var slogan = $(".slogan.text");
var downArrow = $(".down.arrow");
var upArrow = $(".up.arrow");
var background = $(".home");
var homeContainer= $(".home.casing")
var sectorCards = $(".sector-cards");

var totalAnimationTime = 2000;

var landscape = window.matchMedia("(orientation: portrait)");

if (landscape.matches) {
    $(".sector-card").addClass("card")
}

function fadeTitle() {
    if (title.css("display") === "block") {
        title.animate({opacity: 0,}, totalAnimationTime/4, "swing");
        downArrow.animate({opacity: 0,}, totalAnimationTime/4, "swing");
        setTimeout(function () {
            title.css("display", "none");
            downArrow.css("display", "none");
            homeContainer.css("padding-top", "10vh");
        }, totalAnimationTime/2);
    } else {
        setTimeout(function () {
            title.css("display", "block");
            downArrow.css("display", "block");
            homeContainer.css("padding-top", "30vh");
            title.animate({opacity: 1,}, totalAnimationTime/4, "swing");
            downArrow.animate({opacity: 1,}, totalAnimationTime/4, "swing");
        }, totalAnimationTime/2)
    }
}

function fadeSlogan() {
    if (slogan.css("display") === "block") {
        slogan.animate({opacity: 0,}, totalAnimationTime/4, "swing");
        upArrow.animate({opacity: 0,}, totalAnimationTime/4, "swing");
        setTimeout(function () {
            slogan.css("display", "none");
            upArrow.css("display", "none");
        }, totalAnimationTime/2);
    } else {
        setTimeout(function () {
            slogan.css("display", "block");
            upArrow.css("display", "block");
            slogan.animate({opacity: 1,}, totalAnimationTime/8, "swing");
            upArrow.animate({opacity: 1,}, totalAnimationTime/8, "swing");
        }, (totalAnimationTime*3)/4)
    }}

function moveBackground() {
    if (background.css("background-size") === "130%") {
    background.animate({backgroundPositionY: "50%", backgroundSize: "120%"}, totalAnimationTime/2, "easeInCubic");
    setTimeout(function () {
        background.animate({backgroundPositionY: "100%", backgroundSize: "110%"}, totalAnimationTime/2, "easeOutCubic");
    }, totalAnimationTime/2)
    } else {
        background.animate({backgroundPositionY: "50%", backgroundSize: "120%"}, totalAnimationTime/2, "easeInCubic");
    setTimeout(function () {
        background.animate({backgroundPositionY: "0%", backgroundSize: "130%"}, totalAnimationTime/2, "easeOutCubic");
    }, totalAnimationTime/2)
    }
}

function fadeCards() {
    if (sectorCards.css("display") === "flex") {
        sectorCards.css("display", "none");
    } else {
        setTimeout(function () {
            sectorCards.css("display", "flex");
        }, (totalAnimationTime*3)/4)
    }
}

function animation() {
    fadeTitle()
    fadeSlogan()
    moveBackground()
    fadeCards()
}



$(".arrow").click(animation);
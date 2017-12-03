//----------- CORDOVA ONLOAD ---------------- //
// Cordova device event listener - will not work in browser
// document.addEventListener("deviceready", initialise, false);

//----------- HTML ONLOAD ---------------- //
// JQuery ready event listener
// $(document).ready(initialise);         // or... $(window).on( "load", readyFn );

//----------- JQM ONLOAD ---------------- //
// JQuery Mobile pageloaded event listener
$(document).on('pageshow', '#pageone', initialise);

function initialise() {
    // EVENT LISTENERS HERE

    // DEMO
    //set up click event handling for button
    $('#linkedButton').on("click", updateText);
    $("#linkedText").text("Text replaced by initialize");

    console.log("initialised");
}

function updateText() {
    $("#linkedText").text("Text NOW replaced by BUTTON");
}

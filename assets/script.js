$(document).ready(function () {
    let todaysDate = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = todaysDate});
    let currentTime = moment().format("HH");
function timeCheck() {
    let currentTime = moment().hour();
    $("currentTime").each(function () {
        var timeBlock = parseInt($(this).attr("textarea").split("hour")[1]);
        if (timeBlock < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (timeBlock === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        };
    });
};
$(document).ready(function() {
    $(".save-btn").on("click",function() {
        var text = $(this).siblings(".comments").val();
        var time = $(this).parent().attr("id"); 
        localStorage.setItem(time, text);
    });
    });
$("#hour7 .comments").val(localStorage.getItem("hour7"));
$("#hour8 .comments").val(localStorage.getItem("hour8"));
$("#hour9 .comments").val(localStorage.getItem("hour9"));
$("#hour10 .comments").val(localStorage.getItem("hour10"));
$("#hour11 .commentsn").val(localStorage.getItem("hour11"));
$("#hour12 .comments").val(localStorage.getItem("hour12"));
$("#hour13 .comments").val(localStorage.getItem("hour13"));
$("#hour14 .comments").val(localStorage.getItem("hour14"));
$("#hour15 .comments").val(localStorage.getItem("hour15"));




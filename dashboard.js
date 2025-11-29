$(document).ready(function(){
    $("#submit").on('click', function(){
        takeUser();
        window.location.href="dashboard.html"; //When submit button gets clicked, it will save the username from the input field to localStorage
    });
    if(localStorage.getItem("username")===null){ //This is to check if there no username stored in localStorage
        localStorage.setItem("username","Username"); //If username is not found, this will set a default name to "Username"
    }
    //This will set the dashboard title with the stored username from localStorage
    document.getElementById("dashboard-title").innerHTML = `${localStorage.getItem("username")}'s Dashboard`;
    
    //Update the clock every second
    setInterval(showTime,1000);
});

function showTime(){
    //This gets the current time, current hours, current minutes, and current seconds
    let date = new Date();
    let hour = date.getHours();
    let mins = date.getMinutes();
    let seconds = date.getSeconds();
    //This will add a 0 to "mins" if they are less than 10
    if(mins < 10){
        mins = `0${mins}`;
    }
    //This will add a 0 to "seconds" if they are less than 10
    if(seconds < 10){
        seconds = `0${seconds}`;
    }
    //This will add a 0 to "hours" if they are less than 10
    if(hour < 10){
        hour = `0${hour}`;
    }
    //Update the element to display the formatted current time
    document.getElementById("time").innerHTML = `${hour}:${mins}:${seconds}`;
}

function takeUser(){
    //Save the username to localStorage
    let username = document.getElementById("username").value;
    localStorage.setItem("username",username);
}
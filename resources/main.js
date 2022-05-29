const projects = [["Runaway Sound Board", 'Play the piano intro to "Runaway" by Kanye West.', "https://idealist.world/kanye"], ["Campus Ambassador Programs", "A list of college student brand ambassador programs.","https://idealist.world/ambassador"], ["Project #3", "This is going to be my third project.  Not sure what it is yet though.","youtube.com"]];

var length = projects.length;

var index = Math.floor(Math.random()*length);

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("currentTitle").innerHTML = projects[index][0];
    document.getElementById("currentDescription").innerHTML = projects[index][1];
    document.getElementById("link").setAttribute("href", "youtube.com");
}, false);

function preset ()
{
    document.getElementById("currentTitle").innerHTML = "asdfdsfdsfdsf";


}

function next ()
{
    if (index !== length -1)
    {
        index ++;
        document.getElementById("currentTitle").innerHTML = projects[index][0];
        document.getElementById("currentDescription").innerHTML = projects[index][1];
    }
    else
    {
        index = 0;
        document.getElementById("currentTitle").innerHTML = projects[index][0];
        document.getElementById("currentDescription").innerHTML = projects[index][1];
    }
}

function previous ()
{
    if (index === 0)
    {
        index = length - 1;
        document.getElementById("currentTitle").innerHTML = projects[index][0];
        document.getElementById("currentDescription").innerHTML = projects[index][1];
    }
    else 
    {
        index --;
        document.getElementById("currentTitle").innerHTML = projects[index][0];
        document.getElementById("currentDescription").innerHTML = projects[index][1];
    }
}
const startups = [["1", "https://lalabox.io/"], ["2", "https://clic.so/qcp"], ["3", "https://clic.so/itslexismith"], ["4", "https://breakroom.show/"]];
const length = startups.length;
var index = 0;


document.addEventListener('DOMContentLoaded', function() {
    adjust();
}, false);

function adjust () {
    if (screen.width < 1001)
    {
        var source = "rsc/img/startups/" + startups[index][0] + ".svg";
    }
    
    if (screen.width > 1000)
    {
        var source = "rsc/img/startups2/" + startups[index][0] + ".svg";
    }
    document.getElementById("card").src = source;
    document.getElementById("link").setAttribute("href", startups[index][1]);
}

function next ()
{
    if (index !== length -1)
    {
        index ++;
        adjust ();
    }
    else
    {
        index = 0;
        adjust ();
    }
}

function previous ()
{
    if (index === 0)
    {
        index = length - 1;
        adjust ();
    }
    else 
    {
        index --;
        adjust ();
    }
}
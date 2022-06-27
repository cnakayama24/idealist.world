const programs = [["Bumble",  "https://thebeehive.bumble.com/ambassadors-bumble-honey", "#FEC629"], ["XBOX",  "https://ambassadors.microsoft.com/xbox", "#0F7C10"],  ["Tinder",  "https://www.tinderu.in/", "#FE526A"], ["Amazon",  "https://riddleandbloom.com/primestudent/", "orange"], ["Hype&Vice",  "https://www.hypeandvice.com/pages/hv-university", "white"], ["MONSTER", "https://catportal.monsterenergy.com/", "#447001"], ["REDBULL","https://jobs.redbull.com/int-en/microsite/student-marketeer", "red"],  ["ClutchPrep",  "https://www.clutchprep.com/campus-rep", "#FFC42C"], ["CocaCola",  "https://www.campuscommandos.com/about-coca-cola/", "red"],  ["BluePlanet",  "https://blueplaneteyewear.goaffpro.com/create-account", "#33A8C6"],   ["PuraVida",  "https://www.puravidabracelets.com/pages/brand-ambassadors", "white"], ["Lululemon",  "https://shop.lululemon.com/ambassadors/about-the-program", "red"],  ["PINK",  "https://www.victoriassecret.com/us/pink/pink-action/campus-reps", "#E60E72"], ["GitHub",  "https://education.github.com/experts", "#80D8FF"], ["Google",  "https://developers.google.com/community/gdsc/leads", "white"], ["Pearson",  "https://www.pearson.com/en-us/highered-students/student-programs/pearson-campus-ambassador.html", "#097FA3"], ["TheBlackSheep",  "https://theblacksheep.marketing/project/campus-ambassador/", "#21A3DF"], ["SouthernTide",  "https://southerntide.com/pages/st-ambassadors", "#1447A2"], ["BreakawayBeach",  "https://breakawaybeach.com/become-a-rep/", "#47A6BA"]];


var counter = 0;
const length = programs.length;


function switchIt ()
{
    var border = "2px solid " + programs[counter][2];
    var glow = "0px 0px 8vw 1.5vw " + programs[counter][2];
    var place = "/campus/images/" + programs[counter][0] + ".jpg";
    photo = place.toLowerCase();
    document.getElementById("box").style.border = border;
    document.getElementById("box").style["boxShadow"] = glow;
    var link = programs[counter][1]
    document.getElementById("link").setAttribute("href", link);
    document.querySelector("#forward").style.border = border;
    document.querySelector("#backward").style.border = border;
    var glowButton = "0px 0px 3vw 1.3vw " + programs[counter][2];
    document.querySelector("#forward").style["boxShadow"] = glowButton;
    document.querySelector("#backward").style["boxShadow"] = glowButton;
    document.getElementById("title").innerHTML = programs[counter][0];
    document.querySelector(".image").src = photo;
    document.querySelector(".sharebutton").src = "/campus/images/share.jpg";
    document.getElementById("box").animate(
        [
          { opacity: "0.3", duration: 0.5},
          { opacity: "0.5", duration: 0.5},
          { opacity: "0.8", duration: 0.5}
        ], {
          duration: 250,
        } 
      );
    var state = "?view=" + counter;
    window.history.pushState('new', 'title', state);
}

document.addEventListener('DOMContentLoaded', function() {
    try {
        var url_string = (window.location.href).toLowerCase();
        var url = new URL(url_string);
        var view = url.searchParams.get("view");
        if (view !== null){
            counter = view;
        }
    } catch (err) {
        console.log("Issues with Parsing URL Parameter's - " + err);
    }
    switchIt();
}, false);


function blink (direction)
{
    document.getElementById(direction).animate(
        [
          { opacity: "0.3", duration: 0.5},
          { opacity: "0.5", duration: 0.5},
          { opacity: "0.8", duration: 0.5}
        ], {
          duration: 250,
        } 
      );
      
}

function forward () {
    if (counter !== length -1)
    {
        counter ++;
        document.getElementById("title").innerHTML = programs[counter][0];
        switchIt();
        blink("forward");
    }
    else
    {
        counter = 0;
        document.getElementById("title").innerHTML = programs[counter][0];
        switchIt();
        blink("forward");
    }
}

function backward () {
    if (counter === 0)
    {
        counter = length - 1;
        document.getElementById("title").innerHTML = programs[counter][0];
        switchIt();
        blink("backward");
    }
    else
    {
        counter --;
        document.getElementById("title").innerHTML = programs[counter][0];
        switchIt();
        blink("backward");
    }
}


function share(){
    document.querySelector(".sharebutton").src = "/campus/images/copied.jpg";
    var inputc = document.body.appendChild(document.createElement("input"));
    inputc.value = window.location.href;
    inputc.focus();
    inputc.select();
    document.execCommand('copy');
    inputc.parentNode.removeChild(inputc);
}
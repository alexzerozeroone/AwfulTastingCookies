alert("scroll down for the bar")

// add our custom bar
var div = document.createElement("div");
div.innerHTML = `
<div style="text-align: center; margin: 3px;" id="newBar">
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="gr">reset game</button>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="br">remove bar</button>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="infcookies">infinite cookies</button>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="influmps">infinite lumps</button>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="suck">disable shimmers</button>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="achv">get all achievements</button>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="upg">get all upgrades</button>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="ascendbtn">ascend with all heavenly items</button>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="guascendbtn">give up ascend</button>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="geteverything">get everything</button>
<br>
<h style="font-size: 50px;">Awful Tasting Cookies</h>
</div>
`

// append it and make it stay at the bottom
document.body.appendChild(div);

document.getElementById("wrapper").style.position = "relative"
document.getElementById("cheatBar").style.position = "absolute"

// error: Uncaught TypeError: document.getElementById(...) is null below this
// this is supposed to set the element's quote to a random one from ours
// setInterval(function() {
//     randomQuotes = ["These cookies taste awfully cheated!", "Cheatbar developed by random-development-hub", "Awful tasting cookies on their way!"]
//     document.getElementById("commentsText").innerHTML = randomQuotes[Math.floor(Math.random() * randomQuotes.length)]
// }, 1700)

// close all notes constantly
setInterval(function() {
    Game.CloseNotes()
}, 500)

// functions for the buttons
document.getElementById("gr").onclick = function() {
    localStorage.setItem("CookieClickerGame", "")
    window.location.reload()
}

document.getElementById("br").onclick = function() {
    document.getElementById("newBar").remove();
    document.getElementById("topBar").hidden = false
    alert("re-run the code in the console to get the bar back")
}

document.getElementById("infcookies").onclick = function() {
    setInterval(function() {
        Game.computedMouseCps = 9e+999
        Game.cookiesPs = 9e+999
        Game.cpsSucked = 0
    }, 700)
}

document.getElementById("achv").onclick = function() {
    Game.SetAllAchievs(true)
}

document.getElementById("upg").onclick = function() {
    Game.SetAllUpgrades(true)
}

document.getElementById("suck").onclick = function() {
    setInterval(function() {
        Game.killShimmers()
        Game.updateShimmers()
        Game.cpsSucked = 0
    }, 700)
}

document.getElementById("influmps").onclick = function() {
    setInterval(function() {
        Game.gainLumps(9e+999)
        Game.lumpCurrentType = 9e+999
        Game.lumpMatureAge = 9e-999
        Game.lumpOverripeAge = 9e-999
        Game.lumpRefill = 9e-999
        Game.lumps = 9e+999
        Game.lumpsTotal = 9e+999
        Game.lumpT = 9e+999
    }, 700)
}

document.getElementById("ascendbtn").onclick = function() {
    Game.Ascend(true)
    Game.heavenlyChipsDisplayed = "Infinity"
    Game.heavenlyChips = 9e+999
    Game.heavenlyCookies = 9e+999
    Game.heavenlyPower = 9e+999
    Game.prestige = 9e+999
}

document.getElementById("geteverything").onclick = function() {
    Game.heavenlyChipsDisplayed = "Infinity"
    Game.heavenlyChips = 9e+999
    Game.heavenlyCookies = 9e+999
    Game.heavenlyPower = 9e+999
    Game.prestige = 9e+999
    Game.buildingCps = 9e+999
    Game.SetAllUpgrades(true)
    Game.SetAllAchievs(true)
	Game.RuinTheFun(true)
    
    setInterval(function() {
        Game.gainLumps(9e+999)
        Game.lumpCurrentType = 9e+999
        Game.lumpMatureAge = 9e-999
        Game.lumpOverripeAge = 9e-999
        Game.lumpRefill = 9e-999
        Game.lumps = 9e+999
        Game.lumpsTotal = 9e+999
        Game.lumpT = 9e+999
    }, 700)
    
    setInterval(function() {
        Game.computedMouseCps = 9e+999
        Game.cookiesPs = 9e+999
        Game.cpsSucked = 0
    }, 700)
}

document.getElementById("guascendbtn").onclick = function() {
    Game.GiveUpAscend(true)
}
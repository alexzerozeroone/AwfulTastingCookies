// hide topbar to make our bar visibless
document.getElementById("topBar").hidden = true

// add our custom bar
var div = document.createElement("div");
div.innerHTML = `
<div style="margin: 3px;" id="newBar">
<button style="font-size: 19px; border: none; margin: 1px; outline: none; border-radius: 2.5px; background-color: black; color: white;" id="gr">reset game</button>
<button style="font-size: 19px; border: none; margin: 1px; outline: none; border-radius: 2.5px; background-color: black; color: white;" id="br">remove bar</button>
<button style="font-size: 19px; border: none; margin: 1px; outline: none; border-radius: 2.5px; background-color: black; color: white;" id="infcookies">inf cookies</button>
<button style="font-size: 19px; border: none; margin: 1px; outline: none; border-radius: 2.5px; background-color: black; color: white;" id="influmps">inf lumps</button>
<button style="font-size: 19px; border: none; margin: 1px; outline: none; border-radius: 2.5px; background-color: black; color: white;" id="suck">disable shimmers</button>
<button style="font-size: 19px; border: none; margin: 1px; outline: none; border-radius: 2.5px; background-color: black; color: white;" id="achv">achievements</button>
<button style="font-size: 19px; border: none; margin: 1px; outline: none; border-radius: 2.5px; background-color: black; color: white;" id="upg">upgrades</button>
<button style="font-size: 19px; border: none; margin: 1px; outline: none; border-radius: 2.5px; background-color: black; color: white;" id="ascendbtn">ascend</button>
<h style="font-size: 20px;">Awful Tasting Cookies</h>
</div>
`

// append it
document.getElementById("wrapper").appendChild(div);

// close all notes constantly
setInterval(function() {
    Game.CloseNotes()
}, 700)

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
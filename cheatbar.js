console.log("scroll down for the bar")

// add our custom bar
var div = document.createElement("div");
div.style.textAlign = "center"
div.style.margin = "3px"
div.id = "cheatBar"

div.innerHTML = `
<hr>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="nr">reset game</button>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="vhr">reset game through local storage</button>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="br">remove bar</button>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="hbr">hide bar</button>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="dtools">custom tools (left top corner)</button>
<hr>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="infcookies">infinite cookies</button>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="influmps">infinite lumps</button>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="geteverything">get everything</button>
<hr>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="ascendnrbtn">ascend</button>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="ascendbtn">ascend with all heavenly items</button>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="reincarnatebtn">reincarnate</button>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="guascendbtn">give up ascend</button>
<hr>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="achv">get all achievements</button>
<button style="font-size: 25px; border: none; margin: 1px; outline: none; border-radius: 5px; background-color: black; color: white;" id="upg">get all upgrades</button>
<hr>
<h style="font-size: 50px;">Awful Tasting Cookies</h>
`

// make show button function
function makeShowButton() {
    var btn = document.createElement("button")

    btn.onclick = function () {
        document.getElementById("cheatBar").hidden = false
        document.getElementById("showBtn").remove();
    }

    btn.id = "showBtn"
    btn.innerHTML = "show bar"
    btn.style.fontSize = "15px"
    btn.style.border = "none"
    btn.style.margin = "3px"
    btn.style.outline = "none"
    btn.style.borderRadius = "5px"
    btn.style.backgroundColor = "black"
    btn.style.color = "white"
    
    document.getElementById("topBar").appendChild(btn)
}

// append it and make it stay at the bottom
document.body.appendChild(div);

document.getElementById("wrapper").style.position = "relative"

if (document.getElementById("links")) {
    document.getElementById("links").remove()
}

// close all notes constantly
setInterval(function() {
    Game.CloseNotes()
}, 500)

// functions for the buttons
document.getElementById("vhr").onclick = function() {
    localStorage.setItem("CookieClickerGame", "")
    window.location.reload()
}

document.getElementById("nr").onclick = function() {
    Game.Reset(true)
}

document.getElementById("br").onclick = function() {
    document.getElementById("cheatBar").remove();
    console.log("re-run the code in the console to get the bar back")
}

document.getElementById("hbr").onclick = function() {
    makeShowButton()
    document.getElementById("cheatBar").hidden = true
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
    var v = Game.UnlockAt

    for (i in v) {
        Game.Unlock(v[i]["name"])
    }
    
    Game.SetAllUpgrades(true)
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

document.getElementById("ascendnrbtn").onclick = function() {
    Game.Ascend(true)
}

document.getElementById("geteverything").onclick = function() {
    var v = Game.UnlockAt

    for (i in v) {
        Game.Unlock(v[i]["name"])
    }

    Game.heavenlyChipsDisplayed = "Infinity"
    Game.heavenlyChips = 9e+999
    Game.heavenlyCookies = 9e+999
    Game.heavenlyPower = 9e+999
    Game.prestige = 9e+999
    Game.buildingCps = 9e+999
    Game.computedMouseCps = 9e+999
    Game.baseResearchTime = 9e+999
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

document.getElementById("reincarnatebtn").onclick = function() {
    Game.Reincarnate(true)
}

document.getElementById("dtools").onclick = function() {
    Game.OpenSesame()    
}
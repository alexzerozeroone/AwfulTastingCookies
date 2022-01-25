var mainBar = document.createElement("div");
mainBar.id = "cheatBar";
mainBar.style = "text-align: center; margin: 3px";

var buttons = [];
var intervals = {};

function createButton(callback, text) {
    var button = document.createElement("button");

    button.innerHTML = text;
    button.onclick = callback;
    button.style =
        "font-size: 30px; margin: 3px;  border-radius: 1px; border-color: #d6d6d6; background-color: black; color: white; cursor: pointer;";

    buttons.push(button);
}

function createSeparator() {
    buttons.push(document.createElement("hr"));
}

function render(array) {
    for (var i = 0; i < array.length; i++) {
        mainBar.appendChild(array[i]);
    }
}

var title = document.createElement("h1");
title.innerHTML = "Awful Tasting Cookies";
title.style.fontSize = "2.35em";
mainBar.appendChild(title);

var _buttons = [
    { separator: true },

    {
        text: "Reset Game",
        callback: function () {
            Game.Reset(true);
        },
    },
    {
        text: "Self Destruct",
        callback: function () {
            mainBar.remove();
        },
    },
    {
        text: "Cookie Developer Tools",
        callback: function () {
            Game.OpenSesame();
        },
    },
    {
        text: '"RuinTheFun"',
        callback: function () {
            Game.RuinTheFun(true);
        },
    },
    {
        text: "Popups: ON",
        callback: function () {
            if (this.innerHTML == "Popups: ON") {
                this.innerHTML = "Popups: OFF";

                intervals.popups = setInterval(function () {
                    Game.CloseNotes();
                }, 100);
            } else if (this.innerHTML == "Popups: OFF") {
                this.innerHTML = "Popups: ON";

                if (intervals.popups) {
                    clearInterval(intervals.popups);
                    Game.Note("Popups activated", "Popups are now enabled");
                }
            }
        },
    },

    { separator: true },

    {
        text: "Ascend",
        callback: function () {
            Game.Ascend(true);
        },
    },
    {
        text: "Give up Ascend",
        callback: function () {
            Game.GiveUpAscend(true);
        },
    },
    {
        text: "Reincarnate",
        callback: function () {
            Game.Reincarnate(true);
        },
    },
    {
        text: "Gain Heavenly Items",
        callback: function () {
            Game.heavenlyChipsDisplayed = Infinity;
            Game.heavenlyChips = Infinity;
            Game.heavenlyCookies = Infinity;
            Game.heavenlyPower = Infinity;
            Game.prestige = Infinity;
        },
    },

    { separator: true },

    {
        text: "Gain Achievements",
        callback: function () {
            Game.SetAllAchievs(true);
        },
    },
    {
        text: "Gain Upgrades",
        callback: function () {
            Game.SetAllUpgrades(true);
        },
    },
    {
        text: "Gain Lumps",
        callback: function () {
            Game.gainLumps(Infinity);
        },
    },
];

for (var i = 0; i < _buttons.length; i++) {
    if (_buttons[i].separator) {
        createSeparator();
    } else {
        createButton(_buttons[i].callback, _buttons[i].text);
    }
}

render(buttons);

document.getElementById("wrapper").style.position = "relative";
document.body.appendChild(mainBar);

console.log(
    "%cAwfulTastingCookies is now installed",
    "font-size: 15px; color: red"
);

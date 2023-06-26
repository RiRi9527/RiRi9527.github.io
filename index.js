// menu side

let menuVisible = false;
let menu = document.getElementById("nav");

function showHideMenu() {
  if (menuVisible === false) {
    menu.style.display = "block";
    menuVisible = true;
  } else {
    menu.style.display = "none";
    menuVisible = false;
  }
}

//hides the menu once an option is selected

let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length; x++) {
  links[x].onclick = function () {
    menu.style.display = "none";
    menuVisible = false;
  };
}

////Create the bars of a particular bar identified by its id

function createBar(id_bar) {
  for (i = 0; i <= 16; i++) {
    let div = document.createElement("div");
    div.className = "e";
    id_bar.appendChild(div);
  }
}

//select all general bars to then manipulate them

let html = document.getElementById("html");
createBar(html);
let javascript = document.getElementById("javascript");
createBar(javascript);
let wordpress = document.getElementById("wordpress");
createBar(wordpress);
let photoshop = document.getElementById("photoshop");
createBar(photoshop);
let php = document.getElementById("php");
createBar(php);
let ilustrator = document.getElementById("ilustrator");
createBar(ilustrator);

//
let counters = [-1, -1, -1, -1, -1, -1];
let enter = false;
//

function efectabilities() {
  var abilities = document.getElementById("abilities");
  var distance_skills =
    window.innerHeight - abilities.getBoundingClientRect().top;
  if (distance_skills >= 300 && enter == false) {
    enter = true;
    const intervalHtml = setInterval(function () {
      printBar(html, 16, 0, intervalHtml);
    }, 100);
    const intervalJavascript = setInterval(function () {
      printBar(javascript, 11, 1, intervalJavascript);
    }, 100);
    const intervalWordpress = setInterval(function () {
      printBar(wordpress, 11, 2, intervalWordpress);
    }, 100);
    const intervalPhotoshop = setInterval(function () {
      printBar(photoshop, 15, 3, intervalPhotoshop);
    }, 100);
    const intervalPhp = setInterval(function () {
      printBar(php, 16, 4, intervalPhp);
    }, 100);
    const intervalIlustrator = setInterval(function () {
      printBar(ilustrator, 11, 5, intervalIlustrator);
    }, 100);
  }
}

//fill a particular bar with the specified amount

function printBar(id_bar, amount, index, interval) {
  counters[index]++;
  x = counters[index];
  if (x < amount) {
    let elements = id_bar.getElementsByClassName("e");
    elements[x].style.backgroundColor = "#940253";
  } else {
    clearInterval(interval);
  }
}

//
window.onscroll = function () {
  efectabilities();
};

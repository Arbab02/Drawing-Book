
let wallHouse = document.getElementById('wallHouse');
function wall(value) {
  document.getElementById('wallHouse').style.background = value;

}

let roof = document.getElementById('roof');
function roofColor(value) {
  document.getElementById('roof').style.borderBottomColor = value;

}

let door = document.getElementById('dooe');
function doorColor(value) {
  document.getElementById('door').style.background = value;

}

function myfunction() {
  let darktheme = document.body;
  darktheme.classList.toggle('dark-theme');
  let cont = document.getElementById('cont');
  cont.classList.toggle('toggling');
  clicking.classList.toggle('container-click');

}
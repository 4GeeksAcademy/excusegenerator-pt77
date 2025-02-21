import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function () {
  generateexcuse()
  document.querySelector("button").addEventListener("click", () => {
    document.querySelector("h1").innerHTML = generateexcuse()
  })
  
};

const generateexcuse = () => {

  const whoarray = ["dad", "mom", "sister", "uncle", "long lost cousin", "twice removed twin brother"];
  const actionarray = ["hit", "sent", "gave", "excommunicated", "broke", "ate"];
  const whatarray = ["car", "phone", "femur", "Playstation 5", "glasses", "new leggo set"];
  const whenarray = ["on the third friday of lent", "on the day the priest became president", "two valentines ago", "during the twighlight movie marathon", "the day the earth stood still"];


  let whoindex = Math.floor(Math.random() * whoarray.length)
  let actionindex = Math.floor(Math.random() * actionarray.length)
  let whatindex = Math.floor(Math.random() * whatarray.length)
  let whenindex = Math.floor(Math.random() * whenarray.length)

  const h1 = document.querySelector("h1")
  const excuse = `My ${whoarray[whoindex]} ${actionarray[actionindex]} my ${whatarray[whatindex]} ${whenarray[whenindex]}.`
  h1.innerHTML = excuse;
  return excuse
};


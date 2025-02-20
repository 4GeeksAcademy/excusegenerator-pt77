import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  generateexcuse()
};

const generateexcuse = () =>  {

  const whoarray = ["dad", "mom", "sister", "uncle", "long lost cousin", "twice removed twin brother"];
  const actionarray = ["hit", "sent", "gave", "excommunicated", "broke", "ate"];
  const whatarray = ["car", "phone", "femur", "Playstation 5", "glasses", "new leggo set"];
  const whenarray = ["on the third friday of lent", "on the day the priest became president", "two valentines ago", "during the twighlight movie marathon", "the day the earth stood still"];


  let whoindex = Math.floor(Math.random() * whoarray.length)
  let actionindex = Math.floor(Math.random() * actionarray.length)
  let whatindex = Math.floor(Math.random() * whatarray.length)
  let whenindex = Math.floor(Math.random() * whenarray.length)

  const who = document.querySelector(".who")
  const action = document.querySelector(".action")
  const what = document.querySelector(".what")
  const when = document.querySelector(".when")

  who.innerHTML = whoarray[whoindex]
  action.innerHTML = actionarray[actionindex]
  what.innerHTML = whatarray[whatindex]
  when.innerHTML = whenarray[whenindex]

};


const playBtn = document.getElementsByClassName("playbtn")[0];
const lapBtn = document.getElementsByClassName("lapbtn")[0];
const resetBtn = document.getElementsByClassName("resetbtn")[0];
const lapS = document.getElementsByClassName("laps")[0];
const clearBtn = document.getElementsByClassName("clearbtn")[0];


const innerCircle = document.getElementsByClassName("inner-circle")[0];
const sec = document.getElementsByClassName("sec")[0];
const msec = document.getElementsByClassName("msec")[0];
const min = document.getElementsByClassName("min")[0];

let secCounter = 0;
let secs;
let msecCounter = 0;
let msecs;
let minCounter = 0;
let mins;
let lapItem = 0; 

const toggleBtn = () => {
  lapBtn.classList.add("visibility");
  resetBtn.classList.add("visibility");
};

const play = () => {
  toggleBtn();
  if (playBtn.innerHTML === "Play") {
    playBtn.innerHTML = "Pause";

    mins = setInterval(() => {
      min.innerHTML = `${++minCounter} :`;
      if (minCounter < 10) {
        min.innerHTML = `0${minCounter} :`;
      }
    }, 60 * 1000);

    secs = setInterval(() => {
      if (secCounter === 59) {
        secCounter = 1;
      }
      sec.innerHTML = `${++secCounter} :`;
      if (secCounter < 10) {
        sec.innerHTML = `0${secCounter} :`;
      }
    }, 1000);

    msecs = setInterval(() => {
      if (msecCounter === 99) {
        msecCounter = 1;
      }
      msec.innerHTML = `${++msecCounter}`;
      if (msecCounter < 10) {
        msec.innerHTML = `0${msecCounter}`;
      }
    }, 10);
  } else {
    playBtn.innerHTML = "Play";
    clearInterval(mins);
    clearInterval(secs);
    clearInterval(msecs);
  }
  if (playBtn.innerHTML === "Pause") {
    lapBtn.classList.remove("visibility");
    resetBtn.classList.remove("visibility");
  }
};

const reset = () => {
  clearInterval(mins);
  clearInterval(secs);
  clearInterval(msecs);

  minCounter = 0;
  secCounter = 0;
  msecCounter = 0;

  min.innerHTML = "00 :";
  sec.innerHTML = "00 :";
  msec.innerHTML = "00";

  playBtn.innerHTML = "Play";
  lapBtn.classList.add("visibility");
  resetBtn.classList.add("visibility");
  
};

const lap = () => {
  const li = document.createElement("li");
  const number = document.createElement("span");
  const timeStamp = document.createElement("span");

  li.setAttribute("class", "lap-item");
  number.setAttribute("class", "number");
  timeStamp.setAttribute("class", "time-stamp");

  number.innerHTML = `#${++lapItem}`
  timeStamp.innerHTML = `${minCounter} :${secCounter} :${msecCounter}`;
  
  li.append(number, timeStamp);
  lapS.append(li);
  clearBtn.classList.remove("laptime")
};

const clear = () => {
  lapS.innerHTML = ""
  lapS.append(clearBtn)
  clearBtn.classList.add("laptime")

}

playBtn.addEventListener("click", play);
lapBtn.addEventListener("click", lap);
resetBtn.addEventListener("click", reset);
clearBtn.addEventListener("click", clear)

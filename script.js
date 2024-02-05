const hrDigit = document.querySelector('#hr');
const minDigit = document.querySelector('#min');
const secDigit = document.querySelector('#sec');

const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');
const resetBtn = document.querySelector('#reset-btn');
const lapBtn = document.querySelector('#lap-btn');

const lapContainer = document.querySelector('#lapContainer');

let timer = 0;
let milisec = 0;
let sec = 0;
let min = 0;
let hr = 0;
let lapCount = 0;
let secStr = "";
let minStr = "";
let hrStr = "";

startBtn.addEventListener('click', () => {
    timer = 1;
    setTimeout(startTimer,1000);
    startBtn.style.display = 'none'
    resetBtn.style.display = 'none'
    stopBtn.style.display = 'inline'
    lapBtn.style.display = 'inline'

});
stopBtn.addEventListener('click', () => {
    timer = 0;
    
    stopBtn.style.display = 'none'
    lapBtn.style.display = 'none'
    resetBtn.style.display = 'inline'
    startBtn.style.display = 'inline'
});
resetBtn.addEventListener('click', () => {
    timer = 0;
    milisec = 0;
    sec = 0;
    min = 0;
    hr = 0;
    lapCount = 0;
    secDigit.innerHTML = "00";
    minDigit.innerHTML = "00:";
    hrDigit.innerHTML = "00:";
    let laps = document.querySelectorAll('.lap')
    for(lap of laps){
        lapContainer.removeChild(lap)
    }

});
lapBtn.addEventListener('click',()=>{
    lapCount++;
    const newDiv = document.createElement('div');
    newDiv.classList.add('lap')
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    span1.classList.add('lapcount')
    span2.classList.add('laptime')
    span1.innerHTML = "Lap " + lapCount;
    span2.innerHTML = `${hrStr}:${minStr}:${secStr}`

    newDiv.appendChild(span1);
    newDiv.appendChild(span2);
    lapContainer.appendChild(newDiv);
})


function startTimer() {
    if (timer) {
        sec++;
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            hr++;
            min = 0;
        }
        secStr = sec;
        minStr = min;
        hrStr = hr;

        if (sec<10) {
            secStr = '0'+ sec;
        }
        if (min<10) {
            minStr = '0'+ min;
        }
        if (hr<10) {
            hrStr = '0'+ hr;
        }

        secDigit.innerHTML = secStr;
        minDigit.innerHTML = minStr+":";
        hrDigit.innerHTML = hrStr+":";

        setTimeout(startTimer, 1000);
    }
}






// timer()
let Stopwatch = 60;

class timer {
    constructor() {

    }
    myTimer() {

        let countdown = setInterval(() => {
            let btn = document.getElementById('clock');
            document.getElementById('clock').innerText = 'Countdown ' + Stopwatch;
            Stopwatch--;

            if (Stopwatch === -1) {
                clearTimeout(countdown);
                this.alert('Times is up!');
                alert()
            }
        }, 1000);

    }
}

function alert() {
    alert('Times is up!');
}


let clock = new timer();


//     myVar = setInterval(alertFunc, 60000);
// }

// function alertFunc() {
//     alert(" Time is up! ");
// }
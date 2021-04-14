function promiseAfterTimeout(seconds) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), seconds*1000);
    });
}

function rotateWheel(degr) {
    let wheel = document.querySelector('.wheel');

    wheel.style.transform = 'rotate('+degr+'deg)';
    return promiseAfterTimeout(3);
}

function randomDegrees() {
    let randomFloat = Math.random() * 360;
    return Math.round(randomFloat / 60) * 60;
}

function launchSpin() {
    currentRotation += randomDegrees();
    rotateWheel(currentRotation)
}

let currentRotation = 0;
let spinButton = document.querySelector('.spin');
spinButton.addEventListener('click', launchSpin);
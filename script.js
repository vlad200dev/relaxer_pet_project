const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 4000;

const breatheTime = (totalTime / 5) * 2;

const holdTime = 1000

breathAnimation();

function breathAnimation() {
    text.innerText = 'Breathe In!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

setInterval(breathAnimation, totalTime);


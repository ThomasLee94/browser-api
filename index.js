const diagonalMove = [
    {
        transform: 'translate(0px, 0px)',
        background: "#C0C0C0"
    },
    {
        offset: .5,
        transform: 'translate(115px, 115px)',
        background: '#C0C0C0'
    },
    {
        transform: 'translate(230px, 230px)',
        background: '#808080'
    }
];

const square = document.getElementById('square');
const squareAnimation = square.animate([
    {
        transform: 'rotate(0)'
    },
    {
        transform: 'rotate(359deg)'
    }
], {
    duration: 750,
    iterations: Infinity
});

// * Pause feature
squareAnimation.pause();
document.getElementById('square').style.backgroundColor = "#C0C0C0";

document.getElementById('pause').addEventListener('click', function() {
  squareAnimation.pause();
  document.getElementById('square').style.backgroundColor = "#C0C0C0";
});

// * Play feature
document.getElementById('play').addEventListener('click', function() {
  squareAnimation.play();
  document.getElementById('square').style.backgroundColor = '#808080';
});

// * Reverse feature
document.getElementById('reverse').addEventListener('click', function() {
  squareAnimation.reverse();
  document.getElementById('square').style.backgroundColor = '#808080';
});


document.getElementById('slow').addEventListener('click', function() {
  squareAnimation.playbackRate = 0.5;
});

document.getElementById('normal').addEventListener('click', function() {
  squareAnimation.playbackRate = 1;
});

document.getElementById('fast').addEventListener('click', function() {
  squareAnimation.playbackRate = 2;
});


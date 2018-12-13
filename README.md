# Web Animation API

[Link to official documention](https://developer.mozilla.org/en-US/docs/Web/API/Animation "Animation documentation")

## Features:

1. Play

	A method used to start or stop an animation. 

```
document.getElementById('play').addEventListener('click', function() {
  squareAnimation.play();
  document.getElementById('square').style.backgroundColor = "#2196F3";
});
```

2. Pause

	Suspends playback of the animation.

```
squareAnimation.pause();
document.getElementById('square').style.backgroundColor = "#EF5350";

document.getElementById('pause').addEventListener('click', function() {
  squareAnimation.pause();
  document.getElementById('square').style.backgroundColor = "#EF5350";
});
```

3. Reverse
	
	Reverses the playback direction, meaning the animation ends at its beginning. If called on an paused or unplayed animation, it is played backwards. 
```
document.getElementById('reverse').addEventListener('click', function() {
  squareAnimation.reverse();
});
```

# Browser Support:
1. [Chrome](https://www.google.com/chrome/)
2. [Firefox](https://www.mozilla.org/en-US/firefox/new/)
3. [Opera](https://www.opera.com/)
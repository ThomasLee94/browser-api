## Animations

[I'm an inline-style link with title](https://developer.mozilla.org/en-US/docs/Web/API/Animation/pause "Animation documentation")

# Features:

1. Play

```
document.getElementById('play').addEventListener('click', function() {
  squareAnimation.play();
  document.getElementById('square').style.backgroundColor = "#2196F3";
});
```

2. Pause

```
squareAnimation.pause();
document.getElementById('square').style.backgroundColor = "#EF5350";

document.getElementById('pause').addEventListener('click', function() {
  squareAnimation.pause();
  document.getElementById('square').style.backgroundColor = "#EF5350";
});
```

3. Reverse

```
document.getElementById('reverse').addEventListener('click', function() {
  squareAnimation.reverse();
});
```
var Sketch = (function() {
  var canvas;
  var context2d;
  var lastX;
  var lastY;

  var draw = function(event) {
    if (lastX === undefined) lastX = event.offsetX;
    if (lastY === undefined) lastY = event.offsetY;

    context2d.moveTo(lastX, lastY);
    context2d.lineTo(event.offsetX, event.offsetY);
    context2d.stroke();

    lastX = event.offsetX;
    lastY = event.offsetY;
  };

  var drawTouch = function(event) {
    var touch = event.touches[0];

    if (lastX === undefined) lastX = touch.offsetX;
    if (lastY === undefined) lastY = touch.offsetY;

    context2d.moveTo(lastX, lastY);
    context2d.lineTo(touch.offsetX, touch.offsetY);
    context2d.stroke();

    lastX = touch.offsetX;
    lastY = touch.offsetY;

    console.log(lastX);
  };
  
  return {
    init: function() {
      canvas = document.getElementById('canvas');
      context2d = canvas.getContext('2d');
      context2d.fillStyle = '#aaa';
      context2d.lineWidth = 4.0;
      context2d.strokeStyle = '#000';
      context2d.fillRect(0, 0, 600, 600);

      canvas.onmousemove = draw;
      canvas.ontouchmove = drawTouch;

      document.body.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
    }
  };
})();
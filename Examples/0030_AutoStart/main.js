var LED1 = 17;
var LED2 = 2;
var LED3 = 15;
var LED4 = 12;

var on = true;

E.on('init', function() {
  digitalWrite([LED1,LED2], 1);
  setTimeout("digitalWrite([LED1,LED2], 0);", 1000);
  setTimeout("digitalWrite([LED3,LED4], 0);", 1000);
});


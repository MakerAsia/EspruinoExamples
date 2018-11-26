var LED1 = 17;
var on = true;

console.log("Hello World!");

setInterval( function() {
  digitalWrite(LED1, on);
  on = !on;
}, 500);


// Code from Graphical Editor
setWatch(function() {
  digitalWrite(LED1, true);
  setTimeout(function() {
    digitalWrite(LED1, false);
   }, 1*1000.0);
 }, BTN1, {"repeat":true,"edge":"rising","debounce":10});

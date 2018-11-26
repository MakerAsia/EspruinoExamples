var on = true;

// not work

E.on('init', function() {
  digitalWrite([LED1,LED2], 1);
  setTimeout("digitalWrite([LED1,LED2], 0);", 1000);
  setTimeout("digitalWrite([LED3,LED4], 0);", 1000);
});

console.log( "Hello" );


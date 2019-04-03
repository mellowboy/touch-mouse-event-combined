function start(event, etype, cnd, isBrowser) {
  console.log(etype);
  if (!isBrowser) event.preventDefault();
  items.off('click');
  items.on({
    ['touchmove mousemove']: (event) => move(event, cnd, isBrowser),
    ['touchend mouseup']: end
  });
  return false;
}
function move(event, cnd, isBrowser) {
  console.log('test');
  items.on('click', function(event) {event.preventDefault()});
  return false;
}
function end(event) {
  items.on('click');
  items.off('touchmove mousemove touchend mouseup');
}
var items = $('#x');
items.on('touchstart mousedown', function() {
  var etype = event.type;
  var cnd = (etype === 'touchstart' || etype === 'mousedown'),
      isBrowser = false;
  try {isBrowser = new RegExp("(?<=firefox)");} catch (e) {}
  start(event, etype, cnd, isBrowser);
});

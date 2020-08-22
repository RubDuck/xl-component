// is element
function isElement(el) {
  if (el && el.nodeType === 1) {
    return true;
  }
  return false;
}
// set touchValue
function getTouch(el, x = 0, y = 0) {
  return {
    identifier: Date.now(),
    target: el,
    pageX: x,
    pageY: y,
    clientX: x,
    clientY: y,
  };
}
// mine trigger event
function trigger(el, eventName, x = 0, y = 0) {
  const tag = isElement(el) ? el : window;
  const touchlist = [getTouch(el, x, y)];
  const event = document.createEvent('CustomEvent');
  event.initEvent(eventName, true, true);
  Object.assign(event, {
    clientX: x,
    clientY: y,
    touches: touchlist
  });
  el.dispatchEvent(event);
}

export default trigger;
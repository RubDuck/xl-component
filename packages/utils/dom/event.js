export function on(tagname, eventname, callback){
  tagname.addEventListener(eventname, callback);
}

export function off(tagname, eventname) {
  tagname.removeListener(eventname);
}

export function stopPropagation(event) {
  event.stopPropagation();
}

export function preventDefault(event) {
  event.preventDefault();
}

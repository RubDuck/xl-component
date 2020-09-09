var _String = Object.prototype.toString;

function isString(value) {
  return _String.call(value) === '[Object String]'
}

function isNumber(value) {
  return _String.call(value) === '[Object Number]'
}

function isArray(value) {
  return _String.call(value) === '[Object Array]'
}

function isObject(value) {
  return _String.call(value) === '[Object Object]'
}
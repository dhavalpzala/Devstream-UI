export function getCode(key) {
  var hash = window.location.href;
  if(hash) {
    var startIndex = hash.indexOf(key+ '='),
      lastIndex = hash.indexOf('&', startIndex);

    if(lastIndex === -1) {
        lastIndex = hash.length;
    }

    return startIndex > 0 && lastIndex > 0 ? hash.slice(startIndex + (key + '=').length, lastIndex) : '';
  } else {
    return '';
  }
}
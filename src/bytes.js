var B = window.B = function() { return typeof(arguments[0]) == 'function' ? B.ready(arguments[0]) : B.find.apply(null, arguments); };

(B.extend = function(target, object) {
  for (var key in object) target[key] = object[key];
})(B, {

indexOf: function(val, array, i) {
  for (i = 0; i < array.length; i++) { if (val === array[i]) return i; }
  return -1;
},

getElementsByClassName: function(name, context) {
  var found = context.getElementsByTagName('*'), i, array = [];
  for (i = 0; i < found.length; i++)
    if ((' ' + found[i].className + ' ').indexOf(' ' + name + ' ') != -1) array.push(found[i]);
  return array;
},

closest: function(sel, el, elements) {
  elements || (elements = B.find(sel));
  if (B.indexOf(el, elements) != -1)
    return el;
  else if (el.parentNode)
    return B.closest(sel, el.parentNode, elements);
},

find: function(sel, context) {
  context || (context = document);
  var found = [], i, array = [], parents, f = {'#': 'ById', '.': 'sByClassName', '@': 'sByName'}[sel.charAt(0)], s = (f ? sel.slice(1) : sel), fn = 'getElement' + (f || 'sByTagName');
  if (sel.match(/(\[|\(|\=|\:)/) || sel.match(/[^\s](\#|\@|\.)/)) {
    if (context.querySelectorAll) return context.querySelectorAll(sel);
  }
  if (sel.match(/\s/)) {
    array = sel.split(' '), parents = B.find(array.shift(), context);
    for (i = 0; i < parents.length; i++) found = found.concat(B.find(array.join(' '), parents[i]));
  } else {
    found = context[fn] ? context[fn](s) : B[fn](s, context);
    if (f == 'ById')
      found = [found];
    else {
      for (i = 0; i < found.length; i++) array.push(found[i]);
      found = array;
    }
  }
  return found;
},

bind: function(el, type, fn, remove) {
  var tf = type + fn;
  if (el.attachEvent ? (remove ? el.detachEvent('on' + type, el[tf]) : 1) : (remove ? el.removeEventListener(type, fn, 0) : el.addEventListener(type, fn, 0))) {
    el['e' + tf] = fn;
    el[tf] = function() { el['e' + tf](window.event); };
    el.attachEvent('on' + type, el[tf]);
  }
},

on: function(sel, type, fn) {
  B.bind(document, type, function(e) {
    var target = e.target || e.srcElement || window.event.target || window.event.srcElement;
    if (B.indexOf(target, B.find(sel)) != -1) {
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
      fn(e, target);
    }
  });
},

ready: function(fn) {
  '\v' == 'v' ? setTimeout(fn, 0) : B.bind(document, 'DOMContentLoaded', fn);
}

});

typeof(window.$) == "undefined" ? window.$ = B : null;
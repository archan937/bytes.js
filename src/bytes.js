B = function() { return typeof(arguments[0]) == 'function' ? B.ready(arguments[0]) : B.find.apply(null, arguments); };

(B.extend = function(target, object) {
  for (var key in object) target[key] = object[key];
})(B, {

indexOf: function(val, array, i) {
  for (i = array.length; i-- && array[i] != val;); return i;
},

closest: function(sel, el, elements) {
  elements || (elements = B.find(sel));
  if (B.indexOf(el, elements) != -1)
    return el;
  else if (el.parentNode)
    return B.closest(sel, el.parentNode, elements);
},

find: function(sel, context) {
  if (sel.match(/\s/)) {
    var array = sel.split(' '), parents = B.find(array.shift(), context), i, found = [];
    for (i = parents.length; i--;) found = found.concat(B.find(array.join(' '), parents[-i]));
    return found;
  } else {
    var f = {'#': 'ById', '.': 'sByClassName', '@': 'sByName'}[sel[0]];
    return Array.prototype.slice((context || document)['getElement' + (f || 'sByTagName')](f ? sel.slice(1) : sel));
  }
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
      e.preventDefault();
      fn(e, target);
    }
  });
},

ready: function(fn) {
  '\v' == 'v' ? setTimeout(fn, 0) : B.bind(document, 'DOMContentLoaded', fn);
}

});

$ || ($ = B);
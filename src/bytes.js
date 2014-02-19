$ = {

indexOf: function(value, array, i) {
  for (i = array.length; i-- && array[i] != value;);
  return i;
},

closest: function(selector, child, elements) {
  elements || (elements = $.find(selector));
  if ($.indexOf(child, elements) != -1)
    return child;
  else if (child.parentNode)
    return $.closest(selector, child.parentNode, elements);
},

find: function(selector, context) {
  if (selector.match(/\s/)) {
    var array = selector.split(' '), parents = $.find(array.shift(), context), i, found = [];
    for (i = parents.length; i--;)
      found = found.concat($.find(array.join(' '), parents[-i]));
    return found;
  } else {
    var f = {'#': 'ById', '.': 'sByClassName', '@': 'sByName'}[selector[0]];
    return Array.prototype.slice((context || document)['getElement' + (f || 'sByTagName')](f ? selector.slice(1) : selector));
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

on: function(selector, type, fn) {
  $.bind(document, type, function(e) {
    var target = e.target || e.srcElement || window.event.target || window.event.srcElement;
    if ($.indexOf(target, $.find(selector)) != -1) {
      e.preventDefault();
      fn(e, target);
    }
  });
},

ready: function(fn) {
  '\v' == 'v' ? setTimeout(fn, 0) : $.bind(document, 'DOMContentLoaded', fn);
}

};
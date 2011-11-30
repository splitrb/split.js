// Split.js, Clientside A/B testing library
// v0.1.0
// http://github.com/andrew/split.js
// (c) 2011 Andrew Nesbitt [andrewnez@gmail.com]
// released under the MIT license


Split = (function(){
  function createCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
  }

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  function eraseCookie(name) {
    createCookie(name,"",-1);
  }

  Object.prototype.keys = function ()
  {
    var keys = [];
    for(var i in this) if (this.hasOwnProperty(i))
    {
      keys.push(i);
    }
    return keys;
  }

  function setup(){
    alternatives = arguments[0]
    keys = alternatives.keys()

    var alternative = readCookie('abTest')
    if (alternative) {
      console.log('found existing cookie')
    } else {
      alternative = keys[Math.floor(Math.random()*keys.length)]
      createCookie('abTest', alternative, 30)
    }
    var _gaq = _gaq || [];
    _gaq.push(['_setCustomVar', 1, 'AB Test alternative', alternative, 1]);
    alternatives[alternative]();
  }
})();
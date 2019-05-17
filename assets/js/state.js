---
layout: none
---

var stateG = 'unmatch';

enquire.register('screen and (min-width: 640px)',{
  match   : function() { stateG = 'match'; },
  unmatch : function() { stateG = 'unmatch'; }
});

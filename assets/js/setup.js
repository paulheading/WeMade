---
layout: none
---

var stateG,nameG,resizeTimer;

enquire.register('screen and (min-width: 640px)',{
  match   : function() {
    stateG = 'match';
    console.log(stateG);
  },
  unmatch : function() {
    stateG = 'unmatch';
    console.log(stateG);
  }
});

smoothScroll();

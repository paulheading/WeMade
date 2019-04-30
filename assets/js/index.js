---
layout: none
---

var lnkIndex = $('.row._index');

lnkIndex
.on('mouseover',function(e){
  var ting = e.currentTarget.nextElementSibling;
  TweenMax.set(ting,{opacity:1});
})
.on('mouseleave',function(e){
  var ting = e.currentTarget.nextElementSibling;
  TweenMax.set(ting,{opacity:0});
});

---
layout: none
---

if(body.hasClass('--paul --index')) {
  loop_work_index('paul',5);
}

if(body.hasClass('--chloe --index')) {
  loop_work_index('chloe',5);
}

if(body.hasClass('--work')) {
  loop_work_visual('chloe, paul');
}

if(body.hasClass('--work --index')) {
  loop_work_index('chloe, paul',5);
}

if(body.hasClass('--blog --index')) {
  loop_blog_index('chloe, paul',5);
}

if(body.hasClass('--paul --cv')) {
  loop_cv('paul');
}

if(body.hasClass('--chloe --cv')) {
  loop_cv('chloe');
}

var lnkIndex = $('.lnk._index');

lnkIndex
.on('mouseover',function(){
  var ting = $(this),
      tang = ting.children('.img._thumb');
  TweenMax.set(tang,{opacity:1});
})
.on('mouseleave',function(){
  var ting = $(this),
      tang = ting.children('.img._thumb');
  TweenMax.set(tang,{clearProps:'opacity'});
});

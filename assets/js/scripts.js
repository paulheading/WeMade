---
layout: none
---

var homeTl = new TimelineMax({repeat:-1}),prnt;

var random = () => {
  return 0.3 - Math.random();
}

function typeMonth(num) {
  if(num.charAt(0) == 0){
    prnt = month[num.slice(1,2)-1];
  } else {
    prnt = month[num-1];
  }
}

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

loop_trello('chloe, paul',3);

feed_data_core.sort(random);

$(feed_data_core).each(function(i){
  var name = feed_data_core[i].name.toLowerCase(),
      url = feed_data_core[i].url,
      msg = feed_data_core[i].message;

  homeTl
  .set('body',{className:'+=_'+name})
  .call(animLogo,[],'start')
  .call(animHero,[name,msg,url],'start')
  .call(setWifi,[],'start')
  .call(animJobs,[],'start')
  .add('stop','+=5')
  .set('.word',{clearProps:'all'},'stop')
  .set('body',{className:'-=_'+name},'stop')
  ;

});

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

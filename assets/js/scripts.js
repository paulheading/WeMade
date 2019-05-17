---
layout: none
---

TweenLite.defaultEase = Linear.easeNone;

var body = $('body');

var otherAnim = () => {
  var otherTl = new TimelineMax({repeat:-1,repeatDelay:1});
  otherTl
  .call(logoAnim,[],'start')
  .call(trelloAnim,[],'start')
  .set(body,{opacity:1},'+=5')
  ;
}

if(body.hasClass('_hero')) {
  heroAnim();
  svgAnim();
} else {
  otherAnim();
}

$(document).ready(siteFunc);

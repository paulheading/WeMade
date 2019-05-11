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

$(document).ready(function(){
  var tickerWords = $('.tickerWords'),
      tickerSingle = $('.tickerSingle'),
      tickerLength = tickerSingle[0].clientWidth,
      tickerTime = tickerLength/100,
      tickerTl = new TimelineMax({repeat:-1});
      tickerTl.to(tickerWords,tickerTime,{x:-tickerLength,ease:Power0.easeNone});
})

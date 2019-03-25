---
layout: none
---

var tickerTl = new TimelineMax({repeat:-1});

function tickerFunc() {

  $('.row._ticker').each(function(i){
    var count = i++, countPlus = count +1, tickerNo = '.row._ticker:nth-child('+ countPlus +')';
    tickerTl
    .add(TweenLite.to(tickerNo,0.1,{className:'+=--active',ease:SteppedEase.config(1)}))
    .add(TweenLite.set(tickerNo,{className:'-=--active',delay:'1'}))
    ;
  });

  return tickerTl;
}

$(document).ready(tickerFunc);

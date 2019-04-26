---
layout: none
---

var svgAnim = () => {
  TweenLite.defaultEase = Sine.easeInOut;
  var svgTl = new TimelineMax({repeat:-1,yoyo:true}),
      drawTl = new TimelineMax({repeat:-1,yoyo:true});
  svgTl.fromTo('.svg._hero',1,{y:-5},{y:5});
  drawTl.fromTo('#noodle',1,{drawSVG:'0%'},{drawSVG:'100%'});
}

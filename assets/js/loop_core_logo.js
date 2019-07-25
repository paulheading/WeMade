
var loop_core_logo = () => {
  var tl = new TimelineMax();

  tl
  .to('#wm',4,{drawSVG:'0%',ease:Power0.easeNone})
  .to('#wm',1,{drawSVG:'100%',ease:Power0.easeNone})
  ;
}

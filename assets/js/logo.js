---
layout: none
---

var logoAnim = () => {
  var logo = $('#wm'),
      logoTl = new TimelineMax();

  logoTl
  .to(logo,4.5,{drawSVG:'0%',ease:Power0.easeNone})
  .to(logo,0.5,{drawSVG:'100%',ease:Power0.easeNone})
  ;
}

---
layout: none
---

var logoAnim = () => {
  var logo = $('#wm'),
      logoTl = new TimelineMax();

  logoTl
  .to(logo,4,{drawSVG:'0%',ease:Power0.easeNone})
  .to(logo,1,{drawSVG:'100%',ease:Power0.easeNone})
  ;
}

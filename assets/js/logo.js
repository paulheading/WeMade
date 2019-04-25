---
layout: none
---

var logoAnim = () => {
  var logo = $('path','#logo'),
      logoTl = new TimelineMax();

  logoTl
  .to(logo,5,{drawSVG:'0%',ease:Power0.easeNone})
  .to(logo,0.5,{drawSVG:'100%',ease:Power0.easeNone})
  ;
}

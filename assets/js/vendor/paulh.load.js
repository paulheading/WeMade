
var loadTl = new TimelineMax({repeat:-1,repeatDelay:0.2});

loadTl
.set('.wrap._load',{className:'wrap _load pop'})
.to('._progress.--load',0.4,{width:"100%"},'0.2')
.set('.wrap._load',{className:'wrap _load popop'},'0.2')
.set('.wrap._load',{className:'wrap _load popopop'},'0.4')
;

function siteFunc() {
  var siteTl = new TimelineMax({delay:0.6});

  siteTl
  .to('.overlay._load',0.1,{display:'none'},'start')
  .to('.site',0.1,{opacity:1,onComplete:function(){loadTl.stop();}},'start')
  ;
}

$(document).ready(siteFunc);


var $body = $('body');
var $site = $('.site');
var $load = $('.load');

var loadTl = new TimelineMax({repeat:-1,repeatDelay:0.2});

loadTl
.set($('.title',$load),{textTransform:"uppercase",fontStyle:"400"})
.set($('.box',$load),{borderColor:"blue"},'0.2')
.to($('.bar',$load),0.4,{width:"100%"},'0.2')
.set($('.bar',$load),{backgroundColor:"blue"},'0.2')
.set($('.title',$load),{color:"blue",textTransform:"lowercase",fontWeight:"700",fontSize:"42px"},'0.2')
.set($('.box',$load),{borderColor:"black"},'0.4')
.set($('.bar',$load),{backgroundColor:"black"},'0.4')
.set($('.title',$load),{color:"black",fontStyle:"italic",fontWeight:"400",fontSize:"54px"},'0.4')
;

function siteFunc() {
  var siteTl = new TimelineMax({delay:0.5});

  siteTl
  .to($load,0.1,{display:"none"},'start')
  .to($site,0.1,{opacity:1,onComplete:function(){
    loadTl.stop();
  }},'start')
  ;
}

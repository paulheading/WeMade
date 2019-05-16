---
layout: none
---

var see = $('.copy._something');

function getAjax(name,msg,url) {
  $.get('assets/html/'+name+'.html?v=1.1', function(data) {$('.area._hero').html(data);})
  .done(function(){
    setAnim(name);
    setTicker(msg);
    setUrl(url);
  });
}

function setAnim(name) {
  if(name == 'chloe')  {
    chloeAnim();
  } else if(name == 'paul') {
    paulAnim();
  } else if(name == 'wemade') {
    wemadeAnim();
  }
}

function chloeAnim() {
  see.html('Chloe');
  TweenMax.to($('path','#chloe_svg'),1,{y:10,repeat:-1,yoyo:true});
  TweenMax.to('#chloe',1,{x:10,repeat:-1,yoyo:true});
  TweenMax.to('#makes',1,{x:-10,repeat:-1,yoyo:true});
  TweenMax.to('#waves',1,{x:10,repeat:-1,yoyo:true});
  if(state == 'match') {
  } else {
    TweenMax.set($('#chloe_svg'),{scale:0.8,transformOrigin:'center'});
  }
}

function wemadeAnim() {
  see.html('Studio');
  TweenMax.to($('path','#wemade_svg'),1,{y:10,repeat:-1,yoyo:true});
  if(state == 'match') {
  } else {
    TweenMax.set($('#wemade_svg'),{scale:0.8,transformOrigin:'center'});
  }
}

function paulAnim() {
  see.html('Paul');
  TweenMax.to($('path','#paul_svg'),1,{y:10,repeat:-1,yoyo:true});
  TweenMax.to('#paul',1,{x:10,repeat:-1,yoyo:true});
  TweenMax.to('#makes',1,{x:-10,repeat:-1,yoyo:true});
  TweenMax.to('#shapes',1,{x:10,repeat:-1,yoyo:true});
  if(state == 'match') {
  } else {
    TweenMax.set($('#paul_svg'),{scale:0.8,transformOrigin:'center'});
  }
}

function setTicker(msg) {
  var tingo = '', wordWrap = $('.wordWrap');
  TweenMax.set('.tickerWords',{x:0});

  $(msg).each(function(i){
    var count = i++,
        key = Object.keys(msg[count])[0],
        val = Object.values(msg[count])[0];

    if(key == 'bold!') {
      tingo += '<div class="word _bold-u">'+val+'</div>';
    } else if(key == 'bold') {
      tingo += '<div class="word _bold">'+val+'</div>';
    } else if(key == 'italic!') {
      tingo += '<div class="word  _italic-u">'+val+'</div>';
    } else if(key == 'italic') {
      tingo += '<div class="word _italic">'+val+'</div>';
    } else if(key == 'book!') {
      tingo += '<div class="word _book-u">'+val+'</div>';
    } else {
      tingo += '<div class="word _book">'+val+'</div>';
    }
  });
  wordWrap.html(tingo);
  var wrapWidth = $('.wordWrap')[0].clientWidth;
  TweenMax.to('.tickerWords',6,{x:-wrapWidth,ease:Power0.easeNone,repeat:-1});
}

function setUrl(url) {
  TweenMax.set(['.area._hero','.lnk._something'],{attr:{href:url}});
}

// $(window).on('resize',function(e){
//   clearTimeout(resizeTimer);
//   resizeTimer = setTimeout(checkState(),250);
// });

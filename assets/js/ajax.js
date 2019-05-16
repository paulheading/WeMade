---
layout: none
---

function getAjax(name,msg,url) {
  $.get('assets/html/'+name+'.html?v=1', function(data) {
    $('.area._hero').html(data);
  });

  $(document).ajaxComplete(function(){
    if(name == 'chloe')  {
      chloeAnim();
    } else if(name == 'wemade') {
      wemadeAnim();
    }
    setTicker(msg);
    setUrl(url);
  });
}

// $(window).on('resize',function(e){
//   clearTimeout(resizeTimer);
//   resizeTimer = setTimeout(checkState(),250);
// });

function chloeAnim() {
  if(state == 'match') {
    var desktopTl = new TimelineMax({repeat:-1,yoyo:true});
    TweenMax.set(['#chloe','#new'],{scale:1.5,transformOrigin:'center'});
  } else {
    var mobileTl = new TimelineMax({repeat:-1,yoyo:true});
    TweenMax.set(['#chloe','#new'],{scale:1,transformOrigin:'center'});
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
  TweenMax.to('.tickerWords',3,{x:-wrapWidth,ease:Power0.easeNone,repeat:-1});
}

function setUrl(url) {
  TweenMax.set(['.area._hero','.lnk._something'],{attr:{href:url}});
}

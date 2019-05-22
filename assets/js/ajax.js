---
layout: none
---

var see = $('.copy._something'),
    nameG,resizeTimer;

$(window).on('resize',function(e){
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(setAnim(nameG),300);
});

function getAjax(name,msg,url) {
  $.get('assets/html/'+name+'.html?v=1.1', function(data) {
    $('.area._hero').html(data);
    nameG = name;
  })
  .done(function(){
    setAnim(nameG);
    setTicker(msg);
    setUrl(url);
  });
}

function setAnim(nameG) {
  if(nameG == 'chloe')  {
    chloeAnim(stateG);
  } else if(nameG == 'paul') {
    paulAnim(stateG);
  } else if(nameG == 'wemade') {
    wemadeAnim(stateG);
  }
}

function chloeAnim(stateG) {
  see.html('Chloe');
  var sen = $('#words > path'),
      senTargets = [];

  for (var i = 1, l = sen.length; i <= l; i++) {
    senTargets.push('#words > path:nth-of-type('+i+')');
  }

  TweenMax.staggerFromTo(senTargets,0.1,{opacity:0},{opacity:1},0.1);
  TweenMax.to('#chloe_svg',1,{y:10,repeat:-1,yoyo:true});
  TweenMax.set($('path','#chloe_svg'),{transformOrigin:'center'});
  TweenMax.from(['#pinkLine','#pinkShade'],2,{drawSVG:'0%',ease:Power0.easeNone});
  TweenMax.from(['#greenLine','#greenShade'],2,{drawSVG:'0%',ease:Power0.easeNone});
  TweenMax.set($('path:nth-of-type(1)','#chloe'),{rotation:180,x:3,delay:4});
  TweenMax.set($('path:nth-of-type(2)','#chloe'),{rotation:180,y:10,delay:4});
  TweenMax.set($('path:nth-of-type(5)','#chloe'),{rotation:180,scale:1.2,delay:4});

  if(stateG == 'match') {
    // TweenMax.set($('#chloe_svg'),{scale:1,transformOrigin:'center'});
  } else
  if(stateG == 'unmatch') {
    // TweenMax.set($('#chloe_svg'),{scale:0.8,transformOrigin:'center'});
  }
}

function wemadeAnim(stateG) {
  see.html('Studio');
  TweenMax.to($('path','#wemade_svg'),1,{y:10,repeat:-1,yoyo:true});

  if(stateG == 'match') {
    TweenMax.set($('#wemade_svg'),{scale:1,transformOrigin:'center'});
  } else
  if(stateG == 'unmatch') {
    TweenMax.set($('#wemade_svg'),{scale:0.8,transformOrigin:'center'});
  }
}

function paulAnim(stateG) {
  see.html('Paul');
  TweenMax.to($('path','#paul_svg'),1,{y:10,repeat:-1,yoyo:true});
  // TweenMax.to('#paul',1,{x:10,repeat:-1,yoyo:true});
  // TweenMax.to('#makes',1,{x:-10,repeat:-1,yoyo:true});
  // TweenMax.to('#shapes',1,{x:10,repeat:-1,yoyo:true});

  if(stateG == 'match') {
    TweenMax.set($('#paul_svg'),{scale:1,transformOrigin:'center'});
  } else
  if(stateG == 'unmatch') {
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

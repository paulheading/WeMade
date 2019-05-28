---
layout: none
---

var see = $('.copy._something'),
    nameG,resizeTimer;

$(window).on('resize',function(e){
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(setAnim(nameG),300);
});

function animHero(name,msg,url) {
  nameG = name;
  setAnim(nameG);
  setTicker(msg);
  setUrl(url);
}

function animSvg() {
  var svgTl = new TimelineMax(),
      heroSvg = '.area._hero svg',
      heroPath = '.area._hero svg path';

  svgTl
  .set(heroPath,{transformOrigin:'center'})
  .to(heroPath,0.1,{opacity:1})
  .to(heroSvg,1,{y:10,ease: Sine.easeInOut,repeat:-1,yoyo:true})
  ;
}

function setAnim(nameG) {
  if(nameG == 'chloe')  {
    animSvg();
    animChloe(stateG);
  } else if(nameG == 'paul') {
    animSvg();
    animPaul(stateG);
  } else if(nameG == 'wemade') {
    animSvg();
    animWemade(stateG);
  }
}

function animChloe(stateG) {
  see.html('Chloe');
  var sen = $('#words > path'),
      senTargets = [],
      chloeTl = new TimelineMax();

  for (var i = 1, l = sen.length; i <= l; i++) {
    senTargets.push('#words > path:nth-of-type('+i+')');
  }

  chloeTl
  .set('#chloe path',{rotation:0,x:0,y:0,scale:1})
  .set('#chloe path:nth-of-type(1)',{rotation:180,x:3},'4')
  .set('#chloe path:nth-of-type(2)',{rotation:180,y:10},'4')
  .set('#chloe path:nth-of-type(5)',{rotation:180,scale:1.2},'4')
  ;
}

function animWemade(stateG) {
  see.html('Studio');
  TweenMax.to($('path','#wemade_svg'),1,{y:10,ease: Sine.easeInOut,repeat:-1,yoyo:true});
}

function animPaul(stateG) {
  see.html('Paul');
  TweenMax.to($('path','#paul_svg'),1,{y:10,ease: Sine.easeInOut,repeat:-1,yoyo:true});
}

function setTicker(msg) {
  var tingo = '',
      wordWrap = $('.wordWrap');
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

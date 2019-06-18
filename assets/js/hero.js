---
layout: none
---

var see = $('.copy._see'),
    nameG,resizeTimer;

$(window).on('resize',function(e){
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(setAnim(nameG),300);
});

var animHero = (name,msg,url) => {
  nameG = name;
  setAnim(nameG);
  setTicker(msg);
  setUrl(url);
}

var setAnim = (nameG) => {
  if(nameG == 'chloe')  {
    animChloe(stateG);
  } else if(nameG == 'paul') {
    animPaul(stateG);
  } else if(nameG == 'wemade') {
    animWemade(stateG);
  }
}

var animChloe = (stateG) => {
  see.html('Chloe');

  var svgChloe = new TimelineMax();
  svgChloe
  .set('.block._hero-chloe',{className:'+=--open'})
  .set('.block._hero-chloe',{className:'-=--open'},'+=5');
}

var animWemade = (stateG) => {
  see.html('Studio');
}

var animPaul = (stateG) => {
  see.html('Paul');
  var svgPaul = new TimelineMax();
  svgPaul
  .set('.block._hero-paul',{className:'+=--open'})
  .set('.block._hero-paul',{className:'-=--open'},'+=5');
}

var setTicker = (msg) => {
  var tingo = '',
      tango = $('.copy._ticker');
  TweenMax.set('.wrap._ticker',{x:0});

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
  tango.html(tingo);
  var copyWidth = $('.copy._ticker')[0].clientWidth+5;
  TweenMax.to('.wrap._ticker',5,{x:-copyWidth,ease:Power0.easeNone,repeat:-1});
}

var setUrl = (url) => {
  TweenMax.set(['.area._hero','.lnk._see'],{attr:{href:url}});
}

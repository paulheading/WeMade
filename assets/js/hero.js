---
layout: none
---

var see = $('.title._see'),
    city = $('.title._city');

$(window).on('resize',function(e){
  resizeTimer = setTimeout(setAnim(nameG),300);
  clearTimeout(resizeTimer);
});

var animHero = (name,msg,url) => {
  nameG = name;
  setAnim(nameG);
  setTicker(msg);
  setUrl(url);
  timeFunc(nameG);
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
  see.html('See '+nameG);
  city.html('Toronto');
}

var animWemade = (stateG) => {
  see.html('See Studio');
  city.html('Wemade');
}

var animPaul = (stateG) => {
  see.html('See '+nameG);
  city.html('London');
}

var svgOn = (nameG) => {
  var onOff = new TimelineMax(),
      block = '.block._hero.--'+nameG;
  onOff
  .set(block,{className:'+=--open'})
  .set(block,{className:'-=--open'},'5')
  ;
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
  TweenMax.to('.wrap._ticker',7,{x:-copyWidth,ease:Power0.easeNone,repeat:-1});
}

var setUrl = (url) => {
  TweenMax.set('.lnk._see',{attr:{href:url}});
}

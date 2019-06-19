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
  see.html(nameG);
  svgOn(nameG);
}

var animWemade = (stateG) => {
  see.html('Studio');
}

var animPaul = (stateG) => {
  see.html(nameG);
  svgOn(nameG);

  var all = ['#paul','#makes','#shapes'],
      mobile = new TimelineMax({paused:true}),
      desktop = new TimelineMax({paused:true});

      mobile
      .set('#paul',{display:'block',rotation:'-70deg'})
      .add('switch','+=1')
      .set('#paul',{fill:'orange',opacity:0.5},'switch')
      .set('#makes',{display:'block',rotation:'-100deg',x:-20},'switch')
      .add('switch','+=1')
      .set('#makes',{fill:'orange',opacity:0.5},'switch')
      .set('#shapes',{display:'block',rotation:'100deg',y:20,x:-20},'switch')
      ;

      desktop
      .set('#paul',{display:'block',rotation:0})
      ;

  if(stateG != 'match') {
    desktop.pause();
    TweenMax.set(all,{clearProps:'all'});
    mobile.play();
  } else {
    mobile.pause();
    TweenMax.set(all,{clearProps:'all'});
    desktop.play();
  }
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
  TweenMax.to('.wrap._ticker',5,{x:-copyWidth,ease:Power0.easeNone,repeat:-1});
}

var setUrl = (url) => {
  TweenMax.set(['.area._hero','.lnk._see'],{attr:{href:url}});
}

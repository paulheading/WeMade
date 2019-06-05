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
  var sen = $('#words > path'),
      senTargets = [],
      chloeTl = new TimelineMax();

  see.html('Chloe');

  for(var i = 1, l = sen.length; i <= l; i++) {
    senTargets.push('#words > path:nth-of-type('+i+')');
  }

  chloeTl
  .set('#chloe path',{rotation:0,x:0,y:0,scale:1})
  .set('#chloe path:nth-of-type(1)',{rotation:180,x:3},'4')
  .set('#chloe path:nth-of-type(2)',{rotation:180,y:10},'4')
  .set('#chloe path:nth-of-type(5)',{rotation:180,scale:1.2},'4')
  ;
}

var animWemade = (stateG) => {
  see.html('Studio');
}

var animPaul = (stateG) => {
  see.html('Paul');
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
  var copyWidth = $('.copy._ticker')[0].clientWidth;
  TweenMax.to('.wrap._ticker',6,{x:-copyWidth,ease:Power0.easeNone,repeat:-1});
}

var setUrl = (url) => {
  TweenMax.set(['.area._hero','.lnk._see'],{attr:{href:url}});
}

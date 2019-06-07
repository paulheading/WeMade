---
layout: none
---

var win = $('.block._window'),
    folder = $('.block._folder'),
    closeBtn = $('.btn._window.--close'),
    minBtn = $('.btn._window.--min'),
    bar = $('.col._icons');

Draggable.create(win,{cursor:'pointer'});

function winFunc(obj,state) {

  if(state == 'open') {
    TweenMax.set(obj,{opacity:1,className:'-=--close'});
    TweenMax.set(obj,{className:'+=--open'});
  }

  if(state == 'close') {
    TweenMax.set(obj,{opacity:0,className:'-=--open'});
    TweenMax.set(obj,{className:'+=--close'});
  }

  if(state == 'xpand') {
    TweenMax.to(obj,0.3,{scale:1,ease:SteppedEase.config(3)});
    TweenMax.set(obj,{className:'-=--minim'});
    TweenMax.set(obj,{className:'+=--open'});
  }

  if(state == 'minim') {
    TweenMax.to(obj,0.3,{scale:0,ease:SteppedEase.config(3)});
    TweenMax.set(obj,{className:'-=--open'});
    TweenMax.set(obj,{className:'+=--minim'});
  }
}

function btnFunc(e) {
  var state = e.data.state,
      ting = $(this);

  if(state == 'minim' || state == 'close') {
    var ting = ting.parents('.block._window'),
        label = ting[0].classList[2];

    winFunc(ting,state);

    folder.each(function(){
      var tang = $(this);
      if(tang.hasClass(label)) {
        folderFunc(tang,label,state);
      }
    });

    if(state == 'minim') {
      mkBtn(label);
    }
  }

  if(state == 'xpand' || state == 'open') {
    var label = ting[0].classList[2],
        type = ting[0].classList[3];

    folder.each(function(){
      var tang = $(this);
      if(tang.hasClass(label)) {
        folderFunc(tang,label,state);
      }
    });

    win.each(function(){
      var tang = $(this);
      if(tang.hasClass(label)) {
        winFunc(tang,state);
      }
    });

    ting.remove();
  }
}

function folderFunc(tang,label,state) {
  var front = $('#front',tang),
      paper = $('#paper',tang),
      shut = $('#shut',tang),
      openTl = new TimelineMax({paused:true}),
      closeTl = new TimelineMax({paused:true});

      openTl
      .to(front,0.1,{morphSVG:front})
      .set(paper,{opacity:1})
      .to(paper,0.1,{y:0});

      closeTl
      .to(paper,0.1,{y:10})
      .set(paper,{opacity:0})
      .to(front,0.1,{morphSVG:shut});

  if(state == 'open') {
    openTl.play();
    TweenMax.set(tang,{className:'-=--close'});
    TweenMax.set(tang,{className:'+=--open'});
  }

  if(state == 'close') {
    closeTl.play();
    TweenMax.set(tang,{className:'-=--open'});
    TweenMax.set(tang,{className:'+=--close'});
  }

  if(state == 'xpand') {
    openTl.play();
    TweenMax.set(tang,{className:'-=--minim'});
    TweenMax.set(tang,{className:'+=--open'});
  }

  if(state == 'minim') {
    closeTl.play();
    TweenMax.set(tang,{className:'-=--open'});
    TweenMax.set(tang,{className:'+=--minim'});
  }
}

function resetFunc() {
  var tang = $(this),
      label = tang[0].classList[2],
      state = tang[0].classList[3].slice(2);

  if(state == 'open') {
    folderFunc(tang,label,'close');

    win.each(function(){
      var tang = $(this);
      if(tang.hasClass(label)) {
        winFunc(tang,'close');
      }
    });
  }

  if(state == 'close') {
    folderFunc(tang,label,'open');

    win.each(function(){
      var tang = $(this);
      if(tang.hasClass(label)) {
        winFunc(tang,'open');
      }
    });
  }

  if(state == 'minim') {
    folderFunc(tang,label,'xpand');

    $('.btn._toolbar').each(function(){
      var tang = $(this);
      if(tang.hasClass(label)){
        tang.remove();
      }
    });

    win.each(function(){
      var tang = $(this);
      if(tang.hasClass(label)) {
        winFunc(tang,'xpand');
      }
    });
  }
}

function mkBtn(name) {
  var newBtn = '<div class="btn _toolbar '+name+' --xpand"></div>';
  bar.append(newBtn);
}

bar.on('click','.btn._toolbar',{state:'xpand'},btnFunc);
closeBtn.click({state:'close'},btnFunc);
minBtn.click({state:'minim'},btnFunc);
folder.click(resetFunc);

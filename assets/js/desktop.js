---
layout: none
---

var win = $('.block._window'),
    folder = $('.block._folder'),
    closeBtn = $('.btn._window.--close'),
    minBtn = $('.btn._window.--min'),
    xpandBtn = $('.btn._desktop'),
    bar = $('.col._icons');

Draggable.create(win,{cursor:'pointer'});

function winFunc(obj,state) {
  
  if(state == 'open') {
    TweenMax.set(obj,{opacity:1,className:'+=--open'});
  }

  if(state == 'close') {
    TweenMax.set(obj,{opacity:0,className:'-=--open'});
  }

  if(state == 'minim') {
    TweenMax.set(obj,{className:'-=--open'});
    TweenMax.set(obj,{className:'+=--minim'});
    TweenMax.to(obj,0.3,{scale:0,ease:SteppedEase.config(3)});
  }

  if(state == 'xpand') {
    TweenMax.set(obj,{className:'-=--minim'});
    TweenMax.set(obj,{className:'+=--open'});
    TweenMax.to(obj,0.3,{scale:1,ease:SteppedEase.config(3)});
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

  if(state == 'close') {
    TweenMax.set(tang,{className:'-=--open'});
    closeTl.play();
  }

  if(state == 'minim') {
    TweenMax.set(tang,{className:'-=--open'});
    TweenMax.set(tang,{className:'+=--minim'});
    closeTl.play();
  }

  if(state == 'open') {
    TweenMax.set(tang,{className:'+=--open'});
    openTl.play();
  }

  if(state == 'xpand') {
    TweenMax.set(tang,{className:'+=--open'});
    TweenMax.set(tang,{className:'-=--minim'});
    openTl.play();
  }
}

function resetFunc() {
  var tang = $(this),
      label = tang[0].classList[2],
      state = tang[0].classList[3];

  if(state == '--open') {
    folderFunc(tang,label,'close');

    win.each(function(){
      var tang = $(this);
      if(tang.hasClass(label)) {
        winFunc(tang,'close');
      }
    });
  } else {
    folderFunc(tang,label,'open');

    win.each(function(){
      var tang = $(this);
      if(tang.hasClass(label)) {
        winFunc(tang,'open');
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

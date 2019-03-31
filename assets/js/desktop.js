---
layout: none
---

var win = $('.window'),
    folder = $('.folder'),
    closeBtn = $('.btn._window.--close'),
    minBtn = $('.btn._window.--min'),
    xpandBtn = $('.btn._desktop'),
    bar = $('.wrap._bar');

Draggable.create(win,{cursor:'pointer'});

function winFunc(obj,state) {
  if(state == 'close') {
    TweenMax.set(obj,{className:'-=--open',scale:0});
  } else if(state == 'open') {
    TweenMax.set(obj,{className:'+=--open',scale:1});
  } else if(state == 'minim') {
    TweenMax.to(obj,0.3,{scale:0,ease:SteppedEase.config(4)});
  } else if(state == 'xpand') {
    TweenMax.to(obj,0.3,{scale:1,ease:SteppedEase.config(4)});
  }
}

function changeFolder() {
  var ting = $(this),
      label = ting[0].classList[1];

  if(ting.hasClass('--open')) {

    TweenMax.set(ting,{className:'-=--open'});

    win.each(function(){
      if($(this).hasClass(label)) {
        winFunc(this,'close');
      }
    });

  } else if(ting.hasClass('--min')) {

    TweenMax.set(ting,{className:'-=--min'});
    TweenMax.set(ting,{className:'+=--open'});

    win.each(function(){
      if($(this).hasClass(label)) {
        winFunc(this,'xpand');
      }
    });

    $('.btn._desktop').each(function(){
      if($(this).hasClass(label)) {
        $(this).remove();
      }
    });

  } else {

    TweenMax.set(ting,{className:'+=--open'});

    win.each(function(){
      if($(this).hasClass(label)) {
        winFunc(this,'open');
      }
    });

    $('.btn._desktop').each(function(){
      if($(this).hasClass(label)) {
        $(this).remove();
      }
    });
  }
}

function minFunc() {
  var tang = $(this).parents('.window'),
      label = tang[0].classList[1];

  winFunc(tang,'minim');
  mkBtn(label,'minim');

  folder.each(function(){
    var tong = $(this);
    if(tong.hasClass(label)) {
      TweenMax.set(tong,{className:'-=--open'});
      TweenMax.set(tong,{className:'+=--min'});
    }
  });
}

function closeFunc() {
  var tang = $(this).parents('.window'),
      label = tang[0].classList[1];

  winFunc(tang,'close');
  mkBtn(label,'close');

  folder.each(function(){
    var tong = $(this);
    if(tong.hasClass(label)) {
      TweenMax.set(tong,{className:'-=--open'});
    }
  });
}

function mkBtn(name,type) {
  var xpandBtn = '<div class="btn _desktop '+name+' --xpand"></div>',
      openBtn = '<div class="btn _desktop '+name+' --open"></div>';

  if(type == 'minim') {
    bar.append(xpandBtn);
  } else if(type == 'close') {
    bar.append(openBtn);
  }
}

function btnFunc() {
  var ting = $(this),
      label = ting[0].classList[2],
      type = ting[0].classList[3];

  win.each(function(){
    if($(this).hasClass(label)) {
      if(type == '--xpand') {
        winFunc(this,'xpand');
      } else if(type == '--open') {
        winFunc(this,'open');
      }
    }
  });

  $(this).remove();

  folder.each(function(){
    var tong = $(this);
    if(tong.hasClass(label)) {
      TweenMax.set(tong,{className:'-=--min'});
      TweenMax.set(tong,{className:'+=--open'});
    }
  });
}

bar.on('click','.btn._desktop',btnFunc);
closeBtn.click(closeFunc);
minBtn.click(minFunc);
folder.click(changeFolder);

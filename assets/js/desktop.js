---
layout: none
---

var win = $('.window'),
    folder = $('.folder'),
    closeBtn = $('.btn._window.--close'),
    minBtn = $('.btn._window.--min'),
    xpandBtn = $('.btn._desktop'),
    bar = $('.split._left.--bar'),
    day = $('.day'),
    hours = $('.hours'),
    minutes = $('.minutes');

var timeFunc = () => {
  var weekday = new Array(7);
      weekday[0] = "Sun",
      weekday[1] = "Mon",
      weekday[2] = "Tue",
      weekday[3] = "Wed",
      weekday[4] = "Thu",
      weekday[5] = "Fri",
      weekday[6] = "Sat";
  var d = new Date(),
      n = weekday[d.getDay()],
      h = d.getHours(),
      m = d.getMinutes();
      
  day.text(n);

  if(h < 10) {
    var addZero = '0'+h;
    hours.text(addZero);
  } else {
    hours.text(h);
  }

  if(m < 10) {
    var addZero = '0'+m;
    minutes.text(addZero);
  } else {
    minutes.text(m);
  }
}

window.setInterval(timeFunc,1000);

Draggable.create(win,{cursor:'pointer'});

function winFunc(obj,state) {
  if(state == 'close') {
    TweenMax.set(obj,{className:'-=--open'});
  } else if(state == 'open') {
    TweenMax.set(obj,{className:'+=--open'});
  } else if(state == 'minim') {
    TweenMax.to(obj,0.3,{scale:0,ease:SteppedEase.config(4)});
  } else if(state == 'xpand') {
    TweenMax.to(obj,0.3,{scale:1,ease:SteppedEase.config(4)});
  }
}

function changeFolder() {
  var ting = $(this),
      label = ting[0].classList[1],
      front = $('#front',this),
      paper = $('#paper',this),
      shut = $('#shut',this),
      tab = $('#tab',this),
      openTl = new TimelineMax(),
      closeTl = new TimelineMax();

  if(ting.hasClass('--open')) {

    TweenMax.set(ting,{className:'-=--open'});

    closeTl
    .to(paper,0.1,{y:10})
    .set(paper,{opacity:0})
    .to(front,0.1,{morphSVG:shut});

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

    openTl
    .to(front,0.1,{morphSVG:front})
    .set(paper,{opacity:1})
    .to(paper,0.1,{y:0});

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
  mkBtn(label);

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

  folder.each(function(){
    var tong = $(this);
    if(tong.hasClass(label)) {
      TweenMax.set(tong,{className:'-=--open'});
    }
  });
}

function mkBtn(name) {
  var newBtn = '<div class="btn _desktop '+name+' --xpand"></div>';
  bar.append(newBtn);
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

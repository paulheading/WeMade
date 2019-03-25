---
layout: none
---

Draggable.create('.window',{cursor:'pointer'});

function changeFolder() {
  var label = $(this)[0].classList[1];
  var win = $('.window');

  if($(this).hasClass('--open')) {
    $(this).removeClass('--open');
    win.each(function(){
      if($(this).hasClass(label)) {
        $(this).hide();
      }
    });
  } else {
    $(this).addClass('--open');
    win.each(function(){
      if($(this).hasClass(label)) {
        $(this).show();
      }
    });
  }
}

function closeBtn() {
  var win = $(this).parents('.window'); win.hide();
  var label = win[0].classList[1];

  $('.folder').each(function(){
    if($(this).hasClass(label)) {
      $(this).removeClass('--open');
    }
  });
}

function newMin() {
  var ting = $(this).parents('.window')[0].classList[1],
      win = $(this).parents('.window');

  TweenMax.to(win,0.3,{scale:0,ease:SteppedEase.config(4)});
  makeBtn(ting);
}

function makeBtn(name) {
  var bar = $('.wrap._bar'),
      newBtn = '<div class="btn _desktop '+name+' --min"></div>';

  bar.append(newBtn);
}

function newExpand() {
  var me = $(this),
      tang = me[0].classList[2],
      winTang = $('.window.'+tang);

  me.remove();
  TweenMax.to(winTang,0.3,{scale:1,ease:SteppedEase.config(4)});
}

$('.wrap._bar').on('click','.btn.--min',newExpand);
$('.folder').click(changeFolder);
$('.btn._window.--close').click(closeBtn);
$('.btn._window.--min').click(newMin);

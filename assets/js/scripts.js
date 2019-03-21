---
layout: none
---

TweenLite.defaultEase = Linear.easeNone;
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

  console.log(label);

  $('.folder').each(function(){
    if($(this).hasClass(label)) {
      $(this).removeClass('--open');
    }
  });
}

function minBtn() {
  var label = $(this).parents('.window')[0].classList[1];
  var popup = $(this).parents('.window');
  var newBtn = '<div class="min '+ label +' _on"></div>';
  var pos = $(this).offset();
  var newPos = $('.wrap._topbar').last().offset();
  var posLeft = newPos.left - pos.left;
  var posTop = newPos.top - pos.top;

  TweenMax.to(popup,0.3,{scale:0,x:posLeft,y:posTop,ease:SteppedEase.config(4)});
  $('.wrap._topbar').append(newBtn);
}

function changeMin() {
  var label = $(this)[0].classList[1];
  $(this).removeClass('_on');
  $('.window').each(function(){
    if($(this).hasClass(label)) {
      TweenMax.to($(this),0.3,{scale:1,x:0,y:0,ease:SteppedEase.config(4)});
    }
  });
}

$('.wrap._topbar').on('click','.min',changeMin);
$('.folder').click(changeFolder);
$('.btn._window.--close').click(closeBtn);
$('.btn._window.--min').click(minBtn);

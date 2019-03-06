---
layout: none
---

TweenLite.defaultEase = Linear.easeNone;
Draggable.create('.popup',{cursor:'pointer'});

var menuTl = new TimelineMax({paused:true}),searchTl = new TimelineMax({paused:true});

menuTl
.set('html',{className:'+=menu'})
.set('.overlay._menu',{className:'+=_open'})
.staggerTo('.lnk._menu',0.1,{opacity:1},'0.1','+=0.1')
;

searchTl
.set('html',{className:'+=search'})
.set('.overlay._search',{className:'+=_open'})
;

var changeMenu = () => {
  if($('html').hasClass('menu')) {
    menuTl.reverse();
  } else {
    menuTl.play();
  }
}

var changeSearch = () => {
  if($('html').hasClass('search')) {
    searchTl.reverse();
  } else {
    searchTl.play();
  }
}

function changeFolder() {
  var label = $(this)[0].classList[1];

  if($(this).hasClass('_open')) {
    $(this).removeClass('_open').addClass('_closed');
    $('.popup').each(function(){
      if($(this).hasClass(label)) {
        $(this).hide();
      }
    });
  } else {
    $(this).removeClass('_closed').addClass('_open');
    $('.popup').each(function(){
      if($(this).hasClass(label)) {
        $(this).show();
      }
    });
  }
}

function closeBtn() {
  var label = $(this).parents('.popup')[0].classList[1];
  var popup = $(this).parents('.popup'); $(popup).hide();

  $('.folder').each(function(){
    if($(this).hasClass(label)) {
      $(this).removeClass('_open').addClass('_closed');
    }
  });
}

function minBtn() {
  var label = $(this).parents('.popup')[0].classList[1];
  var popup = $(this).parents('.popup');
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
  $('.popup').each(function(){
    if($(this).hasClass(label)) {
      TweenMax.to($(this),0.3,{scale:1,x:0,y:0,ease:SteppedEase.config(4)});
    }
  });
}

var keyFunc = (e) => {
  console.log(e.keyCode);

  if(e.keyCode === 27) {
    if($('html').hasClass('menu')) {
      menuTl.reverse();
    }
    if($('html').hasClass('search')) {
      searchTl.reverse();
    }
  }

  if(e.keyCode === 77) {
    if($('html').hasClass('menu')) {
      menuTl.reverse();
    } else {
      menuTl.play();
    }
  }

  if(e.keyCode === 83) {
    if($('html').hasClass('search')) {
      searchTl.reverse();
    } else {
      searchTl.play();
    }
  }
}

$(document).keydown(keyFunc);

$('.wrap._topbar').on('click','.min',changeMin);
$('.exit._search').click(changeSearch);
$('.exit._menu').click(changeMenu);
$('.lnk._search').click(changeSearch);
$('.lnk._burger').click(changeMenu);
$('.folder').click(changeFolder);
$('.btn._close').click(closeBtn);
$('.btn._min').click(minBtn);

---
layout: none
---

TweenLite.defaultEase = Linear.easeNone;
Draggable.create('.popup',{cursor:'pointer'});

var overlayTl = new TimelineMax({paused:true}),
    menuTl = new TimelineMax({paused:true}),
    searchTl = new TimelineMax({paused:true}),
    animMenu = new TimelineMax({paused:true}),
    nav = ['.svg._logo','.svg._search','.svg._burger']
    quicKeys = true, menuOpen = false, searchOpen = false;

overlayTl
.set('.area._header',{position:'fixed'})
.set(nav,{className:'+=--overlay'})
;

menuTl.set('.overlay._menu',{className:'+=--open'});
searchTl.set('.overlay._search',{className:'+=--open'});
animMenu.staggerTo('.lnk._menu',0.1,{opacity:1},'0.1');

var searchFunc = (state) => {
  if(state == 'exit') {
    searchTl.reverse();
    searchOpen = false;
    overlayTl.reverse();
    quicKeys = true;
  } else if(state == 'reverse') {
    searchTl.reverse();
    searchOpen = false;
  } else if(state == 'play') {
    searchTl.play();
    searchOpen = true;
  } else if(state == 'open') {
    overlayTl.play();
    quicKeys = false;
    searchTl.play();
    searchOpen = true;
  }
}

var menuFunc = (state) => {
  if(state == 'exit') {
    menuTl.reverse();
    animMenu.reverse();
    menuOpen = false;
    overlayTl.reverse();
    quicKeys = true;
  } else if(state == 'reverse') {
    menuTl.reverse();
    menuOpen = false;
    animMenu.reverse();
  } else if(state == 'play') {
    menuTl.play();
    menuOpen = true;
    animMenu.play();
  } else if(state == 'open') {
    overlayTl.play();
    quicKeys = false;
    menuTl.play();
    menuOpen = true;
    animMenu.play();
  }
}

var changeMenu = () => {
  if(menuOpen){
    menuFunc('exit');
  } else if(searchOpen){
    searchFunc('reverse');
    menuFunc('play');
  } else {
    menuFunc('open');
  }
}

var changeSearch = () => {
  if(searchOpen){
    searchFunc('exit');
  } else if(menuOpen){
    menuFunc('reverse');
    searchFunc('play');
  } else {
    searchFunc('open');
  }
}

var keyFunc = (e) => {

  if(!quicKeys) {
    if(e.keyCode === 27) {
      if(searchOpen){
        searchFunc('exit');
      } else if (menuOpen){
        menuFunc('exit');
      }
    }
  }

  if(quicKeys) {
    if(e.keyCode === 77) {
      menuFunc('open');
    }
    if(e.keyCode === 83) {
      searchFunc('open');
    }
  }
}

function changeFolder() {
  var label = $(this)[0].classList[1];

  if($(this).hasClass('--open')) {
    $(this).removeClass('--open').addClass('--closed');
    $('.popup').each(function(){
      if($(this).hasClass(label)) {
        $(this).hide();
      }
    });
  } else {
    $(this).removeClass('--closed').addClass('--open');
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
      $(this).removeClass('--open').addClass('--closed');
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

var hasFocus = () => {
  quicKeys = false;
}

var notFocus = () => {
  quicKeys = true;
}

$(document).keydown(keyFunc);
$('input,textarea').focus(hasFocus).blur(notFocus);
$('.wrap._topbar').on('click','.min',changeMin);
$('.exit._search').click(changeSearch);
$('.exit._menu').click(changeMenu);
$('.lnk._search').click(changeSearch);
$('.lnk._burger').click(changeMenu);
$('.folder').click(changeFolder);
$('.btn._close').click(closeBtn);
$('.btn._min').click(minBtn);

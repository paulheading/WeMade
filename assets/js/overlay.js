---
layout: none
---

TweenLite.defaultEase = Linear.easeNone;

var menuTl = new TimelineMax({paused:true}),
    searchTl = new TimelineMax({paused:true}),
    menuOpen = false, searchOpen = false, hasFocus = false;

function overlayFunc(goto,type) {
  if(goto == 'open') {
    document.querySelector('body').style.overflow = 'hidden';
    document.querySelector('.overlay._'+type).style.display = 'block';
  } else if(goto == 'close') {
    document.querySelector('body').removeAttribute('style');
    document.querySelector('.overlay._'+type).removeAttribute('style');
  }
}

menuTl
.staggerTo('.lnk._menu',0.1,{opacity:1},'0.1')
;

searchTl
.to('.title._search',0.5,{width:'100%'})
.to('input.--search',0.1,{opacity:1})
;

var changeSearch = () => {
  if(searchOpen){
    searchFunc('close');
  } else if(menuOpen){
    menuFunc('close');
    searchFunc('open');
  } else {
    searchFunc('open');
  }
}

var searchFunc = (state) => {
  if(state == 'close') {
    searchTl.reverse();
    overlayFunc('close','search');
    searchOpen = false;
  } else if(state == 'open') {
    overlayFunc('open','search');
    searchOpen = true;
    searchTl.play();
  }
}

var changeMenu = () => {
  if(menuOpen){
    menuFunc('close');
  } else if(searchOpen){
    searchFunc('close');
    menuFunc('open');
  } else {
    menuFunc('open');
  }
}

var menuFunc = (state) => {
  if(state == 'close') {
    menuTl.reverse();
    overlayFunc('close','menu');
    menuOpen = false;
  } else if(state == 'open') {
    overlayFunc('open','menu');
    menuOpen = true;
    menuTl.play();
  }
}

var keyFunc = (e) => {

  if(e.keyCode === 83) {
    if(!hasFocus) {
      changeSearch();
    }
  }

  if(e.keyCode === 77) {
    if(!hasFocus) {
      changeMenu();
    }
  }

  if(e.keyCode === 27) {
    if(!hasFocus) {
      if(searchOpen) {
        searchFunc('close');
      } else if(menuOpen) {
        menuFunc('close');
      }
    }
  }
}

var yesFocus = () => {
  hasFocus = true;
}

var noFocus = () => {
  hasFocus = false;
}

$(document).keydown(keyFunc);
$('input,textarea').focus(yesFocus).blur(noFocus);
$('.lnk._search').click(changeSearch);
$('.exit._search').click(changeSearch);
$('.lnk._burger').click(changeMenu);
$('.exit._menu').click(changeMenu);

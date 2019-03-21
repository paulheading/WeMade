---
layout: none
---

TweenLite.defaultEase = Linear.easeNone;

var overlayTl = new TimelineMax({paused:true}),
    menuTl = new TimelineMax({paused:true}),
    searchTl = new TimelineMax({paused:true}),
    animMenu = new TimelineMax({paused:true}),
    overlayOpen = false, menuOpen = false, searchOpen = false, hasFocus = false;

overlayTl.set('body',{overflow:'hidden'});
menuTl.set('.overlay._menu',{className:'+=--open'});
searchTl.set('.overlay._search',{className:'+=--open'});
animMenu.staggerTo('.lnk._menu',0.1,{opacity:1},'0.1');

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

var searchFunc = (state) => {
  if(state == 'exit') {
    searchTl.reverse();
    searchOpen = false;
    overlayTl.reverse();
    overlayOpen = false;
  } else if(state == 'reverse') {
    searchTl.reverse();
    searchOpen = false;
  } else if(state == 'play') {
    searchTl.play();
    searchOpen = true;
  } else if(state == 'open') {
    overlayTl.play();
    overlayOpen = true;
    searchTl.play();
    searchOpen = true;
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

var menuFunc = (state) => {
  if(state == 'exit') {
    menuTl.reverse();
    animMenu.reverse();
    menuOpen = false;
    overlayTl.reverse();
    overlayOpen = false;
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
    overlayOpen = true;
    menuTl.play();
    menuOpen = true;
    animMenu.play();
  }
}

var keyFunc = (e) => {

  if(e.keyCode === 83) {
    if(!hasFocus) {
      if(!searchOpen) {
        if(menuOpen) {
          menuFunc('exit');
          searchFunc('open');
        } else {
          searchFunc('open');
        }
      } else {
        searchFunc('exit');
      }
    }
  }

  if(e.keyCode === 77) {
    if(!hasFocus) {
      if(!menuOpen) {
        if(searchOpen) {
          searchFunc('exit');
          menuFunc('open');
        } else {
          menuFunc('open');
        }
      } else {
        menuFunc('exit');
      }
    }
  }

  if(e.keyCode === 27) {
    if(!hasFocus) {
      if(searchOpen) {
        searchFunc('exit');
      } else if(menuOpen) {
        menuFunc('exit');
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

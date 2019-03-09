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
    overlayOpen = false, menuOpen = false, searchOpen = false;

overlayTl
.set('.area._header',{position:'fixed'})
.set(nav,{className:'+=--dark'})
;

menuTl.set('.overlay._menu',{className:'+=_open'});
searchTl.set('.overlay._search',{className:'+=_open'});
animMenu.staggerTo('.lnk._menu',0.1,{opacity:1},'0.1');

var changeMenu = () => {
  if(menuOpen){
    menuTl.reverse();
    animMenu.reverse();
    menuOpen = false;
    overlayTl.reverse();
    overlayOpen = false;
  } else if(searchOpen){
    searchTl.reverse();
    searchOpen = false;
    menuOpen = true;
    menuTl.play();
    animMenu.play();
  } else {
    overlayTl.play();
    overlayOpen = true;
    menuOpen = true;
    menuTl.play();
    animMenu.play();
  }
}

var changeSearch = () => {
  if(searchOpen){
    searchTl.reverse();
    searchOpen = false;
    overlayTl.reverse();
    overlayOpen = false;
  } else if(menuOpen){
    menuTl.reverse();
    animMenu.reverse();
    menuOpen = false;
    searchOpen = true;
    searchTl.play();
  } else {
    overlayTl.play();
    overlayOpen = true;
    searchOpen = true;
    searchTl.play();
  }
}

var keyFunc = (e) => {

  if(overlayOpen) {
    if(e.keyCode === 27) {
      if(searchOpen){
        searchTl.reverse();
        searchOpen = false;
        overlayTl.reverse();
        overlayOpen = false;
      } else if (menuOpen){
        menuTl.reverse();
        animMenu.reverse();
        menuOpen = false;
        overlayTl.reverse();
        overlayOpen = false;
      }
    }
  }

  if(!overlayOpen) {
    if(e.keyCode === 77) {
      overlayTl.play();
      overlayOpen = true;
      menuOpen = true;
      menuTl.play();
      animMenu.play();
    }

    if(e.keyCode === 83) {
      overlayTl.play();
      overlayOpen = true;
      searchOpen = true;
      searchTl.play();
    }
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

$(document).keydown(keyFunc);

$('.wrap._topbar').on('click','.min',changeMin);
$('.exit._search').click(changeSearch);
$('.exit._menu').click(changeMenu);
$('.lnk._search').click(changeSearch);
$('.lnk._burger').click(changeMenu);
$('.folder').click(changeFolder);
$('.btn._close').click(closeBtn);
$('.btn._min').click(minBtn);

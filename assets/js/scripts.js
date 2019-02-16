---
---

TweenLite.defaultEase = Linear.easeNone;
Draggable.create('.popup',{cursor:'pointer'});

var closeOverlayTl = new TimelineMax(), openOverlayTl = new TimelineMax();

function setupScripts() {
  // TweenMax.set('.lnk._menu',{opacity:0});
}

function closeOverlayFunc() {
  closeOverlayTl
  .set('html',{className:'-= _menu'})
  .set('.overlay._menu',{className:'-= _open'})
  .set('.lnk._menu',{opacity:0})
  ;
  return closeOverlayTl
}

function openOverlayFunc() {
  openOverlayTl
  .set('html',{className:'+= _menu'})
  .set('.overlay._menu',{className:'+= _open'})
  .staggerTo('.lnk._menu',0.1,{opacity:1},'0.1','+=0.1')
  ;
  return openOverlayTl
}

function changeOverlay() {
  if($('html').hasClass('_menu')) {
    closeOverlayFunc();
  } else {
    openOverlayFunc();
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

function escOverlay(e){
  if(e.keyCode === 27) {
    changeOverlay();
  }
}

$(document).ready(setupScripts);
$(document).keydown(escOverlay);
$('.wrap._topbar').on('click','.min',changeMin);
$('.exit').click(changeOverlay);
$('.menu-lnk').click(changeOverlay);
$('.folder').click(changeFolder);
$('.btn._close').click(closeBtn);
$('.btn._min').click(minBtn);

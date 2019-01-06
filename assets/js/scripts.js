
TweenLite.defaultEase = Linear.easeNone;
Draggable.create('.popup',{cursor:'pointer'});

function setupScripts() {
  TweenMax.set('.lnk._menu',{opacity:0});
}

function changeMenu() {

  var menuOpenTl = new TimelineMax();
  var menuCloseTl = new TimelineMax();

  if($('html').hasClass('_menu')) {
    menuCloseTl
    .set('html',{className:'-= _menu'})
    .set('.overlay._menu',{className:'-= _open'})
    .set('.lnk._menu',{opacity:0})
    ;
  } else {
    menuOpenTl
    .set('html',{className:'+= _menu'})
    .set('.overlay._menu',{className:'+= _open'})
    .staggerTo('.lnk._menu',0.1,{opacity:1},'0.1','+=0.1')
    ;
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

  TweenMax.to(popup,0.3,{scale:0,ease:SteppedEase.config(4)});

  $('.min').each(function(){
    if($(this).hasClass(label)) {
      $(this).addClass('_on');
    }
  });
}

function changeMin() {
  var label = $(this)[0].classList[1];

  $(this).removeClass('_on');
  $('.popup').each(function(){
    if($(this).hasClass(label)) {
      TweenMax.to($(this),0.3,{scale:1,ease:SteppedEase.config(4)});
    }
  });
}

$(document).ready(setupScripts);
$('.menu-lnk').click(changeMenu);
$('.folder').click(changeFolder);
$('.min').click(changeMin);
$('.btn._close').click(closeBtn);
$('.btn._min').click(minBtn);

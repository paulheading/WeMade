---
layout: none
---

TweenLite.defaultEase = Linear.easeNone;

var menuTl = new TimelineMax({paused:true}),
    searchTl = new TimelineMax({paused:true}),
    menuOpen = false, searchOpen = false, hasFocus = false, counter = 1, last;

function overlayFunc(goto,type) {
  if(goto == 'open') {
    document.querySelector('body').style.overflow = 'hidden';
    document.querySelector('.overlay._'+type).style.display = 'grid';
  } else if(goto == 'close') {
    document.querySelector('body').removeAttribute('style');
    document.querySelector('.overlay._'+type).removeAttribute('style');
  }
}

menuTl
.from('.lnk._menu',0.2,{width:0})
.staggerTo('.title._menu',0.1,{opacity:1},'0.1')
;

searchTl
.from('.title._search',0.4,{width:0})
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
    $('.input.--search').val('');
    $('.area._results').empty();
    searchOpen = false;
  } else if(state == 'open') {
    overlayFunc('open','search');
    searchOpen = true;
    searchTl.play();
    $('.input.--search').focus();
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

  if(searchOpen) {

    if(e.keyCode === 27) {
      searchFunc('close');
    }
    
    if(hasFocus) {

      if(e.keyCode){
        TweenMax.set('.row._results:nth-of-type('+counter+')',{className:'+=test'});
      }

      if(e.keyCode == 8) {
        TweenMax.set('.row._results',{clearProps:'all'});
        counter = 1;
      }

      if(e.keyCode === 13) {
        $('.row._results').each(function(){
          var ting = $(this);
          if(ting.hasClass('test')) {
            var url = ting[0].children[0].href;
            window.location.href = url;
          }
        });
      }

      if(e.keyCode === 40) {
        counter +=1;
        last = counter -1;

        var downTl = new TimelineMax();
        downTl
        .set('.row._results:nth-of-type('+counter+')',{className:'+=test'})
        .set('.row._results:nth-of-type('+last+')',{className:'-=test'})
        ;
      }

      if(e.keyCode === 38) {
        counter -=1;
        last = counter +1;

        var upTl = new TimelineMax();
        upTl
        .set('.row._results:nth-of-type('+counter+')',{className:'+=test'})
        .set('.row._results:nth-of-type('+last+')',{className:'-=test'})
        ;
      }
    }
  }

  if(menuOpen){
    if(e.keyCode === 27) {
      menuFunc('close');
    }
  }

  if(!hasFocus) {
    if(e.keyCode === 83) {
      changeSearch();
    }
    if(e.keyCode === 77) {
      changeMenu();
    }
  }
}

var yesFocus = () => {
  hasFocus = true;
}

var noFocus = () => {
  hasFocus = false;
}

$(document).keyup(keyFunc);
$('input,textarea').focus(yesFocus).blur(noFocus);
$('.lnk._search').click(changeSearch);
$('.exit._search').click(changeSearch);
$('.lnk._burger').click(changeMenu);
$('.exit._menu').click(changeMenu);

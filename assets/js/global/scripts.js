
TweenLite.defaultEase = Linear.easeNone;
Draggable.create('.popup',{bounds:'.area._desktop',cursor:'pointer'});

// $('.menu-lnk').click(function(){
//   var menuOpenTl = new TimelineMax();
//   var menuCloseTl = new TimelineMax();
//
//   if($('html').hasClass('_menu')) {
//     menuCloseTl
//     .set('html',{className:'-= _menu'})
//     .set('.lnk._menu',{clearProps:'all'})
//     ;
//   } else {
//     menuOpenTl
//     .set('html',{className:'+= _menu'})
//     .staggerTo('.lnk._menu',0.1,{opacity:1},'0.1','+=0.1')
//     ;
//   }
// });

function changeMenu() {

  var menuOpenTl = new TimelineMax();
  var menuCloseTl = new TimelineMax();

  if($('html').hasClass('_menu')) {
    menuCloseTl
    .set('html',{className:'-= _menu'})
    .set('.lnk._menu',{clearProps:'all'})
    ;
  } else {
    menuOpenTl
    .set('html',{className:'+= _menu'})
    .staggerTo('.lnk._menu',0.1,{opacity:1},'0.1','+=0.1')
    ;
  }
}

function changeVisual() {
  color = $(this)[0].classList[1];
  $('._demo').removeClass().addClass('visual _demo ' + color);
}

function colorSwitch() {

  var colorSwitchTl = new TimelineMax({repeat:-1});

  colorSwitchTl
  .set('._demo',{className:'visual _demo _red'},'+=1')
  .set('._demo',{className:'visual _demo _green'},'+=1')
  .set('._demo',{className:'visual _demo _blue'},'+=1')
  .set('._demo',{className:'visual _demo _black'},'+=1')
  .set('._demo',{className:'visual _demo _gold'},'+=1')
  ;

  return colorSwitch;
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

$(document)
// .ready(colorSwitch)
.ready(siteFunc)
// .on('click','.color',changeVisual)
.on('click','.menu-lnk',changeMenu)
.on('click','.folder',changeFolder)
.on('click','.min',changeMin)
.on('click','.btn._close',closeBtn)
.on('click','.btn._min',minBtn)
;

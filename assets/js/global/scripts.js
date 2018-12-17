
TweenLite.defaultEase = Linear.easeNone;

var controller = new ScrollMagic.Controller();

function changeVisual() {
  color = $(this)[0].classList[1]; console.log(color);
  $('._demo').removeClass().addClass('visual _demo ' + color);
}

function changeMenu() {
  if($(this).hasClass('_open')) {
    $('._menu').css('display','none');
    $('body').removeClass('_menu');
    $(this).removeClass('_open');
  } else {
    $('._menu').css('display','grid');
    $('body').addClass('_menu');
    $(this).addClass('_open');
  }
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

$(document)
// .ready(colorSwitch)
.ready(siteFunc)
.on('click','.color',changeVisual)
.on('click','.menu',changeMenu)
;

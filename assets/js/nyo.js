
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

function changeVisual() {
  color = $(this)[0].classList[1];
  $('._demo').removeClass().addClass('visual _demo ' + color);
}

// $(document).ready(colorSwitch);
$('.color').click(changeVisual);

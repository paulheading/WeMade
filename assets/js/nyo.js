
function changeVisual() {
  color = $(this)[0].classList[1];
  $('._demo').removeClass().addClass('visual _demo ' + color);
}

// $(document).ready(colorSwitch);
$('.color').click(changeVisual);

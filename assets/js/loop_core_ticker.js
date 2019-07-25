
var loop_core_ticker = (name,url,msg) => {
  var tingo = '',
      tongo = $('.wrap._ticker'),
      tango = $('.copy._ticker');

  TweenMax.set(tongo,{x:0});

  $(msg).each(function(i){
    var key = Object.keys(msg[i])[0],
        val = Object.values(msg[i])[0];

    if(key == 'bold!') {
      tingo += '<div class="word _bold-u">'+val+'</div>';
    } else if(key == 'bold') {
      tingo += '<div class="word _bold">'+val+'</div>';
    } else if(key == 'italic!') {
      tingo += '<div class="word  _italic-u">'+val+'</div>';
    } else if(key == 'italic') {
      tingo += '<div class="word _italic">'+val+'</div>';
    } else if(key == 'book!') {
      tingo += '<div class="word _book-u">'+val+'</div>';
    } else {
      tingo += '<div class="word _book">'+val+'</div>';
    }
  });

  tango.html(tingo);
  var copyWidth = tango[0].clientWidth+5;
  TweenMax.to(tongo,7,{x:-copyWidth,ease:Power0.easeNone,repeat:-1});

  if(name != 'wemade') {
    $('.lnk._see').attr('href',`/${name}`).html(`See ${name}`);
  } else {
    $('.lnk._see').attr('href',`/work`).html(`See Studio`);
  }
}

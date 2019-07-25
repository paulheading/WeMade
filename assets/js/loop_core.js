
var loop_core_content = (name,url,msg,city) => {
  var img = 3,
      content = '';

  for(i = 1; i <= img; i++) {
    content += `
    <img src="/assets/img/${name}.png" class="_${name} --n${i}" alt="">
    <a class="lnk _see --n${i}"></a>
    `;
  }

  $('.target').html(content);
  $('.title._city').html(city);
}

function loop_core(home) {

  var feed = feed_data_core;

  $(feed).each(function(i){
    var ting = feed[i],
        name = ting.name.toLowerCase(),
        url = ting.url,
        msg = ting.message,
        city = ting.city;

    console.log(ting);

    if(home){
      coreTl
      .set('body',{className:'+=_'+name})
      .call(loop_core_logo,[],'start')
      .call(loop_core_content,[name,url,msg],'start')
      .call(loop_core_ticker,[name,url,msg],'start')
      .call(loop_core_wifi,[],'start')
      .call(loop_trello,['chloe, paul',3],'start')
      .add('stop','+=5')
      .set('body',{className:'-=_'+name},'stop')
      ;
    } else {
      coreTl
      .set('body',{className:'+=_'+name})
      .call(loop_core_logo,[],'start')
      .call(loop_core_ticker,[name,url,msg],'start')
      .call(loop_core_wifi,[],'start')
      .call(loop_trello,['chloe, paul',3],'start')
      .add('stop','+=5')
      .set('body',{className:'-=_'+name},'stop')
      ;
    }

  });
}

var set_loop = () => {
  if(body.hasClass('--home')) {
    loop_core(true);
  } else {
    loop_core(false);
  }
}

set_loop();

$(window).on('resize',function(e){
  resizeTimer = setTimeout(set_loop(nameG),300);
  clearTimeout(resizeTimer);
});

---
layout: none
---

var $body  = $('body'),
    $words = $('.word'),
    data = {{ site.data.homepage | jsonify }},
    heroTl = new TimelineMax({delay:1,repeat:-1}),
    tickerTl = new TimelineMax({repeat:-1});

function tickerFunc() {

  $('.row._ticker').each(function(i){
    var count = i++, countPlus = count +1, tickerNo = '.row._ticker:nth-child('+ countPlus +')';
    tickerTl
    .add(TweenLite.to(tickerNo,0.1,{className:'+=_active',ease:SteppedEase.config(1)}))
    .add(TweenLite.set(tickerNo,{className:'-=_active',delay:'1'}))
    ;
  });

  return tickerTl;
}

function heroFunc() {

  data.sort(function(){
    return 0.5 - Math.random()
  });

  $(data).each(function(i){

    var $heroArea = $('.area._hero'),
        name = data[i].hero.name.toLowerCase(),
        url = data[i].hero.url,
        msg = data[i].hero.message;

    heroTl
    .set($body,{className:'+=_'+name})
    .set($heroArea,{attr:{href:url}})
    ;

    $(msg).each(function(i){

      var count = i++,
          countPlus = count +1,
          wordNo = '.word:nth-child('+ countPlus +')',
          key = Object.keys(msg[count])[0],
          val = Object.values(msg[count])[0];

          if(key == 'bold!') {
            heroTl.add(TweenLite.set(wordNo,{text:{value:val},
            background: 'url(/assets/img/flash_'+name+'.svg) repeat-x bottom',
            padding: '0 6px',
            fontWeight: 600,
            delay: '0.15'}));
          } else if(key == 'bold') {
            heroTl.add(TweenLite.set(wordNo,{text:{value:val},
            fontWeight: 600,
            delay: '0.15'}));
          } else if(key == 'italic!') {
            heroTl.add(TweenLite.set(wordNo,{text:{value:val},
            background: 'url(/assets/img/flash_'+name+'.svg) repeat-x bottom',
            fontStyle: 'italic',
            padding: '0 6px',
            delay: '0.15'}));
          } else if(key == 'italic') {
            heroTl.add(TweenLite.set(wordNo,{text:{value:val},
            fontStyle:'italic',
            delay:'0.15'}));
          } else if(key == 'book!') {
            heroTl.add(TweenLite.set(wordNo,{text:{value:val},
            background: 'url(/assets/img/flash_'+name+'.svg) repeat-x bottom',
            padding: '0 6px',
            delay:'0.15'}));
          } else {
            heroTl.add(TweenLite.set(wordNo,{text:{value:val},delay:'0.15'}));
          }
    });

    heroTl
    .to($words,0.4,{text:'',delay:3})
    .set($words,{clearProps:'all'})
    .set($body,{className:'-=_'+name})
    ;

    return heroTl;

  });
}

$(document)
.ready(tickerFunc)
.ready(heroFunc)
;

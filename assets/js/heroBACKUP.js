---
layout: none
---

var words = $('.word'),
    data = {{ site.data.homepage | jsonify }},
    zones = ['body','.area._hero','.area._ticker','#logo','#search','#burger'],
    heroArea = $('.area._hero');

var random = () => {
  return 0.5 - Math.random();
}

function heroAnim() {
  var heroTl = new TimelineMax({repeat:-1});

  data.sort(random);
  $(data).each(function(i){
    var name = data[i].hero.name.toLowerCase(),
        url = data[i].hero.url,
        msg = data[i].hero.message;

    heroTl
    .set(zones,{className:'+=--'+name})
    .set(heroArea,{attr:{href:url}})
    .call(getAjax,[name])
    ;

    $(msg).each(function(i){
      var count = i++,
          countPlus = count +1,
          wordNo = '.word:nth-child('+ countPlus +')',
          key = Object.keys(msg[count])[0],
          val = Object.values(msg[count])[0];

      if(key == 'bold!') {
        heroTl.add(TweenMax.set(wordNo,{text:{value:val},
        textDecoration: 'underline',
        fontWeight: 600,
        delay: '0.1'}));
      } else if(key == 'bold') {
        heroTl.add(TweenMax.set(wordNo,{text:{value:val},
        fontWeight: 600,
        delay: '0.1'}));
      } else if(key == 'italic!') {
        heroTl.add(TweenMax.set(wordNo,{text:{value:val},
        textDecoration: 'underline',
        fontStyle: 'italic',
        delay: '0.1'}));
      } else if(key == 'italic') {
        heroTl.add(TweenMax.set(wordNo,{text:{value:val},
        fontStyle:'italic',
        delay:'0.1'}));
      } else if(key == 'book!') {
        heroTl.add(TweenMax.set(wordNo,{text:{value:val},
        textDecoration: 'underline',
        delay:'0.1'}));
      } else {
        heroTl.add(TweenLite.set(wordNo,{text:{value:val},delay:'0.1'}));
      }
    });

    heroTl
    .add('start')
    .call(logoAnim,[],'start')
    .call(trelloAnim,[],'start')
    .set(words,{text:''},'+=5')
    .set(words,{clearProps:'all'})
    .set(zones,{className:'-=--'+name})
    ;
  });
}

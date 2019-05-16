---
layout: none
---

var words = $('.word'),
    data = {{ site.data.homepage | jsonify }},
    zones = ['body','.area._hero','.area._ticker','#logo','#search','#burger'];

var random = () => {
  return 0.3 - Math.random();
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
    .call(getAjax,[name,msg,url])
    ;

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

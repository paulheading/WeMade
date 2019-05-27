---
layout: none
---

var data = {{ site.data.homepage | jsonify }},
    zones = ['body','.area._hero'];

var random = () => {
  return 0.3 - Math.random();
}

if(body.hasClass('_hero')){
  var homeTl = new TimelineMax({repeat:-1});
  data.sort(random);

  $(data).each(function(i){
    var name = data[i].hero.name.toLowerCase(),
        url = data[i].hero.url,
        msg = data[i].hero.message;

    homeTl
    .set(zones,{className:'+=_'+name})
    .call(animHero,[name,msg,url],'now')
    .call(animLogo,[],'now')
    .call(animJobs,[],'now')
    .set('.word',{clearProps:'all'},'+=5')
    .set(zones,{className:'-=_'+name})
    ;
  });
} else {
  // var notHomeTl = new TimelineMax({repeat:-1});
  // notHomeTl
  // .call(animLogo,[],'now')
  // .call(animJobs,[],'now')
  // ;
}

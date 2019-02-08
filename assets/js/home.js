---
---

var $body  = $('body'),
    $words = $('.word'),
    data = {{ site.data.homepage | jsonify }},
    heroTl = new TimelineMax({delay:1,repeat:-1}),
    rowSwitchTl = new TimelineMax({repeat:-1,repeatDelay:1});

function rowSwitch() {

  rowSwitchTl
  .set('.strike',{y:24})
  .to('.strike',0.1,{y:67,ease:SteppedEase.config(1)},'+=1')
  .to('.strike',0.1,{y:110,ease:SteppedEase.config(1)},'+=1')
  .to('.strike',0.1,{y:153,ease:SteppedEase.config(1)},'+=1')
  ;

  return rowSwitch;
}

function heroSetup() {

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

      if (key == 'bold') {
        heroTl.add(TweenLite.set(wordNo,{text:{value:val,delimiter:" "},fontWeight:'bold',delay:'0.15'}));
      } else if (key == 'italic') {
        heroTl.add(TweenLite.set(wordNo,{text:{value:val,delimiter:" "},fontStyle:'italic',delay:'0.15'}));
      } else {
        heroTl.add(TweenLite.set(wordNo,{text:{value:val,delimiter:" "},delay:'0.15'}));
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
.ready(rowSwitch)
.ready(heroSetup)
;

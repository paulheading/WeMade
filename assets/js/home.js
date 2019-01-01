
var word1 = '.word:nth-child(1)', word2 = '.word:nth-child(2)', word3 = '.word:nth-child(3)',
    word4 = '.word:nth-child(4)', word5 = '.word:nth-child(5)', word6 = '.word:nth-child(6)',
    word7 = '.word:nth-child(7)', word8 = '.word:nth-child(8)', word9 = '.word:nth-child(9)',
    word10 = '.word:nth-child(10)';

var words = [word1,word2,word3,word4,word5,word6,word7,word8,word9,word10];

function rowSwitch() {

  var rowSwitchTl = new TimelineMax({repeat:-1,repeatDelay:1});

  rowSwitchTl
  .set('.strike',{y:24})
  .to('.strike',0.1,{y:67,ease:SteppedEase.config(1)},'+=1')
  .to('.strike',0.1,{y:110,ease:SteppedEase.config(1)},'+=1')
  .to('.strike',0.1,{y:153,ease:SteppedEase.config(1)},'+=1')
  ;

  return rowSwitch;
}

function paul() {

  var paulTl = new TimelineMax();

  paulTl
  .set(word1,{text:'Paul',fontWeight:'bold'},'+=1.0')
  .set(word2,{text:'makes'},'+=0.1')
  .set(word3,{text:'shapes',fontStyle:'italic'},'+=0.1')
  .set(word4,{text:'and'},'+=0.1')
  .set(word5,{text:'enjoys'},'+=0.1')
  .set(word7,{text:'tonkatsu!',fontWeight:'bold'},'+=0.1')
  .to(words,0.4,{text:''},'+=3.0')
  .set(words,{clearProps:'all'})
  ;

  return paulTl;
}

function chloe() {

  var chloeTl = new TimelineMax();

  chloeTl
  .set(word1,{text:'Chloe',fontWeight:'bold'},'+=1.0')
  .set(word2,{text:'makes'},'+=0.1')
  .set(word3,{text:'waves',fontStyle:'italic'},'+=0.1')
  .set(word6,{text:'and'},'+=0.1')
  .set(word7,{text:'enjoys'},'+=0.1')
  .set(word8,{text:'clay',fontWeight:'bold'},'+=0.1')
  .set(word9,{text:'pots!',fontWeight:'bold'},'+=0.1')
  .to(words,0.4,{text:''},'+=3.0')
  .set(words,{clearProps:'all'})
  ;

  return chloeTl;
}

function play() {

  var playTl = new TimelineMax();

  playTl
  .set(word1,{text:'WeMade',fontWeight:'bold'},'+=1.0')
  .set(word2,{text:'an'},'+=0.1')
  .set(word3,{text:'8-bit'},'+=0.1')
  .set(word4,{text:'world'},'+=0.1')
  .set(word5,{text:'for'},'+=0.1')
  .set(word7,{text:'PLAY!',fontWeight:'bold'},'+=0.1')
  .to(words,0.4,{text:''},'+=3.0')
  .set(words,{clearProps:'all'})
  ;

  return playTl;
}

function nyo() {

  var nyoTl = new TimelineMax();

  nyoTl
  .set(word1,{text:'WeMade',fontWeight:'bold'},'+=1.0')
  .set(word2,{text:'a'},'+=0.1')
  .set(word3,{text:'living'},'+=0.1')
  .set(word4,{text:'identity'},'+=0.1')
  .set(word5,{text:'for'},'+=0.1')
  .set(word6,{text:'the'},'+=0.1')
  .set(word7,{text:'NYO',fontWeight:'bold'},'+=0.1')
  .to(words,0.4,{text:''},'+=3.0')
  .set(words,{clearProps:'all'})
  ;

  return nyoTl;
}

function heroSetup() {

  var heroSetupTl = new TimelineMax({repeat:-1});

  heroSetupTl
  .set('body',{className:'+= _paul'})
  .add(paul())
  .set('body',{className:'-= _paul'})
  .set('body',{className:'+= _chloe'})
  .add(chloe())
  .set('body',{className:'-= _chloe'})
  .set('body',{className:'+= _play'})
  .add(play())
  .set('body',{className:'-= _play'})
  .set('body',{className:'+= _nyo'})
  .add(nyo())
  .set('body',{className:'-= _nyo'})
  ;

}

$(document)
.ready(rowSwitch)
.ready(heroSetup)
;

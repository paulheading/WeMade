
var word1 = '.word:nth-child(1)', word2 = '.word:nth-child(2)', word3 = '.word:nth-child(3)',
    word4 = '.word:nth-child(4)', word5 = '.word:nth-child(5)', word6 = '.word:nth-child(6)',
    word7 = '.word:nth-child(7)', word8 = '.word:nth-child(8)', word9 = '.word:nth-child(9)',
    word10 = '.word:nth-child(10)';

var word = [word1,word2,word3,word4,word5,word6,word7,word8,word9,word10];

function rowSwitch() {

  var rowSwitchTl = new TimelineMax({repeat:-1});

  rowSwitchTl
  .staggerFromTo('.row',0.1,{backgroundColor:'transparent'},{backgroundColor:'rgba(0,0,0,0.3)'},'1','0')
  .staggerTo('.row',0.1,{backgroundColor:'transparent'},'1','1')
  ;

  return rowSwitch;
}

function play() {

  var playTl = new TimelineMax();

  playTl
  .set('#one',{opacity:0})
  // 0.4 seconds
  .set('#one',{opacity:1},'0.4')
  .to('#one',0.6,{morphSVG:'#two',ease:SteppedEase.config(6)},'0.4')
  // 1.0 seconds
  .set(word1,{text:'WeMade',fontWeight:'bold'},'1.0')
  // 1.2 seconds
  .set('#one',{morphSVG:'#three'},'1.2')
  .set(word2,{text:'an'},'1.2')
  // 1.4 seconds
  .set('#one',{morphSVG:'#four'},'1.4')
  .set(word3,{text:'8-bit'},'1.4')
  // 1.6 seconds
  .set('#one',{morphSVG:'#five'},'1.6')
  .set(word4,{text:'world'},'1.6')
  // 2.2 seconds
  .set('#one',{morphSVG:'#six'},'2.2')
  .set(word5,{text:'for'},'2.2')
  // 2.4 seconds
  .set('#one',{morphSVG:'#seven'},'2.4')
  .set(word6,{text:'PLAY!',fontWeight:'bold'},'2.4')
  // 4.4 seconds
  .to('#one',0.6,{morphSVG:'#one',ease:SteppedEase.config(6)},'4.4')
  .set(word,{text:'',clearProps:'all'},'4.4')
  // 5.0 seconds
  .set('#one',{opacity:0})
  ;

  return playTl;
}

function nyo() {

  var nyoTl = new TimelineMax();

  nyoTl
  .set('#one',{opacity:0})
  // 0.4 seconds
  .set('#one',{opacity:1},'0.4')
  .to('#one',0.6,{morphSVG:'#two',ease:SteppedEase.config(6)},'0.4')
  // 1.0 seconds
  .set(word1,{text:'WeMade',fontWeight:'bold'},'1.0')
  // 1.2 seconds
  .set('#one',{morphSVG:'#three'},'1.2')
  .set(word2,{text:'a'},'1.2')
  // 1.4 seconds
  .set('#one',{morphSVG:'#four'},'1.4')
  .set(word3,{text:'living'},'1.4')
  // 1.6 seconds
  .set('#one',{morphSVG:'#five'},'1.6')
  .set(word4,{text:'identity'},'1.6')
  // 2.2 seconds
  .set('#one',{morphSVG:'#six'},'2.2')
  .set(word5,{text:'for'},'2.2')
  // 2.4 seconds
  .set('#one',{morphSVG:'#seven'},'2.4')
  .set(word6,{text:'NYO',fontWeight:'bold'},'2.4')
  // 4.4 seconds
  .to('#one',0.6,{morphSVG:'#one',ease:SteppedEase.config(6)},'4.4')
  .set(word,{text:'',clearProps:'all'},'4.4')
  // 5.0 seconds
  .set('#one',{opacity:0})
  ;

  return nyoTl;
}

function heroSetup() {

  var heroSetupTl = new TimelineMax({repeat:-1});

  heroSetupTl
  .set('body',{className:'layout-default _play'})
  .add(play())
  .set('body',{className:'layout-default _nyo'})
  .add(nyo())
  ;

}

$(document)
// .ready(rowSwitch)
.ready(heroSetup)
;

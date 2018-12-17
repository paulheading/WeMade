
var type1 = '.type:nth-child(1)', type2 = '.type:nth-child(2)', type3 = '.type:nth-child(3)', type4 = '.type:nth-child(4)', type5 = '.type:nth-child(5)', type6 = '.type:nth-child(6)', type7 = '.type:nth-child(7)', type8 = '.type:nth-child(8)', type9 = '.type:nth-child(9)', type10 = '.type:nth-child(10)';

function rowSwitch() {

  var rowSwitchTl = new TimelineMax({repeat:-1});

  rowSwitchTl
  .staggerFromTo('.row',0.1,{backgroundColor:'transparent'},{backgroundColor:'#eee'},'1','0')
  .staggerTo('.row',0.1,{backgroundColor:'transparent'},'1','1')
  ;

  return rowSwitch;
}

function heroSetup() {

  var heroSetupTl = new TimelineMax();

  heroSetupTl
  .to('#in',1,{morphSVG:'#out',repeat:-1,yoyo:true},'start')
  ;

  return heroSetup;
}

function nyoType() {

  var nyoTypeTl = new TimelineMax();

  nyoTypeTl
  .set('body',{className:'layout-default _nyo'})
  .to(type1,1.0,{text:'WeMade'})
  .to(type2,1.0,{text:'a living identity'})
  .to(type3,0.5,{text:'for the'})
  .to(type4,0.5,{text:'NYO'})
  .to('.type',1.0,{text:'',onComplete:playType},'+=2')
  ;

  nyoTypeTl.play(); return nyoType;
}

function playType() {

  var playTypeTl = new TimelineMax({paused:true});

  playTypeTl
  .set('body',{className:'layout-default _play'})
  .to(type1,1.0,{text:'WeMade'})
  .to(type2,1.0,{text:'a game'})
  .to(type3,0.5,{text:'for'})
  .to(type4,0.5,{text:'PLAY!'})
  .to('.type',1.0,{text:'',onComplete:nyoType},'+=2')
  ;

  playTypeTl.play(); return playType;
}

$(document)
.ready(rowSwitch)
// .ready(heroSetup)
// .ready(nyoType)
;

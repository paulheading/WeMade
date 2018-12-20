
var write1 = '.write:nth-child(1)', write2 = '.write:nth-child(2)', write3 = '.write:nth-child(3)',
    write4 = '.write:nth-child(4)', write5 = '.write:nth-child(5)', write6 = '.write:nth-child(6)',
    write7 = '.write:nth-child(7)', write8 = '.write:nth-child(8)', write9 = '.write:nth-child(9)',
    write10 = '.write:nth-child(10)';

var write = [write1,write2,write3,write4,write5,write6,write7,write8,write9,write10];

function rowSwitch() {

  var rowSwitchTl = new TimelineMax({repeat:-1});

  rowSwitchTl
  .staggerFromTo('.row',0.1,{backgroundColor:'transparent'},{backgroundColor:'#eee'},'1','0')
  .staggerTo('.row',0.1,{backgroundColor:'transparent'},'1','1')
  ;

  return rowSwitch;
}

// function nyoType() {
//
//   var nyoTypeTl = new TimelineMax();
//
//   nyoTypeTl
//   .set('body',{className:'layout-default _nyo'})
//   .to(type1,1.0,{text:'WeMade'})
//   .to(type2,1.0,{text:'a living identity'})
//   .to(type3,0.5,{text:'for the'})
//   .to(type4,0.5,{text:'NYO'})
//   .to('.type',1.0,{text:'',onComplete:playType},'+=2')
//   ;
//
//   nyoTypeTl.play(); return nyoType;
// }

// function playType() {
//
//   var playTypeTl = new TimelineMax({paused:true});
//
//   playTypeTl
//   .set('body',{className:'layout-default _play'})
//   .to(type1,1.0,{text:'WeMade'})
//   .to(type2,1.0,{text:'a game'})
//   .to(type3,0.5,{text:'for'})
//   .to(type4,0.5,{text:'PLAY!'})
//   .to('.type',1.0,{text:'',onComplete:nyoType},'+=2')
//   ;
//
//   playTypeTl.play(); return playType;
// }

function heroBlob() {

  var heroBlobTl = new TimelineMax();

  heroBlobTl
  .set('#one',{opacity:0})
  .set('#one',{opacity:1},'+=1')
  .to('#one',0.6,{morphSVG:'#two',ease:SteppedEase.config(6)})
  .set('#one',{morphSVG:'#three'},'+=0.2')
  .set('#one',{morphSVG:'#four'},'+=0.2')
  .set('#one',{morphSVG:'#five'},'+=0.2')
  .set('#one',{morphSVG:'#six'},'+=0.6')
  .set('#one',{morphSVG:'#seven'},'+=0.2')
  // .to('#one',0.6,{morphSVG:'#one',ease:SteppedEase.config(6)},'+=1.6')
  // .set('#one',{opacity:0})
  ;

  return heroBlob;
}

function heroCopy() {

  var heroCopyTl = new TimelineMax();

  heroCopyTl
  .set('body',{className:'layout-default _play'})
  .set(write1,{text:'WeMade',fontWeight:'bold'},'+=1.6')
  .set(write2,{text:'an'},'+=0.2')
  .set(write3,{text:'8-bit'},'+=0.2')
  .set(write4,{text:'world'},'+=0.2')
  .set(write5,{text:'for'},'+=0.6')
  .set(write6,{text:'PLAY!',fontWeight:'bold'},'+=0.2')
  // .set(write,{text:'',clearProps:'all'},'+=1.6')
  ;

  return heroCopy;
}

function heroSetup() {

  var heroSetupTl = new TimelineMax({repeat:-1});

  heroSetupTl
  .add(heroBlob())
  .add(heroCopy())
  ;

}

$(document)
.ready(rowSwitch)
.ready(heroSetup)
// .ready(nyoType)
;

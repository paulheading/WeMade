---
layout: none
---

var card1 = $('.lnk._trello:nth-child(1)'),
    card2 = $('.lnk._trello:nth-child(2)'),
    card3 = $('.lnk._trello:nth-child(3)'),
    card1wrap = $('.wrap._trello',card1),
    card2wrap = $('.wrap._trello',card2),
    card3wrap = $('.wrap._trello',card3)
    trelloPlay = new TimelineMax(),
    trelloReverse = new TimelineMax();

var trelloFunc = (state) => {
  if(state == 'play') {
    trelloPlay
    .staggerTo([card1,card2,card3],'0.2',{opacity:1,y:0},'0.2','+=0.2')
    .staggerTo([card1wrap,card2wrap,card3wrap],'0.2',{opacity:1},'0.2')
    ;
  } else if(state == 'reverse') {
    trelloReverse
    .add('both')
    .staggerTo([card3,card2,card1],'0.2',{opacity:0,x:10},'0.2','both')
    .staggerTo([card3wrap,card2wrap,card1wrap],'0.2',{opacity:0},'0.2','both')
    .to('.lnk._trello',0.1,{x:0,y:-10})
    ;
  }
}

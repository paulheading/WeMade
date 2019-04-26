---
layout: none
---

var trelloAnim = () => {
  var card1 = $('.lnk._trello:nth-child(1)'),
      card2 = $('.lnk._trello:nth-child(2)'),
      card3 = $('.lnk._trello:nth-child(3)'),
      card1wrap = $('.wrap._trello',card1),
      card2wrap = $('.wrap._trello',card2),
      card3wrap = $('.wrap._trello',card3),
      all = [card1,card2,card3,card1wrap,card2wrap,card3wrap],
      wraps = [card1wrap,card2wrap,card3wrap],
      trelloTl = new TimelineMax();

  trelloTl
  .staggerTo(all,'0.2',{opacity:1},'0.2')
  .staggerTo(wraps,'0.2',{opacity:0,x:10},'0.2','+=3')
  .set('.wrap._trello',{x:0})
  ;
}

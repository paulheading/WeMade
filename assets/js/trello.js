---
layout: none
---

var animJobs = () => {
  var cards = ['.lnk._trello:nth-child(1) .wrap._trello','.lnk._trello:nth-child(2) .wrap._trello','.lnk._trello:nth-child(3) .wrap._trello'],
      jobsTl = new TimelineMax();

  jobsTl
  .staggerTo(cards,'0.2',{opacity:1},'0.2')
  .staggerTo(cards,'0.2',{opacity:0,x:10},'0.2','+=3.4')
  .set('.wrap._trello',{x:0})
  ;
}

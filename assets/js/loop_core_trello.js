
function loop_trello(name,limit=1) {
  var match = 0,
      feed = feed_work;

  $(feed).each(function(i){
    var ting = feed[i],
        date = ting.date,
        title = ting.title,
        format = ting.format,
        staff = ting.staff,
        id = ting.id,
        strtM = date.slice(5,7),
        strtY = date.slice(2,4);

    typeMonth(strtM);
    var prntStrtMnth = prnt;

    if(staff.includes(name)) {
      if(match < limit) {
        var row = `
        <a href="${id}" class="lnk _trello">
          <div class="item _trello">
            <div class="wrap _trello">
              <div class="row _trello --middle">${title}</div>
              <div class="row _trello --bottom">
                <div class="tag _trello --date">${prntStrtMnth} ${strtY}</div>
                <div class="tag _trello --${format}">${format}</div>
                <div class="tag _trello --member">CI</div>
                <div class="tag _trello --member">PH</div>
              </div>
            </div>
          </div>
        </a>`;
        $('.list._trello').append(row);
        match++
      }
    }
  });

  var cards = ['.lnk._trello:nth-child(1) .wrap._trello','.lnk._trello:nth-child(2) .wrap._trello','.lnk._trello:nth-child(3) .wrap._trello'],
      tl = new TimelineMax();

  tl
  .staggerTo(cards,'0.2',{opacity:1},'0.2')
  .staggerTo(cards,'0.2',{opacity:0,x:10},'0.2','+=3.4')
  .set('.wrap._trello',{x:0})
  ;
}

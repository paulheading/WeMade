
function loop_trello(name,limit=1) {
  var count = 0,
      match = 0,
      feed = feed_work;



  $(feed).each(function(){
    var ting = feed[count],
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
    count++
  });
}

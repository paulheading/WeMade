
function loop_blog_index(name,limit=1) {
  var match = 0,
      feed = feed_blog;

  $(feed).each(function(i){
    var ting = feed[i],
        date = ting.date,
        end = ting.end,
        desc = ting.desc,
        format = ting.format,
        slug = ting.slug,
        staff = ting.staff,
        title = ting.title,
        id = ting.id,
        strtM = date.slice(5,7),
        strtY = date.slice(2,4);

    typeMonth(strtM);
    var prntStrtMnth = prnt;

    if(end){
      var endM = end.slice(0,2),
          endY = end.slice(5,7);

      typeMonth(endM);
      var prntEndMnth = prnt;
    }

    if(staff.includes(name)) {
      if(match < limit) {
        var row = `
        <a href="${id}" class="lnk _index">
          <div class="row _index">
            <div class="title _index _date">${prntStrtMnth} ${strtY}</div>
            <div class="entry _index">
              <div class="title _index _project">${title}</div>
            </div>
            <div class="title _index _desc">${desc}</div>
          </div>
        </a>`;
        $('.list._blog').append(row);
        match++
      }
    }
  });
}

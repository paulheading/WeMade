
function loop_work_index(name,limit=1) {
  var match = 0,
      feed = feed_work;

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
            <div class="title _index --date">
              <div class="title _index --start">${prntStrtMnth} ${strtY}`;
              if(end){
                row += `–</div><div class="title _index --end">${prntEndMnth} ${endY}</div>`;
              } else {
                row += `–</div><div class="title _index --end">Now</div>`;
              } row +=`
            </div>
            <div class="entry _index">
              <div class="title _index --title">
                ${title}
              </div>
              <div class="title _index --format">
                ${format}
              </div>
            </div>
            <div class="title _index --desc">
              ${desc}
            </div>
          </div>
          <img class="img _thumb" src="/assets/img/${slug}/index.jpg">
        </a>`;
        $('.list._work').append(row);
        match++
      }
    }
  });
}

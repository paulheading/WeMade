
function loop_cv_work(name,limit=1) {
  var count = 0,
      match = 0,
      feed = feed_work;

  $(feed).each(function(){
    var ting = feed[count],
        date = ting.date,
        end = ting.end,
        format = ting.format,
        staff = ting.staff,
        title = ting.title,
        url = ting.url,
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
        <div class="entry _cv-project">
          <div class="copy _cv-project --date">
            ${prntStrtMnth} ${strtY}`;
            if(end){
              row += `-${prntEndMnth} ${endY}`;
            } else {
              row += `-Now</div>`;
            } row +=`
          <a class="lnk _cv-project" href="${url}" target="_blank">
            <div class="title _cv-project --title">${title}</div>
            <div class="title _cv-project --format">${format}</div>
          </a>
        </div>`;
        $('.list._cv._projects').append(row);
        match++
      }
    }
    count++
  });
}

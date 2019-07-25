
function loop_cv_jobs(name,limit=1) {
  var count = 0,
      match = 0;

  if(name == 'paul') {
    var feed = feed_data_paul.jobs;
  }
  if(name == 'chloe') {
    var feed = feed_data_chloe.jobs;
  }

  $(feed).each(function(){
    var ting = feed[count],
        boss = ting.boss,
        date = ting.date,
        end = ting.end,
        role = ting.role,
        url = ting.url,
        strtM = date.slice(0,2),
        strtY = date.slice(5,7);

    typeMonth(strtM);
    var prntStrtMnth = prnt;

    if(end){
      var endM = end.slice(0,2),
          endY = end.slice(5,7);
      typeMonth(endM);
      var prntEndMnth = prnt;
    }

    if(match < limit) {
    var row = `
      <div class="entry _cv-jobs">
        <div class="copy _cv-jobs">${prntStrtMnth} ${strtY}`;
        if(end){
          row += `–${prntEndMnth} ${endY}`;
        } else {
          row += `-Now</div>`;
        } row +=`
        <a class="lnk _cv --jobs" href="${url}" target="_blank">
          <div class="title _cv-jobs --boss">${boss}</div>
          <div class="title _cv-jobs --role">${role}</div>
        </a>
      </div>
      `;
    match++
    }
    $('.list._cv._jobs').append(row);
    count++
  });
}

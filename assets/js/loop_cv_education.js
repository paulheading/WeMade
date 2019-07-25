
function loop_cv_education(name,limit=1) {
  var count = 0,
      match = 0,
      feed;

  if(name == 'paul') {
    feed = feed_data_paul.education;
  }
  if(name == 'chloe') {
    feed = feed_data_chloe.education;
  }

  $(feed).each(function(){
    var ting = feed[count],
        cert = ting.cert,
        school = ting.school,
        url = ting.url;

    if(match < limit) {
    var entry = `
    <div class="entry _cv-education">
      <a class="lnk _cv-education" href="${url}" target="_blank">
        <div class="title _cv-education --school">${school}</div>
        <div class="title _cv-education --cert">${cert}</div>
      </a>
    </div>
    `;
    match++
    }
    $('.list._cv._education').append(entry);
    count++
  });
}

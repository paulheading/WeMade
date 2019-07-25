
function loop_cv_skills(name,limit=1) {
  var count = 0,
      match = 0;

  if(name == 'paul') {
    var feed = feed_data_paul.skills;
  }
  if(name == 'chloe') {
    var feed = feed_data_chloe.skills;
  }

  $(feed).each(function(){
    var ting = feed[count],
        skillsType = ting.type;

    if(match < limit) {
    var entry = `
    <div class="entry">
      <div class="title _cv">
        ${skillsType}
      </div>
    </div>
    `;
    match++
    }
    $('.list._cv._skills').append(entry);
    count++
  });
}

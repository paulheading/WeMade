
function loop_cv(name,limit=1) {
  
  if(name == 'paul') {
    var feed = feed_data_paul;
  }
  if(name == 'chloe') {
    var feed = feed_data_chloe;
  }

  var first = feed.name.first,
      second = feed.name.second,
      area = feed.addr.area,
      city = feed.addr.city,
      phone = feed.phone,
      bio = feed.bio,
      github = feed.social.github,
      insta = feed.social.insta,
      other = feed.social.other;

  var row = `
  <div class="row _cv _address">
    <div class="entry _name">
      <div class="title _cv _name">
        ${first}
      </div>
      <div class="title _cv _name">
        ${second}
      </div>
    </div>
    <div class="entry _address">
      <div class="title _cv">
        ${area}, ${city}
      </div>
      <div class="title _cv">
        ${phone}
      </div>
    </div>
  </div>
  <div class="row _cv _bio">
    <div class="entry _bio">
      <div class="title _cv _bio">
        Biography
      </div>
      <div class="copy _bio">
        ${bio}
      </div>
    </div>
    <div class="entry _social">
      <a class="lnk _cv _social" href="http://github.com/${github}">
        @${github}
      </a>

      <a class="lnk _cv _social" href="http://instagram.com/${insta}">
        @${insta}
      </a>

      <a class="lnk _cv _social" href="/${other}">
        ${other}
      </a>
    </div>
  </div>

  <div class="row _cv _projects">
    <div class="title _cv _projects">Projects</div>
    <div class="list _cv _projects"></div>
  </div>

  <div class="row _cv _jobs">
    <div class="title _cv _jobs">Jobs</div>
    <div class="list _cv _jobs"></div>
  </div>

  <div class="row _cv _skills">
    <div class="title _cv _skills">Skills</div>
    <div class="list _cv _skills"></div>
  </div>

  <div class="row _cv _education">
    <div class="title _cv _education">Education</div>
    <div class="list _cv _education"></div>
  </div>
  `;

  $('.wrap._content').append(row);
  loop_cv_work(name,3);
  loop_cv_jobs(name,3);
  loop_cv_skills(name,9);
  loop_cv_education(name,3);
}

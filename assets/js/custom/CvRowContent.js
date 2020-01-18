
const CvRowContent = (type) => {
  let parent = $('.block._cv-row.--' + type),
      child  = $('.block._cv-row-content',parent);

  child.each(function(i,val) {
    let count = i + 1;

    if (count > 3) {
      $(this).attr('style','display:none;');
    }
  })
}

$(document).ready(function() {
  CvRowContent('projects');
  CvRowContent('jobs');
});

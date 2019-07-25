
function loop_work_visual(name) {
  var match = 0,
      feed = feed_work;

  $(feed).each(function(i){
    var ting = feed[i],
        visual = ting.visual,
        slug = ting.slug;

    if(body.hasClass('--'+slug)) {
      loop_work_image(visual,slug);
      loop_work_pages(feed,name);
    }
  });
}

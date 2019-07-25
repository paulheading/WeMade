
function loop_work_pages(feed,name) {
  var total = feed.length -1;

  $(feed).each(function(i){
    var ting = feed[i],
        next = ting.next,
        prev = ting.previous,
        collection = ting.collection,
        slug = ting.slug,
        firstTitle = '',
        lastTitle = '';

    // if(i == 0) {
    //   console.log(ting.title);
    // }
    // if(i == total) {
    //   console.log(ting.title);
    // }

    if(body.hasClass('--'+slug)) {
      var row = '';

      if(prev){
        row += `
        <a class="lnk" href="${prev.id}">
          ${prev.title}
        </a>`;
      } else {
        row += `
        <div>nothing</div>`;
      }

      row += `
      <a class="lnk" href="/${collection}">
        <div class="title">${collection}</div>
      </a>`;

      if(next){
        row += `
        <a class="lnk" href="${next.id}">
          ${next.title}
        </a>`;
      } else {
        row += `
        <div>nothing</div>`;
      }

      $('.list._example').append(row);
    }
  });
}

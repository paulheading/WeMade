
function loop_work_image(feed,slug) {

  $(feed).each(function(i) {
    var ting = feed[i],
        svg = ting.svg,
        img = ting.img,
        vid = ting.vid,
        row = '';

    if(ting.split) {
      row += `<div class="row _project --split">`;
      $(ting.split).each(function(i){
        var tang = ting.split[i],
            svg = tang.svg,
            img = tang.img,
            vid = tang.vid;

        if(svg) { row += `<div class="canvas"><img class="_flex" src="/assets/svg/${slug}/${svg}"></div>`; }
        if(img) { row += `<img class="_flex" src="/assets/img/${slug}/${img}">`; }
        if(vid) { row += `<video class="video _dtp" autoplay playsinline muted loop><source src="/assets/vid/${slug}/${vid}" type="video/mp4"></video>`; }
      });
      row += `</div>`;
      $('.list._visual').append(row);
    }

    if(svg) {
      row += `<div class="row _project">`;
      row += `<div class="canvas"><img class="_flex" src="/assets/svg/${slug}/${svg}"></div>`;
      row += `</div>`;
      $('.list._visual').append(row);
    }

    if(img) {
      row += `<div class="row _project">`;
      if(img) { row += `<img class="_flex" src="/assets/img/${slug}/${img}">`; }
      row += `</div>`;
      $('.list._visual').append(row);
    }

    if(vid) {
      row += `<div class="row _project">`;
      row += `<video class="video _dtp" autoplay playsinline muted loop><source src="/assets/vid/${slug}/${vid}" type="video/mp4"></video>`;
      row += `</div>`;
      $('.list._visual').append(row);
    }
  });
}

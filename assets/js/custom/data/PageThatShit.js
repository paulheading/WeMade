
const PageThatShit = () => {
  let source  = {{ site.work | jsonify }},
      loop    = source.reverse(),
      total   = loop.length,
      path    = window.location.pathname,
      prevBtn = '.lnk._paginate-prev',
      nextBtn = '.lnk._paginate-next';

  $(loop).each(function(i,val) {
    let prev = i + 1,
        next = i - 1;

    if (val.id == path) {

      if (i == 0) {

      } else {
        $(nextBtn)
        .attr('href',loop[next].id)
        .text(loop[next].title + ' (next)');
      }

      if (i == total) {

      } else {
        $(prevBtn)
        .attr('href',loop[prev].id)
        .text(loop[prev].title + ' (prev)');
      }
    }
  });
}

$(PageThatShit);

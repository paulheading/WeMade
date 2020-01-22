
const MoreIndex = (e) => {
  let child = $('.block._index-list-row.--hide');

  child.each(function(i,val) {
    let count = i + 1;

    if (count <= 3) {
      $(this).removeClass('--hide');
    }
  });

  if (child.length < 3) {
    $(e.target).text('No more jobs! Sorry!');
  }
}

$('.lnk._paginate-index').on('click',MoreIndex);

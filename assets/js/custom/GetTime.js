
const GetTime = () => {
  let block = $('.block._time'),
      d     = new Date(),
      day   = d.getDay(),
      hrs   = d.getHours(),
      mins  = d.getMinutes(),
      week  = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
      time  = '', daysO = '', hrsO  = '', minsO = '', diff  = 5;

  if (block.hasClass('--chloe')) {

    if (hrs < diff) {
      hrsO = hrs + (24 - diff);
      daysO = week[day - 1];

      if (hrsO < 10) {
        hrsO = '0' + hrsO;
      }

    } else {
      hrsO = hrs - diff;
      daysO = week[day];

      if (hrsO < 10) {
        hrsO = '0' + hrsO;
      }
    }
  } else {
    hrsO = hrs;
    daysO = week[day];

    if (hrsO < 10) {
      hrsO = '0' + hrsO;
    }
  }

  if (mins < 10) {
    minsO = '0' + mins;
  } else {
    minsO = mins;
  }

  time = `<div><strong>${daysO}</strong></div><div>${hrsO}:${minsO}</div>`;
  block.html(time);
}

$(setInterval(GetTime,500));

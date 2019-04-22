
var timeFunc = (city) => {
  var weekday = new Array(7);
      weekday[0] = "Sun",
      weekday[1] = "Mon",
      weekday[2] = "Tue",
      weekday[3] = "Wed",
      weekday[4] = "Thu",
      weekday[5] = "Fri",
      weekday[6] = "Sat";
  var d = new Date(),
      n = weekday[d.getUTCDay()],
      m = d.getUTCMinutes();

  if(city == 'Toronto') {
    var h = d.getUTCHours() - 4,
        day = $('.day','._clock.--toronto'),
        hours = $('.hours','._clock.--toronto'),
        minutes = $('.minutes','._clock.--toronto');
  } else {
    var h = d.getUTCHours() + 1,
        day = $('.day','._clock.--london'),
        hours = $('.hours','._clock.--london'),
        minutes = $('.minutes','._clock.--london');
  }

  day.text(n);

  if(h < 10) {
    var addZero = '0'+h;
    hours.text(addZero);
  } else {
    hours.text(h);
  }

  if(m < 10) {
    var addZero = '0'+m;
    minutes.text(addZero);
  } else {
    minutes.text(m);
  }
}

window.setInterval(function(){
  timeFunc('Toronto');
  timeFunc();
},1000);

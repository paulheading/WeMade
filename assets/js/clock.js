
var timeFunc = (name) => {
  var weekday = new Array(7);
      weekday[0] = "Sun",
      weekday[1] = "Mon",
      weekday[2] = "Tue",
      weekday[3] = "Wed",
      weekday[4] = "Thu",
      weekday[5] = "Fri",
      weekday[6] = "Sat";

  var date = new Date(),
      utcDay = date.getUTCDay(),
      utcHrs = date.getUTCHours(),
      utcMins = date.getUTCMinutes(),

      day = $('._clock.--day'),
      hours = $('._clock.--hrs'),
      minutes = $('._clock.--mins');

  minutes.text(utcMins);

  if(name == 'chloe') {
    var dispHrs = utcHrs-4;
    day.text(weekday[utcDay-1]);
    hours.text(dispHrs);
  }

  if(name == 'paul') {
    var dispHrs = utcHrs+1;
    day.text(weekday[utcDay]);
    hours.text(dispHrs);
  }

  // if(h < 10) {
  //   hours.text('0'+h);
  // } else if(h == 24) {
  //   hours.text('00');
  // } else {
  //   hours.text(h);
  // }
  //
  // if(m < 10) {
  //   minutes.text('0'+m);
  // } else {
  //   minutes.text(m);
  // }
}

window.setInterval(function(){
  timeFunc();
},1000);

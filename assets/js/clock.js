
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
      localHrs,
      localMins,
      day = $('._clock.--day'),
      hours = $('._clock.--hrs'),
      minutes = $('._clock.--mins');

  localMins = utcMins;

  if(name == 'chloe') {
    localHrs = utcHrs-4;
  } else {
    localHrs = utcHrs+1;
  }

  if(localHrs < 0){
    day.text(weekday[utcDay-1]);
    hours.text(localHrs+24);
  } else {
    day.text(weekday[utcDay]);
    hours.text(localHrs);
  }

  if(localMins < 10){
    minutes.text('0'+localMins);
  } else {
    minutes.text(localMins);
  }
}

window.setInterval(function(){
  timeFunc(nameG);
},1000);


var timeFunc = (name) => {

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
    localHrs = localHrs+24;
    day.text(weekday[utcDay-1]);
    hours.text(localHrs);

    if(localHrs < 10){
      hours.text('0'+localHrs);
    }
  } else {
    day.text(weekday[utcDay]);
    hours.text(localHrs);

    if(localHrs < 10){
      hours.text('0'+localHrs);
    }
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

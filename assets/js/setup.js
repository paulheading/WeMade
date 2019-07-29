---
layout: none
---

var stateG, nameG, resizeTimer, prnt,
    month = new Array(12),
    weekday = new Array(7),
    feed_work = {{ site.work | jsonify }},
    feed_blog = {{ site.blog | jsonify }},
    feed_data_core = {{ site.data.core | jsonify }},
    feed_data_paul = {{ site.data.paul | jsonify }},
    feed_data_chloe = {{ site.data.chloe | jsonify }},
    coreTl = new TimelineMax({repeat:-1}),
    random = () => {
      return 0.3 - Math.random();
    },
    typeMonth = (num) => { 
      if(num.charAt(0) == 0){
        prnt = month[num.slice(1,2)-1];
      } else {
        prnt = month[num-1];
      }
    };

    feed_data_core.sort(random);
    feed_work.reverse();
    feed_blog.reverse();

    month[0] = "Jan",
    month[1] = "Feb",
    month[2] = "Mar",
    month[3] = "Apr",
    month[4] = "May",
    month[5] = "Jun",
    month[6] = "Jul",
    month[7] = "Aug",
    month[8] = "Sep",
    month[9] = "Oct",
    month[10] = "Nov",
    month[11] = "Dec";

    weekday[0] = "Sun",
    weekday[1] = "Mon",
    weekday[2] = "Tue",
    weekday[3] = "Wed",
    weekday[4] = "Thu",
    weekday[5] = "Fri",
    weekday[6] = "Sat";

enquire.register('screen and (min-width: 640px)',{
  match   : function() {
    stateG = 'match';
    console.log(stateG);
  },
  unmatch : function() {
    stateG = 'unmatch';
    console.log(stateG);
  }
});

smoothScroll();

---
layout : none
---

let loop = {{ site.data.marquee | jsonify }};


const Shuffle = (o) => {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}


const CalcTime = (local) => {
  let block = $('.block._time'),
      d     = new Date(),
      day   = d.getDay(),
      hrs   = d.getHours(),
      mins  = d.getMinutes(),
      week  = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
      time  = '', daysO = '', hrsO  = '', minsO = '', diff  = 5;

  if (local == 'Toronto') {

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

let seconds;

const GetTime = (local) => {
  seconds = setInterval(CalcTime(local),500);
}

const StopTime = () => {
  clearInterval(seconds);
}


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


const ThemeHome = () => {
	let tl 		  = gsap.timeline({paused:true,repeat:-1,defaults:{ease:"none"}}),
			speed		= 5,
			drag 		= '-' + speed * 80,
			header 	= '.block._header',
			hero 		= '.area._hero',
			see 		= '.wrap._see',
			city 		= '.block._city',
			time 		= '.block._time',
			mrqwrap = '.block._marquee-group',
			mods 		= [$('.area._hero'),time,mrqwrap];

	Shuffle(loop);

	$(loop).each(function(i,val) {
		let name 	 	 = val.name,
				local    = val.city,
				message  = val.message,
				modifyer = '--' + name.toLowerCase(),
	 			lnk 	 	 = `<a href="/${name.toLowerCase()}" class="lnk _see">See ${name}</a>`,
				content  = '';

		$(message).each(function(i,val) {
			if (val.book) {
				content += `<div class="book">${val.book}</div>`;
			} else if (val.italic) {
				content += `<div class="italic">${val.italic}</div>`;
			} else if (val.bold) {
				content += `<div class="bold">${val.bold}</div>`;
			} else if (val.bookUl) {
				content += `<div class="bookUl">${val.bookUl}</div>`;
			} else if (val.italicUl) {
				content += `<div class="italicUl">${val.italicUl}</div>`;
			} else if (val.boldUl) {
				content += `<div class="boldUl">${val.boldUl}</div>`;
			}
		});

		tl
		.set(hero,{backgroundColor:val.bg})
		.set(header,{color:val.col})
		.set(see,{text:lnk})
		.set(city,{text:local})
		.call(GetTime,[val.city])
		.set(mrqwrap,{
			text: content + content + content + content + content + content + content + content + content + content,
			x:0
		})
		.to(mrqwrap,{
			duration:speed,
			x:drag
		})
		.call(StopTime)
	});

	tl.play();
}

$(ThemeHome);

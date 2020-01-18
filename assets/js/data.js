---
layout : none
---

let loop = {{ site.data.marquee | jsonify }};


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


const Shuffle = (o) => {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}


const ThemeHome = () => {
	let tl 		  = new TimelineMax({paused:true,repeat:-1}),
			speed		= 5,
			drag 		= '-' + speed * 80,
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
		.set(see,{text:lnk})
		.set(city,{text:local})
		.set(mods,{className:'+='+modifyer})
		.set(mrqwrap,{text: content + content + content + content + content + content + content + content + content + content,x:0})
		.to(mrqwrap,speed,{x:drag,ease:Power0.easeNone})
		.set(mods,{className:'-='+modifyer});
	});

	tl.play();
}

$(ThemeHome);

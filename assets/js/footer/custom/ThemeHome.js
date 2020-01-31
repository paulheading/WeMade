
const ThemeHome = () => {
	let tl 		  = gsap.timeline({paused:true,repeat:-1,defaults:{ease:"none"}}),
			speed		= 5,
			drag 		= "-" + speed * 80,
			header 	= ".block._header",
			hero 		= ".area._hero",
			see 		= ".wrap._see",
			city 		= ".block._city",
			time 		= ".block._time",
			mrqwrap = ".block._marquee-group",
			mods 		= [$(".area._hero"),time,mrqwrap];

	Shuffle(Staff);

	$(Staff).each(function(i,val) {
		let modifyer = '--' + val.name.toLowerCase(),
	 			lnk 	 	 = `<a href="/${val.path}" class="lnk _see">See ${val.name}</a>`,
				content  = '';

		$(val.message).each(function(i,val) {
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

		if ($(body).hasClass('type-home')) {
			tl
			.set(hero,{backgroundColor:val.bg})
			.set(header,{color:val.col});
		}

		tl
		.set(see,{text:lnk})
		.set(city,{text:val.city})
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

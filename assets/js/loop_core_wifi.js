
var loop_core_wifi = (city) => {
  var tl = new TimelineMax(),
      zero = $('#zero','#wifi'),
      one = $('#one','#wifi'),
      two = $('#two','#wifi'),
      three = $('#three','#wifi'),
      scan = [zero,one,two];

  tl
  .staggerTo(scan,0.1,{opacity:0.4},0.3,'0.3')
  .set(scan,{opacity:0.2},'5')
  ;

  $('.title._city').html(city);
}

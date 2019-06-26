
var setWifi = () => {
  var wifiTl = new TimelineMax(),
      zero = $('#zero','#wifi'),
      one = $('#one','#wifi'),
      two = $('#two','#wifi'),
      three = $('#three','#wifi'),
      all = [zero,one,two,three];

  wifiTl
  .staggerTo(all,0.2,{opacity:0.4},0.2,'+=0.4')
  .staggerTo([three,two],0.2,{opacity:0.2},0.2,'+=1.0')
  .staggerTo(two,0.2,{opacity:0.4},0.2,'+=0.4')
  .staggerTo([three,two,one,zero],0.2,{opacity:0.2},0.2,'+=1.0')
  ;
}

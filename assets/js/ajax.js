---
layout: none
---

function getAjax(test) {
  $.get('assets/svg/'+test+'.svg?v=1.8', function(data) {
    var svg = new XMLSerializer().serializeToString(data.documentElement);
    $('.area._hero').html(svg);
  });

  $(document).ajaxComplete(function(){
    getAnim(test);
  });
}

function getAnim(test) {
  if(test == 'chloe') {
    var chloeTl = new TimelineMax({repeat:-1,yoyo:true});
    // chloeTl.to('#chloe',1,{x:50});
  }
  if(test == 'wemade') {
    var wemadeTl = new TimelineMax({repeat:-1,yoyo:true});
    // wemadeTl
    // .add('together')
    // .to('#face',1,{y:-100,rotation:360,transformOrigin:'center'},'together')
    // .to('#dollar',1,{y:100},'together')
    // .to('#dollar_1_',1,{x:300},'together')
    // .to('#dollar_2_',1,{x:-300},'together')
    // ;
  }
}

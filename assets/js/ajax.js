---
layout: none
---

function getAjax(test) {
  $.get('assets/svg/'+test+'.svg?v=1.3', function(data) {
    var div = document.querySelector('.svg._hero');
    div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
    document.body.insertBefore(div,document.body.childNodes[0]);
  });

  $(document).ajaxComplete(function(){
    getAnim(test);
  });
}

function getAnim(test) {
  if(test == 'chloe') {
    var chloeTl = new TimelineMax({repeat:-1,yoyo:true});
    chloeTl.to('#chloe',1,{x:50});
  }
  if(test == 'wemade') {
    var wemadeTl = new TimelineMax({repeat:-1,yoyo:true});
    wemadeTl
    .add('together')
    .to('#face',1,{y:-100,rotation:360,transformOrigin:'center'},'together')
    .to('#dollar',1,{y:100},'together')
    .to('#dollar_1_',1,{x:300},'together')
    .to('#dollar_2_',1,{x:-300},'together')
    ;
  }
}

// function getAjax(test) {
//   $.ajax({
//     url: '/assets/html/'+test+'.html',
//     context: document.body,
//     success: function(response){
//       $('.svg._hero').html(response);
//     }
//   });
// }

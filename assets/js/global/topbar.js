
// OVERLAY ******************************

function overlayReset() {
  $('body').removeClass('_overlay');
  $('.overlay').removeClass('_open');
}

function escOverlay(e){
  if(e.keyCode === 27) {
    overlayReset();
  }
}

function closeOverlay(){
  overlayReset();
}

function openOverlay() {
  $('body').addClass('_overlay');

  var click = $(this)[0].classList[1];
  $('.overlay').each(function(){
    if ($(this).hasClass(click)) {
      $(this).addClass('_open');
    }
  });
}

// BROWSE ******************************

function checkBody() {
  var body = $('body')[0].classList[1];
  if ($(this).hasClass(body)) {
    $(this).addClass('_open');
  }

  if ($('body').hasClass('_browse')) {
    $('._system').addClass('_open');
  }
}

function setupBrowse() {
  $('.browse-section').each(checkBody);
  $('.btn-browse').each(checkBody);
}

function clearBrowse() {
  $('.browse-section').removeClass('_open');
  $('.btn-browse').removeClass('_open');
}

function openBrowse() {
  clearBrowse();
  $(this).addClass('_open');

  var click = $(this)[0].classList[1];
  $('.browse-section').each(function(){
    if ($(this).hasClass(click)) {
      $(this).addClass('_open');
    }
  });
}

// CART ******************************

var zip = new JSZip();

function setupCart() {

  var pathname = window.location.pathname;
  console.log(pathname);

  $('.item-add').each(function(){
    var item = $(this)[0].classList[1];
    if($('.item-row').hasClass(item)){
      $(this).addClass('added');
      newItem('cart',item,'A new text file');
    }
  });
}

function hideCheckout() {
  if(localStorage.getItem('count') == 0) {
    $('.checkout').hide();
    zip.remove('cart');
  }
}

function newItem(folder,file,data) {
  zip.folder(folder).file(file + '.txt',data);
  // zip.folder(folder).file(file,data,{base64:true});
}

function setCount() {
  localStorage.setItem('count', val);
}

function getCount() {
  $('.count').html(localStorage.getItem('count'));
}

function setBasket() {
  var basket = $('.basket').html(); localStorage.setItem('basket', basket);
}

function getBasket() {
  $('.basket').html(localStorage.getItem('basket'));
}

function setCheckout() {
  localStorage.setItem('checkout', display);
}

function update() {
  hideCheckout();

  $('.item-add').each(function(){
    var item = $(this)[0].classList[1];

    if(!$('.item-row').hasClass(item)){
      $(this).removeClass('added');
    }
  });
}

if(localStorage.getItem('count') > 0) {
  var val = localStorage.getItem('count');
  getCount();
  getBasket();
  $('.checkout').show();
} else {
  var val = $('.count').html();
}

function addItem() {

  if($(this).hasClass('added')) {
    var item = $(this)[0].classList[1];
    var message = $(this).parent().siblings('.message');
    message.fadeIn(300).html('Removed from the cart!').delay(1000).fadeOut(300);
    val -= 1; setCount();
    getCount();
    $(this).removeClass('added');
    $('.item-row').each(function(){
      if($(this).hasClass(item)){
        $(this).remove();
      }
    });
    setBasket();
    hideCheckout();

  } else {
    var item = $(this)[0].classList[1];
    var folder = $(this)[0].classList[2];
    var file = $(this)[0].classList[3];
    var message = $(this).parent().siblings('.message');
    $(this).addClass('added');
    $('.basket').prepend(`<div class="item-row ${item}"><div class="item-name">${folder} | ${file}</div><div class="item-remove">remove</div></div>`);
    setBasket();
    val ++; setCount(); getCount();
    $('.checkout').show();
    message.fadeIn(300).html('Added to the cart!').delay(1000).fadeOut(300);
    newItem('cart',item,'A new text file');
  }
}

function removeItem() {
  var item = $(this).parent()[0].classList[1];
  val -= 1; setCount();
  $('.count').html(localStorage.getItem('count'));
  $(this).parents('.item-row').remove();
  zip.folder('cart').remove(item + '.txt');
  setBasket(); update();
}

function emptyCart() {
  val = 0; $('.count').html(val); setCount();
  $('.basket').html(''); setBasket();
  $('.item-add').removeClass('added');
  $(this).parents('.checkout').hide();
  zip.remove('cart');
}

function zipCart() {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var title = `campaign-${day}-${month}-${year}.zip`;

  zip.generateAsync({
    type: "blob"
  })
  .then(function(content) {
    saveAs(content,title);
  });
}

// var names = [];
// localStorage.setItem("names", JSON.stringify(names));
// var storedNames = JSON.parse(localStorage.getItem("names"));

function goBack() {
  window.history.back();
}

$(document)
.ready(setupCart)
.ready(setupBrowse)
.on('keydown',escOverlay)
.on('click','.exit',closeOverlay)
.on('click','.item-add',addItem)
.on('click','.item-remove',removeItem)
.on('click','.empty',emptyCart)
.on('click','.zip',zipCart)
.on('click','.btn-nav',openOverlay)
.on('click','.btn-browse',openBrowse)
.on('click','._back',goBack)
;

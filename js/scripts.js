var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
    cellAlign: 'left',
    contain: true,
    draggable: false,
    freeScroll: true,
    autoPlay: true,
    autoPlay: 3000,
    pauseAutoPlayOnHover: false,
    fade: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});

// asNavFor can be set a selector string
asNavFor: '.main-carousel'
// or an element
asNavFor: $('.main-carousel')[0]
asNavFor: document.querySelector('.main-carousel')

// 1st carousel, main
$('.main-carousel').flickity();
// 2nd carousel, navigation
$('.carousel-nav').flickity({
    asNavFor: '.main-carousel',
    contain: true,
    draggable: false,
    freeScroll: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false
});
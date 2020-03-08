var x = window.matchMedia("(max-width: 792px)")
console.log('mounted')
myFunction(x) 
x.addListener(myFunction) 



var y = document.querySelector('.end-nav')
var nav = document.querySelector('.nav-icon')

nav.addEventListener("click", ()=>{

if( y.style.transform === "translateX(-100%)" || y.style.transform === ''){
    y.style.transform = "translateX(0%)"
}
else{
    y.style.transform = "translateX(-100%)"
    
}
})
function myFunction(x){

  var y = document.querySelector('.end-nav')
    if (!x.matches) {
      y.style.transform =  ""
      console.log('here')
    } 
   
}




$button = $('.message-div')
$ShowHideMore = $('.product-cards');
$ShowHideMore.each(function() {
    var $times = $(this).children('.card');
    console.log($times.length)
    if ($times.length > 13) {
        $ShowHideMore.children(':nth-of-type(n+13)').addClass('moreShown').hide();
        $button.show();
        $button.addClass('more-times').find('p.message').html('+ Show more');
    }
});

$(document).on('click', '.message-div ', function() {
  var that = $(this);
  console.log(that)
  var thisParent = that.siblings('div.product-cards');
  if (that.hasClass('more-times')) {
    thisParent.find('.moreShown').show();
    that.toggleClass('more-times', 'less-times').find('p.message').html('- Show less');
  } else {
    thisParent.find('.moreShown').hide();
    that.toggleClass('more-times', 'less-times').find('p.message').html('- Show more');
  }  
});


$faHeart = $('.fa-heart')
$faHeart.on('click', ()=>{


  if($faHeart.hasClass('heartActive')){
    $faHeart.removeClass('heartActive')
  }
  else{
    $faHeart.addClass('heartActive')

  }
 
})


$navToggler = $('.nav-toggler')
$navToggler.on('click', ()=> {
  $midnav = $('.mid-nav')
  
  if( $midnav.css('display') !== 'none'){
    console.log( $midnav.css('display'))
    $midnav.css({'display':'none'});
  }
  else{
    console.log( $midnav.css('display'))
    $midnav.css({'display':'flex'
  });
   
  }
})


$(document).ready(function(){
  $('.categories').slick({
    responsive: [
{
  breakpoint: 792,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: true
  }
},
]});


 $(document).ready(function () {
$x = window.matchMedia("(max-width: 792px)")

$var = $('.categories').offset();

if($x.matches){
$scrollTop= $var.top+120
}  
else{
$scrollTop= $var.top
}
$('#go-top').goTop({
scrollTop: $scrollTop,
scrollSpeed: 10,
fadeInSpeed: 1000,
fadeOutSpeed: 500
})
})

});




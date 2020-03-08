var x = window.matchMedia("(max-width: 792px)")
console.log('mounted')
myFunction(x) 
x.addListener(myFunction) 

// SideBar

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
      var no= document.querySelector('.mid-nav')
      console.log(no)
      no.style.display = "flex"

    } 
   
}





// heartFill

$faHeart = $('.fa-heart')
$faHeart.on('click', ()=>{


  if($faHeart.hasClass('heartActive')){
    $faHeart.removeClass('heartActive')
  }
  else{
    $faHeart.addClass('heartActive')

  }
 
})



// Search Bar
$(document).ready(function () {

$navToggler = $('.nav-toggler')
$midnav = $('.mid-nav')
console.log(x.matches)
if(x.matches){
  $navToggler.on('click', ()=> {

    console.log($midnav.css('display'))
    if( $midnav.css('display') !== 'none'){
      console.log( $midnav.css('display'))
      $midnav.css({'display':'none'});
    }
    else{
      console.log( $midnav.css('display'))
      $midnav.css({'display':'flex'});
     
    }
  })
}
else if(!x.matches){
  console.log('here hi')
  $midnav.css({'display':'flex'})
}

})




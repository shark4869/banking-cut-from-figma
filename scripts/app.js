$(document).ready(function(){
    $('.hero-slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        vertical: true,
        verticalSwiping: true,
        dots: true,
        autoplay: true,
        easing: 'linear'
    });
    $('.partner-content').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows:false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
              {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    });
});
const toggle =document.querySelector(".menu-toggle");
const menu =document.querySelector(".menu");
const activeClass="is-show";
toggle.addEventListener("click", function(){
    menu.classList.add(activeClass);
})
window.addEventListener('click', function(e){   
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")){
    menu.classList.remove(activeClass);
  } 
});

                        $( window ).ready(function() {

                                var owlDeCarros = $('#owlDeCarros').owlCarousel({
                                        loop:true,
                                        margin:20,
                                        items: 5,
                                        autoplay: true,
                                        center: true,
                                        navText: [
                                            '<img src="images/esquerda.png" alt="Página anterior">',
                                            '<img src="images/direita.png" alt="Próxima página">'
                                        ], 
                                        navContainer: '.custom-nav-banner',
                                        autoplayTimeout:2500,
                                        //dotsContainer: '#carousel-custom-dots',
                                        autoplayHoverPause:true,
                                        //animateIn: 'fadeIn', // add this
                                        //animateOut: 'fadeOut', // and this
                                       responsive:{
                                            0:{
                                                items:1.5,
                                                margin:5,
                                                loop:true,
                                            },
                                            600:{
                                                items:2.5,
                                                margin:5,
                                                loop:true,
                                            },
                                            1000:{
                                                items:4.5,
                                                margin:5,
                                                loop:true,
                                            },
                                            1200:{
                                                loop:true,
                                                margin:20,
                                                items: 5,
                                                autoplay: true,
                                                center: true,
                                                navText: [
                                                    '<img src="images/esquerda.png" alt="Página anterior">',
                                                    '<img src="images/direita.png" alt="Próxima página">'
                                                ], 
                                                navContainer: '.custom-nav-banner',
                                                autoplayTimeout:2500,
                                                //dotsContainer: '#carousel-custom-dots',
                                                autoplayHoverPause:true,
                                            }
                                        }
                                });


                                var owlDeCarrosGaleria = $('#owlDeCarrosGaleria').owlCarousel({
                                        loop:true,
                                        margin:5,
                                        items: 1,
                                        autoplay: true,
                                        center: true,
                                        autoplayTimeout:2500,
                                        //dotsContainer: '#carousel-custom-dots',
                                        autoplayHoverPause:true,
                                        //animateIn: 'fadeIn', // add this
                                        //animateOut: 'fadeOut', // and this
                                       responsive:{
                                            0:{
                                                items:1.5,
                                                margin:5,
                                                loop:true,
                                            },
                                            600:{
                                                items:2.5,
                                                margin:5,
                                                loop:true,
                                            },
                                            1000:{
                                                items:4.5,
                                                margin:5,
                                                loop:true,
                                            },
                                            1200:{
                                                loop:true,
                                                margin:5,
                                                items: 2.5,
                                                autoplay: true,
                                                center: true,
                                                autoplayTimeout:2500,
                                                //dotsContainer: '#carousel-custom-dots',
                                                autoplayHoverPause:true,
                                            }
                                        }
                                });

                                
                        }); 



// MANTER O MENU FIXO MESMO QUANDO ROLAR A PÁGINA
jQuery(document).ready(function ($) {
  $(window).scroll(function(){
    var sticky = $('header.fixo'),
        scroll = $(window).scrollTop();  
    if (scroll < 250){ 
        $('header.fixo').css("top","-1000%");
     }
    if (scroll > 250){ 
        $('header.fixo').css("top","0px");
     }
  });
});  
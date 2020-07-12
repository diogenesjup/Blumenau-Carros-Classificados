                        $( window ).ready(function() {

                                var owlDeCarros = $('#owlDeCarros').owlCarousel({
                                        loop:false,
                                        margin:20,
                                        items: 5,
                                        autoplay: true,
                                        center: true,
                                        navText: [
                                            '<img src="images/left.png" alt="Banner anterior">',
                                            '<img src="images/right.png" alt="Próximo Banner">'
                                        ], 
                                        //navContainer: '.custom-nav-banner',
                                        autoplayTimeout:2500,
                                        //dotsContainer: '#carousel-custom-dots',
                                        autoplayHoverPause:true,
                                        //animateIn: 'fadeIn', // add this
                                        //animateOut: 'fadeOut', // and this
                                       
                                });
                        }); 
$( document ).ready(function() {
       const instance_swiper = new Swiper(".swiper-container", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
        },
        on: {
            slideChange: function () {
            const index_currentSlide = this.realIndex;
            const totalSlides = this.slides.length;
                $('.counter .current').text(index_currentSlide+1);
                $('.counter .total').text(totalSlides);
            },
        },
        breakpoints: {
        768: { // при ширине окна >= 320px
           
        },

        1024: {
     
         },
        
        }
        });


        $('#myCollapsible').on('click', function () {
           if(!$(this).hasClass('collapsed')){
            $('.header-tel-city').removeClass('d-none');
           }
        })
    });




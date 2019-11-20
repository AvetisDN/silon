$(document).ready(function(){
    
    $("#featured-carousel").owlCarousel({
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 3
            }
        }
    });

  });
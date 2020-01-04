'use strict';

function initMap() {
    let map, coords, styles, marker, info, content;

    coords = {
        lat: 42.710984,
        lng: 27.750057
    }
    content = '<h1 class="info-title">I\'m here</h1>';

    styles = [{
            "elementType": "geometry",
            "stylers": [{
                "color": "#ebe3cd"
            }]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#523735"
            }]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#f5f1e6"
            }]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#c9b2a6"
            }]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#dcd2be"
            }]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#ae9e90"
            }]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dfd2ae"
            }]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dfd2ae"
            }]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#93817c"
            }]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#a5b076"
            }]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#447530"
            }]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f1e6"
            }]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#fdfcf8"
            }]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f8c967"
            }]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#e9bc62"
            }]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e98d58"
            }]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#db8555"
            }]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#806b63"
            }]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dfd2ae"
            }]
        },
        {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#8f7d77"
            }]
        },
        {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#ebe3cd"
            }]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dfd2ae"
            }]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#b9d3c2"
            }]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#92998d"
            }]
        }
    ]



    map = new google.maps.Map(document.getElementById('map'), {
        center: coords,
        zoom: 18,
        styles: styles,
        disableDefaultUI: true,
        zoomControl: true,
        streetViewControl: true
    });

    marker = new google.maps.Marker({
        position: coords,
        map: map,
        icon: 'images/marker.png',
        draggble: true
    });

    info = new google.maps.InfoWindow({
        content: content
    });

    marker.addListener('click', function () {
        info.open(map, marker);
    });
}

(function ($) {
    $(document).ready(function () {
        //CODE
        $('.slider').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            fade: true,
            /*затухание, можно отключить */
            speed: 3000
        });

        let sections = {
            header: $('#header').offset().top,
            about: $('#about').offset().top,
            services: $('#services').offset().top,
            gallery: $('#gallery').offset().top,
            blog: $('#blog').offset().top,
            contact: $('#contact').offset().top
        };


        $(window).scroll(function () {
            let scrTop = $(document).scrollTop() + ($(window).height() / 3),
                pos;

            if (scrTop < sections.about) {
                pos = 'header';
            } else if (scrTop >= sections.about && scrTop < sections.services) {
                pos = 'about';
            } else if (scrTop >= sections.services && scrTop < sections.gallery) {
                pos = 'services';
            } else if (scrTop >= sections.gallery && scrTop < sections.blog) {
                pos = 'gallery';
            } else if (scrTop >= sections.blog && scrTop < sections.contact) {
                pos = ' blog';
            } else if (scrTop >= sections.contact) {
                pos = 'contact';
            }

            $('.fixed-nav').find('.active').removeClass('active');
            $('.fixed-nav').find(`a[data-menu=${pos}]`).addClass('active');


        });

        //fancybox
        $('.photo').fancybox({
            buttons: [
                "slideShow",
                //"fullScreen",
                "fullScreen",
                //"download",
                "download",
                "thumbs",
                "close"
            ],
            animationEffect: "zoom-in-out",
            animationDuration: 800,
            transitionEffect: "rotate",
            loop: "true"
        });
    });
})(jQuery);
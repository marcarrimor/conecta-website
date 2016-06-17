/*IIFE*/
(function(){
    'use strict'
    
    var sliderProducts = {
        controller: productsCtrl,
        templateUrl: 'app/components/products/slider-products.html' 
    };

    function productsCtrl(){
        var asController = this;

        angular.element(document).ready(function () {
        


               var controller = new ScrollMagic.Controller();

                // define movement of panels
                var wipeAnimation = new TimelineMax()
                    .fromTo("section.panelSlide.turqoise", 1, {x: "-100%"}, {x: "50%", ease: Linear.easeNone})  // in from left
                    .fromTo("section.panelSlide.green",    1, {x:  "100%"}, {x: "50%", ease: Linear.easeNone})  // in from right
                    .fromTo("section.panelSlide.bordeaux", 1, {y: "-100%"}, {y: "50%", ease: Linear.easeNone}); // in from top

                // create scene to pin and link animation
             
                 new ScrollMagic.Scene({
                        triggerElement: "#pinContainer",
                        triggerHook: "onLeave",
                        duration: "300%"
                    })
                    .setPin("#pinContainer")
                    .setTween(wipeAnimation)
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);


        });
 
  };

    angular
      .module('conecta')
      .component('sliderProducts', sliderProducts); 
})();
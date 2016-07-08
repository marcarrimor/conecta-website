/*IIFE*/
(function(){
    'use strict'
    
   angular
        .module('conecta')
        .controller('aboutController', aboutController); 
    

    function aboutController(){
        var asController = this;

        angular.element(document).ready(function () {
        
        	// Init ScrollMagic Controller
            var controller = new ScrollMagic.Controller();


    // Scene
            var tween = TweenMax.from('.fade-it', 0.5,
                {
                    css:{
                        opacity: 0
                    }, 
                    ease:Quad.easeInOut
                }); 
                

            var scene = new ScrollMagic.Scene({
                triggerElement: '#scene',
                duration: 100 /* How many pixels to scroll / animate */
                })
                .setTween(tween)
                .addTo(controller);

    // Scene 2       
            // Create Animation for 0.5s
            var tween2 = TweenMax.staggerFromTo('.fade-it2', 0.5,
                {
                    autoAlpha:0
                },
                {
                    autoAlpha:1, 
                    delay:1
                },
                0.5
                );

            // Create the Scene and trigger when visible
            var scene2 = new ScrollMagic.Scene({
                triggerElement: '#scene2',
                duration: 350 /* How many pixels to scroll / animate */
                })
                .setTween(tween2)
                .addTo(controller);
              
            // Add debug indicators fixed on right side
                // scene.addIndicators();           


    });
 
  };

})();
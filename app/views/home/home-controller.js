/*IIFE*/
(function(){
    'use strict'

   angular
        .module('conecta')
        .controller('homeController', homeController);


    function homeController(){
        var asController = this;

        angular.element(document).ready(function () {


            if (!is_touch_device()) {
                // Start ScrollMagic code
    
    // Init ScrollMagic Controller
            var controller = new ScrollMagic.Controller();

    // Scene        
            // Create Animation for 0.5s
            var tween = TweenMax.staggerFromTo('.fade-it', 0.5,
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
            var scene = new ScrollMagic.Scene({
                triggerElement: '#scene',
                duration: 500 /* How many pixels to scroll / animate */
                })
                .setTween(tween)
                .addTo(controller);
              
            // Add debug indicators fixed on right side
                // scene.addIndicators();

    // Scene 2
            var tween2 = TweenMax.from( $('.fly-it'), .5, 
                {
                    css:{
                        right:'-600px',
                        opacity: 0
                    }, 
                    ease:Quad.easeInOut
                });
  
            var scene2 = new ScrollMagic.Scene({
                triggerElement: '#scene2',
                duration: 250 /* How many pixels to scroll / animate */
                })
                .setTween(tween2)
                .addTo(controller);     


    // Scene 3

            // var tween3 = TweenMax.staggerFromTo('.fade-it2', 0.5,
            //     {
            //         autoAlpha:0,
            //         ease:Power0.easeInOut
            //     },
            //     {
            //         autoAlpha:1, 
            //         delay:1,
            //         ease:Power0.easeInOut
            //     },
            //     0.5
            //     );

            var tween3 = TweenMax.from('.fade-it2', 0.5,
                {
                    css:{
                        opacity: 0
                    }, 
                    ease:Quad.easeInOut
                });
            var scene3 = new ScrollMagic.Scene({
                triggerElement: '#scene3',
                offset: 50 /* How many pixels to scroll / animate */
                })
                .setTween(tween3)
                .addTo(controller); 
                // scene3.addIndicators();

    // Scene 4
            var tween4 = TweenMax.from( $('.fade-it3'), 0.5, 
                {
                    css:{
                        opacity: 0
                    }, 
                    ease:Quad.easeInOut
                });
  
            var scene4 = new ScrollMagic.Scene({
                triggerElement: '#scene4',
                offset: 50 /* offset the trigger 150px below #scene's top */
                })
                .setTween(tween4)
                .addTo(controller);  
            }

            function is_touch_device() { //deactivate animations in touch screens
              return 'ontouchstart' in window // works on most browsers 
                  || 'onmsgesturechange' in window; // works on ie10
            };

    



            // var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 1000})
            //     // trigger animation by adding a css class
            //     .setClassToggle("#animate1", "zap")
            //     .addTo(controller);

                // var scene = new ScrollMagic.Scene({triggerElement: "#trigger"})
                //     // trigger a velocity opaticy animation
                //     .setVelocity("#animate", {opacity: 0}, {duration: 400})
                //     .addIndicators() // add indicators (requires plugin)
                //     .addTo(controller);








                // new ScrollMagic.Scene({
                //         duration: 100,  // the scene should last for a scroll distance of 100px
                //         offset: 50      // start this scene after scrolling for 50px
                //     })
                //     .setPin("#my-sticky-element") // pins the element for the the scene's duration
                //     .addTo(controller); // assign the scene to the controller







        //      var controller = $.superscrollorama({
        //      	triggerAtCenter: true,
	// 			playoutAnimations: true
        //      });
        //     // individual element tween examples
        //     controller.addTween('#fade-it', TweenMax.from( $('#fade-it'), .5, {css:{opacity: 0}}));
        //     controller.addTween('#fly-it', TweenMax.from( $('#fly-it'), .25, {css:{right:'1000px'}, ease:Quad.easeInOut}));
        //     controller.addTween('#spin-it', TweenMax.from( $('#spin-it'), .25, {css:{opacity:0, rotation: 720}, ease:Quad.easeOut}));
        //     controller.addTween('#scale-it', TweenMax.fromTo( $('#scale-it'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'240px'}, ease:Quad.easeInOut}));
        //     controller.addTween('#smush-it', TweenMax.fromTo( $('#smush-it'), .25, {css:{opacity:0, 'letter-spacing':'30px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, 'letter-spacing':'0px'}, ease:Quad.easeInOut}), 0, 100); // 100 px offset for better timing
        });

  };

})();

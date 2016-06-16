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
                    // animate to second panel
                    .to("#slideContainer", 0.5, {z: -150})      // move back in 3D space
                    .to("#slideContainer", 1,   {x: "-25%"})    // move in to first panel
                    .to("#slideContainer", 0.5, {z: 0})             // move back to origin in 3D space
                    // animate to third panel
                    .to("#slideContainer", 0.5, {z: -150, delay: 1})
                    .to("#slideContainer", 1,   {x: "-50%"})
                    .to("#slideContainer", 0.5, {z: 0})
                    // animate to forth panel
                    .to("#slideContainer", 0.5, {z: -150, delay: 1})
                    .to("#slideContainer", 1,   {x: "-75%"})
                    .to("#slideContainer", 0.5, {z: 0});

                // create scene to pin and link animation
                new ScrollMagic.Scene({
                        triggerElement: "#pinContainer",
                        triggerHook: "onLeave",
                        duration: "500%"
                    })
                    .setPin("#pinContainer")
                    .setTween(wipeAnimation)
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);

                // build scene
                // var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 1000})
                //     // trigger animation by adding a css class
                //     .setClassToggle("#animate1", "zap")
                //     .addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
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
        //        triggerAtCenter: true,
  //      playoutAnimations: true
        //      });
        //     // individual element tween examples
        //     controller.addTween('#fade-it', TweenMax.from( $('#fade-it'), .5, {css:{opacity: 0}}));
        //     controller.addTween('#fly-it', TweenMax.from( $('#fly-it'), .25, {css:{right:'1000px'}, ease:Quad.easeInOut}));
        //     controller.addTween('#spin-it', TweenMax.from( $('#spin-it'), .25, {css:{opacity:0, rotation: 720}, ease:Quad.easeOut}));
        //     controller.addTween('#scale-it', TweenMax.fromTo( $('#scale-it'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'240px'}, ease:Quad.easeInOut}));
        //     controller.addTween('#smush-it', TweenMax.fromTo( $('#smush-it'), .25, {css:{opacity:0, 'letter-spacing':'30px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, 'letter-spacing':'0px'}, ease:Quad.easeInOut}), 0, 100); // 100 px offset for better timing
        });
 
  };

    angular
      .module('conecta')
      .component('sliderProducts', sliderProducts); 
})();
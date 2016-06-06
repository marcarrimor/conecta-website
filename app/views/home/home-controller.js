/*IIFE*/
(function(){
    'use strict'
    
   angular
        .module('conecta')
        .controller('homeController', homeController); 
    

    function homeController(){
        var asController = this;

        angular.element(document).ready(function () {
             var controller = $.superscrollorama({
             	triggerAtCenter: true,
				playoutAnimations: true
             });
            // individual element tween examples
            controller.addTween('#fade-it', TweenMax.from( $('#fade-it'), .5, {css:{opacity: 0}}));
            controller.addTween('#fly-it', TweenMax.from( $('#fly-it'), .25, {css:{right:'1000px'}, ease:Quad.easeInOut}));
            controller.addTween('#spin-it', TweenMax.from( $('#spin-it'), .25, {css:{opacity:0, rotation: 720}, ease:Quad.easeOut}));
            controller.addTween('#scale-it', TweenMax.fromTo( $('#scale-it'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'240px'}, ease:Quad.easeInOut}));
            controller.addTween('#smush-it', TweenMax.fromTo( $('#smush-it'), .25, {css:{opacity:0, 'letter-spacing':'30px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, 'letter-spacing':'0px'}, ease:Quad.easeInOut}), 0, 100); // 100 px offset for better timing
        });
 
  };

})();
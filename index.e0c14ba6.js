!function(){$(document).ready((function(){$(".slider").slick({arrows:!0,infinity:!0,slidesToShow:3,slidesToScroll:1,centerPadding:"10px",centerMode:!0,speed:1600,autoplaySpeed:1400,responsive:[{breakpoint:1280,settings:{slidesToScroll:1,slidesToShow:3}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,centerPadding:"-40px"}}]})}));var e=$(".pagingInfo");$(".slider").on("init reInit afterChange",(function(i,n,o,s){var t=(o||0)+1;e.text(t+"/"+n.slideCount)}))}();
//# sourceMappingURL=index.e0c14ba6.js.map

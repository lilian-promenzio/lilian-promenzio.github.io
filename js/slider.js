var setSlider=function(e){$("#"+e).lightSlider({autoWidth:!0,keyPress:!0,loop:!0,slideMove:1,easing:"cubic-bezier(0.25, 0, 0.25, 1)",speed:600,onSliderLoad:function(){$("#"+e).removeClass("cs-hidden")}})};
var peppos = 0;

$(document).ready(function(){
  $(".bxslider").bxSlider({
    infiniteLoop: false,
    hideControlOnEnd: true,
    preventDefaultSwipeY: false
  });
  $('.pep').pep({
    axis: 'y',
    constrainTo: "parent",
    useCSSTranslation: false,
    drag: function(){
        var pepPosition = $('.pep').position().top;
        console.log(pepPosition);
        if (pepPosition>165 && pepPosition<300){
          document.getElementById("meteor").style.visibility="visible";
          document.getElementById("meteorite").style.visibility="hidden";
          document.getElementById("meteoroid").style.visibility="hidden";
        } else if (pepPosition<=165) {
          document.getElementById("meteor").style.visibility="hidden";
          document.getElementById("meteorite").style.visibility="hidden";
          document.getElementById("meteoroid").style.visibility="visible";
        } else if (pepPosition>=300) {
          document.getElementById("meteor").style.visibility="hidden";
          document.getElementById("meteorite").style.visibility="visible";
          document.getElementById("meteoroid").style.visibility="hidden";
        
        }
      }
  });
});

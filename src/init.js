$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer)

    $('.dancer').mouseover(function() {
      $(this).animate({left: "-200px"},9000)
    });
    $('.dancer1').mouseover(function(event) {
    
    });
    $('.dancer2').mouseover(function(event) {
      $(this).animate({left: "1900px"},9000)
      
    });
  });
 
  $('.lineUp').on('click', function(event) {
    var arr = window.dancers;

    var left = 100;
    var top = 0;
    for(var i = 0; i < arr.length; i ++) {
      var dancer = arr[i];
      dancer.setPosition(top, left , 100)
      
      if (left > 1700) {
        top += 200;
        left = 0;
      }
      left += 250;
    };
  });

  

 

});


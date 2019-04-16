var Dancer1 = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer1"><img class="Dancer1" src="https://media.giphy.com/media/wn8rVP7qC8TNC/giphy.gif"></img></span>');
  this.setPosition(top, left);
};

Dancer1.prototype = Object.create(makeDancer.prototype);

Dancer1.prototype.constructor = Dancer1;

Dancer1.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

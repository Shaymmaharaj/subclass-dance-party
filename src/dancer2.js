var Dancer2 = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer2"><img class="Dancer2" src="https://media.giphy.com/media/1Bh2B3wRZ3GUFkI4yM/giphy.gif"></img></span>');
  this.setPosition(top, left);
};

Dancer2.prototype = Object.create(makeDancer.prototype);

Dancer2.prototype.constructor = Dancer2;

Dancer2.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

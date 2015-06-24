var Display = function (context) {
    if (context && context.length > 0) {
        this.display = context;
        this.init();
    };
};

Display.prototype.init = function () {
    this.display.mouseover(function () {
        $(this).css({
            marginLeft: Math.floor(Math.random() * 100),
            marginTop: Math.floor(Math.random() * 100)
        });
    });
};

var Box = function (context) {
    Display.call(this, context);
};

Box.prototype = new Display();
Box.prototype.constructor = Box;
Box.prototype.init = function () {
    Display.prototype.init.call(this);
};

var RedBox = function (context) {
    Box.call(this, context);
};

RedBox.prototype = new Box();
RedBox.prototype.constructor = RedBox;
RedBox.prototype.init = function () {
    Box.prototype.init.call(this);
    this.display.css('backgroundColor', 'red');

};

$(function(){
	new RedBox($('.box'));
}); 
/*jQuery.fn.redbox = function () {
    return jQuery(this).each(function () {
        new Redbox(jQuery(this));
    });
};

$(function () {
    $('.box').redBox();
};
*/
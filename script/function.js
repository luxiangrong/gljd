//jQuery.noConflict();
(function($) {
	$(function() {
		var colLeftHeight = $(".info .col-left").height();
		var colRightHeight = $(".info .col-right").height();
		var height = Math.max(colLeftHeight, colRightHeight);
		$(".info .col-left").height(height);
		$(".info .col-right").height(height);
	});
})(jQuery);

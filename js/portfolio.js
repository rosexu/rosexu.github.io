$( document ).ready(function() {
	initVariables();
	initEvents();
});

function initVariables() {
	this.$projects = $('.project');
}

function initEvents() {
	this.$projects.each(function() {
		var $this = $(this);
		var $textView = $this.find('.text-view');
		var $picView = $this.find('.picture-view');
		var isVisible = $textView.is(':visible');
		if (!$textView.is(":visible")) {
			$this.bind('click', function() {
				toggleClass($textView, $picView);
			});
		}
	});
}

function toggleClass(textView, picView) {
	if (textView.is(":visible")) {
		textView.hide();
		picView.show();
	} else {
		textView.show();
		picView.hide();
	}
}
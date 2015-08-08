$( document ).ready(function() {
	initVariables();
	initEvents();
});

function initVariables() {
	this.$projects = $('.project');
	console.log(this.$projects);
}

function initEvents() {
	this.$projects.each(function() {
		var $this = $(this);
		var $textView = $this.find('.text-view');
		var $picView = $this.find('.picture-view');
		$this.bind('click', function() {
			toggleClass($textView, $picView);
		});
	});
}

function toggleClass(textView, picView) {
	if (textView.hasClass('hidden')) {
		textView.removeClass('hidden');
		picView.addClass('hidden');
	} else {
		textView.addClass('hidden');
		picView.removeClass('hidden');
	}
}
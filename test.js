(function () {
	
	// Small Header Function
	var header = document.querySelector('.header');
	window.onscroll = function() {
		if (window.pageYOffset > 0) {
			header.classList.add('scrolled' /*,'elevate-1'*/);
		} else {
			header.classList.remove('scrolled' /*,'elevate-1'*/);
		}
	}
	
	// Initialize Masonry
	var masonryWrap = document.querySelector('.posts');
	var msnry = new Masonry( masonryWrap, {
	  // options
	  itemSelector: '.post'
	});
})();
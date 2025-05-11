window.addEventListener('load', function() {
	document.querySelector('.h-dashboard').querySelector('.hidden-xs').innerHTML = 'NGINX - access.log';

	const collections = document.querySelectorAll(".dropdown-toggle");
	collections.forEach(collection => {
		collection.innerHTML = '<i class="fa fa-gear"></i>';
	});
});

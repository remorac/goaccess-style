['load', 'focus'].forEach(function(event){
        window.addEventListener(event, function() {
                replaceElements();

		setInterval(function() {
			replaceElements();
		}, 1000);

                function replaceElements() {
                        document.querySelector('.h-dashboard').querySelector('.hidden-xs').innerHTML = '<span class="floating">NGINX</span> <small class="emboss" style="font-weight:400;">access.log</small>';
			document.querySelector(".nav-minibars").classList.add("floating");

                        const elements0 = document.querySelectorAll(".dropdown-toggle");
                        elements0.forEach(element => {
                                element.innerHTML = '<i class="fa fa-gear"></i>';
                        });

                        const ul = document.querySelector("#overall").querySelector("ul");
			if (ul) {
				elements1 = ul.querySelectorAll("li");
        	                elements1.forEach(element => {
                	                element.classList.remove("col-sm-6");
                        	        element.classList.add("col-xs-6", "col-sm-3");
                        	});
			}

                        const parents0 = document.querySelectorAll("hgroup");
                        parents0.forEach(parent => {
                                const elements2 = parent.querySelectorAll("small");
                                elements2.forEach(element => {
                                        element.innerHTML = element.innerHTML.replace("[, ", "[");
                                        element.innerHTML = element.innerHTML.replace("[", '<span class="hidden-xs">[');
                                        element.innerHTML = element.innerHTML.replace("]", ']</span>');
                                });
                        });
                }
        });
});

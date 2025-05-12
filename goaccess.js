['load', 'focus'].forEach(function(event){
        window.addEventListener(event, function() {
                function replaceElements() {
                        document.querySelector('.h-dashboard').querySelector('.hidden-xs').innerHTML = 'NGINX - access.log';

                        const collections = document.querySelectorAll(".dropdown-toggle");
                        collections.forEach(collection => {
                                collection.innerHTML = '<i class="fa fa-gear"></i>';
                        });

                        const collections1 = document.querySelector("#overall").querySelector("ul").querySelectorAll("li");
                        collections1.forEach(collection => {
                                collection.classList.remove("col-sm-6");
                                collection.classList.add("col-xs-6", "col-sm-3");
                        });
                }

                replaceElements();
                // setInterval(function() {
                //         replaceElements();
                // }, 1000);
        });
});

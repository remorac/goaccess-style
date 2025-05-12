['load', 'focus'].forEach(function(event){
        window.addEventListener(event, function() {
                replaceElements();

                function replaceElements() {
                        document.querySelector('.h-dashboard').querySelector('.hidden-xs').innerHTML = 'NGINX - access.log';

                        const elements0 = document.querySelectorAll(".dropdown-toggle");
                        elements0.forEach(element => {
                                element.innerHTML = '<i class="fa fa-gear"></i>';
                        });

                        const elements1 = document.querySelector("#overall").querySelector("ul").querySelectorAll("li");
                        elements1.forEach(element => {
                                element.classList.remove("col-sm-6");
                                element.classList.add("col-xs-6", "col-sm-4");
                        });

                        const parents0 = document.querySelectorAll("hgroup");
                        parents0.forEach(parent => {
                                const elements2 = parent.querySelectorAll("small");
                                elements2.forEach(element => {
                                        element.innerHTML = element.innerHTML.replace("[, ", "[");
                                });
                        });
                }
        });
});

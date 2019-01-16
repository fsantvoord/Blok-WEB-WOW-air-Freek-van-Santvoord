/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
var downButton = document.querySelectorAll('article>button');



downButton.forEach(function(downButton){
    downButton.addEventListener("click", function(){
        downButton.classList.toggle('download');
        downButton.classList.toggle('klaar');    
            });
        
    });

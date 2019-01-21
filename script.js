/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
var downButtons = document.querySelectorAll('article>button');



downButtons.forEach(function (downButtons) {
    downButtons.addEventListener("click", function () {
        downButtons.classList.toggle('download');
        downButtons.classList.toggle('klaar');
    });

});


var knop = document.getElementById('filterknop');
console.log('knop gevonden', knop);

var form = document.querySelector('form');
console.log('form gevonden', form);

knop.addEventListener('click', function() {
    if (form.classList.contains('ingeklapt')) {
        console.log('hij gaat uitklappen');
        form.classList.add('omlaag');
        form.addEventListener('animationend', function(){
            form.classList.remove('omlaag');
            setTimeout(1000);
            form.classList.remove('ingeklapt');
        })

    }
    else {
        console.log('hij gaat inklappen');
        form.classList.add('omhoog');
        form.addEventListener('animationend', function (){
            form.classList.remove('omhoog');
            setTimeout(1000);
            form.classList.add('ingeklapt');
        })

    }

});


//function() {
//    if (form.classList.contains('ingeklapt')) {
//        console.log('hij gaat uitklappen');
//        form.classlist.add('omlaag');
//        form.addEventListener('animationend', function(){
//            form.classList.remove('omlaag');
//            setTimeout(1000);
//            form.classlist.remove('ingeklapt');
//        })
//
//    }
//    else {
//        console.log('hij gaat inklappen');
//        form.classList.add('omhoog');
//        form.addEventListener('animationend', function (){
//            form.classList.remove('omhoog');
//            setTimeout(1000);
//            form.classList.add('ingeklapt');
//        })
//
//    }
//
//}


















function myFunk() {
    'use strict';

    var divs = document.getElementsByTagName("div");
    for (var div = 0; div < divs.length; div++) {
        divs[div].style.width = "94%";
    }
    var y = 0;
    var w = 0;
    var interval = setInterval(function () {
        if (y === 0) {
            w = 94;
        } else {
            w = y;
        }
        w = w - 1;
        y = w;
        console.log(w);

        for (var div = 0; div < divs.length; div++) {
            divs[div].style.width = w + "%";
        }

        console.log(w);

        if (w < 5) {
            for (var div = 0; div < divs.length; div++) {
                divs[div].style.width = 0;
            }
            clearInterval(interval);
            console.log("opa");
        }

    }, 30);

    console.log("sad");
}
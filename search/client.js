/**
 * Created by leo on 24/09/2016.
 */

var search = document.querySelector('[type=search]');
var code = document.querySelector('pre');

search.addEventListener('keyup', function () {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', '/search/' + search.value, true);
    xhr.onreadystatechange = function () {
        if (4 == xhr.readyState) {
            code.textContent = xhr.responseText;
        }
    };
    xhr.send();
}, false);
/**
 * Created by chaneric on 2017-05-06.
 */
    // If found activated session, goto the callback function
function ssoLogin(url) {
    var options = {};

    options.onSuccess = function (response) {
        var form = document.createElement('form');
        form.action = url;
        form.method = 'POST';

        var hidden = document.createElement('input');
        hidden.type = 'hidden';
        hidden.name = 'token';
        hidden.value = response;

        form.appendChild(hidden);
        document.body.appendChild(form);
        form.submit();
    };


    LRObject.util.ready(function () {

        LRObject.init("ssoLogin", options);

    });
}
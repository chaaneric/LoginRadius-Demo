/**
 * Created by chaneric on 2017-05-06.
 */
var sociallogin_options = {};
sociallogin_options.templateName = 'loginradiuscustom_tmpl';
sociallogin_options.container = 'sociallogin-container';
sociallogin_options.onSuccess = function(response) {
    console.log(response);
    window.location = "loggedin.html";
};
sociallogin_options.onError = function(errors) {
    var errorsInText = "";
    errors.forEach(function (element) {
        errorsInText += element.Message + "\n";
    });
    alert(errorsInText);
    console.log(errors);
};
LRObject.util.ready(function() {
    LRObject.customInterface('.interfacecontainerdiv', sociallogin_options);
    LRObject.init('socialLogin',sociallogin_options);
});


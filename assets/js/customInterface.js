/**
 * Created by chaneric on 2017-05-06.
 */
var custom_interface_option = {};
custom_interface_option.templateName = 'loginradiuscustom_tmpl';
LRObject.util.ready(function() {
    LRObject.customInterface(".interfacecontainerdiv", custom_interface_option);
});

var sl_options = {};
sl_options.onSuccess = function(response) {
    window.location = "loggedin.html";
    console.log(response);
};
sl_options.onError = function(errors) {
    console.log(errors);
};
sl_options.container = "sociallogin-container";
LRObject.util.ready(function() {
    LRObject.init('socialLogin', sl_options);
});

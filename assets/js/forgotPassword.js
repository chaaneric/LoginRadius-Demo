/**
 * Created by chaneric on 2017-05-08.
 */
var forgotpassword_options = {};
forgotpassword_options.container = 'forgotpassword-container';
forgotpassword_options.onSuccess = function(response) {
    alert("Please check your inbox for a verification link");
    console.log(response);
};
forgotpassword_options.onError = function(errors) {
    var errorsInText = "";
    errors.forEach(function (element) {
        errorsInText += element.Message + "\n";
    });
    alert(errorsInText);
};
LRObject.util.ready(function() {
    LRObject.init('forgotPassword',forgotpassword_options);
});
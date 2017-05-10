/**
 * Created by chaneric on 2017-05-05.
 */
var resend_email_options = {};
resend_email_options.container = 'resend-email-container';
resend_email_options.onSuccess = function(response) {
    if(response.IsPosted) {
        alert("Successfully Resent");
    }
};
resend_email_options.onError = function(errors) {
    var errorsInText = "";
    errors.forEach(function (element) {
        errorsInText += element.Message + "\n";
    });
    alert(errorsInText);
};
LRObject.util.ready(function() {
    LRObject.init('resendVerificationEmail',resend_email_options);
});
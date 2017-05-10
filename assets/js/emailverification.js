/**
 * Created by chaneric on 2017-05-05.
 */
var verifyemail_options = {};
verifyemail_options.onSuccess = function(response) {
    alert("Successfully verified! \n You can now login with your user and pass");
    console.log(response);
};
verifyemail_options.onError = function(errors) {
    var errorsInText = "";
    errors.forEach(function (element) {
        errorsInText += element.Message + "\n";
    });
    alert(errorsInText);
};
LRObject.util.ready(function() {
    LRObject.init('verifyEmail',verifyemail_options);
});
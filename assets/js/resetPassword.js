/**
 * Created by chaneric on 2017-05-08.
 */
var reset_options = {};
reset_options.container = 'resetpassword-container';
reset_options.onSuccess = function(response) {
    console.log(response);
    alert("Successfully Reset \nPlease Login with the new password.");
    window.location = "index.html";
};
reset_options.onError = function(errors) {
    var errorsInText = "";
    errors.forEach(function (element) {
        errorsInText += element.Message + "\n";
    });
    alert(errorsInText);
};
LRObject.util.ready(function() {
    LRObject.init('resetPassword',reset_options);
});
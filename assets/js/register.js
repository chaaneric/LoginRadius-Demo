/**
 * Created by chaneric on 2017-05-05.
 */
var registration_options = {};
registration_options.container = 'registration-container';
registration_options.onSuccess = function(response) {
    if(response.IsPosted) {
        alert("Successfully Registered");
        window.location = "index.html";
    }
    console.log(response);
};
registration_options.onError = function(errors) {
    var errorsInText = "";
    errors.forEach(function (element) {
        errorsInText += element.Message + "\n";
    });
    alert(errorsInText);
};
LRObject.util.ready(function() {
    LRObject.init('registration',registration_options);
});

/**
 * Created by chaneric on 2017-05-05.
 */
var login_options = {};
login_options.container = 'login-container';
login_options.onSuccess = function(response) {
    console.log(response);
    sessionStorage.setItem("profile", JSON.stringify(response));
    window.location = "loggedin.html";
};

// handling Errors by appending it on a single text string and alerting the user.
login_options.onError = function(errors) {
    var errorsInText = "";
    errors.forEach(function (element) {
        errorsInText += element.Message + "\n";
    });
    alert(errorsInText);
};
LRObject.util.ready(function() {
    LRObject.init('login',login_options);
});

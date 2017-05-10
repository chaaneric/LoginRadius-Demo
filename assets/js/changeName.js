/**
 * Created by chaneric on 2017-05-05.
 */
var profileeditior_options = {};
profileeditior_options.container = 'profile-editor-container';
profileeditior_options.onSuccess = function(response) {
    alert("Successfully changed!");
    console.log(response);
};
profileeditior_options.onError = function(errors) {
    var errorsInText = "";
    errors.forEach(function (element) {
        errorsInText += element.Message + "\n";
    });
    alert(errorsInText);
    console.log(errors);
};
LRObject.util.ready(function() {
    LRObject.init('profileEditor',profileeditior_options);
});
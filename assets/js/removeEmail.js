/**
 * Created by chaneric on 2017-05-06.
 */
var remove_email_options = {};
remove_email_options.container = 'removeemail-container';
remove_email_options.onSuccess = function (response) {
    alert("Successfully changed!");
    console.log(response);
};
remove_email_options.onError = function (errors) {
    var errorsInText = "";
    errors.forEach(function (element) {
        errorsInText += element.Message + "\n";
    });
    alert(errorsInText);
    console.log(errors);
};
LRObject.util.ready(function () {
    LRObject.init('removeEmail', remove_email_options);
});
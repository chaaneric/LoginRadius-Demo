/**
 * Created by chaneric on 2017-05-06.
 */
var addEmailOptions = {};
addEmailOptions.container = 'add-email-container';
addEmailOptions.onSuccess = function (response) {
    alert("Successfully Added!");
    console.log(response);
};
addEmailOptions.onError = function (errors) {
    var errorsInText = "";
    errors.forEach(function (element) {
        errorsInText += element.Message + "\n";
    });
    alert(errorsInText);
    console.log(errors);
};
LRObject.util.ready(function () {
    LRObject.init('addEmail', addEmailOptions);
});
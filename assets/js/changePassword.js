/**
 * Created by chaneric on 2017-05-06.
 */
var changepassword_options = {};
changepassword_options.container = 'changepassword-container';
changepassword_options.onSuccess = function (response) {
    alert("Successfully changed!");
    console.log(response);
};
changepassword_options.onError = function (errors) {
    var errorsInText = "";
    errors.forEach(function (element) {
        errorsInText += element.Message + "\n";
    });
    alert(errorsInText);
    console.log(errors);
};
LRObject.util.ready(function () {
    LRObject.init('changePassword', changepassword_options);
});
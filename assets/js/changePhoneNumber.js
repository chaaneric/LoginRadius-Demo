/**
 * Created by chaneric on 2017-05-06.
 */
var update_phone_options = {};
update_phone_options.container = 'update-phone-container';
update_phone_options.onSuccess = function(response) {
    alert("Successfully changed!");
    console.log(response);
};
update_phone_options.onError = function(errors) {
    var errorsInText = "";
    errors.forEach(function (element) {
        errorsInText += element.Message + "\n";
    });
    alert(errorsInText);
    console.log(errors);
};
LRObject.util.ready(function() {
    LRObject.init('updatePhone',update_phone_options);
});
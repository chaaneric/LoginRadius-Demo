/**
 * Created by chaneric on 2017-05-06.
 */
var options = {};

options.onSuccess = function () {
    console.log("Logged Out!");
};

LRObject.util.ready(function () {

    LRObject.init("logout", options);

});
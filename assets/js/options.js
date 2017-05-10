/**
 * Created by chaneric on 2017-05-05.
 */

var apiSecret = "";
var sott = "";
$.ajaxSetup({
    async: false
});

$.getJSON("/assets/credentials/config.json", function (json) {
    apiSecret += json.apiSecret;
    sott += json.sott;

});
var commonOptions = {};
commonOptions.apiKey = apiSecret;
commonOptions.appName = 'lr-candidate-demo2';
commonOptions.hashTemplate = true;
commonOptions.sott = sott;
commonOptions.verificationUrl = window.location.host + "/emailverification.html";
commonOptions.forgotPasswordUrl= window.location.host + "/resetpassword.html";

var LRObject = new LoginRadiusV2(commonOptions);



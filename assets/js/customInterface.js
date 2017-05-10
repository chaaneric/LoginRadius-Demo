/**
 * Created by chaneric on 2017-05-06.
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

function loginradius_interface(){
    $ui = LoginRadius_SocialLogin.lr_login_settings;
    $ui.interfacesize = "small";
    $ui.apikey = apiSecret;
    $ui.callback = "http://127.0.0.1:8080/loggedin.html";
    $ui.protocol = "http://"; /*or "https://"*/
    $ui.lrinterfacecontainer ="interfacecontainerdiv";
    $ui.callbacktype = "QueryString";
    LoginRadius_SocialLogin.init(options);
}
var options={};
options.login=true;
LoginRadius_SocialLogin.util.ready(loginradius_interface);
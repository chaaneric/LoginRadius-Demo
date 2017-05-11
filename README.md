# Login Radius Demo

Tested working on Chrome/Safari/Firefox

IDE Used: WebStorm 2017.1.2

## Configure the Project:

This project requires the ```http-server``` npm package.  

Install it by running this command in terminal, or command prompt:
```
npm install -g http-server
```
If you're on Mac or Linux you may need to run sudo on npm install.

You must have Node installed, if not please install it at:
https://nodejs.org

```
1. Please upload a JSON file named "config.json" in "assets/credentials" directory
2. Make sure config.json has the following keys:
* "apiKey": "\<your api key>"
* "sott": "\<your sott here>"

```

I have included a demo zip file that follows this guideline, downloadable [here](https://github.com/erichan37/LoginRadius-Demo/blob/master/extras/demo_config.zip).

## How to Start:
```
- Run on terminal the command: http-server at the working directory
- The terminal will print out the available server URLs
- They're typically:
- http://127.0.0.1:8080 
- http://192.168.1.x:8080
- The "x" depends on the available addresses on your LAN network
- Use the link provided on a web browser

```
## Implemented:

* Single Sign On

* Social Login

* Traditional Login

* Email Verification (With Gmail Account Configured)

* Forgot Password

* Manage Profile
    * Change Name or Username
    * Change Password
    * Change Phone Number
    * Email Settings
        * Add Email
        * Remove Email


## Diagram for HTML:
Solid Arrow = Directly Accessible

Dotted Arrow = Associated

[![HTML Diagram.png](https://s7.postimg.org/e1dqadduz/HTML_Diagram.png)](Diagram)
## Functions:
- Most of the functions implemented were utilizing
the API.

| Function:         | onSuccess                                       | onError                                  | Purpose                                                                              |
|-------------------|-------------------------------------------------|------------------------------------------|--------------------------------------------------------------------------------------|
| addEmail          | alerts user                                     | prints out errors in order               | add an email to an existing account                                                  |
| changeName        | alerts user                                     | prints out errors in order               | changes an accounts name or username                                                 |
| changePassword    | alerts user                                     | prints out errors in order               | changes an accounts password                                                         |
| changePhoneNumber | alerts user                                     | prints out errors in order               | changes an accounts phone number                                                     |
| customInterface   | N/A                                             | N/A                                      | needed to import the LR custom interface                                             |
| emailResend       | alerts user                                     | prints out errors in order               | resends an email for verification to an account                                      |
| emailVerification | alerts user and redirects to index.html         | prints out errors in order               | used for verifying an account with the correct vtoken                                |
| forgotPassword    | alert user to check email                       | prints out errors in order               | used for sending a forgot password email to account                                  |
| Login             | alerts user and directs them to "loggedin.html" | prints out errors in order               | used for logging in a valid account                                                  |
| Options           | N/A                                             | N/A                                      | used to instantiate a LR Object to handle events                                     |
| Register          | alerts user to check their email                | prints out errors in order               | used to register a user                                                              |
| removeEmail       | alerts user                                     | prints out errors in order               | used to remove an email from an account                                              |
| resetPassword     | alerts user                                     | prints out errors in order               | used to reset the accounts password                                                  |
| secureLogin       | do nothing, correct behaviour                   | alerts user and directs them to homepage | used to make sure the account is logged in, if not then should go back to index.html |
| socialLogin       | redirects login to loggedin.html                | prints out errors in order               | used so clients can login using Google, Facebook, and Twitter                        |
| SSO               | redirects user to loggedin.html                 | N/A                                      | if it finds a SSO, redirects to loggedin.html                                        |
| ssoLogout         | prints to console logged out                    | N/A                                      | logging out an active SSO session                                                    |



## File Directories:
```
* LoginRadius-Demo
--> credentials
    * config.json
--> css
    * global.css
    * index.css
    * manageprofile.css
--> manage
    * AddEmail.html
    * ChangeName.html
    * ChangePassword.html
    * ChangePhoneNumber.html
    * EmailSettings.html
    * RemoveEmail.html
--> js
    * SSO.js
    * addEmail.js
    * changeName.js
    * changePassword.js
    * changePhoneNumber.js
    * customInterface.js
    * emailResend.js
    * emailVerification.js
    * forgotPassword.js
    * login.js
    * options.js
    * register.js
    * removeEmail.js
    * resetPassword.js
    * secureLogin.js
    * socialLogin.js
    * ssoLogout.js
* emailresend.html
* emailverification.html
* index.html
* loggedin.html
* loggedout.html
* manageprofile.html
* register.html
* README.md
```



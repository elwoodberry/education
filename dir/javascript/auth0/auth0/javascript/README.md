# Single Page Application
## A JavaScript front end app that uses an API.

**Technology**: JavaScript  
**URL**: [Login](https://auth0.com/docs/quickstart/spa/vanillajs/01-login)  

## Table Of Contents
1. [Overview](#overview)
2. [Create an Authentication Service](#create-an-authentication-service)
## +

### Overview
### Get Your Application Keys
Simple Strips Application  
**Client ID**: * * * * 5u6G6W  
**Domain**: domain.auth0.com  

### Configure Callback URLs
A callback URL is a URL in your application where Auth0 redirects the user after they have authenticated.

**Allowed Callback URLs**  
1. http://localhost:3000
1. http://localhost:5000

### Install auth0.js
```
$ npm install --save auth0-js
```
### Include Auth.js
```
script(type="text/javascript" src="node_modules/auth0-js/build/auth0.js")
```


### Create an Authentication Service
Create and manage an instance of the auth0.WebAuth object
```
let webAuth = new auth0.WebAuth({
  domain: 'nfxn.auth0.com',
  clientID: 'zRPQdhor1xD2CIg7EkXYV0xetV5u6G6W',
  responseType: 'token id_token',
  audience: 'https://nfxn.auth0.com/userinfo',
  scope: 'openid',
  redirectUri: window.location.href
});
```

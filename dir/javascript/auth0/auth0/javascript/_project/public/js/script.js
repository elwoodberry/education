
console.log('Script Has Loaded');

window.addEventListener('load', function() {

  var webAuth = new auth0.WebAuth({
    domain: 'nfxn.auth0.com',
    clientID: 'zRPQdhor1xD2CIg7EkXYV0xetV5u6G6W',
    responseType: 'token id_token',
    audience: 'https://nfxn.auth0.com/userinfo',
    scope: 'openid',
    redirectUri: window.location.href
  });

  var loginBtn = document.getElementById('btn-login');

  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    webAuth.authorize();
  });

});

#Passport



## Reference

### Your Node.js authentication tutorial is (probably) wrong
[View Blog Post](https://hackernoon.com/your-node-js-authentication-tutorial-is-wrong-f1a3bf831a46)
Aug 3rd, 2017

#### Outline
---

1. Mistake one: credential storage
    1. Most bcrypt libraries these days use 12
    2. [Example 1](https://github.com/tutsplus/passport-mongo) execution of login.
    3. [TUT Plus](https://code.tutsplus.com/tutorials/authenticating-nodejs-applications-with-passport--cms-21619) 's version of using Passport.
    4. [Scotch.io](https://scotch.io/tutorials/easy-node-authentication-setup-and-local) 's version of login using passport.
    5. [Example 2](https://github.com/scotch-io/easy-node-authentication/tree/local)

2. Mistake two: password reset
    1. [See](https://www.owasp.org/index.php/Forgot_Password_Cheat_Sheet) Forgot Password Cheat Sheet
    2. [Okta](https://developer.okta.com/pricing/) 's Auth as a service.
    3. [Sahat Yalkabov](http://sahatyalkabov.com/how-to-implement-password-reset-in-nodejs/) How To Implement Password Reset In Node.js

3. Mistake three: API tokens
    1. [JWT.IO](https://jwt.io/) JSON Web Tokens
    2. [Scotch.io](https://github.com/scotch-io/node-token-authentication) 's version of Authenticate a Node API Using JSON Web Tokens

4. Mistake four: rate limiting
    1. [PortsWigger](https://portswigger.net/burp/help/intruder_using) Blurp User Guide
    1. [Express Rate Limit](https://www.npmjs.com/package/express-rate-limit)
    1. [Express Limiter](https://www.npmjs.com/package/express-limiter)
    1. [Express Brute](https://www.npmjs.com/package/express-brute)
    1. [Reverse Proxy](https://expressjs.com/en/advanced/best-practice-performance.html#use-a-reverse-proxy)
    1. [Rate Limiting Behind NGINX](https://www.nginx.com/blog/rate-limiting-nginx/)

---
#### Comments Outline
---
https://www.youtube.com/watch?v=EAaweXzUVh4

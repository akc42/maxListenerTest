# maxListenerTest

The purpose of this repository is to demonstrate how using `http2` with `serve-static` will reliably
generate MaxListenersExceededWarning warnings with as simple a setup as possible.

In order to use http2 you must use an *ssl certificte*.  The two files certificate.pem and key.pem are the certificates generated my me as a certificate authority for the dual domain names `maxtest.dev` and `maxtest.local`.  You will need to set your local dns up  so that one of those two names match the ip address of the machine you run the code on.

## Setup
```
cd server
npm install
node server.js
```
## running the test
Use your browser to navigate to `https://maxtext.dev:8443`

This should be enough to generate the warnings (once only).  Stop the server with ^C

You can then repeat again.

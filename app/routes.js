//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// Add your routes here



    // Local auth
    router.post('/account/thirdParty/localauth/sign-in-local-auth', function(request, response) {
        var authsignin = request.session.data['authsignin']; 
        if (authsignin == "government-gateway") {
            response.redirect("/gov-gateway/sign-in");
        } else {
            response.redirect("/account/thirdParty/localauth/email");
        }
    });
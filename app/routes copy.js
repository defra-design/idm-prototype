const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

// GET SPRINT NAME - useful for relative templates
router.use('/', (req, res, next) => {
  res.locals.currentURL = req.originalUrl; //current screen
  res.locals.prevURL = req.get('Referrer'); // previous screen

  console.log('folder : ' + res.locals.folder + ', subfolder : ' + res.locals.subfolder  );

  next();
});


// dashboard for a org admin (not agent or individual)
router.get('/manage/dashboard-all', function (req, res) {
    res.render('manage/dashboard',{
      "teamMemberURL": 'team-members/team-members',
      "addAgentURL": '/manage/agent/invite-user/add-user-details',
      "addUserURL": '/manage/team-members/invite-user/add-user-details',
      "agentURL": '/manage/agent/agent',
      "addLocationURL": '/manage/organisations/company-name?addAddress=rel-org&addAccount=related',
      "locationURL": 'organisations/organisation-details',
      "locationAddressCSS": "",
      "showAgentCSS": "",
      "showClientCSS": "govuk-visually-hidden",
      "clientAddressCSS": "govuk-visually-hidden"
    })
})

router.get('/new-organisation-journey/manage/dashboard-all', function (req, res) {
    res.render('manage/dashboard', {
        "teamMemberURL": 'team-members/team-members',
        "addAgentURL": '/manage/agent/invite-user/add-user-details',
        "addUserURL": '/manage/team-members/invite-user/add-user-details',
        "agentURL": '/manage/agent/agent',
        "addLocationURL": '/manage/organisations/company-name?addAddress=rel-org&addAccount=related',
        "locationURL": 'organisations/organisation-details',
        "locationAddressCSS": "",
        "showAgentCSS": "",
        "showClientCSS": "govuk-visually-hidden",
        "clientAddressCSS": "govuk-visually-hidden"
    })
})

// Child dash
router.get('/manage/dashboard-child', function (req, res) {
    res.render('manage/dashboard',{
      "teamMemberURL": 'team-members/team-members',
      "addAgentURL": '/manage/agent/invite-user/add-user-details',
      "addUserURL": '/manage/team-members/invite-user/add-user-details',
      "agentURL": '/manage/agent/agent',
      "addLocationURL": '#',
      "locationURL": 'organisations/organisation-details',
      "locationAddressCSS": "",
      "orgSwitch": '',
      "multiOrgCSS": "govuk-heading-xl--no-margin",
      "showAgentCSS": "",
      "showClientCSS": "govuk-visually-hidden",
      "clientAddressCSS": "govuk-visually-hidden"
    })
})

/////////////////////////////////////
/* ROUTES FOR REGISTRATION JOURNEY */
/////////////////////////////////////

// routing for registration add address type
router.get('/defra-id/check-address-type', function (req, res) {
  // Make a variable from session data
  let addressType = req.session.data['address-type']
  // route depending on value
  // i am not sure why we have this…
  if (addressType === 'billing') {
    res.redirect('add-address-region?new-address=billing')
  } else if (addressType === 'correspondence') {
    res.redirect('add-address-region?new-address=correspondence')
  } else if (addressType === 'operations') {
    res.redirect('add-address-region?new-address=operations')
  }
})

// routing for add address / is the address in the UK?
router.get('/defra-id/is-address-uk', function (req, res) {
  // Make a variable from session data
  let addUkAddress = req.session.data['address-is-uk']
  // route depending on value
  // i am not sure why we have this…
  if (addUkAddress === 'yes') {
    res.redirect('add-address-postcode')
  } else {
    res.redirect('add-non-uk-address')
  }
})

///////////////////////////////////
/* ROUTES FOR ADDRESS MANAGEMENT */
///////////////////////////////////

// routing for manage add address type
router.get('/defra-id-manage/check-address-type', function (req, res) {
  // Make a variable from session data
  let addressType = req.session.data['address-type']
  // route depending on value
  // i am not sure why we have this…
  if (addressType === 'billing') {
    res.redirect('add-address-region?new-address=billing')
  } else if (addressType === 'correspondence') {
    res.redirect('add-address-region?new-address=correspondence')
  } else if (addressType === 'operations') {
    res.redirect('add-address-region?new-address=operations')
  }
})

// routing for add address / is the address in the UK?
router.get('/defra-id-manage/is-address-uk', function (req, res) {
  // Make a variable from session data
  let addUkAddress = req.session.data['address-is-uk']
  // route depending on value
  // i am not sure why we have this…
  if (addUkAddress === 'yes') {
    res.redirect('add-address-postcode')
  } else {
    res.redirect('add-non-uk-address')
  }
})

///////////////////////
/* ROUTES FOR AGENTS */
///////////////////////

// Agent's own company
// router.get('/manage/dashboard-agent-self', function (req, res) {
//     res.render('manage/dashboard',{
//       "teamMemberURL": 'team-members/team-members',
//       "addUserURL": 'manage/team-members/invite-user/add-user-details',
//       "addClientURL": '',
//       "clientURL": '',
//       "addLocationURL": '#',
//       "locationURL": '',
//       "locationAddressCSS": "",
//       "showAgentCSS": "govuk-visually-hidden",
//       "showClientCSS": "",
//       "clientAddressCSS": "govuk-visually-hidden"

//     })
// })

// Agent's - clients
// router.get('/manage/dashboard-agent-client', function (req, res) {
//     res.render('manage/dashboard',{
//       "teamMemberURL": 'team-members/team-members',
//       "addAgentURL": '/manage/agent/invite-user/add-user-details',
//       "addUserURL": 'manage/team-members/invite-user/add-user-details',
//       "agentURL": '/manage/agent/agent',
//       "addLocationURL": '#',
//       "locationURL": 'organisations/organisation-details',
//       "locationAddressCSS": "govuk-visually-hidden",
//       "orgSwitch": '',
//       "multiOrgCSS": "govuk-heading-xl--no-margin",
//       "showAgentCSS": "govuk-visually-hidden",
//       "showClientCSS": "govuk-visually-hidden",
//       "clientAddressCSS": ""

//     })
// })


//////////////////
/* Org switcher */
//////////////////

// routing for registration add address type
router.get('/org-switch/org-pick', function (req, res) {
  var rep = req.session.data['representing']
  if (rep == "has-representation"){
    res.redirect('service-start-complete')
  }
  else {
    res.redirect('account-registration?empty=')
  }
})


/////////////////////////////
////// SCP Login config /////
/////////////////////////////

// Existing user but new to IDM user
router.get('/scp/login-new', function (req, res) {
    res.render('scp/login',{
      "signinButton": '/about-data'
    })
})

// Invited user
router.get('/scp/login-invite', function (req, res) {
    res.render('scp/login',{
      "signinButton": '/about-data'
    })
})
// Existing user - incomplete app: tasklist
router.get('/scp/login-incomplete-tasklist', function (req, res) {
    res.render('scp/login',{
      "signinButton": '/service-start-tasklist-incomplete'
    })
})
// Existing user - incomplete app: service
router.get('/scp/login-incomplete-service', function (req, res) {
    res.render('scp/login',{
      "signinButton": '/service-start-service-incomplete'
    })
})
// Existing admin, standard or agent - complete app
router.get('/scp/login-complete', function (req, res) {
    res.render('scp/login',{
      "signinButton": '/service-start-complete'
    })
})

// Existing admin, standard or agent - complete app
router.get('/scp/login-account', function (req, res) {
    res.render('scp/login',{
      "signinButton": '/manage/team-members/services-on-team-member-admin-account_company'
    })
})

// Existing user - pending app
router.get('/scp/login-pending', function (req, res) {
    res.render('scp/login',{
      "signinButton": '/service-start-pending'
    })
})

// Existing user - pending app
router.get('/scp/login-pending-certifier', function (req, res) {
    res.render('scp/login',{
      "signinButton": 'https://exports-certifiers-prototype.herokuapp.com/certifier-org_post-idm'
    })
})

// Existing user - new service, multiple accounts
router.get('/scp/login-interswitch', function (req, res) {
    res.render('scp/login',{
      "signinButton": '/login-interswitch'
    })
})

// Existing user - update details
//setting overrides in direct to update details page in demo
router.get('/manage/organisations/update-details', function (req, res) {
  //req.session.data['accountType'] = 'Limited Company';
  //req.session.data['userType'] = 'existing';
  //res.render('manage/organisations/update-details', {'accountType' : 'Limited Company'});
  res.render('manage/organisations/update-details')
})
/*router.get('/manage/organisations/charity/update-details', function (req, res) {
  req.session.data['accountType'] = 'charity';
  req.session.data['userType'] = 'existing';
  res.render('manage/organisations/update-details')
})
router.get('/manage/organisations/nonUK/update-details', function (req, res) {
  req.session.data['accountType'] = 'nonUK';
  req.session.data['userType'] = 'existing';
  res.render('manage/organisations/update-details')
})
router.get('/manage/organisations/soletrader/update-details', function (req, res) {
  req.session.data['accountType'] = 'Sole Trader';
  req.session.data['userType'] = 'existing';
  res.render('manage/organisations/update-details')
})

router.get('/manage/organisations/change-address?accountType=soletrader', function (req, res) {
//  req.session.data['accountType'] = 'Sole Trader'
  res.render('new-user-reg/sole-trader/company-postcode')
})*/

/*
router.post('/manage/organisations/company-address', function (req, res) {
    res.redirect('/manage/organisations/update-details?accountType=soletrader');
});*/

// Test Routes
router.get('/tests/ac1', function (req, res) {
    res.render('tests/routes-test',{
      "routeType": "AC1",
      "numAccounts":4
    })
})

router.get('/tests/ac2', function (req, res) {
    res.render('tests/routes-test',{
      "routeType":"AC2",
      "numAccounts":87
    })
})


//IV redirect but store the data first
router.post('/new-user-reg/limited-company/IV', function (req, res) {
  //req.session.data['personalFirstName'] = "Anne"; //backup way of setting dummy data
  //req.session.data['personalSurname'] = "Bloggs";
    res.redirect('https://si-prototype.herokuapp.com/latest/pdv?qRand=true&cl=200&redirect=http://localhost:3000//new-user-reg/limited-company/task-list-page-personal-details?IV=on')
})

//IV redirect but store the data first
router.post('/new-user-reg/limited-company/IVFail', function (req, res) {
  //req.session.data['personalFirstName'] = "Anne"; //backup way of setting dummy data
  //req.session.data['personalSurname'] = "Bloggs";
    res.redirect('https://si-prototype.herokuapp.com/latest/pdv?qRand=true&cl=200&redirect=http://localhost:3000//new-user-reg/limited-company/task-list-page-IV-fail?IV=on')
})



//Cookie settings
router.get('/cookie-settings', function (req, res) {
  req.session.data['savedCookieChanges'] = "";
    res.render('cookie-settings')
})

router.post('/cookie-settings', function (req, res) {
    cookieSettings = []
    cookieSettings.push(req.session.data['usage'], req.session.data['campaigns'], req.session.data['settings']);
    var cookieString = cookieSettings.toString()
    console.log(cookieString);
    switch (cookieString) {
       case  'on,on,on':
         req.session.data['cookiesAccepted'] = true;
         req.session.data['savedCookieChanges'] = true;
       break;
       default:
        req.session.data['savedCookieChanges'] = true;
       break;
     }
    res.redirect('cookie-settings')
})

// routing for verify
router.get('/mfa/select-number', function (req, res) {
  // Make a variable from session data
  var telNum = req.session.data['telephone']
  // route depending on value
  if (telNum === 'tel1') {
    res.redirect('get-code')
  } else {
    res.redirect('verify-error')
  }
})

// routing for verify
router.get('/mfa/select-number-v2', function (req, res) {
  // Make a variable from session data
  var telNum = req.session.data['telephone']
  // route depending on value
  if (telNum === 'tel1') {
    res.redirect('get-code-v2')
  } else {
    res.redirect('/mfa/security-word')
  }
})

// routing for phone or emal
router.get('/mfa/sms-email', function (req, res) {
  // Make a variable from session data
  var telNum = req.session.data['verify-your-identity']
  // route depending on value
  if (telNum === 'send-sms') {
    res.redirect('get-code-v2')
  } else {
    res.redirect('/mfa/security-word')
  }
})


// routing for phone or email v2
router.get('/mfa-V2/sms-email', function (req, res) {
  // Make a variable from session data
  var telNum = req.session.data['verify-your-identity']
  // route depending on value
  if (telNum === 'send-sms') {
    res.redirect('get-code-v2')
  } else {
    res.redirect('/mfa-V2/core/security-word')
  }
})



// routing for phone or email v2
router.get('/mfa-V2/sms-email-switch-a', function (req, res) {
  // Make a variable from session data
  var telNum = req.session.data['verify-your-identity']
  // route depending on value
  if (telNum === 'send-sms') {
    res.redirect('get-code-v2')
  } else {
    res.redirect('/mfa-V2/email-switch-button/security-word')
  }
})


// routing for phone or email v2
router.get('/mfa-V2/sms-email-switch-b', function (req, res) {
  // Make a variable from session data
  var telNum = req.session.data['verify-your-identity']
  // route depending on value
  if (telNum === 'send-sms') {
    res.redirect('get-code-v2')
  } else {
    res.redirect('/mfa-V2/email-switch-link/security-word')
  }
})










// Routes for Vets examples/scenarios




// Ed's' example

// if ( (a == 'b') && ( c == 'd') ) {}


// added for the registration pages
// router.use('/defra-id', require('./views/defra-id/_routes'));

// Vets visits


// added routes for target address
// router.use('/target/defra-id', require('./views/target/defra-id/_routes'));
// router.use('/tasked/defra-id', require('./views/tasked/defra-id/_routes'));

module.exports = router

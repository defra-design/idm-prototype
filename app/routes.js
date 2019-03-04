const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

module.exports = router

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


// dashboard for a org admin (not agent or individual)
router.get('/manage/dashboard-all', function (req, res) {
    res.render('manage/dashboard',{
      "teamMemberURL": 'team-members/team-members',
      "addAgentURL": 'agent/invite-user/add-user-details',
      "agentURL": 'agent/agent',
      "addLocationURL": '/manage/organisations/company-name?addAddress=rel-org&addressCSS4=show',
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
      "addAgentURL": 'agent/chemicals/invite-user/add-user-details',
      "agentURL": 'agent/agent',
      "addLocationURL": '#',
      "locationURL": 'organisations/organisation-details',
      "locationAddressCSS": "",
      "orgSwitch": '',
      "multiOrgCSS": "govuk-heading-xl--no-margin",
      "showAgentCSS": "govuk-visually-hidden",
      "showClientCSS": "govuk-visually-hidden",
      "clientAddressCSS": "govuk-visually-hidden"

    })
})


// Agent's own company
router.get('/manage/dashboard-agent-self', function (req, res) {
    res.render('manage/dashboard',{
      "teamMemberURL": 'team-members/team-members',
      "addClientURL": '',
      "clientURL": '',
      "addLocationURL": '#',
      "locationURL": '',
      "locationAddressCSS": "",
      "showAgentCSS": "govuk-visually-hidden",
      "showClientCSS": "",
      "clientAddressCSS": "govuk-visually-hidden"

    })
})

// Agent's - clients
router.get('/manage/dashboard-agent-client', function (req, res) {
    res.render('manage/dashboard',{
      "teamMemberURL": 'team-members/team-members',
      "addAgentURL": 'agent/chemicals/invite-user/add-user-details',
      "agentURL": 'agent/agent',
      "addLocationURL": '#',
      "locationURL": 'organisations/organisation-details',
      "locationAddressCSS": "govuk-visually-hidden",
      "orgSwitch": '',
      "multiOrgCSS": "govuk-heading-xl--no-margin",
      "showAgentCSS": "govuk-visually-hidden",
      "showClientCSS": "govuk-visually-hidden",
      "clientAddressCSS": ""

    })
})


////// SCP Login config /////
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

// Existing user - pending app
router.get('/scp/login-pending', function (req, res) {
    res.render('scp/login',{
      "signinButton": '/service-start-pending'
    })
})

// Existing user - new service, multiple accounts
router.get('/scp/login-interswitch', function (req, res) {
    res.render('scp/login',{
      "signinButton": '/interswitch'
    })
})

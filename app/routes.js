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

// Dashboard config: //
// 1 user and no agents
router.get('/manage/dashboard-all-1', function (req, res) {
    res.render('manage/dashboard',{
      "teamMemberURL": 'team-members/team-members-all-1',
      "addAgentURL": 'agent/invite-user/add-user-details',
      "agentURL": 'agent/agent-0',
      "addLocationURL": '#',
      "locationURL": 'organisations/organisation-details?orgName=Acme Org Ltd',
      "serviceCSS": 'govuk-visually-hidden',
      "orgSwitch": 'govuk-visually-hidden',
      "orgName": "Acme Org Ltd"
    })
})

// 2 users and 1 agent
router.get('/manage/dashboard-all-2', function (req, res) {
    res.render('manage/dashboard',{
      "teamMemberURL": 'team-members/team-members-all-2',
      "addAgentURL": 'agent/invite-user/add-user-details',
      "agentURL": 'agent/agent-0',
      "addLocationURL": '#',
      "locationURL": 'organisations/organisation-details?orgName=Acme Org Ltd',
      "serviceCSS": 'govuk-visually-hidden',
      "orgSwitch": 'govuk-visually-hidden',
      "orgName": "Acme Org Ltd"
    })
})

// 5 users and 3 agents
router.get('/manage/dashboard-all', function (req, res) {
    res.render('manage/dashboard',{
      "teamMemberURL": 'team-members/team-members-all',
      "addAgentURL": 'agent/chemicals/invite-user/add-user-details',
      "agentURL": 'agent/agent-all',
      "addLocationURL": '#',
      "locationURL": 'organisations/organisation-details?orgName=Acme Org Ltd',
      "orgSwitch": 'govuk-visually-hidden',
      "orgName": "Acme Org Ltd"
    })
})

// Multi orgs eg agent
router.get('/manage/dashboard-all-agent', function (req, res) {
    res.render('manage/dashboard',{
      "teamMemberURL": 'team-members/team-members-all',
      "addAgentURL": 'agent/chemicals/invite-user/add-user-details',
      "agentURL": 'agent/agent-all',
      "addLocationURL": '#',
      "locationURL": 'organisations/organisation-details?orgName=Acme Org Ltd',
      "orgName": "Acme Org Ltd"

    })
})

// Team members config //
// Single user / plus 1
router.get('/manage/team-members/team-members-all-1', function (req, res) {
    res.render('manage/team-members/team-members',{
      "otherUserCSS": 'govuk-visually-hidden',
      "newUserCSS": ' govuk-visually-hidden'
    })
})

// All users / plus 1
router.get('/manage/team-members/team-members-all', function (req, res) {
    res.render('manage/team-members/team-members',{
      "newUserCSS": ' govuk-visually-hidden'
    })
})

// Agent config //
// No agent / plus 1
router.get('/manage/agent/agent-0', function (req, res) {
    res.render('manage/agent/agent',{
      "otherUserCSS": 'govuk-visually-hidden',
      "tableCSS": 'govuk-visually-hidden'
    })
})

// All agents / plus 1
router.get('/manage/agent/agent-all', function (req, res) {
    res.render('manage/agent/agent',{
      "introCSS": 'govuk-visually-hidden',
      "newUserCSS": 'govuk-visually-hidden'
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

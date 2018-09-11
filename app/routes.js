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

// Dashboard config:
// 1 user and no agents
router.get('/manage/dashboard-all-1', function (req, res) {
    res.render('manage/dashboard',{
      "numUsers":1,
      "numServices":1,
      "numAgents":0,
      "numLocations":1,
      "addUserURL": 'team-members/chemicals/invite-user/add-user-details-1',
      "teamMemberURL": 'team-members/team-members-all-1',
      "addAgentURL": 'agent/chemicals/add-agent-1/add-agent-details',
      "agentURL": 'agent/agent-all-0',
      "addLocationURL": '#',
      "locationURL": 'organisations/organisation-all-1',
      "serviceCSS": 'govuk-visually-hidden',
      "accountNavURL": 'includes/account-nav-admin-corp-all-1.html'

    })
})

// 2 users and no agents
router.get('/manage/dashboard-all-2', function (req, res) {
    res.render('manage/dashboard',{
      "numUsers":2,
      "numServices":1,
      "numAgents":0,
      "numLocations":1,
      "addUserURL": 'team-members/chemicals/invite-user/add-user-details-1',
      "teamMemberURL": 'team-members/team-members-all-2',
      "addAgentURL": 'agent/chemicals/add-agent-1/add-agent-details',
      "agentURL": 'agent/agent-all-1',
      "addLocationURL": '#',
      "locationURL": 'organisations/organisation-all-1',
      "serviceCSS": 'govuk-visually-hidden',
      "accountNavURL": 'includes/account-nav-admin-corp-all-2.html'
    })
})

// 22 users and 3 agents
router.get('/manage/dashboard-all', function (req, res) {
    res.render('manage/dashboard',{
      "numUsers":22,
      "numServices":3,
      "numAgents":3,
      "numLocations":3,
      "addUserURL": 'team-members/chemicals/invite-user/add-user-details-many',
      "teamMemberURL": 'team-members/team-members-all',
      "addAgentURL": 'agent/chemicals/add-agent-1/add-agent-details',
      "agentURL": 'agent/agent-all',
      "addLocationURL": '#',
      "locationURL": 'organisations/organisation-all',
      "accountNavURL": 'includes/account-nav-admin-corp.html'
    })
})

// Invite user config
// invited user and no service
router.get('/manage/team-members/services-on-team-member-invited-no-service', function (req, res) {
    res.render('manage/team-members/services-on-team-member-invited',{
      "serviceCSS": 'govuk-visually-hidden',
      "subscribeService": "No"
    })
})

// invited user and no service
router.get('/manage/team-members/services-on-team-member-invited-service', function (req, res) {
    res.render('manage/team-members/services-on-team-member-invited',{
      "inviteCSS": 'govuk-visually-hidden',
      "subscribeService": "Yes"
    })
})

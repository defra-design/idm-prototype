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
      "numUsers": 1,
      "numServices":1,
      "numAgents":0,
      "numLocations":1,
      "teamMemberURL": 'team-members/team-members-all-1',
      "addAgentURL": 'agent/chemicals/add-agent-1/add-agent-details',
      "agentURL": 'agent/agent-all-0',
      "addLocationURL": '#',
      "locationURL": 'organisations/organisation-all-1',
      "serviceCSS": 'govuk-visually-hidden'
    })
})

// 2 users and no agents
router.get('/manage/dashboard-all-2', function (req, res) {
    res.render('manage/dashboard',{
      "numUsers":2,
      "numServices":1,
      "numAgents":0,
      "numLocations":1,
      "teamMemberURL": 'team-members/team-members-all-1',
      "addAgentURL": 'agent/chemicals/add-agent-1/add-agent-details',
      "agentURL": 'agent/agent-all-1',
      "addLocationURL": '#',
      "locationURL": 'organisations/organisation-all-1',
      "serviceCSS": 'govuk-visually-hidden'
    })
})

// 22 users and 3 agents
router.get('/manage/dashboard-all', function (req, res) {
    res.render('manage/dashboard',{
      "numUsers":22,
      "numServices":3,
      "numAgents":3,
      "numLocations":3,
      "teamMemberURL": 'team-members/team-members-all',
      "addAgentURL": 'agent/chemicals/add-agent-1/add-agent-details',
      "agentURL": 'agent/agent-all',
      "addLocationURL": '#',
      "locationURL": 'organisations/organisation-all'
    })
})

// Invite user config
// invited user and no service
router.get('/manage/team-members/services-on-team-member-invited-no-service', function (req, res) {
    res.render('manage/team-members/services-on-team-member-invited',{
      "serviceHideCSS": 'govuk-visually-hidden',
      "subscribeService": "No"
    })
})

// invited user and no service
router.get('/manage/team-members/services-on-team-member-invited-service', function (req, res) {
    res.render('manage/team-members/services-on-team-member-invited',{
      "subscribeService": "Yes"
    })
})

// Team members config
// Single user
router.get('/manage/team-members/team-members-all-1', function (req, res) {
    res.render('manage/team-members/team-members',{
      "otherUserCSS": 'govuk-visually-hidden'
    })
})

// all users, but no newly added user
router.get('/manage/team-members/team-members-all', function (req, res) {
    res.render('manage/team-members/team-members',{
    })
})

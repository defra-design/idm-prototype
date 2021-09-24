const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line


// Routing for changing organisation-type.html
router.post('*/change-organisation-type-choice', function (req, res) {
  var defraIdType = req.session.data['defraIdType']
  if (defraIdType == "individual"){
    res.redirect('task-list-page-about-you-details')
  }
  else {
    res.redirect('organisation-UK-or-else')
  }
})

// Routing for organisation-type.html
router.post('*/organisation-type-choice', function (req, res) {
    var defraIdType = req.session.data['defraIdType']
    if (defraIdType == "individual"){
        // res.redirect('personal-name?route=individual')
        res.redirect('personal-name')
    }
    else {
        res.redirect('organisation-UK-or-else')
        // res.redirect('organisation-UK-or-else?route=company')
    }
})

// Routing for organisation-UK-or-else.html
router.post('*/organisation-uk-choice', function (req, res) {
    var defraIdCompanyRegisteredLocation = req.session.data['defraIdCompanyRegisteredLocation']
    if (defraIdCompanyRegisteredLocation == "non-uk"){
        res.redirect('non-uk-business-name?orgType=non-uk-org')
    }
    else {
        res.redirect('company-registered-question?orgType=uk-org')
    }
})


// Routing for company-registered-question.html
router.post('*/companieshouse-choice', function (req, res) {
    var defraIdCompaniesHouse = req.session.data['defraIdCompaniesHouse']
    if (defraIdCompaniesHouse == "companies-house-no"){
      res.redirect('sole-trader-or-charity')
    }
    else {
      res.redirect('company-lookup')
    }
})


// Routing for sole trader or charity question
router.post('*/org-choice', function (req, res) {
    var orgType = req.session.data['defraIdSoleTraderOrCharity']
    if (orgType == "sole-trader"){
        res.redirect('personal-name?orgType=sole-trader')
    }
    else {
        res.redirect('charity-region?orgType=charity')
    }
    /* could de-dupe here */
})


// Routing for adding company addresses in registration
router.post('*/add-addresses', function (req, res) {
  var addExtraAddress = req.session.data['defraIdAddAddresses']
  var version = req.session.data['version']
  if (addExtraAddress === 'yes') {
    res.redirect('add-address-type')
  } else {
    res.redirect('task-list')
  }
})

// Routing for adding charity addresses in registration
router.post('*/add-charity-addresses', function (req, res) {
  var addExtraAddress = req.session.data['defraIdAddAddresses']
  if (addExtraAddress === 'yes') {
    res.redirect('add-address-type')
  } else {
    res.redirect('task-list-page-charity-details')
  }
})


// Redundant now
// Routing for adding company addresses in registration
router.post('*/check-personal-name', function (req, res) {
  var checkPersonalName = req.session.data['personal-name']
  if (checkPersonalName === 'yes') {
    res.redirect('personal-contact')
  } else {
    // res.redirect('personal-name')
    res.redirect('your-name')
  }
})

module.exports = router

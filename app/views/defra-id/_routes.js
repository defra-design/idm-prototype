const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line

// Routing for organisation-type.html
router.post('*/organisation-type-choice', function (req, res) {
    var defraIdType = req.session.data['defraIdType']
    if (defraIdType == "individual"){
        res.redirect('individual-name')
    }
    else {
        res.redirect('organisation-UK-or-else')
    }
})


// Routing for organisation-UK-or-else.html
router.post('*/organisation-uk-choice', function (req, res) {
    var defraIdUk = req.session.data['defraIdUk']
    if (defraIdUk == "non-uk"){
        res.redirect('non-uk')
    }
    else {
        res.redirect('company-registered-question')
    }
})


// Routing for company-registered-question.html
router.post('*/companieshouse-choice', function (req, res) {
    var defraIdCompaniesHouse = req.session.data['defraIdCompaniesHouse']
    if (defraIdCompaniesHouse == "no"){
        res.redirect('')
    }
    else {
        res.redirect('company-lookup')
    }
})

// Routing for company-registered-question.html
router.post('*/add-addresses', function (req, res) {
  var addExtraAddress = req.session.data['added-address']
  if (addExtraAddress === 'yes') {
    res.redirect('add-address-type')
  } else {
    res.redirect('task-list-page-company-details')
  }
})




module.exports = router

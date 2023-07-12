const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// console.log( 'This is the V1 _routes file' );

// claimed BPS

router.get('*/bps-validation', function (req, res) {
  const option = req.session.data.bps

  if (option === 'Yes') {
    res.redirect('farm-size')
  } else {
    res.redirect('other-funding')
  }
})

router.get('*/change-bps-validation', function (req, res) {
  const option = req.session.data['change-bps']

  if (option === 'Yes') {
    res.redirect('sfi-summary')
  } else {
    res.redirect('other-funding')
  }
})

// farm size or SBI lookup

router.get('*/land-amount-validation', function (req, res) {
  const option = req.session.data['land-amount']

  if (option === 'area') {
    res.redirect('select-standard')
  } else {
    res.redirect('loading')
  }
})

router.get('*/change-land-amount-validation', function (req, res) {
  const option = req.session.data['land-amount']

  if (option === 'area') {
    res.redirect('sfi-summary')
  } else {
    res.redirect('loading')
  }
})

router.get('*/sbi-check-validate', function (req, res) {
  const option = req.session.data['sbi-area']

  if (option === 'yes') {
    res.redirect('select-standard-sbi')
  } else {
    res.redirect('farm-size')
  }
})

// SFI summary

router.get('*/sfi-summary-validation', function (req, res) {
  const option = req.session.data['continue-application']

  if (option === 'yes') {
    res.redirect('task-list')
  } else {
    res.redirect('select-standard')
  }
})

module.exports = router

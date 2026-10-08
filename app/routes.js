const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Route 1: Options for use radio selection
router.post('/options-for-use-answer', function (req, res) {
  const selection = req.body['optionsForUse']

  if (!selection) {
    return res.render('extra-details', {
      errors: {
        optionsForUse: { text: "Select if you are using the service for work or personal use" }
      }
    })
  }

  const redirectUrls = {
    organisation: 'org-journey/organisation-details',
    personal: '/personal-details',
    agent: '/agent-details'
  }

  res.redirect(redirectUrls[selection])
})

// Route 2: Terms and conditions check
router.post('/personal-details', function (req, res) {
  const tsandcs = req.session.data['tsandcs']

  if (!tsandcs) {
    return res.render('personal-details', {
      errors: {
        tsandcs: {
          text: "Select the checkbox to accept the terms and conditions"
        }
      },
      errorList: [
        {
          text: "Select the checkbox to accept the terms and conditions",
          href: "#tsandcs"
        }
      ]
    })
  }

  req.session.data['tsandcs'] = tsandcs
  res.redirect('/name')
})

// Route 3: Name page validation (First Name & Last Name)
router.post('/name', function (req, res) {
  const firstName = req.body.firstName ? req.body.firstName.trim() : ''
  const lastName = req.body.lastName ? req.body.lastName.trim() : ''

  const errors = {}
  const errorList = []

  if (!firstName) {
    errors.firstName = { text: "Enter your first name" }
    errorList.push({ text: "Enter your first name", href: "#first-name" })
  }

  if (!lastName) {
    errors.lastName = { text: "Enter your last name" }
    errorList.push({ text: "Enter your last name", href: "#last-name" })
  }

  if (errorList.length > 0) {
    return res.render('name', { errors, errorList })
  }

  // Save valid data to session before proceeding
  req.session.data['firstName'] = firstName
  req.session.data['lastName'] = lastName

  // Branch routing based on the initial journey choice
  const journeyType = req.session.data['optionsForUse']

  if (journeyType === 'organisation') {
    res.redirect('/org-journey/org-reg')
  } else {
    // Default or 'personal' / 'agent' journey
    res.redirect('/live-in-uk')
  }
})

// Route 4: Terms and conditions check on organisation-details page
router.post('/org-journey/organisation-details', function (req, res) {
  const tsandcs = req.session.data['tsandcs']

  if (!tsandcs || tsandcs.length === 0) {
    return res.render('/org-journey/organisation-details', {
      errors: {
        tsandcs: {
          text: "Select the checkbox to accept the terms and conditions"
        }
      },
      errorList: [
        {
          text: "Select the checkbox to accept the terms and conditions",
          href: "#tsandcs"
        }
      ]
    })
  }

  res.redirect('/name')
})

//Route 5: Changing the org journey depending on Companies House number entered

router.post('/org-journey/org-reg-number', function (req, res) {
  // Trim whitespace from input
  const orgNumber = req.session.data['orgNumber'] ? req.session.data['orgNumber'].trim() : ''

  if (orgNumber === '') {
    // Scenario 1: Blank input
    res.redirect('/org-journey/right-org')
  } else if (orgNumber === '01234567') {
    // Scenario 2: Specific numeric ID
    res.redirect('/org-journey/org-existing')
  } else if (orgNumber === 'AC012345') {
    // Scenario 3: Specific alphanumeric ID
    res.redirect('/org-existing-2')
  } else {
    // Optional fallback for any other unexpected entry
    res.redirect('/org-journey/org-existing')
  }
})

module.exports = router
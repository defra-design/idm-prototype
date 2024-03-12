/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sara Chippers",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {
  
  defaultAccount: "thirdParty",

  govGateEmail: "hugo.furst@govgateway.test",
  registrationStatus: "Enrolled",
  termsAndConditions: "Viewed",
  
  // Ltd Company
  registrationAccountType: "Business",
  registrationTradeUK: "Yes",
  registrationCompanyRegistrationNumber: "Yes",
  registrationCompanyNumber: "01234567",
  registrationCompanyAddress: "19 Hoults Yard, Walker Road, Newcastle upon Tyne NE6 2HL",
  registrationConfirmedAddress: "Yes",
  registrationPhone: "07985439576",
  registrationEmail: "hugo.furst@hauntedhouse.com",
  defraIdFirstName: "Hugo",
  defraIdSurname: "Furst",
  registrationContactPhonePersonal: "00700700788",
  registrationMemorableWord: "Jordan23",
  registrationMemorableHint: "The one and only goat",
  defaultCompanyName: "Soleheaven Ltd",
  defaultServiceEnrolment: "IPAFFS",
  defaultServiceRole: "Notifier",


  // Individual
  // registrationAccountType: "Individual",
  // defraIdFirstName: "Hugo",
  // defraIdSurname: "Furst",
  // registrationContactPhonePersonal: "00700700788",
  // registrationIndividualAddress: "2a, Clifton House, Clifton Road, LONDON SW19 5JA"
  // registrationMemorableWord: "Jordan23",
  // registrationMemorableHint: "The one and only goat",  
  // defaultServiceEnrolment: "IPAFFS",
  // defaultServiceRole: "Notifier",
  






  //"businessType": "Limited company",
  // "govGateName": "Sam Woods",
  // "orgName": "Antillo Fujam Gardens",
  // "companyRegNum": "12345678",
  // "businessTelephone": "0171 444555666",
  // "businessEmail": "simone@org.com ",
  // "numUsers": "5",
  // "numChildUsers": "1",
  // "numServices": "1",
  // "numAgents": "0",
  // "numLocations": "1",
  // "systemRole":"Admin",
  // "service": "Imports",
  // "serviceLine": "Comply with UK REACH",
  // "serviceRole": "REACH manager",
  // "userType": "new",
  // "subscribeService": "no",
  // "accountAccess": "no",
  // "serviceAccess":"no",
  // "verifiedUser": "pending",
  // "flowType": "task",
  // "sub-building-number": "1b",
  // "building-number": "12",
  // "street-name": "The Grove",
  // "address-town": "Mytown",
  // "address-postcode": "MY3 4RF",
  // "address-country": "UK",
  // "IV": "off",
  // "clientService": "UK Reach",
  // "defraIdFirstName": "",
  // "defraIdSurname": "",
  // "IVRes": "success"


  //Local authority
  defaultThirdParty: "Local authority",
  defaultThirdPartyName: "Newcastle City Council"

}

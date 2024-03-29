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

  // Default always needed
  userFlow: "Registration",
  serviceFlow: "coreDefault",
  companySize: "20",
  mfaStatus: "disabled",
  govGateUserId: "71 13 56 15 22 14",
  govGatePassword: "letmein",
  
  // Ltd Business
  // registrationAccountType: "Business",
  defaultCompanyNumber: "01234568",
  defaultCompanyAddress: "19 Hoults Yard, Walker Road, Newcastle upon Tyne NE6 2HL",
  defaultCompanyName: "Soleheaven Ltd",

  //  Local authority
  defaultThirdParty: "Local authority",
  defaultThirdPartyName: "Newcastle City Council",
  defaultThirdPartyAddress: "Civic Centre, 2nd Floor, Newcastle upon Tyne, NE1 8QH",
  defaultThirdPartyCEO: "Cris P Bacon",
  defaultThirdPartyCEORole: "Chief Executive Officer (CEO)",
  defaultThirdPartyCEOPhone: "00700700788",
  defaultThirdPartyCEOEmail: "chris.p.bacon@localauthority.default",
  defaultThirdPartyCEOServiceRole: "Managing waste data",
  // defaultThirdPartyCeoRegistered: "Yes",
   // defaultThirdPartyUserOneResponsibility: "Adding and amending bank details",
   // defaultThirdPartyUserOneAdmin: "Yes",
   // defaultThirdPartyUserOneEmail: "hugo.furst@localauthority.co.uk"
 

  // Individual
  // registrationAccountType: "Individual",
  // defaultFirstName: "Hugo",
  // defaultSurname: "Furst",
  // defaultIndividualName: "Hugo Furst",
  // defaultIndividualPhone: "00700700788",
  // defaultIndividualAddress: "15B Kensington Palace Gardens,<br> London,<br> W8 4QG",
  // registrationIndividualPostcode: "W8 4QG",
  // defaultIndividualWord: "Jordan23",
  // defaultIndividualHint: "The one and only goat",  
  // defaultServiceEnrolment: "IPAFFS",
  // defaultServiceRole: "Notifier",

  // Business
  // registrationTradeUK: "Yes",
  // registrationCompanyRegistrationNumber: "Yes",  
  // defaultPhone: "07985439576",
  // defaultEmail: "hugo.furst@soleheaven.com",
  // defaultFirstName: "Hugo",
  // defaultSurname: "Furst",
  // registrationContactPhonePersonal: "00700700788",
  // registrationMemorableWord: "Jordan23",
  // registrationMemorableHint: "The goat",
  

  // Sole Trader
  // registrationSoleTraderName: "Soleheaven",
  // registrationSoleTraderAddress: "19 Hoults Yard, Walker Road, Newcastle upon Tyne NE6 2HL",
  // registrationSoleTraderPhone: "0191 468 2009",
  // registrationSoleTraderEmail: "soletrader@soleheaven.com",
  // registrationOrganisationType: "Sole trader",
  // defaultFirstName: "Hugo",
  // defaultSurname: "Furst",

  // Charity
  // registrationOrganisationType: "Charity",
  // defaultCharityName: "Urban Green Newcastle",
  // defaultCharityNumber: "1182534",
  // defaultCharityAddress: "Ouseburn Parks Visitor Centre,<br>Red Walk,<br>Jesmond Dene,<br>NEWCASTLE UPON TYNE, <br>NE7 7BQ",
  // defaultCharityPhone: "01918144574",
  // defaultCharityEmail: "info@urbangreennewcastle.org",
  // defaultFirstName: "Hugo",
  // defaultSurname: "Furst",
  // registrationContactPhonePersonal: "00700700788",
  // registrationMemorableWord: "Jordan23",
  // registrationMemorableHint: "The goat",
  
  // NON Uk business
  // defaultBusinessNonUkName: "Sneakerium",
  // defaultBusinessNonUkAddress: "116 Rue d'Antibes, 06400 Cannes, France",
  // defaultBusinessNonUKPhone: "0033 483 4425 76",
  // defaultBusinessNonUKEmail: "nonuk@sneakerium.fr",
  // defaultFirstName: "Hugo",
  // defaultSurname: "Furst",
  // registrationContactPhonePersonal: "00700700788",
  // registrationMemorableWord: "Jordan23",
  // registrationMemorableHint: "The goat",
  


  
  // govGateEmail: "hugo.furst@govgateway.default",
  // registrationStatus: "incomplete",
  // registrationStatus: "Enrolled",
  
  // Third Party Account
  // defaultAccount: "thirdParty",
  
  
  

  
  
  
  // defaultServiceEnrolment: "IPAFFS",
  // registrationConfirmedAddress: "Yes",
  
  
  
  
  
  // Account variables  
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
  // "defaultFirstName": "",
  // "defaultSurname": "",
  // "IVRes": "success"


 
}

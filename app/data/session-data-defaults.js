/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {


"orgName": "Acme Org Ltd",
"numUsers": "5",
"numServices": "3",
"numAgents": "3",
"service": "Chemicals",
"serviceLine": "UK-REACH-IT",
"serviceRole": "REACH Manager",
"userType": "new",
"subscribeService": "No",
"flowType": "task"


  // Insert values here

}

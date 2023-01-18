const { DateTime } = require('luxon')

exports.isoDateFromDateInputs = (year, month, day) => {
  return DateTime.local(parseInt(year), parseInt(month), parseInt(day)).toISODate()
}

exports.addHelpers = function (env) {
  env.addGlobal('isoDateFromDateInputs', exports.isoDateFromDateInputs)
}

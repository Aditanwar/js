const accountId = 14567
let accountEmail= "adi@gmail.com"
var accountPassword="12345"
accountCity="banagalore"

//   accountId=2 not allowed

accountEmail="bibi@gmail.com"
accountPassword="67859"
accountCity="mumbai"

/*
prefer not to use var because of iisue in blockk scope
*/
console.log(accountId)
console.table([accountEmail,accountPassword, accountCity])
const accountId = 12345678
/*
the value of accountId can't be changed further as it is intialised as const
*/
let accountEmail = "Chakri@gmail.com"
var accountPassword = 12345
accountCity = "Hyderabad"
let accountState

/*
var is not used much because of the scope problem.
*/

accountEmail = "learning@gmail.com"
accountPassword = 54321
accountCity = "Pocharam"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/* console.table is used to display the output in the form of a table.*/
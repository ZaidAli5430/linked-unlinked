// find all the users that have not been linked
const { allUsers, linked } = require('./users')

// console.log(linked)

function getUnlinkedUsers(allUsers, linked) {
	let unlinkedUsers = []
	allUsers.map((user) => {
		if (!linked.some((linkedUser) => linkedUser.id === user.id)) {
			unlinkedUsers.push(user)
		} 
	})
	console.log(unlinkedUsers)
}

getUnlinkedUsers(allUsers, linked)

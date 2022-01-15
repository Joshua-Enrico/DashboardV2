
function LoginMutation(username, password) {
    return `mutation {
        login (
            username: "${username}",
            password: "${password}"
        ) {
            username
            firstName
            lastName
            role
            token
            id
        }
    }`
}

export { LoginMutation };
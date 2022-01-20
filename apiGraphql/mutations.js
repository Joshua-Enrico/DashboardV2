
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

function MailingResetLink(email) {
    return `mutation {
        recoverPassword(
            email: "${email}"
        )
    }`

}

export { LoginMutation, MailingResetLink };
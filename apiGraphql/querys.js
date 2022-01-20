
function ValResetQry(id) {
    return `query {
        resetValidate(
          UserId: "${id}"){
    					id
    					name
 				 }
      }`
}

function ResetPassword(id, pwd, rpeatedpwd) {
  return `mutation {
    resetPassword(
      id: "${id}"
      password: "${pwd}"
      confirmPassword: "${rpeatedpwd}"
    )
  }`
}

export { ValResetQry, ResetPassword };
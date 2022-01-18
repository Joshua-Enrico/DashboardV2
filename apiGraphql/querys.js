
function ValResetQry(id) {
    return `query {
        resetValidate(
            UserId: "${id}"
            )
      }`
}

export { ValResetQry };
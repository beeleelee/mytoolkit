export const isEmail = (emailAdress) => {
  let emailRE = /^(?:[-\w])+(?:\.[-\w]+)*@(?:[-\w])+(?:(?:\.[-\w]+)+)$/
  if (emailAdress && emailRE.test(emailAdress)) {
    return true
  }

  return false
}

export default isEmail 
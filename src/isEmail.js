/**
 * @desc check the format for the input email 
 * 
 * @params {String} emailAddress - a email address
 * @returns {Boolean} - true | false 
 */
export const isEmail = (emailAddress) => {
  let emailRE = /^(?:[-\w])+(?:\.[-\w]+)*@(?:[-\w])+(?:(?:\.[-\w]+)+)$/
  if (emailAddress && emailRE.test(emailAddress)) {
    return true
  }

  return false
}

export default isEmail 
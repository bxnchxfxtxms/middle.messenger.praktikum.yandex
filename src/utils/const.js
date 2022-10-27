const baseUrl = 'http://localhost:3000'

const profileFormClassModificators = {
  formLabel: 'form__form-label_place_profile',
  inputFieldTitle: 'form__input-field-title_place_profile',
  inputField: 'form__input-field_place_profile',
  inputError: 'form__input-error_place_profile'
}

const notFoundErrorPageButton = document.getElementById('404')
const internalServerErrorPageButton = document.getElementById('500')
const loginPageButton = document.getElementById('login')
const signinPageButton = document.getElementById('signin')
const chatsPageButton = document.getElementById('chats')
const profilePageButton = document.getElementById('profile')

export {
  baseUrl,
  profileFormClassModificators,
  notFoundErrorPageButton,
  internalServerErrorPageButton,
  loginPageButton,
  signinPageButton,
  chatsPageButton,
  profilePageButton
}

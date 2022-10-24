import './modules/error'
import './modules/authorizationForm'
import './modules/formInputField'
import './modules/button'
import './modules/avatar'
import { internalServerErrorPage } from './pages/internalServerErrorPage/index'
import { notFoundErrorPage } from './pages/notFoundErrorPage/index'
import { loginPage } from './pages/loginPage/index'
import { signinPage } from './pages/signinPage/index'
import { profilePage } from './pages/profilePage/index'
import { editPasswordPage } from './pages/editPasswordPage/index'
import { editProfilePage } from './pages/editProfilePage/index'
import { chats } from './pages/chats/index'
import {
  notFoundErrorPageButton,
  internalServerErrorPageButton,
  loginPageButton,
  signinPageButton,
  chatsPageButton,
  profilePageButton
} from './utils/const'

const page = document.querySelector('page')

page.innerHTML = chats

notFoundErrorPageButton.onclick = () => page.innerHTML = notFoundErrorPage
internalServerErrorPageButton.onclick = () => page.innerHTML = internalServerErrorPage
loginPageButton.onclick = () => page.innerHTML = loginPage
signinPageButton.onclick = () => page.innerHTML = signinPage
profilePageButton.onclick = () => page.innerHTML = profilePage
chatsPageButton.onclick = () => page.innerHTML = chats

// if (window.location.href === `${baseUrl}/chats`) {
//   page.innerHTML = chats
// } else if (window.location.href === `${baseUrl}/404`) {
//   page.innerHTML = notFoundErrorPage
// } else if (window.location.href === `${baseUrl}/500`) {
//   page.innerHTML = internalServerErrorPage
// } else if (window.location.href === `${baseUrl}/login`) {
//   page.innerHTML = loginPage
// } else if (window.location.href === `${baseUrl}/signin`) {
//   page.innerHTML = signinPage
// } else if (window.location.href === `${baseUrl}/profile`) {
//   page.innerHTML = profilePage
// } else if (window.location.href === `${baseUrl}/edit-password`) {
//   page.innerHTML = editPasswordPage
// } else if (window.location.href === `${baseUrl}/edit-profile`) {
//   page.innerHTML = editProfilePage
// }

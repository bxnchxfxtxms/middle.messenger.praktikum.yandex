import template from './loginPage.hbs'

const loginPage = template({
  formClass: 'form__form-container',
  formTitle: 'Войти',
  field: [
    { title: 'Логин', name: 'login', type: 'text', placeholder: 'Логин', errorMessage: 'Неверный логин'},
    { title: 'Пароль', name: 'password', type: 'password', placeholder: 'Пароль', errorMessage: ''}
  ],
  button: {
    type: 'submit',
    title: 'Авторизоваться'
  },
  redirectLinkTitle: 'Нет аккаунта?'
})

export { loginPage }

import template from './signinPage.hbs'

const signinPage = template({
  formClass: 'form__form-container',
  formTitle: 'Регистрация',
  field: [
    { title: 'Почта', name: 'email', type: 'email', placeholder: 'Почта', errorMessage: ''},
    { title: 'Логин', name: 'login', type: 'text', placeholder: 'Логин', errorMessage: ''},
    { title: 'Имя', name: 'first_name', type: 'text', placeholder: 'Имя', errorMessage: ''},
    { title: 'Фамилия', name: 'second_name', type: 'text', placeholder: 'Фамилия', errorMessage: ''},
    { title: 'Телефон', name: 'phone', type: 'tel', placeholder: 'Телефон', errorMessage: ''},
    { title: 'Пароль', name: 'password', type: 'password', placeholder: 'Пароль', errorMessage: ''},
    { title: 'Пароль (ещё раз)', name: 'password', type: 'password', placeholder: 'Подтвердите пароль', errorMessage: 'Пароли не совпадают'}
  ],
  button: {
    type: 'submit',
    title: 'Зарегистрироваться',
    modificator: 'form__button_place_signin'
  },
  redirectLinkTitle: 'Войти'
})

export { signinPage }

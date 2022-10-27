import template from './profilePage.hbs'
import { baseUrl } from '../../utils/const'

const profilePage = template({
  userName: 'Иван',
  field: [
    { title: 'Почта', currentValue: 'pochta@yandex.ru' },
    { title: 'Логин', currentValue: 'ivanivanov' },
    { title: 'Имя', currentValue: 'Иван' },
    { title: 'Фамилия', currentValue: 'Иванов' },
    { title: 'Имя в чате', currentValue: 'Иван' },
    { title: 'Телефон', currentValue: '+7 (777) 777 77 77' },
  ],
  link: [
    { title: 'Изменить данные', link: `${baseUrl}/edit-profile` },
    { title: 'Изменить пароль', link: `${baseUrl}/edit-password` },
    { title: 'Выйти', profileLinkModificator: 'profile__link_color_red' }
  ]
})

export { profilePage }

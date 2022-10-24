import template from './editProfilePage.hbs'
import { profileFormClassModificators } from '../../utils/const'

const editProfilePage = template({
  field: [
    {
      title: 'Почта',
      name: 'email',
      type: 'email',
      placeholder: 'pochta@yandex.ru',
      classModificators: profileFormClassModificators
    },
    {
      title: 'Логин',
      name: 'login',
      type: 'text',
      placeholder: 'ivanivanov',
      classModificators: profileFormClassModificators
    },
    {
      title: 'Имя',
      name: 'first_name',
      type: 'text',
      placeholder: 'Иван',
      classModificators: profileFormClassModificators
    },
    {
      title: 'Фамилия',
      name: 'second_name',
      type: 'text',
      placeholder: 'Иванов',
      classModificators: profileFormClassModificators
    },
    {
      title: 'Имя в чате',
      name: 'display_name',
      type: 'text',
      placeholder: 'Иван',
      classModificators: profileFormClassModificators
    },
    {
      title: 'Телефон',
      name: 'phone',
      type: 'tel',
      placeholder: '+7 (777) 777 77 77',
      classModificators: profileFormClassModificators
    },
  ],
  button: {
    type: 'submit',
    title: 'Сохранить'
  }
})

export { editProfilePage }

import template from './editPasswordPage.hbs'
import { profileFormClassModificators } from '../../utils/const'

const editPasswordPage = template({
  field: [
    {
      title: 'Старый пароль',
      name: 'oldPassword',
      type: 'password',
      placeholder: '',
      classModificators: profileFormClassModificators
    },
    {
      title: 'Новый пароль',
      name: 'newPassword',
      type: 'password',
      placeholder: '',
      classModificators: profileFormClassModificators
    },
    {
      title: 'Повторите новый пароль',
      name: 'newPassword',
      type: 'password',
      placeholder: '',
      classModificators: profileFormClassModificators
     }
  ],
  button: {
    type: 'submit',
    title: 'Сохранить'
  }
})

export { editPasswordPage }

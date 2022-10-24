import template from './notFoundErrorPage.hbs'
import { baseUrl } from '../../utils/const'

const notFoundErrorPage = template({
  errorStatusCode: '404',
  errorDescription: 'Не туда попали',
  redirectLinkText: 'Назад к чатам',
  link: `${baseUrl}/chats`
})

export { notFoundErrorPage }

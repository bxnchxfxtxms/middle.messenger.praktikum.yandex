import template from './internalServerErrorPage.hbs'
import { baseUrl } from '../../utils/const'

const internalServerErrorPage = template({
  errorStatusCode: '500',
  errorDescription: 'Уже фиксим',
  redirectLinkText: 'Назад к чатам',
  link: `${baseUrl}/chats`
})

export { internalServerErrorPage }

import { User } from './user.type'
import { SuccessResponseApi } from './utils.type'

export type Auth = SuccessResponseApi<{
  access_token: string
  expires: string
  user: User
}>

import { User } from 'src/types/user.type'

export const saveAccessToken = (access_token: string) => {
  localStorage.setItem('accessToken', access_token)
}

export const clearLS = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('proflie')
}

export const getAccessTokenFromLS = () => {
  return localStorage.getItem('accessToken') || ''
}

export const getProfileFromLs = () => {
  const user = localStorage.getItem('profile')
  return user ? JSON.parse(user) : null
}

export const saveProfile = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}

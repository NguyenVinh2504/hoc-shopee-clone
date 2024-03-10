export const saveAccessToken = (access_token: string) => {
  localStorage.setItem('accessToken', access_token)
}

export const clearAccessTokenFromLS = () => {
  localStorage.removeItem('accessToken')
}

export const getAccessTokenFromLS = () => {
  return localStorage.getItem('accessToken') || ''
}

import axios, { AxiosError, type AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import config from 'src/constants/config'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { Auth } from 'src/types/auth.type'
import { clearAccessTokenFromLS, getAccessTokenFromLS, saveAccessToken } from './auth'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken = getAccessTokenFromLS()
    this.instance = axios.create({
      baseURL: config.baseUrl,
      timeout: 1000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.request.use((config) => {
      if (this.accessToken && config.headers) {
        config.headers.authorization = this.accessToken
        return config
      }
      return config
    })
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === '/login' || url === '/register') {
          this.accessToken = (response.data as Auth).data.access_token
          saveAccessToken(this.accessToken)
        } else if (url === '/logout') {
          this.accessToken = ''
          clearAccessTokenFromLS()
        }
        return response
      },
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          console.log(error.response?.data)

          const data: any | undefined = error.response?.data
          toast.error(data.message || error.message)
        }
        throw error
      }
    )
  }
}

export const http = new Http().instance

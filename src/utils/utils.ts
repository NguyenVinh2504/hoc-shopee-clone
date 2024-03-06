import axios, { AxiosError } from 'axios'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'

export const isAxiosError = <T>(error: unknown): error is AxiosError<T> => {
  return axios.isAxiosError(error)
}

export const isAxiosUnprocessableEntityError = <FormData>(error: unknown): error is AxiosError<FormData> => {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}

// interface TestError {
//   status: number
//   data: object
// }

// const testError: TestError = {
//   status: 222,
//   data: {}
// }

// Biến không xác định
// let responseError: unknown

// check xem biến responseError có dữ liệu giống với testError không
// Nếu mà responseError giống với testError thì (error is TestError) typescript sẽ biến responseError có kiểu
// dữ liệu giống với testError luôn do responseError mà bằng testError thì trả phải nó giống dữ liệu với testError
// function isTestError(error: unknown): error is TestError {
//   return typeof responseError === typeof testError
// }

//Ví dụ khi biến responseError có dữ liệu giống với testError thì mới làm gì đó
// if (isTestError(responseError)) {
//sau khi check xong thì typescript đã chuyển responseError sang kiểu dữ kiệu giống testError
//   responseError.data
//   responseError.status
// }

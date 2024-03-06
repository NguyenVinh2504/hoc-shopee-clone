import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'
export const emailRule: RegisterOptions = {
  required: {
    value: true,
    message: 'Vui lòng nhập email'
  },
  pattern: {
    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    message: 'Nhập sai định dạng email'
  },
  maxLength: {
    value: 160,
    message: 'Nhập tối đa 5 - 160 kí tự'
  },
  minLength: {
    value: 5,
    message: 'Nhập tối đa 5 - 160 kí tự'
  }
}

export const passwordRules: RegisterOptions = {
  required: {
    value: true,
    message: 'Vui lòng nhập mật khẩu'
  },
  maxLength: {
    value: 160,
    message: 'Nhập tối đa 6 - 160 kí tự'
  },
  minLength: {
    value: 6,
    message: 'Nhập tối đa 6 - 160 kí tự'
  },
  pattern: {
    value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
    message: 'Mật khẩu phải chứa kí tự viết hoa, thường, chữ số và kí tự đặc biệt'
  }
}

export const confirm_password = (getValues?: UseFormGetValues<any>): RegisterOptions => ({
  required: {
    value: true,
    message: 'Vui lòng nhập lại mật khẩu'
  },
  maxLength: {
    value: 160,
    message: 'Nhập tối đa 6 - 160 kí tự'
  },
  minLength: {
    value: 6,
    message: 'Nhập tối đa 6 - 160 kí tự'
  },
  pattern: {
    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
    message: 'Mật khẩu phải chứa kí tự viết hoa, thường và kí tự đặc biệt'
  },
  validate:
    typeof getValues === 'function'
      ? (value) => value === getValues('password') || 'Nhập lại mật khẩu không đúng'
      : undefined
})

export const schema = yup.object({
  email: yup
    .string()
    .email('Sai định dạng gmail')
    .required('Vui lòng nhập email')
    .min(6, 'Nhập tối đa 6 - 160 kí tự')
    .max(160, 'Nhập tối đa 6 - 160 kí tự'),
  password: yup
    .string()
    .required('Vui lòng nhập password')
    .min(5, 'Nhập tối đa 5 - 160 kí tự')
    .max(160, 'Nhập tối đa 5 - 160 kí tự')
    .matches(/[0-9]/, 'Mật khẩu phải chứa chữ số')
    .matches(/[a-z]/, 'Mật khẩu phải chứa chữ cái thường')
    .matches(/[A-Z]/, 'Mật khẩu phải chứa chữ cái hoa')
    .matches(/[^\w]/, 'Mật khẩu phải chứa kí tự đặc biệt')
    .matches(/^(\S+$)/, 'Mật khẩu không khoảng trắng'),
  confirm_password: yup
    .string()
    .required('Vui lòng nhập lại password')
    .min(5, 'Nhập tối đa 5 - 160 kí tự')
    .max(160, 'Nhập tối đa 5 - 160 kí tự')
    .oneOf([yup.ref('password')], 'Nhập lại mật khẩu không chính xác')
})

export type Schema = yup.InferType<typeof schema>

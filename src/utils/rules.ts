import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'

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

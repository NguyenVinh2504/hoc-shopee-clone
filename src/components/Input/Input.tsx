import { InputHTMLAttributes } from 'react'
import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorsMessage?: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions
  classNameInput?: string
  classNameErrorMessage?: string
}

export default function Input({
  register,
  rules,
  name,
  className,
  errorsMessage,
  classNameErrorMessage = 'text-red-500 text-xs mt-1 min-h-4',
  classNameInput = 'placeholder:text-[#b4b4b4] p-3 text-sm leading-4 w-full border border-[#313131] focus:border focus:border-[#7b7b7b] bg-[#0d0d0e] outline-none rounded',
  ...props
}: Props) {
  const registerInput = register && name ? register(name, rules) : {}
  const classNameDiv = className ? `mb-[12px] ${className}` : `mb-[12px]`
  return (
    <div className={classNameDiv}>
      <input className={classNameInput} {...props} {...registerInput} />
      <div className={classNameErrorMessage}>{errorsMessage}</div>
    </div>
  )
}

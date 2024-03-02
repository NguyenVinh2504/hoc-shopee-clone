import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props {
  errorsMessage?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
}

export default function Input({
  register,
  rules,
  name,
  className,
  errorsMessage,
  ...props
}: Props & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <div className={`mb-[12px] ${className}`}>
      <input
        className='placeholder:text-[#b4b4b4] p-3 text-sm leading-4 w-full border border-[#313131] focus:border focus:border-[#7b7b7b] bg-[#0d0d0e] outline-none rounded'
        {...props}
        {...register(name, rules)}
      />
      <div className='text-red-500 text-xs mt-1 min-h-4'>{errorsMessage}</div>
    </div>
  )
}

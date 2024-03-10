import { ButtonHTMLAttributes } from 'react'
import { SpinnerIcon } from '../Icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  size?: 'extraSmall' | 'small' | 'base' | 'large'
}

export default function Button(props: ButtonProps) {
  const { disabled, children, className, isLoading, size = 'base', ...rest } = props

  const newClassName = disabled ? className + ' cursor-not-allowed' : className
  const sizeClassName =
    size === 'extraSmall'
      ? 'text-xs px-3 leading-[32px]'
      : size === 'small'
        ? 'text-sm px-3 leading-[36px]'
        : size === 'large'
          ? 'text-base px-5 leading-[48px]'
          : 'text-sm px-2 leading-10'
  return (
    <button
      className={`${sizeClassName} flex font-medium justify-center bg-[#E54D2E] hover:bg-[#EC6142] uppercase min-w-24 rounded disabled:bg-[#AC4D39] ${newClassName}`}
      disabled={disabled}
      {...rest}
    >
      {isLoading && (
        <span className='mr-1'>
          <SpinnerIcon />
        </span>
      )}
      <span></span>
      <span>{children}</span>
    </button>
  )
}

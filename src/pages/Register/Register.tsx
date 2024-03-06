import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FaceBookIcon, GoogleIcon, QRIcon } from 'src/components/Icon'
import Input from 'src/components/Input'
import { Schema, schema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerAccount } from 'src/apis/auth.api'
import { useMutation } from '@tanstack/react-query'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { ResponseApi } from 'src/types/utils.type'

type FormData = Pick<Schema, 'email' | 'password' | 'confirm_password'>

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const registerAccountMutation = useMutation({
    mutationFn: registerAccount
  })

  const onSubmit = handleSubmit((data) => {
    const { email, password } = data
    const body = {
      email,
      password
    }
    registerAccountMutation.mutate(body, {
      onSuccess: (value) => {
        console.log(value)
      },
      onError: (error) => {
        console.log(error)

        if (isAxiosUnprocessableEntityError<ResponseApi<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          // console.log(formError)

          if (formError) {
            Object.entries(formError).forEach(([key, value]) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                message: value,
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })

  return (
    <div className='bg-contain bg-white bg-[url("https://files.shopeeanalytics.com/upload/images/2022/11/22/33fe5490d792aa8a862b4f4b46b33f4f.png")]'>
      <div className='mx-auto px-4 min-h-[700px] max-w-[1040px] flex justify-center md:justify-end items-center'>
        <div className='bg-bg-paper rounded shadow-xl w-[400px]'>
          <div className='px-[30px]'>
            {/* Heading */}
            <div className='py-[22px] flex justify-between items-center'>
              <span className='text-lg md:text-xl'>Đăng Ký</span>
            </div>
            {/* Heading */}

            {/* form */}
            <form onSubmit={onSubmit}>
              {/* email */}
              <Input
                name='email'
                register={register}
                type='text'
                errorsMessage={errors.email?.message}
                placeholder='Email đăng nhập'
              />
              {/* email */}
              {/* mat khau */}
              <Input
                name='password'
                register={register}
                type='password'
                errorsMessage={errors.password?.message}
                placeholder='Mật khẩu'
                autoComplete='on'
              />
              {/* mat khau */}
              {/* nhap lai mat khau */}
              <Input
                name='confirm_password'
                register={register}
                type='password'
                errorsMessage={errors.confirm_password?.message}
                placeholder='Nhập lại mật khẩu'
                autoComplete='on'
              />
              {/*nhap lai mat khau */}
              {/* nut dang nhap */}
              <button className='px-2 leading-10 bg-[#E54D2E] hover:bg-[#EC6142] text-sm uppercase  min-w-24 rounded w-full'>
                Đăng Nhập
              </button>
              {/* nut dang nhap */}
            </form>
            {/* form */}
            {/* đăng nhập khác */}
            <div className='my-[30px]'>
              <div className='flex items-center mb-[14px]'>
                <div className='h-[1px] w-full bg-gray-600'></div>
                <span className='mx-2'>Hoặc</span>
                <div className='h-[1px] w-full bg-gray-600'></div>
              </div>
              <div className='flex gap-[10px] items-center'>
                <button className='flex justify-center gap-1 items-center pl-[2px] pr-2 border border-white w-full'>
                  <FaceBookIcon />
                  <span className='leading-[38px]'>Facebook</span>
                </button>
                <button className='flex justify-center gap-1 items-center pl-[2px] pr-2 border border-white w-full'>
                  <GoogleIcon />
                  <span className='leading-[38px]'>Facebook</span>
                </button>
              </div>
            </div>
            {/* đăng nhập khác */}
            <div className='text-xs my-[30px] px-[25px] text-center'>
              Bằng việc đăng kí, bạn đã đồng ý với Shopee về <span className='text-[#E54D2E]'>Điều khoản dịch vụ</span>{' '}
              & <span className='text-[#E54D2E]'>Chính sách bảo mật</span>
            </div>
            <div className='pb-[30px] text-sm text-center'>
              <span className='text-gray-500'>
                Bạn đã có tài khoản?
                <Link to={'/login'} className='text-[#E54D2E]'>
                  {' '}
                  Đăng Nhập
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

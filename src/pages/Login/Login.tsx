import { yupResolver } from '@hookform/resolvers/yup'
import { TextField } from '@radix-ui/themes'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { loginAccount } from 'src/apis/auth.api'
import { FaceBookIcon, GoogleIcon, QRIcon } from 'src/components/Icon'
import Input from 'src/components/Input'
import { ResponseApi } from 'src/types/utils.type'
import { Schema, schema } from 'src/utils/rules'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'

type FormData = Pick<Schema, 'email' | 'password'>
const loginSchema = schema.omit(['confirm_password'])
export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const loginAccountMutation = useMutation({
    mutationFn: (body: FormData) => loginAccount(body)
  })

  useEffect(() => {
    axios.get('https://vidsrc.xyz/embed/movie/636706').then((repsone) => {
      console.log(repsone)
    })
  }, [])
  const onSubmit = handleSubmit((data) => {
    loginAccountMutation.mutate(data, {
      onSuccess: (value) => {
        console.log(value)
      },
      onError: (errors) => {
        if (isAxiosUnprocessableEntityError<ResponseApi<FormData>>(errors)) {
          const formError = errors.response?.data.data
          // console.log(formError)

          if (formError) {
            Object.entries(formError).forEach(([key, value]) => {
              setError(key as keyof FormData, {
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
      <div className='mx-auto px-4 min-h-[600px] max-w-[1040px] flex justify-center md:justify-end items-center'>
        <div className='bg-bg-paper rounded shadow-xl w-[400px]'>
          <div className='px-[30px]'>
            {/* Heading */}
            <div className='py-[22px] flex justify-between items-center'>
              <span className='text-lg md:text-xl min-w-[105px]'>Đăng Nhập</span>
              {/* Đăng nhập qr */}
              <div className='flex items-center gap-[8px]'>
                <div
                  className='border-[2px] py-[11px] px-[14px] bg-[#313131]  after:content-[""] relative after:absolute 
                      after:border-t-[2px] after:border-r-[2px] after:rotate-45 after:w-[0.75rem] after:h-[0.75rem] after:right-[-8px]
                      after:top-[50%] after:translate-y-[-50%] after:bg-[#313131] text-xs md:text-sm font-bold max-w-[160px]
                      '
                >
                  Đăng nhập với mã QR
                </div>
                <QRIcon />
              </div>
              {/* Đăng nhập qr */}
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

              {/* nut dang nhap */}
              <button
                type='submit'
                className='px-2 leading-10 bg-[#E54D2E] hover:bg-[#EC6142] text-sm uppercase  min-w-24 rounded w-full'
              >
                Đăng Nhập
              </button>
              {/* nut dang nhap */}
            </form>
            <div className='my-[10px] text-xs flex justify-between '>
              <a href='#'>Quên mật khẩu</a>
              <a href='#'>Đăng nhập với SMS</a>
            </div>
            {/* form */}
            {/* đăng nhập khác */}
            <div className='mb-[30px]'>
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
            <div className='pb-[30px] text-sm'>
              <span className='text-gray-500'>
                Bạn mới biết đến Shopee?
                <Link to={'/register'} className='text-[#E54D2E]'>
                  {' '}
                  Đăng ký
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

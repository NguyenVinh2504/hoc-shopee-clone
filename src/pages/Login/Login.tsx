import { TextField } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FaceBookIcon, GoogleIcon, QRIcon } from 'src/components/Icon'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = handleSubmit((data) => {
    console.log(data)
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
              <div className='mb-[14px]'>
                <input
                  name='email'
                  placeholder='Email/Số điện thoại/Tên đăng nhập'
                  className='placeholder:text-[#b4b4b4] p-3 text-sm leading-4 w-full border border-[#313131] focus:border focus:border-[#7b7b7b] bg-[#0d0d0e] outline-none rounded'
                  type='text'
                />
                <div className='text-red-500 text-xs mt-1 '>Đây là lỗi</div>
              </div>
              {/* email */}
              {/* mat khau */}
              <div className='mb-[14px]'>
                <input
                  name='password'
                  placeholder='Mật khẩu'
                  className='placeholder:text-[#b4b4b4] p-3 text-white text-sm leading-4 w-full border border-[#313131] focus:border focus:border-[#7b7b7b] bg-[#0d0d0e] outline-0 rounded'
                  type='password'
                  autoComplete='on'
                />
                <div className='text-red-500 text-xs mt-1 '>Đây là lỗi</div>
              </div>
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

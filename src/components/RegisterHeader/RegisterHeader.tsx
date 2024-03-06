import { Link } from 'react-router-dom'
import { Logo } from '../Icon'

export default function RegisterHeader() {
  return (
    <header className='py-5 bg-slate-1 border-gray-5  border-b'>
      <div className='my-0 container'>
        <nav className='flex items-end'>
          <Link to={'/'}>
            <Logo />
          </Link>
          <div className='ml-5 text-xl lg:text-2xl text-white'>Đăng Ký</div>
        </nav>
      </div>
    </header>
  )
}

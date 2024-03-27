import { StartIcon } from '../Icon'

export default function Rating({ rating }: { rating: number }) {
  const handleRating = (order: number) => {
    if (order <= rating) {
      return '100%'
    }
    if (order > rating && order - rating < 1) {
      return `${(rating - Math.floor(rating)) * 100}%`
    }
    return '0%'
  }
  return (
    <div className='flex [&_svg]:w-3 [&_svg]:h-3'>
      {Array(5)
        .fill(0)
        .map((_, index) => {
          return (
            <div className='relative mr-[2px]' key={index}>
              <div
                className='absolute top-0 left-0 h-full [&_svg]:fill-yellow-500 overflow-hidden'
                style={{ width: handleRating(index + 1) }}
              >
                <StartIcon />
              </div>
              <div className='[&_svg]:fill-[#6E6E6E]'>
                <StartIcon />
              </div>
            </div>
          )
        })}
    </div>
  )
}

import arrowToRight from '../assets/arrow-point-to-right.svg'

const ClickHere = () => {
  return (
    <div className='flex flex-row gap-2 pr-2 items-center'>
        <span > CLICK HERE </span>
        <img src={arrowToRight} alt='arrow' width={30} height={30}
            className='border border-1 border-red-500 rounded-full bg-yellow-500'
        ></img>
    </div>
  )
}

export default ClickHere
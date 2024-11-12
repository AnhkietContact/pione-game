import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { useSwiper } from 'swiper/react'
function ButtonNextSwiper() {
    const swiper = useSwiper()
    return (
        <div
            className='top-[45%] -translate-y-[45%] right-0 z-[1]
                -translate-x-[3px] bg-[#FF7800] shadow-gray w-7 h-7 rounded-full 
                justify-center items-center font-bold cursor-pointer  
                transition duration-300 select-none hidden sm:flex'
            onClick={() => swiper.slideNext()}>
            <GoArrowRight size={23} color={'#fff'} />
        </div>
    )
}

export default ButtonNextSwiper

'use client'

// Import UseSwiper from react
import { useSwiper } from 'swiper/react'

// Import React-Icons
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

const SwiperNavButtons = ({
   containerStyles,
   btnStyles,
   iconStyles,
}: {
   containerStyles: string
   btnStyles: string
   iconStyles: string
}) => {
   const swiper = useSwiper()
   return (
      <div className={`${containerStyles}`}>
         <button className={`${btnStyles}`} onClick={() => swiper.slidePrev()}>
            <PiCaretLeftBold className={`${iconStyles}`} />
         </button>
         <button className={`${btnStyles}`} onClick={() => swiper.slideNext()}>
            <PiCaretRightBold className={`${iconStyles}`} />
         </button>
      </div>
   )
}

export default SwiperNavButtons

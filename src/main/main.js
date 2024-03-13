import './main.css'
import baby from '../img/baby.png'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation } from 'swiper/modules';


export default function main() {

    return (
      <main>
      <Swiper
        slidesPerView={7}
        navigation={true} 
        modules={[Navigation]}
        spaceBetween={30}
        grabCursor={true}        
        className="ySwiper"
      >
        <div className='mode'>
        <SwiperSlide className='slide_img'><h1>Roupa de Menino</h1><img src={baby}></img></SwiperSlide>
        <SwiperSlide className='slide_img'><h1>Roupa de Menina</h1><img src={baby}></img></SwiperSlide>
        <SwiperSlide className='slide_img'><h1>Calçado</h1><img src={baby}></img></SwiperSlide>
        <SwiperSlide className='slide_img'><h1>Brinquedos</h1><img src={baby}></img></SwiperSlide>
        <SwiperSlide className='slide_img'><h1>Alimentos</h1><img src={baby}></img></SwiperSlide>
        <SwiperSlide className='slide_img'><h1>Menino</h1><img src={baby}></img></SwiperSlide>
        <SwiperSlide className='slide_img'><h1>Meias</h1><img src={baby}></img></SwiperSlide>
        <SwiperSlide className='slide_img'><h1>Menino</h1><img src={baby}></img></SwiperSlide>
        <SwiperSlide className='slide_img'><h1>Menino</h1><img src={baby}></img></SwiperSlide>
        </div>
      </Swiper>
      </main>
    )
}
import './categoria.css'
import baby from '../img/baby.png'
import post02 from '../img/post-02.png'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation } from 'swiper/modules';

export default function dropdown() {
    
    return (
        <div className='conteiner'>
            <h1 className='title'>Compre por categoria</h1>
        <Swiper
        slidesPerView={3}
        navigation={true} 
        modules={[Navigation]}
        spaceBetween={30}
        grabCursor={true}        
        className="ySwiper"
      >    
            <div className='categoria'>
                <div className='slider-categoria'>
                    <SwiperSlide className='slide_categoria'><img src={baby}></img></SwiperSlide>
                    <SwiperSlide className='slide_categoria'><img src={baby}></img></SwiperSlide>
                    <SwiperSlide className='slide_categoria'><img src={baby}></img></SwiperSlide>
                    <SwiperSlide className='slide_categoria'><img src={baby}></img></SwiperSlide>
                    <SwiperSlide className='slide_categoria'><img src={baby}></img></SwiperSlide>
                    <SwiperSlide className='slide_categoria'><img src={baby}></img></SwiperSlide>                 
                </div>
            </div>
            </Swiper>

            <div className='promocao-img'>
                <div className='promo3'>     
                    <img src={post02}></img>
                </div>
                <div className='promo4'>     
                    <img src={post02}></img>
                </div>
            </div>

        <div className='sugestao'>
        <h1 className='title'>Sugestão</h1>
        <Swiper
        slidesPerView={3}
        navigation={true} 
        modules={[Navigation]}
        spaceBetween={30}
        grabCursor={true}        
        className="ySwiper"
      >    
            <div className='categoria'>
                <div className='slider-categoria'>
                    <SwiperSlide className='slide_categoria'><img src={baby}></img></SwiperSlide>
                    <SwiperSlide className='slide_categoria'><img src={baby}></img></SwiperSlide>
                    <SwiperSlide className='slide_categoria'><img src={baby}></img></SwiperSlide>
                    <SwiperSlide className='slide_categoria'><img src={baby}></img></SwiperSlide>
                    <SwiperSlide className='slide_categoria'><img src={baby}></img></SwiperSlide>
                    <SwiperSlide className='slide_categoria'><img src={baby}></img></SwiperSlide>                 
                </div>
            </div>
            </Swiper>
        </div>    
        </div>
    )
}
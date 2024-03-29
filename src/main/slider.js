import {Swiper, SwiperSlide} from 'swiper/react'
import './slider.css';

import imagem1 from '../img/Para seu pequeno.png'
import imagem2 from '../img/baby2.jpg'
import imagem3 from '../img/baby3.jpg'
import imagem4 from '../img/baby4.jpg'

import { Autoplay, Pagination } from 'swiper/modules';

export default function slider(){

    const img =[
        {id:'baby1', image:[imagem1]},
        {id:'baby2', image:[imagem2]},
        {id:'baby3', image:[imagem3]},
        {id:'baby4', image:[imagem4]},
    ]
    
    return (
        <>
            <div className='container'>
            
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >

        {img.map ((item)=>(
       <SwiperSlide className='slider-baby' key={item.id}>
        <img
            src={item.image}
            className='slide-item'
        />
       </SwiperSlide>
        ))}
        </Swiper>

            </div>
        </>
    )
}

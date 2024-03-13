import './promocao.css'
import img from '../img/Inserir um título.png'
import img2 from '../img/desconto.png'

export default function Promo() {
    return(
        <>
        <div className='promocao'>

            <div className='promo1'>     
              <img src={img}></img>
            </div>
            <div className='promo2'>     
              <img src={img2}></img>
            </div>

        </div>
        
        </>
    )

}
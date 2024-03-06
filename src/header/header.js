import './header.css';
import logo from '../img/mae.png'
import carrinho from '../img/carrinho-de-compras.png'
import user from '../img/do-utilizador (1).png'
import barraMenu from '../img/barra-de-menu (1).png'

export default function header() {
  return (
      <header>
        <nav className='nav-bar'>

          <div className='logo'>
            <img src={logo}></img>
            <h1>FAUCET.</h1>
          </div>

          <ul className='nav-list'>
            <li><a href='#'>ROUPAS<i class="fa-solid fa-caret-down"></i></a></li>
            <li><a href='#'>BRINQUEDOS<i class="fa-solid fa-caret-down"></i></a></li>
            <li><a href='#'>CALÇADOS<i class="fa-solid fa-caret-down"></i></a></li>
            <li><a href='#'>CATEGORIA<i class="fa-solid fa-caret-down"></i></a></li>
          </ul>
          
          <div className='menu-pesquisa'>         
              <label className='input'>
                <input className='input-pesquisa' type='texto' placeholder='Pesquisar'></input>
                <i class="fa-solid fa-magnifying-glass"></i>
              </label>
            
            <div className='icon'>
              <img src={carrinho}></img>
              <img src={user}></img>
              <img src={barraMenu}></img>
            </div>
          </div>
        </nav>
      </header>
  );
}

import './footer.css'

export default function footer() {
    
    return (
        <footer>
            <div className='cadastro'>
                <h3>Cadastre-se e receba nossas novidades e promoções</h3>
                    <label className='input-cadastro'>
                        <div className='input-name'>
                            <input type='text' placeholder='Seu nome'></input>
                        </div>
                        <div className='input-email'>
                            <input type='email'placeholder='Seu e-mail'></input>
                        </div>
                    </label>
                <div className='btn'>
                    <button className='enviar_btn'>Enviar</button>
                </div>
            </div>

            <div className='cont'>
                <ul>
                    <h3>Loja Virtual</h3>
                    <li><a href='#'>Política de Frete Grátis</a></li>
                    <li><a href='#'>Regras descontos</a></li>
                </ul>

                <ul>
                    <h3>Institucional</h3>
                    <li><a href='#'>Empresa</a></li>
                    <li><a href='#'>Trabalhe Conosco</a></li>
                    <li><a href='#'>Endereço lojas</a></li>
                    <li><a href='#'>Política de Privacidade</a></li>
                    <li><a href='#'>Portal da Privacidade</a></li>
                    <li><a href='#'>Termos e condições de uso</a></li>
                </ul>

                <ul>
                    <h3>Chá de bebê</h3>
                    <li><a href='#'>Conheça a Lista</a></li>
                    <li><a href='#'>Buscar Lista</a></li>
                    <li><a href='#'>Minha Lista</a></li>
                    <li><a href='#'>Lista Enxoval de bebê completa</a></li>
                </ul>

                <ul>
                    <h3>Ajuda</h3>
                    <li><a href='#'>Segurança</a></li>
                    <li><a href='#'>Política de Entrega</a></li>
                    <li><a href='#'>Troca e devolução</a></li>
                </ul>

            </div>
        </footer>
    )
}
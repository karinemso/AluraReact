import './estilos.css'
import logo from '../../imagens/logo.svg'

function Logo() {
    return (
        <div className = 'logo'>
        <img 
            src={logo} 
            alt='logo'
            className='imglogo'></img>
        <p><strong>Alura</strong>Books</p>
       </div>
    )

}

export default Logo
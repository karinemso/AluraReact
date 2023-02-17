
import logo from '../../imagens/logo.svg'
import styled from 'styled-components';


const Logo= styled.div`
    display: flex;
    font-size: 30px;

`
const LogoImg = styled.img`

    margin-right: 20px;
  `

function LogoImage() {
    return (
        <Logo>
            <LogoImg 
                src={logo} 
                alt='logo'
              ></LogoImg>
            <p><strong>Alura</strong>Books</p>
        </Logo>
    )

}

export default LogoImage
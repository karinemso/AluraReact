
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components';

const icones = [perfil,sacola]
const Icone = styled.ul`
    display: flex;
    gap: 40px;
    align-items: center;

`


function IconesHeader(){
    return (
        <Icone>
         { icones.map((icone) => (
            <li><img src={icone} alt='icones'></img></li>
         ))}
        </Icone>
    )
}

export default IconesHeader
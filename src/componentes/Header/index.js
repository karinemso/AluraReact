
import LogoImage from '../Logo'
import IconesHeader from '../IconesHeader';
import OpcoesHeader from '../OpcoesHeader';
import styled from 'styled-components';

const HeadContainer = styled.div`
        background-color: aliceblue;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
    
    
`


function Header(){
    return(
        <HeadContainer>
            <LogoImage></LogoImage>
            <OpcoesHeader />
            <IconesHeader />
            </HeadContainer>
    )
}

export default Header
import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll"

export const NavbarContainer = styled.nav`
display: flex;
align-items: center;
justify-content: space-around;
gap: 25rem;

`;

export const NavLogo = styled(LinkR)`
    cursor: pointer;
    img{
        max-width: 10rem;
    }
@media screen and (max-width: 768px){
    position: relative;
    right: 6rem;
    img{
        max-width: 8.5rem;
    }
}
`

export const MobileToggle = styled.div`
display: none;
button{
    background: none;
    color: ${({theme})=> theme.colors["base-white"]};
    border: none;
}

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 2rem;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`
export const NavMenu = styled.ul`
    display: flex;

    @media screen and (max-width: 768px){
    display: none;
}
`
export const NavItem = styled.li`
height: 3rem;
`
export const NavLinks = styled(LinkS)`
color: ${({theme})=> theme.colors['base-white']};
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
transition: all 0.4s;
&:hover{
        font-weight: bold;
        transform: scale(1.2);
        color: #fed05c;
    }

&.active{
    border-bottom: 3px solid #01BF71;
}
`
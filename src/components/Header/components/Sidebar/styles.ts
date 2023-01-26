import styled from "styled-components";
import {Link as LinkS} from "react-scroll"

interface SidebarContainerProps {
    isOpen?: boolean;
}
export const SidebarContainer = styled.aside<SidebarContainerProps>`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background-color: #000b28ee;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
top: ${({isOpen})=> (isOpen ? '0' : '-100%')};

`
export const CloseIcon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`
export const SidebarMenu = styled.div`
display: grid;
grid-template-rows: repeat(6, 5rem);
grid-template-columns: 1fr;
text-align: center;

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 3.75rem)
}
`
export const SidebarLinks = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
transition: all 0.4s ease-in-out;
color: ${({theme})=> theme.colors["base-neige"]};
cursor: pointer;

&:hover{
    font-weight: bold;
    transform: scale(1.2);
    color: #fed05c;
}
`

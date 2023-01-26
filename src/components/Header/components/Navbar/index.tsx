import { List } from "phosphor-react";
import { MobileToggle, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu } from "./styles";
import logo from "../../../../assets/logo.png"

interface NavbarProps {
    toggle: ()=> void;
}
export function Navbar({toggle}:NavbarProps){
    return(
        <NavbarContainer>
            
                <NavLogo to="home"><img src={logo} alt="logo" /></NavLogo>
        
                <MobileToggle onClick={toggle}>
                    <button><List size={38} weight="fill" /></button>
                </MobileToggle>
            
            <NavMenu>
                <NavItem>
                    <NavLinks to="home">Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks 
                    to="habilidades"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    >
                    Habilidades
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks 
                    to="videos"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    >Videos
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks 
                    to="trajetória"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    >
                    Trajetória
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks 
                    to="contatos"
                    >Contatos</NavLinks>
                </NavItem>
            </NavMenu>
       
    </NavbarContainer>
    )
}
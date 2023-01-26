import { X } from "phosphor-react";
import { CloseIcon, SidebarContainer, SidebarLinks, SidebarMenu } from "./styles";

interface SidebarProps {
    toggle: ()=> void,
    isOpen: boolean
}
export function Sidebar({toggle, isOpen}:SidebarProps){
    return(
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <CloseIcon onClick={toggle}>
            <X size={38} weight="fill" />
        </CloseIcon>
        <SidebarMenu>
            <SidebarLinks to="/" onClick={toggle}>Home</SidebarLinks>
            <SidebarLinks to="habilidades" onClick={toggle}>Habilidades</SidebarLinks>
            <SidebarLinks to="videos" onClick={toggle}>Videos</SidebarLinks>
            <SidebarLinks to="trajetória" onClick={toggle}>Trajetória</SidebarLinks>
            <SidebarLinks to="contatos" onClick={toggle}>Contatos</SidebarLinks>
        </SidebarMenu>
       </SidebarContainer>
    )
}
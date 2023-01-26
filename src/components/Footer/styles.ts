import styled from "styled-components";

export const FooterContainer = styled.section`
background-color: black;
color: ${({theme})=> theme.colors["base-white"]};
font-size: 0.825rem;
text-align: center;
padding: 0.5rem;
@media (max-width: 768px) {
    font-size: 0.65rem;

}
`

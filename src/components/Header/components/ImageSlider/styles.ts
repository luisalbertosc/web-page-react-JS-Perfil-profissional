import styled from "styled-components";


export const ImageSliderContainer = styled.div`
.leftBtn, .rightBtn{
    cursor:pointer;
    color: ${({theme})=> theme.colors["base-neige"]};
    background: none;
    border: none;
    transition: color 0.2s ease-in-out;
    position: relative;
    top: 22rem;
    &:hover{
        color: #fed05c;
        transform: scale(1.1)
    }
}
.leftBtn{
    left: 6rem;
    }
.rightBtn{
left: 90%;
}
@media (max-width: 768px) {
 .leftBtn, .rightBtn{
    display: none;
 }
}
`
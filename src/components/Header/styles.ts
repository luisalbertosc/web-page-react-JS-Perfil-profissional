import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors["base-white"]};
  .containerStyles{
    width: 100%;
    height: 0.01rem;
    margin: 0 auto;
  }

`;

export const Divider = styled.article`
display: flex;
justify-content: center;

.divider{
    width: 75%;
    border-top: 1px solid ${({ theme }) => theme.colors["base-divider"]};
    opacity: 0.2;
}
`
export const MainContainer = styled.section`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 10rem;
img{
  max-width: 21.5rem;
  position: relative;
  bottom: 8.15rem;
}
@media (max-width: 768px) {
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 2.1rem;
  margin-left: 2.6rem;
  img{
    max-width: 15rem;
    position: relative;
    bottom: 14.5rem;
    left: 6rem;
  }  
}
`
export const InfoHeaderContainer = styled.article`
display: flex;
flex-direction: column;
font-family: Arial, Helvetica, sans-serif;
margin-bottom: 15rem;
span{
  color: ${({ theme }) => theme.colors["base-neige"]};
  text-transform: uppercase;
}

h1{
  font-size: 1.75rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 0.25rem;
}

p{
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors["base-neige"]};
  margin-top: 0.25rem;
}
@media (max-width: 768px) {
  span{
    font-size: 0.75rem;
  }
   h1{
    font-size: 1.3rem;
    margin-top: 0rem;
   }
   p{
    display: none;   
  }
}
`

export const IconsContainer = styled.div`
display: flex;
margin-top: 1.2rem;
margin-bottom: 1.2rem;

.icon{
  border: 1px solid ${({ theme }) => theme.colors["base-neige"]};
  border-radius: 9999px;
  padding: 0.4rem;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.colors["base-white"]};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover{
color: #fed05c;
border-color: #fed05c;  
}
}
@media (max-width: 768px) {
  .icon{
  margin-left: 0;
  margin-right: 0.5rem;
}
}
`

export const Footer = styled.div`
  color: ${({ theme }) => theme.colors["base-neige"]};
  width: 22rem;
  p{
    line-height: 160%;
  }

  button{
    margin-top: 1.75rem;
    color: ${({ theme }) => theme.colors["base-neige"]};
    background: none;
    border: 1px solid ${({ theme }) => theme.colors["base-neige"]};
    border-radius: 4px;
    padding: 0.75rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.1s linear;

    &:hover{
      background-color: ${({ theme }) => theme.colors.whatsapp};
      border-color: ${({ theme }) => theme.colors.whatsapp};
    }
  }
  @media (max-width: 768px) {
    button{
      margin-top: 0;
    }
}
`

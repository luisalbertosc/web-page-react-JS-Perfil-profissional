import styled from "styled-components";

export const EducationSectionContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: linear-gradient(rgb(30, 144, 255, 0.2), rgba(30, 144, 255, 0.5)), url("src/assets/educationimage.jpg");
background-size: cover;
height: 32rem;
margin-top: 8rem;

p{
    font-size: 0.875rem;
}
@media (max-width: 768px) {
height: 55rem;
margin-top: 10rem;
}
`
export const Divider = styled.article`
display: flex;
gap: 0.3rem;
margin-top: 1.2rem;
p{
    position: relative;
    bottom: 0.55rem;
}
.divider{
    width:5rem;
    border-top: 1px solid ${({theme})=> theme.colors["base-title"]};
}
`

export const IconsContainer = styled.div`
display: flex;
justify-content: center;
gap: 1.5rem;
margin-top: 4rem;

.iconcontainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 16rem;
    height: 12rem;
    background-color: ${({theme})=> theme.colors["base-neige"]};
    border-radius: 4px;
    strong{
        font-size: 0.75rem;
    }
    span{
        font-size: 0.75rem;
        color: ${({theme})=> theme.colors["base-subtitle"]};
        width: 14rem;
        text-align: center;
    }
    p{
        font-size: 0.75rem;
        font-weight: bold;
    }
}
.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem; 
    height: 2.5rem; 
    background: ${({theme})=> theme.colors["base-blue"]}; 
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    color: ${({theme})=> theme.colors["base-white"]};
    border-radius: 8px;
    position: relative;
    top: -1.2rem;
    svg{
        transform: rotate(315deg);
    }
}
@media (max-width: 768px) {
display: grid;
gap: 3rem;
.iconcontainer{
    width: 14.5rem;
    height: 11rem;
    border-radius: 8px;
    strong{
        font-size: 0.7rem;
    }
    span{
        font-size: 0.7rem;
        width: 12rem;
    }
    p{
        font-size: 0.6rem;
    }
}
  }
`

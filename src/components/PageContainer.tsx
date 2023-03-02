import styled from "styled-components"



export default function PageContainer(props: any) {


    return(
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #efefef;
padding: 1.2rem;
min-height: 100vh;
background: rgb(55, 62, 97);
background-position: center;
background-repeat: no-repeat;
background-size: cover;
box-shadow: inset 0 0 0 1000px rgba(0,0,0,.4);
`
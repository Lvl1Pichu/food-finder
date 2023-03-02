import styled from "styled-components"



export default function PageContainer(props: any) {


    return(
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: var(--dark-green);
padding: 1.2rem;
min-height: 100vh;
background: var(--light-green);
overflow-y: scroll;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
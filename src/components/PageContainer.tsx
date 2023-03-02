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
    align-items: center;
    color: var(--dark-green);
    padding: 1.2rem;
    min-height: 100vh;
    background: var(--light-green);
`
import { Component, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Props {
    children: ReactNode
}

interface EBState {
    hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, EBState> {
    constructor(props: Props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError() {
        return {hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log(error, errorInfo);
    }

    reload = () => {
        location.reload();
    }

    render() {
        if (this.state.hasError) {
        return (
            <ErrorDiv>
            <h2>Something went wrong.</h2>
            <p>For some reason we are unable to display this content.</p>
            <p>You can try to either <ClickMe onClick={this.reload}>refresh the page</ClickMe> to return to the <NavLink to="/"><ClickMe>home page</ClickMe></NavLink></p>
            </ErrorDiv>
        )
        }
        return this.props.children;
    }
}

const ErrorDiv = styled.div`
    background-color: var(--light-clr);
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 0.3rem;
    color: black;
`

const ClickMe = styled.span`
    text-decoration: underline;
    color: #7a949c;
    cursor: pointer;
`
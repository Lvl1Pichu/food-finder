import { Component, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";



interface EBProps {
    children: ReactNode
}

interface EBState {
    hasError: boolean;
}

export default class ErrorBoundary extends Component<EBProps, EBState> {
    constructor(props: EBProps) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error: Error) {
        return {hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
        return (
            <div>
            <h2>Something went wrong.</h2>
            <p>Please return to the <Return><NavLink to="/">home page</NavLink></Return></p>
            </div>
        )
        }
        return this.props.children;
    }
}

const Return = styled.span`
    text-decoration: underline;
    color: #7a949c;
    cursor: pointer;
`
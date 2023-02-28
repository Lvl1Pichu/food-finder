import { Component, ReactNode } from "react";
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

    reload = () => {
        location.reload();
    }

    render() {
        if (this.state.hasError) {
        return (
            <div>
            <h2>Something went wrong.</h2>
            <p>Please <Reload onClick={this.reload}>reload</Reload> the page</p>
            </div>
        )
        }
        return this.props.children;
    }
}

const Reload = styled.span`
    text-decoration: underline;
    color: #7a949c;
    cursor: pointer;
`
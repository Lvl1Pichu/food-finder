import { Component, ReactNode } from "react";



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
            <h2>Something went wrong.</h2>
        )
        }
        return this.props.children;
    }
}
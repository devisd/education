'use client';
import React from 'react';
import { Header, Footer } from '@/components/common';

type Props = { children: React.ReactNode };
type State = { hasError: boolean };

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        // Можно логировать ошибку
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <Header data={null} />
                    <main>
                        <div className="text-red-600 py-20 px-4 text-center font-bold text-3xl">Что-то пошло не так. Перезагрузите страницу.</div>
                    </main>
                    <Footer />
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary; 
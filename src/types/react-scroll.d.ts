declare module 'react-scroll' {
    import { ComponentType, ReactNode } from 'react';

    interface LinkProps {
        to: string;
        spy?: boolean;
        smooth?: boolean;
        offset?: number;
        duration?: number;
        containerId?: string;
        activeClass?: string;
        className?: string;
        delay?: number;
        isDynamic?: boolean;
        onSetActive?: (to: string) => void;
        onSetInactive?: (to: string) => void;
        ignoreCancelEvents?: boolean;
        hashSpy?: boolean;
        saveHashHistory?: boolean;
        children?: ReactNode;
    }

    export const Link: ComponentType<LinkProps>;

    interface ElementProps {
        name: string;
        id?: string;
        children?: ReactNode;
    }

    export const Element: ComponentType<ElementProps>;

    export function animateScroll(scrollToY: number, options?: any): void;
    export const scrollSpy: {
        update(): void;
    };
}
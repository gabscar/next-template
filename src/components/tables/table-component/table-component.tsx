import React, { useEffect, useRef, useState } from "react";
import * as S from "./table-component-styles";

interface TableComponentInteractiveRowComponentProps {
    children: React.ReactNode;
}

export const TableScrollContainer = ({
    children,
}: TableComponentInteractiveRowComponentProps) => {
    const containerScrollRef = useRef<HTMLDivElement>(null);
    const [showScrollArrow, setShowScrollArrow] = useState(false);
    const [scrollRight, setScrollRight] = useState(0);

    useEffect(() => {
        if (containerScrollRef.current) {
            onScroll();
            containerScrollRef.current.addEventListener(
                "touchmove",
                preventScroll,
                {
                    passive: false,
                }
            );
        }
        function preventScroll(event: TouchEvent) {
            event.stopPropagation();
        }
    }, [children]);

    const onScroll = () => {
        if (!containerScrollRef.current) return;
        const trueScroll = containerScrollRef.current.scrollLeft + containerScrollRef.current.clientWidth;
        if (trueScroll < containerScrollRef.current.scrollWidth) {
            setShowScrollArrow(true);
            setScrollRight(5 - containerScrollRef.current.scrollLeft);
        } else {
            setShowScrollArrow(false);
        }
    }

    return (
        <S.ListTableContainer ref={containerScrollRef} className="table-scroll" onScroll={onScroll}>
            {children}
            {showScrollArrow && <S.ScrollArrow right={scrollRight}>{'→'}</S.ScrollArrow>}
        </S.ListTableContainer>
    );
};

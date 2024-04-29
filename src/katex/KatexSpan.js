'use client';
import renderMathInElement from 'katex/dist/contrib/auto-render';
import 'katex/dist/katex.min.css';
import { useEffect, useRef } from 'react';

export default function KatexSpan({ text, delimiters, ...delegated }) {
    const katexTextRef = useRef();
    useEffect(() => {
        if (katexTextRef.current) {
            renderMathInElement(katexTextRef.current, {
                delimiters: delimiters,
            });
        }
    }, [text]);

    return (
        <div className='m-2' ref={katexTextRef} {...delegated}>
            {text}
        </div>
    );
}



import React from "react";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import './TypingAni.css';

const TypingEffect = () => {
    const [text] = useTypewriter({
        words: ['Where do we start?', 'Let’s Design', 'Let’s Create', 'Let’s Brainstorm', 'Let’s Integrate', 'Let’s Innovate', 'Let’s Elevate', 'Each Other', 'Thank you!'],
        loop: true,
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 1000,
    });

    return (
        <div className="Type">
            <h1 style={{ margin: '50px' }}>
                <h2 style={{ fontFamily: 'sans-serif', color: 'yellow' }}>KIBIWOTMOI</h2>
                <span style={{ fontWeight: 'bolder', color: 'green' }}>
                    {text}
                </span>
                <span style={{
                    display: 'inline-block',
                    backgroundColor: 'green',
                    width: '8px',
                    height: '1<h1 className="Prof">{displayedText}</h1>em',
                    marginLeft: '4px'
                }}>
                    <Cursor />
                </span>
            </h1>
        </div>
    );
};

export default TypingEffect;

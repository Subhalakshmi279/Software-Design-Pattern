import React from 'react';

const GradientSVG = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             aria-labelledby="gradient-header" viewBox="-1 -4 15 5">
            <defs>
                <linearGradient id="gradient">
                    <stop className="main-stop" offset="0%" />
                    <stop className="middle-stop" offset="50%" />
                    <stop className="alt-stop" offset="100%" />
                </linearGradient>
            </defs>
            <path className="bg" d="M 0 0 C 2 0 6 -2 8 0 C 10 2 12 -2 14 0 V -5 L -1 -5 V -1 A 1 1 0 0 0 0 0" />
        </svg>
    );
}

export default GradientSVG;

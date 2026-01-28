import React from 'react';
import { useEffect } from 'react';
import './ProblemSection.css'; // Importing CSS for styling

const ProblemSection = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Add your scroll-based animation logic here
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="problem-section dark-theme">
            <h1>Прощай, хаос. Привет, экосистема.</h1>
        </div>
    );
};

export default ProblemSection;

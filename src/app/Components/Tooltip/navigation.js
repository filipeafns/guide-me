import React from 'react';
import Link from 'next/link';
import cardData from '../../cardData.json';

// Define the functional or class-based component
const Navigation = () => {
    return (
        <ul className="navigation">
            {cardData.map((card, index) => (
                <li key={index}>
                    <Link href={card.Link}>{card.Title}</Link>
                </li>
            ))}
        </ul>
    );
};

// Export the component as the default export
export default Navigation;

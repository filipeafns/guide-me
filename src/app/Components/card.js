import React from 'react';
import Link from 'next/link';

// Define the functional or class-based component
const Card = ({ Title, Description, Image, Link: link }) => {
    return (
        <div className='card'>
            <Link href={link}>
                <img src={Image} alt={Title} />
                <h3>{Title}</h3>
                <p>{Description}</p>
            </Link>
        </div>
    );
};

// Export the component as the default export
export default Card;

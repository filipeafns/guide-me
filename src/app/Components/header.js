import React from 'react';
import Link from 'next/link';

// Define the functional or class-based component
const Header = ({Description}) => {
    return (
        <header>
            <div>
                <img src="/List.svg" />
            </div>
            <Link href="/">
                <div>
                    <img src="/House.svg" />
                </div>
            </Link>
            <div>
                <p>{Description}</p>
            </div>
        </header>
    );
};

// Export the component as the default export
export default Header;

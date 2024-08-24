import React from 'react';
import Link from 'next/link';

// Define the functional or class-based component
const Navigation = () => {
    return (
        <ul className="navigation">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/01-workflow-basics/step1">Workflow Builder</Link>
            </li>

        </ul>
    );
};

// Export the component as the default export
export default Navigation;

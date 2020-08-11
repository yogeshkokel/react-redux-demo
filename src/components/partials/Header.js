import React from 'react';
import { Nav } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <Nav variant="pills" className="justify-content-center">
                <Nav.Item>
                    <Nav.Link href="/">Without Hooks</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link href="/with-hooks">With Hooks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/combined-reducer">Combined Reducer</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/async-function">Async Function</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Header;
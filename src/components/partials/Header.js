import React from 'react';
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <Nav variant="pills" className="justify-content-center" defaultActiveKey="link-1">
                <Nav.Item>
                    <Nav.Link eventKey="link-1" as={Link} to="/">Without Hooks</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link eventKey="link-2" as={Link} to="/with-hooks">With Hooks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" as={Link} to="/combined-reducer">Combined Reducer</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4" as={Link} to="/async-function">Async Function</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Header;
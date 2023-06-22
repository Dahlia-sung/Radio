import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import css from '../css/hs.css'

function Header() {
    return (
        <>
            <div className='line' />
            <Navbar expand="lg">
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Link href="/home">ㅇ공지사항</Nav.Link>
                    <Nav.Link eventKey="link-1">ㅇ사연과 공지사항</Nav.Link>
                    <Nav.Link eventKey="link-2">ㅇFAQ</Nav.Link>
                </Nav>
            </Navbar>
            <div className='hr' />
        </>
    );
}

export default Header;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import "../../css/Notice.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';


function Notice() {

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/" className='logo'><img src='/images/Turn(ON)TheRadio.svg' alt='로고이미지' /></Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/About">공지사항</Nav.Link>
                        <Nav.Link href="/Community">사연과 신청곡</Nav.Link>
                        <Nav.Link href="/QnA">Q&A</Nav.Link>
                        <Nav.Link href="/Location">로그인</Nav.Link>
                    </Nav>


                </Container>
            </Navbar>
            <div className='top_hr'></div>
            <Container>
                <Row>
                    <Col xxl={6} className="left_body" >
                        <div className='headset'>
                            <img src='/images/headset.svg' className='headset_img'></img>
                            <Col xxl={4}>
                                <div className='headset_text1'>Turn (ON) The Radio의 이번주 소식</div>
                                <div className='headset_text2'>6월 3째주 소식</div>
                            </Col>
                        </div>
                        <div className='tor'>
                            <img src='/images/TOR.svg' className='tor_img'></img>
                        </div>
                    </Col>


                    <Col xxl={3} className="right_body">
                        <div className='orange'>
                            <img src='/images/orangepants.svg' alt='두번째이미지' className='orange_img' />
                            <div className='orange_text1'>당첨자를 찾습니다</div>
                            <div className='orange_text2'>선물줄게, 사연 다오.</div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>

        </>
    );
}

export default Notice;
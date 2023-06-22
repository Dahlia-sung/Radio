import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Time from './Time';
import Footer from './Footer';
import '../../css/hs.css'


function Main() {
    const templatStyle = {
        border: "1px solid red"
    }
    return (
        <>
            <div className='line'>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="/" className='logo'><img src='/images/title.svg' alt='로고이미지' /></Navbar.Brand>
                        <Nav>
                            <Nav.Link href="/About">공지사항</Nav.Link>
                            <Nav.Link href="/Community">사연과 신청곡</Nav.Link>
                            <Nav.Link href="/QnA">Q&A</Nav.Link>
                            <Nav.Link href="/Location">로그인</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <div className='top_hr'></div>


                {/* 여기는 contents부분 */}
                <Container>
                    <Row>
                        <Col xxl={8} /* style={templatStyle} */>
                            <div> <img src='/images/circle.svg' alt='링크이미지' className='circle' /></div>
                            <div className='diagonal' />
                            <div className='textpart'>
                                사람과<br />
                                음악이 고플 때<br />
                                <a href='#'><u>라디오를 켤까요</u></a><br />
                                이런 저런 일상을 모두와 <a href='#'><u>공유하고</u></a> 싶을 때,<br />
                                한 순간 떠오른 <a href='#'><u>음악이</u></a> 듣고 싶을 때<br />
                                켤까요 라디오<br />
                            </div>
                        </Col>
                        <Col xxl={4} className="side" /* style={templatStyle} */  >
                            <p className='line1'>--------------</p>
                            <p className='time'><img src='/images/icon_radio.svg' alt='circle' /><Time /> &nbsp; GMT</p>
                            <span id='Box' className='mainimg' />
                            {/*             <img src='/img/radiomain.png' alt='라디오이미지1' className='mainimg' /> */}
                        </Col>
                    </Row>
                </Container>
                <Footer></Footer>
                {/*  <div className='hr2' />
                <p className="footer">Instargram</p> */}
            </div>
        </>
    );
}

export default Main;
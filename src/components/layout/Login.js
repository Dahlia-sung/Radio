import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './Footer';
import '../../css/login.css';


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
                            <Nav.Link href="/About" className='menu'>공지사항</Nav.Link>
                            <Nav.Link href="/Community" className='menu'>사연과 신청곡</Nav.Link>
                            <Nav.Link href="/QnA" className='menu'>Q&A</Nav.Link>
                            <Nav.Link href="/Location" className='menu'>로그인</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <div className='top_hr' />

                <Container>
                    <Row>
                        <Col xxl={4} className="side" style={templatStyle}  >
                            <div><img src='/images/circle.svg' alt='링크이미지' className='circle' /></div>
                        </Col>
                        <Col xxl={8} style={templatStyle} >
                            <Container>
                                <div className='loginpart'>
                                    <div className='logintextpart'>
                                        <p>저희와<br />
                                            함께 하고 싶다면?</p>
                                    </div>
                                    <div className='idpart'><input type='text' placeholder='아이디' /></div>
                                    <div className='pwpart'><input type='password' placeholder='비밀번호' /></div>
                                    <button className='btnlogin'>로그인</button>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <Footer></Footer>
                {/*  <div className='hr2' />
                <p className="footer">Instargram</p> */}
            </div >
            <div id="wrap">
            </div>
        </>
    );
}

export default Main;
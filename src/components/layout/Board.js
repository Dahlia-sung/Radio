import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import "../../css/Board.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';


function Board() {

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

            {/* 위에는 로고 header  */}

            <Container>
                <Row>

                    {/* 왼쪽바디 */}
                    <Col xxl={3} className="body_left">
                        <div className='left_board'>
                            <span className='title_form'>제목&nbsp;</span>
                            &nbsp;<input className='b_title' type='text' placeholder='제목을 입력하세요'></input><br></br>
                            <div className='first_hr'></div>
                            <span className='writer_form'>글쓴이&nbsp;</span>
                            &nbsp;<input className='b_writer' type='text' placeholder='내용을 입력하세요'></input><br></br>
                            <div className='second_hr'></div>
                        </div>

                        <div className='board_btn'>
                            <button className='btn_1'>등록</button><br></br>
                            <button className='btn_2'>글목록</button>
                        </div>


                        <div className='tor_div'>
                            <img src='components/images/TOR.svg' className='tor_c'></img>
                        </div>
                    </Col>


                    {/* 오른쪽 바디 */}
                    <Col xxl={6} className="body_right" >
                        <div className='right_board'>
                            <p>사연 내용</p>
                            <input className='b_content' type='text' placeholder='공유하고 싶은 일상을 적어주세요'></input>
                        </div>



                    </Col>
                    {/* <Col xxl={4}>    
                        </Col>     */}



                </Row>
            </Container>

            {/* 밑에는 footer */}
            <Footer></Footer>

        </>
    );
}

export default Board;
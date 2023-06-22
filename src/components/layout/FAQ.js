import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';


class FAQ extends Component {
    render() {
        return (
            <>
                <Container>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>"상품이 안오는데, 언제 올까요?!“&nbsp;&nbsp;&nbsp;<img className="arrow" src="/img/arrow1.png"></img></Accordion.Header>
                            <Accordion.Body>
                                상품 배송은 당첨자 정보확인일 이후 배송단계가 시작되며, 업체를 거쳐 발송되기 때문에 한 달 반에서 두 달 정도 걸립니다.
                                상품 배송 확인은 '당첨상품조회시스템' https://gift.mbccni.co.kr/ 에서 가능하며,
                                배송 문의는 당첨상품조회시스템에 문의글로 작성해주시면 MBC씨앤아이에서 순차적 확인 후 답변 등록됩니다.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>"당첨상품조회가 되지 않아요!" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img className="arrow" src="/img/arrow1.png"></img></Accordion.Header>
                            <Accordion.Body>
                                당첨 상품 조회는 당첨 직후 바로 확인 가능한 것이 아닙니다.
                                [당첨 상품 등록] - [승인] 절차를 거치기 때문에, 방송 후 당첨 상품 조회가 가능하기까지 시간이 걸립니다.
                                3-4주정도 기다려 주세요 ^^
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>"모바일 교환권 조회가 안됩니다" &nbsp;&nbsp;<img className="arrow" src="/img/arrow1.png"></img></Accordion.Header>
                            <Accordion.Body>
                                모바일 교환권은 프로그램측에서 직접 문자발송 되기 때문에 상품 조회 사이트에서 확인이 안됩니다.
                                해당 프로그램 생방송 중 문자 발송 부탁드려요 :)
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>"당첨 확인이라며 전화가 와요!" &nbsp;&nbsp;&nbsp; <img className="arrow" src="/img/arrow1.png"></img></Accordion.Header>
                            <Accordion.Body>
                                배송시, 대행업체 또는 배송업체 측에서 이름과 주소 등 본인 확인을 요하는 연락을 드리니 너무 놀라지 마세요 :)

                                특히, 5만원 이상의 과세 상품의 경우 기타소득신고 관련하여

                                MBC씨앤아이(02-789-0292~4)에서 주민등록번호 확인문자가 발송되오니 확인바랍니다.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>"상품 변경해주시면 안될까요? &nbsp;&nbsp;&nbsp; &nbsp; <img className="arrow" src="/img/arrow1.png"></img></Accordion.Header>
                            <Accordion.Body>
                                상품은 정해져있고, 당첨부터 배송까지 여러 단계를 거치기 때문에 당첨되신 상품은 변경이 불가능합니다.
                                상품 재고가 부족할 경우에는 임의로 상품이 변경되어 발송될 수도 있습니다.
                                (별도의 연락을 드리지 않습니다.)
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </>
        );
    }
}

export default FAQ;
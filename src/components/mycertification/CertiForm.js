import React, { useEffect, useState, useRef } from 'react'
import { Button, Row, Col, Card, Container, Overlay,Tooltip } from 'react-bootstrap'
import styles from '../../css/CertiForm.module.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import ComAxios from '../../util/ComAxios'
import { BsXLg, BsFileEarmarkFontFill,BsFileEarmarkImageFill, BsDownload } from "react-icons/bs";
import Link from '@mui/material/Link';
import ModalDeleteVerification from './ModalDeleteVerification'

function CertiForm(props){

    useEffect(() => {
        console.log("useEffect 마운트될때");
        console.log(props.num+1)
    }, []);

    // 삭제 모달창
    const [modalShow, setModalShow] = React.useState(false);

    // copied 알람
    const [showTxt, setShowTxt] = useState(false);
    const targetTxt = useRef(null);
    const [showPic, setShowPic] = useState(false);
    const targetPic = useRef(null);
    const numbering = props.num+1

    const handleSecond = (id, type) => {

        if(type=="txt"){
            setShowTxt(id);
            setTimeout(function(){
                setShowTxt(!id);
            }
            ,500)
        } else{
            setShowPic(id);
            setTimeout(function(){
                setShowPic(!id);
            }
            ,500)
        }
    }


        return (
            <div className={styles.certiBox}>
                <Card>
                    <Card.Header className={styles.hd}>
                        <div className={styles.title}>
                            <p className={styles.itemValue}>{numbering} &nbsp; {props.order} 수익 증명서</p>
                            <span className={styles.itemTag}>({props.start} ~ {props.end})</span>
                        </div>
                        <Button className={styles.deleteBtn} variant="" onClick={() => setModalShow(true)}>
                            <BsXLg />
                        </Button>
                    </Card.Header>
                    <Card.Body className={styles.bd}>
                        <Card.Title className={styles.title}>
                            <Container className={styles.content}>
                            <Row>
                                <Col className={styles.item}>
                                    <p className={styles.itemValue}>{props.app}</p>
                                    <span className={styles.itemTag}>거래소</span>
                                </Col>
                                <Col className={styles.item}>
                                    <p className={styles.itemValue}>{props.units} {props.order}</p>
                                    <span className={styles.itemTag}>보유수량</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col className={styles.item}>
                                    <p className={styles.itemValue}>{props.profit} {props.payment}</p>
                                    <span className={styles.itemTag}>평가손익</span>
                                </Col>
                                <Col className={styles.item}>
                                    <p className={styles.itemValue}>+ {props.yield} %</p>
                                    <span className={styles.itemTag}>수익률</span>
                                </Col>
                            </Row>
                            </Container>
                        </Card.Title>
                        <Card.Text className={styles.txt}>
                            <ul>
                                <li>
                                    <CopyToClipboard text={props.certiUrl}>
                                        <Button id={props.certiUrl} className={styles.urlBtn} variant="light" ref={targetTxt} onClick={() => handleSecond(!showTxt,"txt")} variant="dark">
                                            <span>텍스트 URL</span>
                                            <BsFileEarmarkFontFill style={{"marginBottom":"3px"}}/>
                                        </Button>
                                    </CopyToClipboard>
                                </li>
                                <li>
                                    <CopyToClipboard text={ props.imageUrl }>
                                        <Button id={props.imageUrl} className={styles.urlBtn} variant="light" ref={targetPic} onClick={() => handleSecond(!showPic, "pic")} variant="dark">
                                            <span>사진 URL</span>
                                            <BsFileEarmarkImageFill style={{"marginBottom":"3px"}}/>
                                        </Button>
                                    </CopyToClipboard>
                                </li>
                                <li>
                                    <Link href={props.imageDownloadUrl}>
                                        <Button id={props.imageDownloadUrl} className={styles.urlBtn} variant="dark">
                                            <span>증명서 받기</span>
                                            <BsDownload style={{"marginBottom":"3px"}}/>
                                        </Button>
                                    </Link>
                                </li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <ModalDeleteVerification
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <Overlay target={targetTxt.current} show={showTxt} placement="bottom-end">
                    {(props) => (
                        <Tooltip id="overlay-example" {...props}>
                        Copied!
                        </Tooltip>
                    )}
                </Overlay>
                <Overlay target={targetPic.current} show={showPic} placement="bottom-end" className={styles.copyOverlay}>
                    {(props) => (
                        <Tooltip id="overlay-example" {...props} className={styles.copyTooltip}>
                        Copied!
                        </Tooltip>
                    )}
                </Overlay>
            </div>
        )
}

export default CertiForm;

// 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', 'link'

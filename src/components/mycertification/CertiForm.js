import React, { useEffect } from 'react'
import { Button, Row, Col, Card, Container } from 'react-bootstrap'
import styles from '../../css/CertiForm.module.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import ComAxios from '../../util/ComAxios'
import { BsXLg, BsFileEarmarkFontFill,BsFileEarmarkImageFill, BsDownload } from "react-icons/bs";
import Link from '@mui/material/Link';
import ModalDeleteVerification from './ModalDeleteVerification'

function CertiForm(props){

    useEffect(() => {
        console.log("useEffect 마운트될때");
    }, []);

    const [modalShow, setModalShow] = React.useState(false);

        return (
            <div className={styles.certiBox}>
                <Card>
                    <Card.Header className={styles.hd}>
                        <div className={styles.title}>
                            <p className={styles.itemValue}>{props.order} 수익 증명서</p>
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
                                        <Button id={props.certiUrl} className={styles.urlBtn} variant="dark">
                                            <BsFileEarmarkFontFill />
                                        </Button>
                                    </CopyToClipboard>
                                </li>
                                <li>
                                    <CopyToClipboard text={ props.imageUrl }>
                                        <Button id={props.imageUrl} className={styles.urlBtn} variant="dark">
                                            <BsFileEarmarkImageFill />
                                        </Button>
                                    </CopyToClipboard>
                                </li>
                                <li>
                                    <Link href={props.imageDownloadUrl}>
                                        <Button id={props.imageDownloadUrl} className={styles.urlBtn} variant="dark">
                                            <BsDownload />
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
            </div>
        )
}

export default CertiForm;


// click -> copied
// copied 알람
// const [show, setShow] = useState(false);
// const target = useRef(null);
// function Example() {
//     const [show, setShow] = useState(false);
//     const target = useRef(null);
  
//     return (
//       <>
//         <Button ref={target} onClick={() => setShow(!show)}>
//           Click me!
//         </Button>
//         <Overlay target={target.current} show={show} placement="right">
//           {(props) => (
//             <Tooltip id="overlay-example" {...props}>
//              Url Copied!
//             </Tooltip>
//           )}
//         </Overlay>
//       </>
//     );
//   }
  
//   render(<Example />);









    // 5.2  증명서 사진 url
    // 사진url호출
    // data
    // const handleImageUrl = (verification_id) => {
    //     console.log(verification_id);
    //     ComAxios({
    //         method: "get",
    //         url: "http://3.37.123.157:8000/verification/image/6153094e1fc2f34655124588",
    //         // url: "http://3.37.123.157:8000/verification/image/"{verification_id},
    //     })
    //     .then((imageUrl) => {
    //         // console.log(imageUrl.data.url);
    //         // const dd = coin.data.data.map((data) => {
    //         //   return data.coin_symbol;
    //         // });
    //         // setCoinSymbolList(dd);
    //       })
    //       .catch((imageUrl) => {
    //         // console.log(imageUrl.data.url);
    //       });
    // }



    
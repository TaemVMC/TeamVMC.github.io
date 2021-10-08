import React, { useEffect, useState, useRef } from 'react'
import { Button, Row, Col, Card, Container } from 'react-bootstrap'
import styles from '../../css/CertiForm.module.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ComAxios from '../../util/ComAxios'
import { BsFileEarmarkFontFill,BsFileEarmarkImageFill, BsDownload } from "react-icons/bs";
function CertiForm(props){

    useEffect(() => {
        console.log("useEffect 마운트될때");
        handlePageUrl();
        handleImageUrl();
        handleGetImage();
        setVerification_id();

    }, []);

    const [pageUrl, setPageUrl] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [verification_id, setVerification_id] = useState();

    // const createPageUrl = (id) => {
    //     console.log(id)

    //     setPageUrl(id => {
    //         console.log(id)
    //     })
    // }

    // 5.4  증명서 url 상세페이지 /verification/{verification_id}
    const handlePageUrl = () => {
        ComAxios({
            method: "get",
            url: "http://3.37.123.157:8000/verification/{verification_id}",
        })
    }

    // 5.5 증명서 사진 생성
    const handleGetImage = () => {}

    // 5.2  증명서 사진 url
    // 사진url호출
    // data
    const handleImageUrl = (verification_id) => {
        console.log(verification_id);
        ComAxios({
            method: "get",
            url: "http://3.37.123.157:8000/verification/image/6153094e1fc2f34655124588",
            // url: "http://3.37.123.157:8000/verification/image/"{verification_id},
        })
        .then((imageUrl) => {
            // console.log(imageUrl.data.url);
            // const dd = coin.data.data.map((data) => {
            //   return data.coin_symbol;
            // });
            // setCoinSymbolList(dd);
          })
          .catch((imageUrl) => {
            // console.log(imageUrl.data.url);
          });
    }

    // 5.3  증명서 사진 다운로드
    // verification_id의 사진 가져올것

    const handleImageLoad = () => {
        console.log('a')
        ComAxios({
            method: "get",
            url: "http://3.37.123.157:8000/verification/image/download/verification_id}"
          })
    }


    // copied 알람
    const [show, setShow] = useState(false);
    const target = useRef(null);

        return (
            <div className={styles.certiBox}>
                <Card>
                    <Card.Header className={styles.hd}>
                        <div className={styles.title}>
                            <p className={styles.itemValue}>{props.order} 수익 증명서</p>
                            <span className={styles.itemTag}>({props.start} ~ {props.end})</span>
                        </div>
                        <ul>
                            <li>
                                <CopyToClipboard text={ props.url }>
                                    <Button id={props.url} className={styles.urlBtn} variant="dark" ref={target} onClick={() => setShow(!show)}>
                                        <BsFileEarmarkFontFill />
                                    </Button>
                                </CopyToClipboard>
                                {/* <Overlay target={target.current} show={show} placement="right">
                                    {(props) => (
                                        <Tooltip id="overlay-example">
                                        복사 완료
                                        </Tooltip>
                                    )}
                                </Overlay> */}
                            </li>
                            <li>
                                <CopyToClipboard text={ props.url }>
                                    <Button id={props.url} className={styles.urlBtn} variant="dark" onClick={()=>{handleImageUrl(props.id)}}>
                                        <BsFileEarmarkImageFill />
                                    </Button>
                                </CopyToClipboard>
                            </li>
                            <li>
                                <Button className={styles.urlBtn} variant="dark" onClick={()=>{handleImageLoad()}}>
                                    <BsDownload />
                                </Button>
                            </li>
                        </ul>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
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
                                    <p className={styles.itemValue}>{props.average} {props.payment}</p>
                                    <span className={styles.itemTag}>평균단가</span>
                                </Col>
                                <Col className={styles.item}>
                                    <p className={styles.itemValue}>{props.profit} {props.payment}</p>
                                    <span className={styles.itemTag}>평가손익</span>
                                </Col>
                            </Row>
                            </Container>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
}

export default CertiForm;


// click -> copied
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




    
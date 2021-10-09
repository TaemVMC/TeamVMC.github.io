import React from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "../../css/ModalDeleteAccount.module.css";
function ModalManual(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      {/* <Modal.Header closeButton> */}
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">증명서 발급 메뉴얼</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <ul className={styles.lists}>
          <li className={styles.list}>1) 증명을 위한 거래 정보 입력 : 거래코인, 결제통화, 거래기간</li>
          <li className={styles.list}>
            2) key 발급 및 입력 : Public Key, Private Key &rarr; 
            <a className={styles.keyLink} href="https://www.bithumb.com/customer_support/info_guide?seq=1901&categorySeq=205" target="_blank" rel="noreferrer">
              key 발급 방법 알아보기
            </a>
          </li>
          <li className={styles.list}>3) 증명서 발행</li>
          <li className={styles.list}>4) 링크 복사 또는 이미지 다운로드를 통해 증명서 공유</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>내용을 확인했습니다.</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalManual;

// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../css/MyInfo.module.css";
import ComAxios from "../../util/ComAxios";

export default function MyInfo() {
  useEffect(() => {
    initCoin();
  }, []);

  const [userInfo, setUserInfo] = useState({});

  const initCoin = () => {
    ComAxios({
      method: "get",
      url: process.env.REACT_APP_API_SERVER_URL + "/user/info",
    })
      .then((res) => {
        setUserInfo(res.data.data);
      })
      .catch((err) => {
        console.log(`err : ${err}`);
      });
  };

  return (
    <div className={styles.InfoTable}>
      <article className={styles.InfoCategory}>
        <h2 className={styles.title}>기본 정보</h2>
        <Row className={styles.InfoRow}>
          <Col xs={6} md={4}>
            사진
          </Col>
          <Col xs={6} md={8}>
            <img className="userImage" alt="User Image" src={userInfo.picture} />
          </Col>
        </Row>
        <Row className={styles.InfoRow}>
          <Col xs={6} md={4}>
            이름
          </Col>
          <Col xs={6} md={8}>
            {userInfo.family_name} {userInfo.given_name}
          </Col>
        </Row>
        <Row className={styles.InfoRow}>
          <Col xs={6} md={4}>
            닉네임
          </Col>
          <Col xs={6} md={8}>
            {userInfo.name}
          </Col>
        </Row>
        <Row className={styles.InfoRow}>
          <Col xs={6} md={4}>
            이메일
          </Col>
          <Col xs={6} md={8}>
            {userInfo.email}
          </Col>
        </Row>
      </article>
    </div>
  );
}

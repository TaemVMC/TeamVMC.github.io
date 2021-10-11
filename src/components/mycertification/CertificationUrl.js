import React from "react";
import checked from "../../img/checked.png";
import { Fragment } from "react";
import { Paper, Link } from "@mui/material";
import ComAxios from "../../util/ComAxios";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function CertificationUrl({ match, location }) {
  const [verifiedData, setVerifiedData] = useState([]);
  const [username, setUsername] = useState([]);
  const verification_id = match.params.name;
  const history = useHistory();

  console.log(match.params.name);

  useEffect(() => {
    console.log("useEffect 마운트될때");
    loadUrl(verification_id);
    // getUsername();
  }, []);

  // 5.1 사용자증명목록
  // /verification
  const loadUrl = (id) => {
    ComAxios({
      method: "get",
      url: "http://3.37.123.157:8000/verification/external/" + id,
    })
      .then((res) => {
        console.log("성공");
        if (res.status == 200 && res.data.code === 3200) {
          console.log(res.data.data);
          setVerifiedData(res.data.data);
        } else {
          alert("유효하지 않은 증명서입니다.");
          history.push("/");
        }
      })
      .catch((res) => {
        console.log("에러");
      });
  };

  const [userInfo, setUserInfo] = useState({});

  const getUsername = () => {
    ComAxios({
      method: "get",
      url: "http://3.37.123.157:8000/user/info",
    })
      .then((res) => {
        setUsername(res.data.data.name);
      })
      .catch((err) => {
        console.log(`err : ${err}`);
      });
  };

  return (
    <Fragment>
      <Paper
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          marginRight: 45,
          marginLeft: 45,
          marginTop: 5,
        }}
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <h4 style={{ fontSize: "1rem", textAlign: "center", marginTop: 20 }}>Verify My Coin</h4>

        <div style={{ marginBottom: 100 }}>
          <h3 style={{ textAlign: "center" }}>
            {" "}
            <img src={checked} alt="checked" width="30" style={{ marginRight: 10 }} />
            인증되었습니다!
            <br />
          </h3>
          <div>
            <h6 style={{ textAlign: "center", marginTop: 18, marginBottom: 50 }}> 베마코가 {verifiedData.exchange_name} 에서 확인했습니다.</h6>
            <div style={{ fontSize: "17px" }}>
              <Table bordered>
                <thead>
                  <tr>
                    <th colSpan="6">{username}님의 수익 증명</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2">수익기간</td>
                    <td colSpan="4">
                      {verifiedData.start_date} ~ {verifiedData.end_date}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">코인명</td>
                    <td colSpan="4">{verifiedData.order_currency}</td>
                  </tr>
                  <tr>
                    <td colSpan="2">수익금액</td>
                    <td colSpan="4">
                      {verifiedData.profit} {verifiedData.payment_currency}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">수익률</td>
                    <td colSpan="4">{verifiedData.yield}</td>
                  </tr>
                </tbody>
              </Table>
              <hr />
              <Link href={verifiedData.image_url}>{verifiedData.image_url}</Link>
            </div>
          </div>
        </div>
      </Paper>
    </Fragment>
  );
}

// import queryString from "query-string";
// import { BrowserRouter, Route } from "react-router-dom";

// const CertificationUrl = () => {
//   return (
//     <div>
//         <BrowserRouter>
//           <Route path="/:name" component={urlContent} />
//         </BrowserRouter>
//     </div>
//   );
// };

// const query = queryString.parse(location.search);

// const id = "61604875663f624b540bf1ff";
// const exchange_name = "Bithumb";
// const end_date = "2021-01-10";
// const order_currency = "OMG";
// const payment_currency = "KOR";
// const profit = "-10000"
// const yield = "17,000"

// const certiData = {
//   id: "61604875663f624b540bf1ff",
//   exchange_name: "Bithumb",
//   end_date: "2021-01-10",
//   order_currency: "OMG",
//   payment_currency: "KOR",
//   profit: "-10000",
//   yield: "17,000",
// }

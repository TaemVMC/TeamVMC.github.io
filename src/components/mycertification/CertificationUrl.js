import React from "react";
import checked from "../../img/checked.png";
import { Fragment } from "react";
import Paper from "@mui/material/Paper";
import ComAxios from "../../util/ComAxios";
import { useEffect } from "react";

export default function CertificationUrl({ match, location }) {

  const verification_id = match.params.name;
  console.log(verification_id);

  // api 호출

  useEffect(() => {
      console.log("useEffect 마운트될때");
      loadUrl(verification_id);
  }, []);

  // 5.1 사용자증명목록
  // /verification
  const loadUrl = (id) => {
      ComAxios({
          method: "get",
          url: "http://3.37.123.157:8000/verification/"+id,
      })
      .then((res) => {
          const verifiedData = res.data;
      })
      .catch((res) => {
          console.log(res);
      });
  };

  // ---- 청화님께 데이터 확인하고 이런식으로 작성하 것 ----
  // verified.id
  // verified.exchange_name
  // verified.end_date

  return (
    <Fragment>
      <h4 style={{ textAlign: "center", marginTop: 20 }}>Verify My Coin</h4>
      <hr />
      <Paper
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          height: 450,
          marginRight: 45,
          marginLeft: 45,
        }}
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div style={{ marginBottom: 100 }}>
          <h3 style={{ textAlign: "center" }}>
            {" "}
            <img src={checked} alt="checked" width="30" />
            인증되었습니다!
            <br />
          </h3>
          <div>
            <h6 style={{ textAlign: "center", marginTop: 18, marginBottom: 25 }}> 베마코가 빗썸에서 확인했습니다.</h6>
            <div style={{ fontSize: "17px" }}>
              기간: <br />
              거래소 : <br />
              코인 개수 : &nbsp; 코인 이름 수익금액 : payment_currency <br />
              유저 아이디 : <br />
              평균단가 수익률 수익금액 이미지 url "id":
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

import React from "react";
import GoogleLogin from "react-google-login";
import { createBrowserHistory } from "history";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../modules/Reducer";
import { setJwtTokenCookie } from "../../util/ComAxios";
const clientId = "347213939670-lgktcl3k8h266eabnk37r12e6a3c2fot.apps.googleusercontent.com";

export default function GoogleButton() {
  const u = useSelector((state) => state);
  console.log(u);
  const dispatch = useDispatch();
  const handleGoogleResponse = (response) => {
    //google에서 받은 response
    const url = "http://3.37.123.157:8000/user/signin";
    const data = {
      idToken: response.tokenId,
    };

    axios({
      method: "post",
      url: url,
      data: data,
      headers: { "Content-Type": "applicaion/json", Authorization: "Bearer " + response.accessToken },
    }) //서버에서 받은 response
      .then((res) => {
        console.log(res);

        if (res.data.code === 1000) {
          setJwtTokenCookie(res.headers.jwt);
          dispatch(setData(res.data));

          let history = createBrowserHistory({ forceRefresh: true });
          history.push("/certification");
        } else {
          alert("로그인에 실패하였습니다.");
        }
      })
      .catch((res) => {
        console.log(res);
        alert("로그인 에러.");
      });
  }; //handleGoogleResponse end
  const handleResponseFail = (err) => {
    console.log(err);
  };
  return (
    <div>
      <GoogleLogin clientId={clientId} buttonText="Google계정으로 로그인" onSuccess={handleGoogleResponse} onFailure={handleResponseFail} />
    </div>
  );
} //GoogleButton end

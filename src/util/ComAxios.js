import axios from "axios";
import { createBrowserHistory } from "history";
import { setCookie, getCookie } from "./Cookies";
const ComAxios = axios.create();

//request 보내기전 jwt 라는 쿠키값으로 인증정보 셋팅
const requestHandler = (request) => {
  let jwt = getCookie("jwt");

  request.headers.Authorization = `Bearer ${jwt}`;
  return request;
};

//response 받은후 헤더의 jwt 값을 쿠키로 설정
const responseHandler = (response) => {
  if (response.headers.jwt != null) {
    setJwtTokenCookie(response.headers.jwt);
  }
  return response;
};

//에러설정 필요시 ..
const requestErrorHandler = (error) => {
  return Promise.reject(error);
};

const responseErrorHandler = (...error) => {
  const response = error[0].response;
  setJwtTokenCookie(response.headers.jwt);
  if (response.status === 401) {
    alert("로그인 인증 실패");
    goIndexPage();
    return;
  } else {
    return Promise.reject(error);
  }
};

//request 보내기 전에 실행
ComAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => requestErrorHandler(error)
);

//response 받은 후 실행
ComAxios.interceptors.response.use((response) => responseHandler(response), responseErrorHandler);

const goIndexPage = () => {
  let history = createBrowserHistory({ forceRefresh: true });
  history.push("/");
};
//쿠키 값 jwt 셋팅
export const setJwtTokenCookie = (value) => {
  setCookie("jwt", value, {
    path: "/",
    // secure: true, //secure : 쿠키값을 건드리지 x
  });
};
export default ComAxios;

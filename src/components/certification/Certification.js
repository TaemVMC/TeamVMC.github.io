import { useState, React, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import dayjs from "dayjs";
import { Fragment } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import ComAxios from "../../util/ComAxios";
import Button from "@mui/material/Button";
import { createBrowserHistory } from "history";

export default function Certification() {
  useEffect(() => {
    console.log("useEffect 마운트될때");
    initCoin();
    initPayment();
  }, []);

  const [paymentCurrencyList, setPaymentCurrencyList] = useState([]);
  const [paymentCurrency, setPaymentCurrency] = useState([]);
  const [coinSymbol, setCoinSymbol] = useState([]);
  const [coinSymbolList, setCoinSymbolList] = useState([]);
  //결제 코인 갖고오기
  const initCoin = () => {
    ComAxios({
      method: "get",
      url: process.env.REACT_APP_API_SERVER_URL + "/transactions/exchange/1/coin",
    })
      .then((coin) => {
        const coinList = coin.data.data.map((data) => {
          return data.coin_symbol;
        });
        setCoinSymbolList(coinList);
      })
      .catch((coin) => {});
  };
  //결제 통화 가져오기
  const initPayment = () => {
    ComAxios({
      method: "get",
      url: process.env.REACT_APP_API_SERVER_URL + "/transactions/exchange/1/payment-currency",
    })
      .then((payment) => {
        const coinList = payment.data.data.map((data) => {
          return data.payment_currency_symbol;
        });
        setPaymentCurrencyList(coinList);
      })
      .catch((payment) => {});
  };
  //코인 종류 선택
  const handleGetCoin = (coin) => {
    const {
      target: { value },
    } = coin;
    setCoinSymbol(typeof value === "string" ? value.split(",") : value);
  };
  //결제 통화 선택
  const handleGetPayment = (payment) => {
    const {
      target: { value },
    } = payment;
    setPaymentCurrency(typeof value === "string" ? value.split(",") : value);
  };

  const [inputs, setInput] = useState({
    api_key: "",
    secret_key: "",
  });
  const { api_key, secret_key } = inputs;
  //API 입력 폼에 사용자가 입력했을 때
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  //calendars
  const [day, setDay] = useState([null, null]);
  let end_date = dayjs(day[0]);
  end_date = end_date.format("YYYY-MM-DD");

  //발행 버튼 클릭
  function handleSearch() {
    const data = {
      ...inputs,
      order_currency: coinSymbol[0],
      payment_currency: paymentCurrency[0],
      end_date: end_date,
    };
    ComAxios({
      method: "post",
      url: process.env.REACT_APP_API_SERVER_URL + "/transactions/exchange/1",
      data: data,
    })
      .then((res) => {
        alert("발행되었습니다.");
        let history = createBrowserHistory({ forceRefresh: true });
        history.push("/mycertification");
      })
      .catch((res) => {
        alert("다시 입력해주세요.");
      });
  }
  return (
    //Container 시작
    <Container maxWidth="lg" align="center" sx={{ mt: 10, mb: 4 }}>
      <Box sx={{ width: "67%" }}>
        <article></article>
        <Paper sx={{ width: "100%", height: 500, mb: 2, pl: 5, pr: 5, pt: 3 }}>
          <h4 style={{ marginTop: 30 }}>인증서 발급하기</h4>
          {/* 
      /**input 시작 */}
          <Box>
            <Container maxWidth="lg" sx={{ mt: 3, mb: 2 }}>
              <Grid item xs={12}>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <FormControl sx={{ m: 1, width: 187 }}>
                      <InputLabel id="demo-multiple-checkbox-label">주문 코인 (ex. ADA)</InputLabel>

                      <Select value={coinSymbol} onChange={handleGetCoin} input={<OutlinedInput label="Tag" />} renderValue={(selected) => selected.join(", ")}>
                        {coinSymbolList.map((data) => (
                          <MenuItem style={{ display: "flex", marginLeft: 10, justifyContent: "left" }} key={data} value={data}>
                            <ListItemText primary={data} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: 187 }}>
                      <InputLabel id="demo-multiple-checkbox-label">결제 통화 (ex. KRW)</InputLabel>
                      <Select value={paymentCurrency} onChange={handleGetPayment} input={<OutlinedInput label="Tag" />} renderValue={(selected) => selected.join(", ")}>
                        {paymentCurrencyList.map((data) => (
                          <MenuItem style={{ display: "flex", marginLeft: 10, justifyContent: "left" }} key={data} value={data}>
                            <ListItemText primary={data} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <TextField
                    name="api_key"
                    sx={{ color: "text.primary", fontSize: 28, fontWeight: "medium" }}
                    id="outlined-password-input"
                    label="Public Key"
                    size="small"
                    value={api_key}
                    onChange={handleOnChange}
                  />
                  <div>
                    <TextField
                      name="secret_key"
                      sx={{ color: "text.primary", fontSize: 28, fontWeight: "medium" }}
                      id="outlined-password-input"
                      label="Private Key"
                      size="small"
                      value={secret_key}
                      onChange={handleOnChange}
                    />
                  </div>
                </Box>
              </Grid>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              ></Box>
            </Container>
            <h6 style={{ marginBottom: 10 }}>날짜조회</h6>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <div style={{ marginBottom: 5 }}>
                <DesktopDatePicker
                  calendars={1}
                  value={day}
                  mask={"____/__/__"}
                  inputFormat="yyyy/MM/dd"
                  onChange={(newValue) => {
                    setDay(newValue);
                  }}
                  renderInput={(endProps) => (
                    <Fragment>
                      <TextField {...endProps} size="small" />
                    </Fragment>
                  )}
                />
              </div>
            </LocalizationProvider>
            <Button variant="outlined" style={{ marginTop: 10 }} size="medium" onClick={handleSearch}>
              발행
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

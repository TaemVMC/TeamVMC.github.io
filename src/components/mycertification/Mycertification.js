import React, { useState, useEffect } from 'react'
import CertiForm from './CertiForm'
import styles from '../../css/Mycertification.module.css'
// import axios from 'axios'
// import { useSelector } from 'react-redux'
// import { setData } from "../../modules/Reducer";
import ComAxios from "../../util/ComAxios";
// import dummy from "../../db/data.json"
import {BsPlusCircleFill} from "react-icons/bs";
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";

export default function Mycertification() {

    const [verifiedLists, setVerifiedLists] = useState([]);
    let history = useHistory();
    const totalNum = verifiedLists.length;

    useEffect(() => {
        console.log("useEffect 마운트될때");
        initVerified();
    }, []);

    // 5.1 사용자증명목록
    // /verification
    const initVerified = () => {
        ComAxios({
            method: "get",
            url: "http://3.37.123.157:8000/verification",
        })
        .then((list) => {
            if (list.status == 200 && list.data.code == 3200){
                setVerifiedLists(list.data.data)
                console.log(list.data.data)
            } else{
                alert("첫 증명서를 발급해주세요.")
                history.push("/certification")
            }
        })
        .catch((list) => {
            // console.log(list);
            console.log('에러'+list);
        });
    };

    return(
        <div className={styles.container}>
            {/* <div className={styles.uppersideTitle}>
                <p>총 {totalNum}개의 수익 증명서를 보유하고 있습니다.</p>
            </div> */}
        <div className={styles.background}>
        <article className={styles.certiList}>
        {verifiedLists.map((data, num) => (
                        <CertiForm
                            num={num}
                            key={data.id}
                            id={data.id}
                            order={data.order_currency}
                            payment={data.payment_currency}
                            start={data.start_date}
                            end={data.end_date}
                            app={data.exchange_name}
                            profit={data.profit}
                            yield={data.yield}
                            imageUrl={data.image_url}
                            imageDownloadUrl={data.image_download_url}
                            certiUrl={data.certification_url}
                        ></CertiForm>
                        ))}
                <div className={styles.addNew}>
                    <Link to="/certification" style={{ color: "black", textDecoration: "none" }}>
                        <p><BsPlusCircleFill className={styles.plusPicto} /></p>
                    </Link>
                </div>
        </article>

        </div>
        </div>
    );
}

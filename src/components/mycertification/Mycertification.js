import React, { useState, useEffect } from 'react'
import CertiForm from './CertiForm'
import styles from '../../css/Mycertification.module.css'
// import axios from 'axios'
// import { useSelector } from 'react-redux'
// import { setData } from "../../modules/Reducer";
import ComAxios from "../../util/ComAxios";
import dummy from "../../db/data.json"
import {BsPlusCircleFill} from "react-icons/bs";
import { Link } from "react-router-dom"

export default function Mycertification() {

    const [verifiedLists, setVerifiedLists] = useState([]);

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
            setVerifiedLists(list.data)
        })
        .catch((list) => {
            console.log(list);
        });
    };

    return(
        <div className={styles.container}>
        <div className={styles.background}>
        <article className={styles.certiList}>
        {verifiedLists.map((data) => (
                        <CertiForm
                            key={data.id}
                            id={data.id}
                            order={data.order_currency}
                            payment={data.payment_currency}
                            start={data.start_date}
                            end={data.end_date}
                            app={data.exchange_name}
                            profit={data.profit}
                            average={data.avarage_cost}
                            units={data.units}
                            imageUrl={data.image_url}
                            imageDownloadUrl={data.image_download_url}
                            certiUrl={data.certification_url}
                        ></CertiForm>
                        ))}
        </article>
            <div className={styles.addNew}>
                <Link to="/certification" style={{ color: "black", textDecoration: "none" }}>
                    <p><BsPlusCircleFill className={styles.plusPicto} /></p>
                </Link>
            </div>
        </div>
        </div>
    );
}

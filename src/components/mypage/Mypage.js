// eslint-disable-next-line
import React from 'react'
import MyInfo from './MyInfo'
import ModalDeleteAccount from './ModalDeleteAccount'
import styles from '../../css/Mypage.module.css'
import ComAxios from "../../util/ComAxios";
import { useHistory } from "react-router-dom";

export default function Mypage () {
    const [modalShow, setModalShow] = React.useState(false);
    let history = useHistory();
    const cancelDeleteAccount = ()=>{
        setModalShow(false)
    }
    const deleteAccount = ()=>{
        ComAxios({
            method: "POST",
            url: "http://3.37.123.157:8000/user/withdrawal",
        }).then(res=>{
            console.log(res)

            if (res.status == 200 && res.data.code == 1000) {
                alert("회원 탈퇴 완료")
                setModalShow(false)
                history.push("/")
            }
            else{
                alert("실패")
                console.log(res.data.data.message)
                setModalShow(false)
            }
        })
    }
    return (
        <div className={styles.ProfileContent}>
                <MyInfo></MyInfo>
                    <span onClick={() => setModalShow(true)} style={{"textDecoration":"underline", "cursor":"pointer"}}>회원탈퇴</span>
                <ModalDeleteAccount
                    show={modalShow}
                    onHide={() => cancelDeleteAccount()}
                    onDeleteAccount={()=> deleteAccount()}
                />
        </div>
    )
}
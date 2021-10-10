import React from 'react'
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap'

export default function ModalDeleteVerification (props) {
        return (
            <div>
                <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                {/* <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" style={{"fontSize":"1rem"}}>
                        증명서 삭제
                    </Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <h4 style={{"fontSize":"1rem"}}>증명서 삭제</h4>
                    {/* <hr/> */}
                    <p style={{"margin":"30px 10px 10px 10px", "fontSize":"1rem"}}>
                    삭제된 증명서는 복구하실 수 없습니다. 계속해서 증명서를 삭제하시겠습니까?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{console.log('삭제')}} variant="dark" style={{"padding":"5px 10px", "fontSize":"0.8rem"}}>삭제</Button>
                    <Button onClick={props.onHide} variant="dark" style={{"padding":"5px 10px", "fontSize":"0.8rem"}}>취소</Button>
                </Modal.Footer>
                </Modal>
            </div>
        )
    }

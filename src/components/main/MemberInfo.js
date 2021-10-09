import React from 'react'
// import PropTypes from 'prop-types'
import {Image, Card, Button} from 'react-bootstrap'
import styles from '../../css/MemberInfo.module.css'
// import {Button} from 'react-bootstrap'

export default function MemberInfo (props) {

    return (
            <div className={styles.cardOutline}>
                <Card  className={styles.card} border="light" text="muted">
                    <div className={styles.cardTop}>
                        <Image className={styles.profileImg} src={props.image} roundedCircle />
                    </div>
                    {/* <Card.Img className="profileImg" variant="top" src={props.image} bsPrefix="card-img"/> */}
                    <Card.Body className={styles.cardBody}>
                        <Card.Title className={styles.cardBodyTitle}>
                            <p>{props.name}</p>
                            <span>{props.part}</span>
                        </Card.Title>
                        <Card.Text className={styles.cardText}>
                            <p className="introduction">{props.intro}</p>
                            <ul className={styles.skills}>
                                {props.skill.map(skill => (
                                    <li className={styles.skill}># {skill}</li>
                                ))}
                            </ul>
                        </Card.Text>
                        <div className={styles.btnBox}><Button className={styles.btn} variant="dark">See portfolios</Button></div>
                    </Card.Body>
                </Card>
            </div>
        )
}
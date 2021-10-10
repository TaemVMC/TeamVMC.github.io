import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../../css/MainBottom.module.css'
// import MemberList from './MemberList'
import AboutProject from './AboutProject'

export default class MainBottom extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div> 
                <div className={styles.container}>
                    <h1>about VMC</h1>
                    <article>
                        <h2>서비스 소개</h2>
                        <AboutProject></AboutProject>
                    </article>
                    {/* <article>
                        <h2>프로젝트 구성원</h2>
                        <MemberList></MemberList>                
                    </article> */}
                </div>
            </div>
        )
    }
}


// ListGroup : primary secondary success danger warning info light dark
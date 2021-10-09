import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Carousel} from 'react-bootstrap'
import styles from '../../css/AboutSlide.module.css'

export default class ProjectSlide extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <Carousel className={styles.Carousel}>
                <Carousel.Item className={styles.CarouselItem}>
                    <img
                    className="d-block w-100"
                    src="img/AboutSlide/slide_Mycertification.png"
                    alt="example"
                    />
                    <Carousel.Caption className={styles.CarouselCaption}>
                    <h3>증명서 발급</h3>
                    <p>자신의 코인 수익을 정확한 수치로 증명할 수 있습니다.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={styles.CarouselItem}>
                    <img
                    className="d-block w-100"
                    src="img/AboutSlide/slide_CertificationUrl.png"
                    alt="example"
                    />
                    <Carousel.Caption className={styles.CarouselCaption}>
                    <h3>증명서 공유</h3>
                    <p>베마코에서 발급받은 증명서를 사람들과 공유하세요.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={styles.CarouselItem}>
                    <img
                    className="d-block w-100"
                    src="img/AboutSlide/slide_Dashboard.png"
                    alt="example"
                    />
                    <Carousel.Caption className={styles.CarouselCaption}>
                    <h3>대시보드</h3>
                    <p>코인 거래 관련 자료를 한 눈에 확인합니다.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                
            </div>
        )
    }
}

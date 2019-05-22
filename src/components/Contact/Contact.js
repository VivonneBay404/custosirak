import React from 'react'
import classes from './Contact.css'
import myPhoto from '../../assets/images/KakaoTalk_20190519_160202335.jpg'

const Contact = (props) => (
    <div className={classes.Contact}>
          <img className={classes.MyPhoto} src={myPhoto} alt='지홍' />
                안녕하세요.
                <br /><br />전 박지홍이라고 합니다.
                <br /><br /> 서울 서대문구에 살고 있고 React Web Front-end 개발자 일자리를 구하고 있습니다.
                <br /><br /> 아직 경력은 없지만 열린 마음으로 배우고 열정적으로 일하고 싶습니다.
                <br /><br /> 감사합니다!
                <br /><br /> <strong>asthma404@gmail.com</strong>
    </div>
)

export default Contact

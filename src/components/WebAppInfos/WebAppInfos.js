import React from 'react'
import classes from './WebAppInfos.css'
import WebAppInfo from './WebAppInfo/WebAppInfo'
import myPhoto from '../../assets/images/KakaoTalk_20190519_160202335.jpg'
import dosirakPicture from '../../assets/images/dosirak-picture.jpg'
import html5 from '../../assets/images/techIcons/html.png'
import css3 from '../../assets/images/techIcons/css3.png'
import react from '../../assets/images/techIcons/react.png'
import redux from '../../assets/images/techIcons/redux.png'
import javaScript from '../../assets/images/techIcons/java-script.png'
import npm from '../../assets/images/techIcons/npm.png'
import firebase from '../../assets/images/techIcons/firebase.png'
import jest from '../../assets/images/techIcons/jest.png'
import github from '../../assets/images/techIcons/github.svg'

const webAppInfos = () => {
    return (
        <div className={classes.WebAppInfos}>
            <WebAppInfo title='About The Developer'>
                <img className={classes.MyPhoto} src={myPhoto} alt='지홍' />
                안녕하세요.
                <br /><br />전 박지홍이라고 합니다.
                <br /><br /> 서울 서대문구에 살고있고 react Web front-end 개발자 일자리를 구하고 있습니다.
                <br /><br /> 아직 경력은 없지만 열린마음으로 배우고 일하고 싶습니다.
                <br /><br /> 이 포트폴리오를 보고 채용할 관심이있으시다면 asthma404@gmail.com 으로 연락주세요!
                <br /><br /> 감사합니다!
            </WebAppInfo>
            <WebAppInfo title='기획의도'>
                <img className={classes.Dosirak} src={dosirakPicture} alt='도시락' />
                편의점 도시락을 먹을때마다 싫어하는 반찬을 남기는 경험은 다들 있으실겁니다.
                <br /><br />포트폴리오를 만들때 이런 낭비를 막는 앱을 만들어보고 싶었습니다.
                <br /><br />그래서 customizable + dosirak = custosirak을 만들게되었습니다.
                <br /><br />udemy의 코스 udemy에 있는 Maximilian Schwarzmüller의
                <a href='https://www.udemy.com/react-the-complete-guide-incl-redux/'> react-redux 강좌</a>
                를 보고 배울때도 비슷한 커리큘럼이라 따라하면서 배울수있겠다고 생각했습니다.
            </WebAppInfo>
            <WebAppInfo title='About This App' >
                <h3>특징</h3>
                <ul>
                    <li>react-router를 이용한 SPA app</li>
                    <li>redux를 이용한 state management</li>
                    <li>css media query를 이용한 responsive app</li>
                    <li>axios를 이용한 비동기적 http통신</li>
                    <li>firebase를 사용하여 데이터저장과 유저 authentication</li>
                </ul>
                <h3>사용기술</h3>
                <div className={classes.Tech}>
                    <img src={html5} alt='html5' />
                    <img src={css3} alt='css3' />
                    <img src={javaScript} alt='Java-Script' />
                    <img src={react} alt='react' />
                    <img src={redux} alt='redux' />
                    <img src={npm} alt='npm' />
                    <img src={firebase} alt='firebase' />
                    <img src={jest} alt='jest' />
                </div>
                <div className={classes.Github}>
                    <a href="https://github.com/VivonneBay404/custosirak"><img src={github} alt='github' link /></a>
                    <p>check this app's code!</p>
                </div>

            </WebAppInfo>
        </div>
    )
}

export default webAppInfos
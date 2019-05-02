import React from 'react';
import classes from './DosirakView.css';
import DosirakViewItem from './DosirakViewItem/DosirakViewItem'
const dosirak = (props) => {
    //if selected true in items

    const items = props.selectedItems;
    let introduction = null;
    // 선택된아이템이 없을때 설명을 표시해주는 코드
    if (items.length === 0) {
        introduction = '버튼을 눌러 나만의 도시락을 만드세요!'
    }

    return (
        <div className={classes.Dosirak}>
            <div className={classes.Introduction}>{introduction}</div>
            {/* background 어둡게하는 css holder*/}
            <div className={classes.Banchan1}></div>
            <div className={classes.Banchan2}></div>
            <div className={classes.Banchan3}></div>
            <div className={classes.Rice}></div>
            <div className={classes.Soup}></div>

            {/* 배열로 만들어서 맵으로 DosirakItem loop */}
            {
                items.map(e => {
                    return (
                        <DosirakViewItem section={e.section} name={e.name}>{e.name}</DosirakViewItem>
                    )
                })
            }
        </div>
    )
}

export default dosirak 